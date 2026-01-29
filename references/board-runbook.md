# Board Runbook

## Start the dashboard
```
python3 <SKILL_DIR>/scripts/serve_dashboard.py --root <PROJECT_ROOT>/.superdesign --port 3077 --open
```
Note: keep the root at `<PROJECT_ROOT>/.superdesign` so theme CSS under `.superdesign/themes/` remains accessible in previews.

## Stop the dashboard
- Press Ctrl+C in the terminal.

## One-click script (recommended)
Create a helper script in the prototype directory after the first HTML variants are generated.

You can copy the template from:
- <SKILL_DIR>/scripts/start_board.sh

### macOS/Linux
Create `design_iterations/start_board.sh`:
```
#!/usr/bin/env bash
python3 <SKILL_DIR>/scripts/serve_dashboard.py --root <PROJECT_ROOT>/.superdesign --port 3077 --open
```
Then run:
```
chmod +x design_iterations/start_board.sh
./design_iterations/start_board.sh
```

### Windows (PowerShell)
Create `design_iterations/start_board.ps1`:
```
python <SKILL_DIR>/scripts/serve_dashboard.py --root <PROJECT_ROOT>/.superdesign --port 3077 --open
```
Then run:
```
./design_iterations/start_board.ps1
```
Note: PowerShell accepts `/` in paths. Keep the root as `<PROJECT_ROOT>/.superdesign` to ensure themes load correctly.
