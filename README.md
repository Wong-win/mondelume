# MondeLume

MondeLume 是一个法语生活方式媒体网站，使用 Astro 静态生成，适合部署到 Cloudflare Pages。

## 本地开发

```sh
npm install
npm run dev
```

## 内容管理

文章位于 `src/content/articles/`，每篇文章是一个 Markdown 文件。文件名会成为文章 URL，栏目由 frontmatter 中的 `category` 字段决定。

可用栏目：

- `fashion`
- `beauty`
- `travel`
- `home-garden`
- `technology`

## 构建与部署

```sh
npm run build
```

Cloudflare Pages 的构建命令为 `npm run build`，输出目录为 `dist`。

如需从本地发布，复制 `.env.example` 为 `.env`，填入 Cloudflare 凭证后运行：

```sh
npm run deploy
```

`.env` 已被 Git 忽略，不应提交到 GitHub。
