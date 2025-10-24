// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string; // Iconify icon name
  category: "frontend" | "backend" | "database" | "tools" | "other";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  experience: {
    years: number;
    months: number;
  };
  projects?: string[]; // Related project IDs
  certifications?: string[];
  color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
  // Frontend Skills

  // Backend Skills
  {
    id: "java",
    name: "Java",
    description: "企业应用开发的主流编程语言，跨平台且面向对象。",
    icon: "logos:java",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["achobeta-polaris", "city-bag"],
    color: "#ED8B00",
  },
  {
    id: "cpp",
    name: "C++",
    description: "高性能系统编程语言，广泛用于游戏开发、系统软件和嵌入式开发。",
    icon: "logos:c-plusplus",
    category: "backend",
    level: "beginner",
    experience: { years: 1, months: 4 },
    projects: [],
    color: "#00599C",
  },
  {
    id: "c",
    name: "C",
    description: "底层系统编程语言，操作系统和嵌入式系统开发的基础。",
    icon: "logos:c",
    category: "backend",
    level: "beginner",
    experience: { years: 2, months: 0 },
    projects: [],
    color: "#A8B9CC",
  },
  {
    id: "spring",
    name: "Spring Boot",
    description: "Java生态系统中最受欢迎的企业应用开发框架。",
    icon: "logos:spring-icon",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["achobeta-polaris", "city-bag"],
    color: "#6DB33F",
  },

  // Database Skills
  {
    id: "mysql",
    name: "MySQL",
    description: "世界上最受欢迎的开源关系型数据库管理系统，广泛用于Web应用。",
    icon: "logos:mysql-icon",
    category: "database",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["achobeta-polaris", "city-bag"],
    color: "#4479A1",
  },
  {
    id: "redis",
    name: "Redis",
    description: "高性能内存数据结构存储，用作数据库、缓存和消息代理。",
    icon: "logos:redis",
    category: "database",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    projects: ["achobeta-polaris", "city-bag"],
    color: "#DC382D",
  },

  // Tools
  {
    id: "git",
    name: "Git",
    description: "分布式版本控制系统，代码管理和团队协作的必备工具。",
    icon: "logos:git-icon",
    category: "tools",
    level: "intermediate",
    experience: { years: 2, months: 0 },
    color: "#F05032",
  },
  {
    id: "vscode",
    name: "VS Code",
    description: "轻量级但功能强大的代码编辑器，拥有丰富的插件生态。",
    icon: "logos:visual-studio-code",
    category: "tools",
    level: "beginner",
    experience: { years: 1, months: 6 },
    color: "#007ACC",
  },
  {
    id: "intellij",
    name: "IntelliJ IDEA",
    description:
      "JetBrains旗舰IDE，Java开发的首选工具，具有强大的智能编码辅助功能。",
    icon: "logos:intellij-idea",
    category: "tools",
    level: "beginner",
    experience: { years: 1, months: 0 },
    color: "#000000",
  },
  {
    id: "docker",
    name: "Docker",
    description: "容器化平台，简化应用部署和环境管理。",
    icon: "logos:docker-icon",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    color: "#2496ED",
  },
  {
    id: "nginx",
    name: "Nginx",
    description: "高性能Web服务器和反向代理服务器。",
    icon: "logos:nginx",
    category: "tools",
    level: "beginner",
    experience: { years: 1, months: 0 },
    projects: [],
    color: "#009639",
  },
  {
    id: "linux",
    name: "Linux",
    description: "开源操作系统，服务器部署和开发环境的首选。",
    icon: "logos:linux-tux",
    category: "tools",
    level: "intermediate",
    experience: { years: 1, months: 5 },
    projects: [],
    color: "#FCC624",
  },
  {
    id: "postman",
    name: "Postman",
    description: "API开发和测试工具，简化API设计、测试和文档编写。",
    icon: "logos:postman-icon",
    category: "tools",
    level: "beginner",
    experience: { years: 1, months: 0 },
    projects: [],
    color: "#FF6C37",
  },

  // Other Skills
  {
    id: "rabbitmq",
    name: "RabbitMQ",
    description: "轻量消息队列：确认、重试、死信队列与幂等处理。",
    icon: "logos:rabbitmq",
    category: "other",
    level: "beginner",
    experience: { years: 0, months: 8 },
    projects: ["achobeta-polaris"],
    color: "#FF6600",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    description: "CI/CD 工作流，自动化构建、测试与部署。",
    icon: "logos:github-actions",
    category: "tools",
    level: "beginner",
    experience: { years: 0, months: 5 },
    projects: ["achobeta-polaris"],
    color: "#2088FF",
  },
  {
    id: "maven",
    name: "Apache Maven",
    description: "Java 项目构建与依赖管理，标准化生命周期与插件体系。",
    icon: "logos:apache-maven",
    category: "tools",
    level: "beginner",
    experience: { years: 1, months: 0 },
    projects: ["achobeta-polaris", "city-bag"],
    color: "#C71A36",
  },
  {
    id: "logback",
    name: "Logback / SLF4J",
    description: "日志门面与实现，支持结构化日志与分级采样。",
    icon: "simple-icons:logstash",
    category: "other",
    level: "beginner",
    experience: { years: 1, months: 0 },
    projects: ["achobeta-polaris", "city-bag"],
    color: "#005571",
  },
];

// Get skill statistics
export const getSkillStats = () => {
  const total = skillsData.length;
  const byLevel = {
    beginner: skillsData.filter((s) => s.level === "beginner").length,
    intermediate: skillsData.filter((s) => s.level === "intermediate").length,
    advanced: skillsData.filter((s) => s.level === "advanced").length,
    expert: skillsData.filter((s) => s.level === "expert").length,
  };
  const byCategory = {
    frontend: skillsData.filter((s) => s.category === "frontend").length,
    backend: skillsData.filter((s) => s.category === "backend").length,
    database: skillsData.filter((s) => s.category === "database").length,
    tools: skillsData.filter((s) => s.category === "tools").length,
    other: skillsData.filter((s) => s.category === "other").length,
  };

  return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
  if (!category || category === "all") {
    return skillsData;
  }
  return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
  return skillsData.filter(
    (s) => s.level === "advanced" || s.level === "expert"
  );
};

// Calculate total years of experience
export const getTotalExperience = () => {
  const totalMonths = skillsData.reduce((total, skill) => {
    return total + skill.experience.years * 12 + skill.experience.months;
  }, 0);
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  };
};
