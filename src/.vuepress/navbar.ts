import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "solution",
        icon: "shripm",
        prefix: "solution/",
        children: [
          {text: "Docker拉取国外镜像失败", icon: "shrimp", link: "Docker拉取国外镜像失败"},
        ]
      },

      {
        text: "learning",
        icon: "book-open-reader",
        prefix: "learning/",
        children: [
          {text: "Linux基础知识", icon: "book-open-reader", link: "Linux基础知识"},
          {text: "Linux进阶-shell编程", icon: "book-open-reader", link: "Linux进阶-shell编程"},
        ]
      },
    ],
  },
]);
