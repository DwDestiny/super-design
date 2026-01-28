# Board Runbook

## Start the dashboard
```
python3 /Users/dw/.codex/skills/super-design/scripts/serve_dashboard.py --root .superdesign/design_iterations --port 3077 --open
```

## Stop the dashboard
- Press Ctrl+C in the terminal.

## One-click script (recommended)
Create a helper script in the prototype directory after the first HTML variants are generated.

You can copy the template from:
- /Users/dw/.codex/skills/super-design/scripts/start_board.sh

### macOS/Linux
Create `design_iterations/start_board.sh`:
```
#!/usr/bin/env bash
python3 /Users/dw/.codex/skills/super-design/scripts/serve_dashboard.py --root .superdesign/design_iterations --port 3077 --open
```
Then run:
```
chmod +x design_iterations/start_board.sh
./design_iterations/start_board.sh
```

### Windows (PowerShell)
Create `design_iterations/start_board.ps1`:
```
python /Users/dw/.codex/skills/super-design/scripts/serve_dashboard.py --root .superdesign\design_iterations --port 3077 --open
```
Then run:
```
./design_iterations/start_board.ps1
```
