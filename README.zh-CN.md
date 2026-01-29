# Super Design Skill

[中文](README.zh-CN.md) | [English](README.md)

Super Design Skill 是一个具备自主探索能力的高保真 UI 设计工作流。它会在第一轮输出多套明显不同的布局与风格方向，让开发者无需掌握设计术语，也能直接选择最喜欢的方向继续推进。

![Board overview](assets/readme/board-overview.png)

无需理解任何设计术语。Agent 会结合你的业务背景自动探索最合适的排版、配色与视觉方向，你只需凭直觉选择喜欢的版本，后续设计自动统一推进。

## 适合谁
- 需要快速获得专业级 UI 方向
- 希望从多种布局与风格中直接做选择
- 不想纠结设计名词与流程细节

## 案例展示
同一需求下产出多种布局体系、信息密度与视觉风格。

![Board example 1](assets/readme/board-example-1.png)
![Board example 2](assets/readme/board-example-2.png)
![Board example 3](assets/readme/board-example-3.png)
![Board example 4](assets/readme/board-example-4.png)

## 你会得到什么
- **多方向探索**：不是小变体，而是布局、排版、风格的明显差异。
- **第一版可选**：第一屏给出多套选择。
- **清晰产出结构**：统一命名与目录规范。
- **一站式看板**：集中查看与对比所有版本。
- **高保真规范**：间距、图片、图标、动效有明确标准。

## 工作流（概览）
1) **结构意图**：先明确页面目标与信息结构（内部完成）。
2) **多方向探索**：首屏输出 4 套明显不同的方向。若未指定深浅色，默认 2 深 2 浅；即使用户指定范围，仍会给出额外对比方向并说明原因。
3) **动效系统**：建立与方向一致的微交互准则。
4) **HTML 输出**：每个方向产出真实 HTML 用于预览。
5) **看板选择**：集中对比，选定方向。
6) **单方向推进**：后续页面统一风格与布局逻辑。

完整细则见 `references/workflow.md`。

## 快速开始
1) 将本目录放入 Codex 的 `skills` 目录（例如：`~/.codex/skills/super-design`）。
2) 使用技能名称：`super-design`。
3) 生成 HTML 后运行看板脚本：
   - `./.superdesign/design_iterations/start_board.sh`
4) 打开终端输出的本地地址即可预览。

## 产出结构
```
.superdesign/
├─ design_iterations/
│  ├─ {page_slug}_{style_name}_1.html
│  ├─ {page_slug}_{style_name}_2.html
│  ├─ {page_slug}_{style_name}_3.html
│  ├─ {page_slug}_{style_name}_{n}.html
│  └─ start_board.sh
└─ themes/
   └─ {project_slug}_{style_name}.css
```

命名规则：
- 仅使用小写 ASCII
- 空格替换为 `-`
- 只保留字母数字与 `-`

## 看板
看板脚本位于 `/.superdesign/design_iterations/start_board.sh`。
若缺失，可使用 `scripts/start_board.sh` 作为模板复制到项目目录。

## 高保真规范
- **图片**：必须使用开源真实图片（Unsplash、Pexels 等）。
- **图标**：必须使用真实开源 icon 库，不使用占位符。
- **间距**：4pt/8pt 栅格；触控区域 ≥ 48px。
- **动效**：hover/press/focus 反馈，时长建议 < 200ms。
- **不使用 emoji**：保持专业与产品化表达。

## 许可与致谢
本仓库为 **Superdesign** 的二次开发。
- 上游项目：`https://github.com/superdesigndev/superdesign`
- 许可：AGPLv3，标注 `/* @license Enterprise */` 的文件适用企业商业许可。

详见 `LICENSE` 与 `NOTICE.md`。

## 贡献
欢迎提交 Issue 与 PR。提交即表示你同意贡献遵循本仓库 `LICENSE` 条款。
