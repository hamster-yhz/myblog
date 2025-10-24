# src/data 三个数据文件编辑指南（简明版）

## 通用约定（很重要）

- id：必须全局唯一（同一个文件里不要重复）
- 日期：统一使用 `YYYY-MM-DD` 字符串（例如 2025-01-14）
- icon：使用 Iconify 图标名（例如 `material-symbols:code`、`logos:java`），可去 https://iconify.design 搜索
- color：用十六进制色值（例如 `#22C55E`），可空
- 链接：`http/https` 的完整地址
- 不删除，只新增或修改：如果不想展示，通常可以把 featured 设为 false 或把项目标成演示

---

## 一、projects.ts（项目清单）

接口定义（简化说明）：
- id: string 唯一标识（页面锚点/关联用）
- title: string 项目名称
- description: string 一句话或几句话描述
- image: string 封面图路径（可留空）
- category: "web" | "mobile" | "desktop" | "other" 项目类别
- techStack: string[] 技术栈关键词
- status: "completed" | "in-progress" | "planned" 项目状态
- liveDemo?: string 在线演示地址（可选）
- sourceCode?: string 源码地址（可选）
- startDate: string 开始日期（YYYY-MM-DD）
- endDate?: string 结束日期（可选，正在进行中可不填）
- featured?: boolean 是否精选（首页或列表置顶）
- tags?: string[] 标签（可选）

编辑注意：
- category/status 必须使用固定枚举值，否则页面可能报错
- id、title、startDate 建议必填；其他按需
- featured 建议少量使用（突出重点）
- techStack/tags 尽量简短，方便展示

示例（新增一个 Java 后端项目）：
```ts
{
  id: "mini-service",
  title: "Mini Service（自研 · Java）",
  description: "Java + Spring Boot 的小型 REST 服务，支持鉴权与简单监控。",
  image: "",
  category: "web",
  techStack: ["Java", "Spring Boot", "MyBatis", "MySQL", "Docker"],
  status: "in-progress",
  sourceCode: "https://github.com/yourname/mini-service",
  startDate: "2025-10-24",
  featured: false,
  tags: ["后端", "REST API"],
}
```

---

## 二、skills.ts（技能清单）

接口定义（简化说明）：
- id: string 唯一标识
- name: string 名称（如 Java、Spring Boot、MySQL）
- description: string 简短说明
- icon: string Iconify 图标名（如 `logos:java`）
- category: "frontend" | "backend" | "database" | "tools" | "other"
- level: "beginner" | "intermediate" | "advanced" | "expert"（自评）
- experience: { years: number; months: number } 经验时长
- projects?: string[] 关联项目 ID（对应 projects.ts 的 id）
- certifications?: string[] 证书（可选）
- color?: string 卡片颜色（可选）

编辑注意：
- projects 填写的必须是 projects.ts 里已存在的 `id`，否则展示时无法关联
- months 建议 0~11，超过会让显示多少年多少月不太直观
- icon 建议从 Iconify 查询，确保拼写正确

示例（新增一个 Redis 技能并关联你的项目）：
```ts
{
  id: "redis-ops",
  name: "Redis",
  description: "缓存与分布式能力：分布式锁、延迟队列、热点与穿透治理。",
  icon: "logos:redis",
  category: "database",
  level: "intermediate",
  experience: { years: 1, months: 6 },
  projects: ["achobeta-polaris", "city-bag"],
  color: "#DC382D",
}
```

---

## 三、timeline.ts（时间线）

接口定义（简化说明）：
- id: string 唯一标识
- title: string 标题（如“加入 GitHub”“项目发布”）
- description: string 简短描述
- type: "education" | "work" | "project" | "achievement"
- startDate: string 开始日期（YYYY-MM-DD）
- endDate?: string 结束日期（不填表示“至今”）
- location?: string 地点
- organization?: string 组织/学校/公司
- position?: string 职位（仅工作项常用）
- skills?: string[] 相关技能关键词
- achievements?: string[] 小成就或亮点
- links?: { name: string; url: string; type: "website" | "certificate" | "project" | "other" }[]
- icon?: string Iconify 图标名
- color?: string 颜色
- featured?: boolean 是否标注为精选（少量使用）

编辑注意：
- 列表会按 startDate 排序显示（新在前），无需手动排序
- 进行中的项目不要写 endDate
- links 的 type 只能是四个固定值之一
- id 必须唯一，避免与已有冲突

示例（新增一个发布时间线）：
```ts
{
  id: "mini-service-release",
  title: "Mini Service v1 发布",
  description: "Java 后端服务正式上线，接入状态页与基础监控。",
  type: "project",
  startDate: "2025-11-15",
  location: "Shenzhen",
  skills: ["Java", "Spring Boot", "MySQL", "Redis"],
  links: [
    { name: "GitHub 仓库", url: "https://github.com/yourname/mini-service", type: "project" },
    { name: "状态页", url: "https://status.example.com", type: "website" },
  ],
  icon: "material-symbols:rocket-launch",
  color: "#22C55E",
  featured: true,
}
```

---

## 快速自查（常见坑）

- 拼错枚举值（category/status/type/level 等）→ 页面类型检查会报错
- `projects` 里写了一个不存在的项目 ID → 技能页无法正确关联
- 日期不是 `YYYY-MM-DD` → 排序/显示异常
- icon 名称错误 → 页面不显示图标
- 大量设置 `featured: true` → 页面“精选”过多，建议只挑重点

---

## 小贴士

- 不确定的字段可以先留空（可选字段都带问号）
- 你可以先新增到文件末尾，验证无误后再移动位置（不影响排序）
- 想隐藏某些“演示”项：保留数据，仅在 title 或 description 里标注“[演示]”，并把 `featured` 置为 `false`

祝编辑顺利，出问题就回到这个文件对照一下字段解释！
