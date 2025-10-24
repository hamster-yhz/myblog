// 时间线数据配置文件
// 用于管理时间线页面的数据

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  type: "education" | "work" | "project" | "achievement";
  startDate: string;
  endDate?: string; // If empty, it means current
  location?: string;
  organization?: string;
  position?: string;
  skills?: string[];
  achievements?: string[];
  links?: {
    name: string;
    url: string;
    type: "website" | "certificate" | "project" | "other";
  }[];
  icon?: string; // Iconify icon name
  color?: string;
  featured?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    id: "current-study",
    title: "本科在读",
    description:
      "专注于后端开发方向",
    type: "education",
    startDate: "2023-09-01",
    location: "DongGuan",
    organization: "某不知名理工大学",
    skills: ["Java", "MySQL"],
    achievements: [
      "完成多个算法和数据结构项目",
      "参与校内创新创业项目",
      "丰富的校园经历",
    ],
    icon: "material-symbols:school",
    color: "#059669",
    featured: true,
  },
  {
    id: "first-programming-experience",
    title: "首次接触编程",
    description: "在网课上首次接触编程,开始学习C语言基础语法",
    type: "education",
    startDate: "2023-11-01",
    endDate: "2023-11-01",
    location: "DongGuan",
    skills: ["C", "编程基础概念"],
    achievements: [
      '完成第一个"Hello World"程序',
      "学会基本循环和条件语句",
      "培养对编程的兴趣",
    ],
    icon: "material-symbols:code",
    color: "#7C3AED",
    featured: false,
  },
  {
    id: "join-github-2023",
    title: "加入 GitHub",
    description: "创建 GitHub 账号,开始持续输出与沉淀",
    type: "achievement",
    startDate: "2023-12-16",
    endDate: "2023-12-16",
    location: "DongGuan",
    icon: "material-symbols:celebration",
    color: "#0EA5E9",
    featured: false,
  },
  {
    id: "java-practice-2024",
    title: "开始学习Java",
    description: "以 Java/Spring Boot 为主线,完善基础知识体系",
    type: "education",
    startDate: "2024-10-01",
    location: "DongGuan",
    skills: ["Java", "Spring Boot", "MySQL", "Redis"],
    icon: "material-symbols:terminal",
    color: "#10B981",
    featured: false,
  },
  {
    id: "achobeta-polaris-2024",
    title: "AchoBeta Polaris",
    description: "参与的后端练手项目,实现基础功能模块",
    type: "project",
    startDate: "2024-11-01",
    endDate: "2025-12-01",
    location: "DongGuan",
    skills: ["Java", "Spring Boot", "MyBatis", "MySQL", "Redis"],
    links: [
      { name: "GitHub 仓库", url: "https://github.com/hamster-yhz/achobeta-polaris", type: "project" },
    ],
    icon: "material-symbols:code",
    color: "#22C55E",
    featured: false,
  },
  {
    id: "city-bag-2025",
    title: "city-bag",
    description: "Java 小程序后端,参加校内比赛的项目",
    type: "project",
    startDate: "2025-01-14",
    endDate: "2025-06-21",
    location: "DongGuan",
    skills: ["Java", "Spring Boot", "MyBatis", "MySQL"],
    links: [
      { name: "GitHub 仓库", url: "https://github.com/hamster-yhz/city-bag", type: "project" },
    ],
    icon: "material-symbols:integration-instructions",
    color: "#8B5CF6",
    featured: false,
  },
  {
    id: "dev-ops-2025",
    title: "折腾",
    description: "上线对外服务状态页,增强可观测性与用户信任",
    type: "project",
    startDate: "2025-07-01",
    location: "DongGuan",
    skills: ["Nginx"],
    icon: "material-symbols:monitoring",
    color: "#F59E0B",
    featured: true,
  },
];

// 获取时间线统计信息
export const getTimelineStats = () => {
  const total = timelineData.length;
  const byType = {
    education: timelineData.filter((item) => item.type === "education").length,
    work: timelineData.filter((item) => item.type === "work").length,
    project: timelineData.filter((item) => item.type === "project").length,
    achievement: timelineData.filter((item) => item.type === "achievement")
      .length,
  };

  return { total, byType };
};

// 根据类型获取时间线项目
export const getTimelineByType = (type?: string) => {
  if (!type || type === "all") {
    return timelineData.sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
  }
  return timelineData
    .filter((item) => item.type === type)
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
};

// 获取精选时间线项目
export const getFeaturedTimeline = () => {
  return timelineData
    .filter((item) => item.featured)
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
  return timelineData.filter((item) => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
  const workItems = timelineData.filter((item) => item.type === "work");
  let totalMonths = 0;

  workItems.forEach((item) => {
    const startDate = new Date(item.startDate);
    const endDate = item.endDate ? new Date(item.endDate) : new Date();
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    totalMonths += diffMonths;
  });

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
};
