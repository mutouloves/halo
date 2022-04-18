import {
  IconBookRead,
  IconDashboard,
  IconEye,
  IconListSettings,
  IconMagic,
  IconMessage,
  IconPages,
  IconPalette,
  IconPlug,
  IconSettings,
  IconUserSettings,
} from "@/core/icons";
import type { Component } from "vue";

declare interface MenuGroupType {
  name?: string;
  items: MenuItemType[];
}

declare interface MenuItemType {
  name: string;
  path: string;
  icon?: Component;
  meta?: Record<string, unknown>;
  children?: MenuItemType[];
}

export const menus: MenuGroupType[] = [
  {
    items: [
      {
        name: "仪表盘",
        path: "/",
        icon: IconDashboard,
      },
    ],
  },
  {
    name: "内容",
    items: [
      {
        name: "文章",
        path: "/posts",
        icon: IconBookRead,
      },
      {
        name: "页面",
        path: "/sheets",
        icon: IconPages,
      },
      {
        name: "评论",
        path: "/comment",
        icon: IconMessage,
      },
      {
        name: "附件",
        path: "/attachment",
        icon: IconDashboard,
      },
    ],
  },
  {
    name: "外观",
    items: [
      {
        name: "主题",
        path: "/themes",
        icon: IconPalette,
      },
      {
        name: "菜单",
        path: "/menus",
        icon: IconListSettings,
      },
      {
        name: "可视化",
        path: "/visual",
        icon: IconEye,
      },
    ],
  },
  {
    name: "系统",
    items: [
      {
        name: "插件",
        path: "/plugins",
        icon: IconPlug,
      },
      {
        name: "用户",
        path: "/users",
        icon: IconUserSettings,
      },
      {
        name: "设置",
        path: "/settings",
        icon: IconSettings,
      },
      {
        name: "组件",
        path: "/components",
        icon: IconMagic,
      },
    ],
  },
];

export type { MenuItemType, MenuGroupType };

export default menus;
