# Super Design Skill

[中文](README.zh-CN.md) | [English](README.md)

Super Design Skill 是一个具备自主探索能力的高保真 UI 设计工作流。它先探索结构骨架并用中性风格呈现，再在选定骨架上探索多套主题，让开发者无需掌握设计术语，也能直接选择最喜欢的方向继续推进。

![Board overview](assets/readme/board-overview.png)

无需理解任何设计术语。Agent 会结合你的业务背景先给出多套结构骨架，再基于选定骨架探索多套主题，你只需凭直觉选择喜欢的版本，后续设计自动统一推进，适用于 Web、App 与移动端等多端场景。

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
- **骨架先行**：先给出结构骨架对比，再进入主题探索。
- **主题多样**：不是小变体，而是视觉语气与组件语言的明显差异。
- **第一版可选**：先选骨架，再选主题。
- **清晰产出结构**：统一命名与目录规范。
- **一站式看板**：集中查看与对比所有版本。
- **高保真规范**：间距、图片、图标、动效有明确标准。

## 工作流（概览）
1) **业务理解**：抽取目标人群、流程与内容需求（内部完成）。
2) **骨架探索**：输出多套中性风格的完整 HTML 骨架，通过看板对比。
3) **骨架选择**：确定最适合产品的结构逻辑。
4) **主题探索**：固定骨架，探索多套视觉主题。
5) **主题选择**：确定最终视觉语言。
6) **动效系统**：建立与主题一致的微交互准则。
7) **单方向推进**：后续页面统一骨架与主题。

完整细则见 `skill/references/workflow.md`。

## 安装与快速开始
请通过 Skillmaps 安装与启动。Skillmaps 同时提供 Skillmap Pro 应用，可一键安装到 Trae、Cursor、Antigravity、Opencode、Gemini CLI、Codex、Claude Code 等 IDE。

[Skillmaps：Super Design](https://skillmaps.net/detail?id=DwDestiny-super-design-main-1769667338)

Skillmaps 生态展示：

![Skillmaps 市场](assets/readme/marketplace.png)
![Skillmap Pro 管理器](assets/readme/skill-manager.png)

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
若缺失，可使用 `skill/scripts/start_board.sh` 作为模板复制到项目目录。

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
