#!/usr/bin/env python3
"""Local dashboard server for SuperDesign prototypes."""
from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote
import webbrowser

ASSETS_DIR = Path(__file__).resolve().parents[1] / 'assets' / 'dashboard'
ALLOWED_DELETE_EXTENSIONS = {'.html', '.svg'}


def get_mime_type(file_path: Path) -> str:
    suffix = file_path.suffix.lower()
    if suffix == '.html':
        return 'text/html'
    if suffix == '.svg':
        return 'image/svg+xml'
    if suffix == '.css':
        return 'text/css'
    return 'application/octet-stream'


def resolve_safe_path(root: Path, raw_path: str) -> Path | None:
    if not raw_path:
        return None
    if '..' in raw_path:
        return None
    target = (root / raw_path).resolve()
    if not str(target).startswith(str(root.resolve())):
        return None
    return target


def parse_design_meta(file_path: Path, root: Path) -> dict:
    stem = file_path.stem
    variant = None
    version = None
    group = stem

    # Pattern: name_A_1, name_B_2, name_C_3
    parts = stem.split('_')
    if len(parts) >= 2 and parts[-1].isdigit():
        version = int(parts[-1])
        parts = parts[:-1]
    if len(parts) >= 2 and parts[-1] in ('A', 'B', 'C'):
        variant = parts[-1]
        parts = parts[:-1]
    if parts:
        group = '_'.join(parts)

    stat = file_path.stat()
    return {
        'name': file_path.name,
        'path': file_path.relative_to(root).as_posix(),
        'group': group,
        'variant': variant,
        'version': version,
        'modified_at': datetime.fromtimestamp(stat.st_mtime).isoformat(),
        'size': stat.st_size
    }


def build_index(root: Path) -> dict:
    designs = []
    for ext in ('.html', '.svg'):
        for file_path in root.rglob(f'*{ext}'):
            if file_path.is_file():
                designs.append(parse_design_meta(file_path, root))

    designs.sort(key=lambda item: (item['group'], item['variant'] or '', item['version'] or 0, item['modified_at']))

    return {
        'root': root.as_posix(),
        'generated_at': datetime.now(timezone.utc).isoformat(),
        'designs': designs
    }


class DashboardHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, root: Path, **kwargs):
        self._root = root
        super().__init__(*args, directory=str(ASSETS_DIR), **kwargs)

    def do_GET(self):
        if self.path == '/' or self.path.startswith('/index.html'):
            return super().do_GET()
        if self.path.startswith('/api/index'):
            payload = build_index(self._root)
            data = json.dumps(payload).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return
        if self.path.startswith('/files/'):
            raw_path = unquote(self.path[len('/files/'):])
            target = resolve_safe_path(self._root, raw_path)
            if not target:
                self.send_error(403, 'Forbidden')
                return
            if not target.exists() or not target.is_file():
                self.send_error(404, 'Not Found')
                return
            data = target.read_bytes()
            self.send_response(200)
            self.send_header('Content-Type', get_mime_type(target))
            self.send_header('Content-Length', str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return
        return super().do_GET()

    def do_POST(self):
        if self.path.startswith('/api/delete'):
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8') if content_length else ''
            try:
                payload = json.loads(body) if body else {}
            except json.JSONDecodeError:
                payload = {}
            raw_path = payload.get('path', '')
            target = resolve_safe_path(self._root, raw_path)
            if not target:
                self.send_error(403, 'Forbidden')
                return
            if target.suffix.lower() not in ALLOWED_DELETE_EXTENSIONS:
                self.send_error(400, 'Unsupported file type')
                return
            if not target.exists() or not target.is_file():
                self.send_error(404, 'Not Found')
                return
            target.unlink()
            data = json.dumps({'ok': True, 'path': raw_path}).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return
        return super().do_POST()


def run_server(root: Path, host: str, port: int, open_browser: bool) -> None:
    handler = lambda *args, **kwargs: DashboardHandler(*args, root=root, **kwargs)
    httpd = ThreadingHTTPServer((host, port), handler)
    url = f'http://{host}:{port}/'
    print(f'Dashboard server running at {url}')
    print(f'Root: {root.as_posix()}')
    if open_browser:
        webbrowser.open(url)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('Stopping server...')


def main() -> int:
    parser = argparse.ArgumentParser(description='Serve SuperDesign dashboard locally.')
    parser.add_argument('--root', default='.superdesign/design_iterations', help='Prototype directory root')
    parser.add_argument('--host', default='127.0.0.1', help='Host to bind')
    parser.add_argument('--port', type=int, default=3077, help='Port to bind')
    parser.add_argument('--open', action='store_true', help='Open browser automatically')
    parser.add_argument('--check', action='store_true', help='Validate environment and exit')
    args = parser.parse_args()

    if args.check:
        print('OK')
        return 0

    root = Path(args.root).expanduser().resolve()
    if not root.exists() or not root.is_dir():
        print(f'Root directory does not exist: {root.as_posix()}')
        return 1

    if not ASSETS_DIR.exists():
        print(f'Assets directory missing: {ASSETS_DIR.as_posix()}')
        return 1

    run_server(root, args.host, args.port, args.open)
    return 0


if __name__ == '__main__':
    sys.exit(main())
