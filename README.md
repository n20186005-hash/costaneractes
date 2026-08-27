# Guía Costanera Corrientes

这是一个为 **Costanera Corrientes** 制作的独立、非营利、双语景点科普网站。默认首页为景点所在地的西班牙语；英语内容位于 `/en/`。项目使用 Astro、Tailwind CSS、TypeScript、pnpm 和 Cloudflare Workers 静态资产服务，不包含数据库、登录或 CMS。

## 域名与 SEO

生产域名只需要在 `astro.config.mjs` 中的 `site` 常量填写一次。例如，将空字符串替换为 `https://tu-dominio.ar`。该设置会同步派生 canonical、Open Graph URL、语言替代链接和 JSON-LD 中的站点 URL；同时自动启用 `@astrojs/sitemap`。当该常量保留为空时，项目仍可正常构建，所有需要绝对 URL 的标签会被省略，且不会生成带占位域名的 sitemap。

## 本地运行与发布

项目使用 Node.js `22.13.0` 和 pnpm `11.20.0`，版本在 `.node-version`、`package.json` 的 `engines` 与 `packageManager` 字段中固定。依赖版本均为精确版本，`pnpm-lock.yaml` 已同步提交。

```bash
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

`pnpm deploy` 会先构建 Astro 静态文件，再通过 `wrangler.jsonc` 发布 `worker/index.ts`。该 Worker 将请求交给 Cloudflare 的静态资产绑定，因此页面、SVG、favicon 与 JPG 照片均从项目自身的构建产物提供。

## 内容与图片

网站包含到访建议、费用与停车说明、详细交通、机场与公共交通提示、周边景点、餐饮类型、WC/住宿/商超/燃油与充电等中立信息，以及独立的隐私政策、服务条款和 Cookie 设置页面。Google Analytics 4（`G-HXM22WWPKP`）仅在访客明确启用分析类 Cookie 后加载。

两张实拍 JPG 已直接保存在 `public/images/`，因此项目压缩包不依赖外部图床，也不需要运行任何图片下载脚本。照片来自市级旅游公开图集，版权仍归原摄影者或权利人所有。网站正文中的事实性背景信息参考下列公开来源：

| 机构/来源 | 使用范围 | 链接 |
| --- | --- | --- |
| Turismo de Corrientes | Costanera Norte/Sur、约 2.5 公里、历史与周边节点 | [Costanera de Corrientes](https://corrientes.tur.ar/tour/costanera-de-corrientes/) |
| Visit Corrientes（市级旅游） | 河岸步道与 1929–1954、2008 扩展等背景 | [Paseo por la Costa](https://visitcorrientes.tur.ar/quehacer/paseo-por-la-costa/) |
| Municipalidad de la Ciudad de Corrientes | 城市与河岸环境背景；历史机场公交公告 | [Sobre Corrientes](https://visitcorrientes.tur.ar/sobre-corrientes/) / [Aeropuerto–Puerto](https://ciudaddecorrientes.gov.ar/content/comenzar-funcionar-el-servicio-de-colectivos-al-aeropuerto) |

## 质量检查

已在清理 `node_modules` 后完成冻结安装、`pnpm check` 与 `pnpm build`。构建结果未包含 `example.com`、`localhost` 或 `chrome-extension://`。在未配置正式域名的状态下，sitemap 有意不生成；填写 `site` 后会由 `@astrojs/sitemap` 自动生成，不会手写 URL 或 `lastmod`。
