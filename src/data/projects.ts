// 项目数据配置文件
// 用于管理项目展示页面的数据

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "web" | "mobile" | "desktop" | "other";
  techStack: string[];
  status: "completed" | "in-progress" | "planned";
  liveDemo?: string;
  sourceCode?: string;
  startDate: string;
  endDate?: string;
  featured?: boolean;
  tags?: string[];
}

export const projectsData: Project[] = [
  // 新增：本人自研 Java 项目（achobeta-polaris）
  {
    id: "achobeta-polaris",
    title: "AchoBeta Polaris",
    description:
      "自己写的后端练手项目：Java + Spring Boot，涵盖 REST API、配置化与部署流程。",
    image: "",
    category: "web",
    techStack: [
      "Java",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "Redis",
      "Docker",
      "Nginx",
    ],
    status: "in-progress",
    sourceCode: "https://github.com/hamster-yhz/achobeta-polaris",
    startDate: "2024-11-01",
    featured: true,
    tags: ["后端", "REST API", "部署"],
  },
  // 新增：本人自研 Java 项目（city-bag）
  {
    id: "city-bag",
    title: "city-bag（自研 · Java）",
    description:
      "Java 小程序后端/工程骨架，Spring Boot 风格，便于后续按需拼装与扩展。",
    image: "",
    category: "web",
    techStack: ["Java", "Spring Boot", "MyBatis", "MySQL", "Docker"],
    status: "in-progress",
    sourceCode: "https://github.com/hamster-yhz/city-bag",
    startDate: "2025-01-14",
    featured: true,
    tags: ["后端", "工程化"],
  },
];

// 获取项目统计信息
export const getProjectStats = () => {
  const total = projectsData.length;
  const completed = projectsData.filter((p) => p.status === "completed").length;
  const inProgress = projectsData.filter(
    (p) => p.status === "in-progress"
  ).length;
  const planned = projectsData.filter((p) => p.status === "planned").length;

  return {
    total,
    byStatus: {
      completed,
      inProgress,
      planned,
    },
  };
};

// 根据分类获取项目
export const getProjectsByCategory = (category?: string) => {
  if (!category || category === "all") {
    return projectsData;
  }
  return projectsData.filter((p) => p.category === category);
};

// 获取精选项目
export const getFeaturedProjects = () => {
  return projectsData.filter((p) => p.featured);
};

// 获取所有技术栈
export const getAllTechStack = () => {
  const techSet = new Set<string>();
  projectsData.forEach((project) => {
    project.techStack.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};
