import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Solution",
        icon: "shripm",
        prefix: "Solution/",
        children: [
          {text: "Docker拉取国外镜像失败", icon: "shrimp", link: "Docker拉取国外镜像失败"},
        ]
      },

      {
        text: "Learning",
        icon: "book-open-reader",
        prefix: "Learning/",
        children: [
          {text: "Linux基础知识", icon: "book-open-reader", link: "Linux基础知识"},
          {text: "Linux进阶-shell编程", icon: "book-open-reader", link: "Linux进阶-shell编程"},
        ]
      },

      {
        text: "tools",
        icon: "user-secret",
        prefix: "Tools/",
        children: [
          {text: "Shell Hmoe", icon: "bug", link: "Shell Hmoe"},
        ]
      },
    ],
  },
]);
