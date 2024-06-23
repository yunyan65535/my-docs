import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { commentPlugin } from '@vuepress/plugin-comment'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客主页",
  description: "vuepress-theme-hope 的博客主页",

  theme,

  plugins: [
    commentPlugin({
      comment: true,
      provider: "Giscus",
      repo: "yunyan65535/comment",
      repoId: "R_kgDOMLw8XA",
      category: "Announcements",
      categoryId: "DIC_kwDOMLw8XM4CgNuN",
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
