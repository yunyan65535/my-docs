import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Learning",
        icon: "book-open-reader",
        prefix: "learning/",
        children: [
          {text: "Linux基础知识", icon: "book-open-reader", link: "Linux基础知识"},
          {text: "Linux进阶-shell编程", icon: "book-open-reader", link: "Linux进阶-shell编程"},
          {text: "expect编程", icon: "book-open-reader", link: "expect编程"},
        ]
      },

      {
        text: "lab",
        icon: "user-secret",
        prefix: "lab/",
        children: [
          {text: "Shell Home", icon: "bug", link: "Shell Home"},
        ]
      },
      
    ],
  },
]);
