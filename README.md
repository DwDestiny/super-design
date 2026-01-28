# Super Design Skill

[中文](#中文) | [English](#english)

---

## 中文

### 概述
Super Design Skill 是一个面向高保真 UI 设计与原型输出的设计工作流技能包。它提供明确的设计流程、输出结构与本地看板，帮助你在本地高效迭代页面并统一视觉风格。

### 适用场景
- 网站 / 工具 / App 的页面设计与原型输出
- 高保真 UI 设计与多版本迭代
- 设计评审与版本对比

### 你会得到什么
- 结构化的设计工作流（布局 → 主题 → 动效 → HTML → 看板）
- 明确的文件命名与目录结构
- 本地看板用于一站式浏览和对比设计稿
- 设计规范（排版、间距、图标、图片、交互）

### 快速开始
1. 将本目录放入 Codex 的 `skills` 目录，例如：`~/.codex/skills/super-design`。
2. 使用技能名称：`super-design`。
3. 生成设计 HTML 后，运行看板脚本：
   - `./.superdesign/design_iterations/start_board.sh`
4. 打开终端输出的本地地址进行预览与对比。

### 工作流（简版）
1. **布局设计**：输出 ASCII 线框结构。
2. **主题设计**：提供 3 套风格变体并说明设计思路。
3. **动效设计**：定义微交互与动效原则。
4. **HTML 输出**：首屏输出 3 版设计稿。
5. **看板预览**：启动看板，用户选择版本。
6. **单风格推进**：后续页面统一采用选定风格。

完整细则见：`references/workflow.md`。

### 目录结构与命名规范
```
.superdesign/
├─ design_iterations/
│  ├─ {page_slug}_A_1.html
│  ├─ {page_slug}_B_1.html
│  ├─ {page_slug}_C_1.html
│  ├─ {page_slug}_{chosen_variant}_{n}.html
│  └─ start_board.sh
└─ themes/
   └─ {project_slug}_{variant}.css
```

命名规则：
- 仅使用小写 ASCII
- 空格替换为 `-`
- 只保留字母数字与 `-`

### 看板与脚本
看板脚本位于 `/.superdesign/design_iterations/start_board.sh`。  
若缺失，可使用 skill 内置模板：
`scripts/start_board.sh`（复制到项目目录即可）。

### 设计规范（高保真）
- **图片**：使用开源图片真实链接（Unsplash/Pexels 等）
- **图标**：必须使用开源 icon 库中的真实图标
- **间距**：4pt/8pt 栅格；触控区域 ≥ 48px
- **动效**：hover/press/focus 微交互；时长建议 < 200ms

### 许可与致谢
本仓库为 **Superdesign** 的二次开发。  
- 上游项目：`https://github.com/superdesigndev/superdesign`  
- 许可：AGPLv3，标注 `/* @license Enterprise */` 的文件适用企业商业许可  

详见 `LICENSE` 与 `NOTICE.md`。

### 贡献说明
欢迎提交 Issue 与 PR。提交即表示你同意贡献遵循本仓库 `LICENSE` 条款。

---

## English

### Overview
Super Design Skill is a high‑fidelity UI design workflow package. It provides a structured process, consistent output conventions, and a local design board to review and compare iterations.

### Use Cases
- Website / tool / app UI design
- High‑fidelity prototypes and iterations
- Design reviews with side‑by‑side comparisons

### What you get
- Structured workflow (layout → theme → motion → HTML → board)
- Clear naming conventions and output paths
- Local board for reviewing all iterations in one place
- Design rules for spacing, imagery, icons, and motion

### Quick Start
1. Place this folder under your Codex `skills` directory (e.g. `~/.codex/skills/super-design`).
2. Load the skill by name: `super-design`.
3. Generate design HTML files.
4. Start the board:
   - `./.superdesign/design_iterations/start_board.sh`
5. Open the local URL printed in the terminal.

### Workflow (Short)
1. **Layout**: ASCII wireframe.
2. **Theme**: 3 distinct style variants with rationale.
3. **Motion**: micro‑interaction rules.
4. **HTML**: first page in 3 variants.
5. **Board**: preview and select.
6. **Single style**: continue with chosen variant only.

See `references/workflow.md` for full details.

### Structure & Naming
```
.superdesign/
├─ design_iterations/
│  ├─ {page_slug}_A_1.html
│  ├─ {page_slug}_B_1.html
│  ├─ {page_slug}_C_1.html
│  ├─ {page_slug}_{chosen_variant}_{n}.html
│  └─ start_board.sh
└─ themes/
   └─ {project_slug}_{variant}.css
```

Slug rules:
- lowercase ASCII only
- spaces replaced by `-`
- keep letters, numbers, `-` only

### Board & Script
The board script lives at `/.superdesign/design_iterations/start_board.sh`.  
If missing, copy from `scripts/start_board.sh` in this skill package.

### High‑fidelity Rules
- **Images**: use real open‑source image URLs
- **Icons**: use real icons from open‑source libraries
- **Spacing**: 4pt/8pt grid; touch targets ≥ 48px
- **Motion**: subtle hover/press/focus (<200ms)

### License & Attribution
This is a derivative work of **Superdesign**.  
- Upstream: `https://github.com/superdesigndev/superdesign`  
- License: AGPLv3, with Enterprise license for files marked `/* @license Enterprise */`

See `LICENSE` and `NOTICE.md`.

### Contributing
Issues and pull requests are welcome. Contributions must comply with `LICENSE`.
