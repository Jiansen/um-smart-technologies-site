# UM SMART TECHNOLOGIES LTD — Static Storefront

一个**纯静态**公司展示页（HTML/CSS/JS，无框架、无依赖），首页风格参考 [Apple Store](https://www.apple.com/store) 的简洁节奏：

- Samsung / Nokia **各一行横向滑动**（左右滑动浏览）
- 使用**真实产品照片**（存放在 `assets/phones/`）
- 联系方式只保留 **Email + WhatsApp**

## 本地预览

- 方式 1：直接用浏览器打开 `index.html`
- 方式 2（推荐）：在仓库根目录启动静态服务器：

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`

## 修改公司信息/产品列表

- **公司邮箱**：编辑 `script.js` 里的 `COMPANY.salesEmail`
- **WhatsApp**：编辑 `script.js` 里的 `COMPANY.whatsappE164`（去掉 `+` 和空格）与 `COMPANY.whatsappDisplay`
- **产品数据**：编辑 `script.js` 里的 `CATALOG`（`Samsung` / `Nokia` 两个数组）
- **产品图片**：放在 `assets/phones/`，并在 `CATALOG` 中填 `imageUrl`（例如 `assets/phones/samsung-galaxy-z-fold7.jpg`）
- **文案与板块结构**：编辑 `index.html`
- **整体样式**：编辑 `styles.css`
- **站点图标**：编辑 `assets/favicon.svg`

## 部署到 GitHub Pages（gh-pages）

本仓库已内置 GitHub Actions 自动发布到 GitHub Pages 的工作流：`.github/workflows/pages.yml`。

### 方案 A（推荐）：GitHub Actions 自动部署

1. 把这些文件提交并 push 到 `main`
2. GitHub 仓库 → **Settings** → **Pages**
3. 在 **Build and deployment** 中把 **Source** 选择为 **GitHub Actions**
4. 等待 Actions 跑完，页面会出现在 GitHub Pages 提供的 URL

### 方案 B：从分支直接部署（不使用 Actions）

1. GitHub 仓库 → **Settings** → **Pages**
2. Source 选择 **Deploy from a branch**
3. Branch 选择 `main`，Folder 选择 `/ (root)`，保存即可

### 方案 C：一定要用 `gh-pages` 分支

1. 创建并 push 一个名为 `gh-pages` 的分支（把静态文件放在分支根目录）
2. Settings → Pages → Source 选择 **Deploy from a branch**
3. Branch 选择 `gh-pages`，Folder 选择 `/ (root)`
