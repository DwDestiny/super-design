#!/usr/bin/env python3
"""Minimal tests for dashboard server utilities."""
from __future__ import annotations

import tempfile
from pathlib import Path

import serve_dashboard


def test_build_index_paths_are_relative() -> None:
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / 'alpha_A_1.html').write_text('<html></html>', encoding='utf-8')
        (root / 'nested').mkdir()
        (root / 'nested' / 'beta_B_2.html').write_text('<html></html>', encoding='utf-8')

        data = serve_dashboard.build_index(root)
        paths = [item['path'] for item in data['designs']]
        assert 'alpha_A_1.html' in paths
        assert 'nested/beta_B_2.html' in paths
        assert all(not p.startswith('/') for p in paths)


def test_get_mime_type() -> None:
    assert serve_dashboard.get_mime_type(Path('a.html')) == 'text/html'
    assert serve_dashboard.get_mime_type(Path('a.svg')) == 'image/svg+xml'
    assert serve_dashboard.get_mime_type(Path('a.css')) == 'text/css'


def test_resolve_safe_path_blocks_traversal() -> None:
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        result = serve_dashboard.resolve_safe_path(root, '../secret.txt')
        assert result is None


def test_resolve_safe_path_allows_html() -> None:
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / 'demo.html').write_text('<html></html>', encoding='utf-8')
        result = serve_dashboard.resolve_safe_path(root, 'demo.html')
        assert result is not None
        assert result.name == 'demo.html'


def run() -> None:
    test_build_index_paths_are_relative()
    test_get_mime_type()
    test_resolve_safe_path_blocks_traversal()
    test_resolve_safe_path_allows_html()


if __name__ == '__main__':
    run()
