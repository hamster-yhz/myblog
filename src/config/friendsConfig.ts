import type { FriendLink } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链配置
export const friendsConfig: FriendLink[] = [
  // 博客
  {
    title: "黑盒 Blackbox",
    imgurl:
      "https://yuanshen-image.909333.xyz/file/default/hamster-yhz/readme/1760711598888_blackbox.png",
    desc: "总有一场相遇，是互相喜欢的！",
    siteurl: "http://blackbox.655353.xyz/",
    tags: ["Blog"],
    weight: 100, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  // 服务监控
  {
    title: "Hawkeye Surveillance",
    imgurl:
      "https://yuanshen-image.909333.xyz/file/default/hamster-yhz/readme/1760711665229_hawkeye-909333.png",
    desc: "服务监控面板，系统可观测与告警",
    siteurl: "https://hawkeye.909333.xyz/",
    tags: ["Monitoring", "Ops"],
    weight: 90,
    enabled: true,
  },
  // 小鸡探针（探针面板）
  {
    title: "小鸡探针",
    imgurl:
      "https://yuanshen-image.909333.xyz/file/default/hamster-yhz/readme/1760711587838_hawkeye-655353.png",
    desc: "服务器探针监控面板",
    siteurl: "https://hawkeye.655353.xyz/",
    tags: ["Monitoring", "Probe"],
    weight: 85,
    enabled: true,
  },
  // 图床
  {
    title: "yuanshen 图床",
    imgurl:
      "https://yuanshen-image.909333.xyz/file/default/hamster-yhz/readme/1760711678393_yuanshen-image.png",
    desc: "个人图片托管与图床服务",
    siteurl: "http://yuanshen-image.909333.xyz/",
    tags: ["Tools", "Image"],
    weight: 80,
    enabled: true,
  },
  // 邮箱服务
  {
    title: "yuanshenMail",
    imgurl:
      "https://yuanshen-image.909333.xyz/file/default/hamster-yhz/readme/1760711676572_yuanshen-mail.png",
    desc: "邮箱服务",
    siteurl: "https://mail.909333.xyz/",
    tags: ["Tools", "Mail"],
    weight: 70,
    enabled: true,
  },
  // 游戏：中国象棋
  {
    title: "中国象棋",
    imgurl: "https://yuanshen-image.909333.xyz/file/default/hamster-yhz/readme/1760711555383_chinese-chess.png",
    desc: "在线对弈，实时对战 / 简洁 UI / 轻量部署",
    siteurl: "http://chinese-chess.655353.xyz/",
    tags: ["Game"],
    weight: 60,
    enabled: true,
  },
  // 游戏：谜题小游戏
  {
    title: "谜题小游戏",
    imgurl: "https://yuanshen-image.909333.xyz/file/default/hamster-yhz/readme/1760711670561_stats-fallback.png",
    desc: "关卡化 / 静态托管 / 低成本运维",
    siteurl: "http://qushizitiaozhan.655353.xyz/",
    tags: ["Game"],
    weight: 50,
    enabled: true,
  },
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
  return friendsConfig
    .filter((friend) => friend.enabled)
    .sort((a, b) => b.weight - a.weight); // 按权重降序排序
};
