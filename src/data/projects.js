/**
 * Projects List Configuration
 * Customize your projects showcase here.
 * You can filter projects by tech stack category matching the `ALL_TECH` options.
 */

export const ALL_TECH = ["All", "React", "Node.js", "Python", "TypeScript", "SQL"];

export const PROJECTS = [
  {
    id: "smart-analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "A real-time analytics web platform providing intuitive data visualization, filtering, and performance reporting for enterprise users.",
    tech: ["React", "TypeScript", "Node.js", "SQL"],
    features: [
      "Real-time chart rendering",
      "Customizable report builder",
      "Role-based permission controls",
    ],
    image: "/projects/analytics-dashboard.png",
    github: "https://github.com/yourusername/analytics-dashboard",
    demo: "https://example.com/demo1",
  },
  {
    id: "e-commerce-api",
    title: "E-Commerce REST API",
    description:
      "A scalable backend microservice handling product catalog management, order processing, and payment gateway integration.",
    tech: ["Node.js", "Python", "SQL"],
    features: [
      "JWT authentication & rate limiting",
      "Stripe payment gateway integration",
      "Automated unit & integration tests",
    ],
    image: "/projects/ecommerce-api.png",
    github: "https://github.com/yourusername/ecommerce-api",
    demo: "https://example.com/demo2",
  },
  {
    id: "task-management-app",
    title: "Collaborative Task Manager",
    description:
      "A modern task management application featuring drag-and-drop boards, live status updates, and team activity feeds.",
    tech: ["React", "TypeScript", "Node.js"],
    features: [
      "Kanban board view with drag-and-drop",
      "Real-time WebSocket updates",
      "Dark mode & responsive design",
    ],
    image: "/projects/task-manager.png",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://example.com/demo3",
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "An AI-assisted writing tool built to help creators draft blog posts, email copy, and social media captions efficiently.",
    tech: ["Python", "React", "TypeScript"],
    features: [
      "Prompt customization templates",
      "Export to Markdown and PDF",
      "History & bookmarking management",
    ],
    image: "/projects/ai-generator.png",
    github: "https://github.com/yourusername/ai-generator",
    demo: "https://example.com/demo4",
  },
];
