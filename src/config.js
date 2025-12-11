// User profile and website configuration
// Adapted from config.ts for CESHRC-A001 style

export const config = {
  // Personal Information
  name: "Tome Chen",
  role: "Student / Developer",
  bio: "Hello there! I build things for the Internet and RhythmGames! ",
  avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=1719252259&spec=640&img_type=jpg",
  
  // Social Links
  links: {
    github: {
      url: "https://github.com/NekoTC",
      label: "GitHub",
      username: "NekoTC"
    },
    twitter: {
      url: "https://x.com/@XTWG114514",
      label: "Twitter",
      username: "@XTWG114514"
    },
    email: {
      url: "mailto:xtwg17192522@outlook.com",
      label: "Email Me",
      address: "xtwg17192522@outlook.com"
    }
  },
  
  // Projects
  projects: [
    {
      name: "TakesBot",
      description: "A QQ Bot for RhythmGames.",
      url: "https://github.com/TakesBot",
      tags: ["Bot", "Python", "QQ"]
    },
    {
      name: "Tome's Blog",
      description: "Sharing nothing(",
      url: "https://blog.nekotc.cn",
      tags: ["Blog", "Web"]
    }
  ],
  
  // Skills/Capabilities
  skills: [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "Git", level: 80 }
  ],
  
  // Footer Information
  footer: {
    icp: "陇ICP备2024006604号-1",
    icpUrl: "https://beian.miit.gov.cn/",
    copyright: "Tome Chen © 2025",
    version: "HOMEPAGE"
  }
};

export default config;
