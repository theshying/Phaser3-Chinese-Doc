import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  lang: "zh-CN",
  title: "phaser3 中文文档",
  description: "phaser3 中文文档",
  theme: defaultTheme({
    sidebar: [
      {
        link: "/start/",
        text: "开始",
        children: ["/start/introduction.md", "/start/quick-start.md"],
      },
    ],
  }),
});
