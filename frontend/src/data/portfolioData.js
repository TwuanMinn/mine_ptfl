// Portfolio data configuration - main export
// Data is split into separate modules for maintainability
import { projects } from './projects';
import { certificates } from './certificates';
import { experience } from './experience';

export const getPortfolioData = (bioText) => ({
    name: "NGUYỄN HUỲNH MINH TUẤN",
    title: "Software Engineer",
    bio: bioText || "A passionate software engineer with a strong foundation in full-stack development. With hands-on experience in programming, problem-solving, and teamwork through practical projects, I bring a proactive willingness to learn new technologies and contribute effectively in professional IT environments.",
    email: "twuanminn47@gmail.com",
    github: "https://github.com/twuanmin",
    linkedin: "https://www.linkedin.com/in/twuan-min-a98356344/",
    figma: "https://www.figma.com",
    whatsapp: "https://wa.me/84934159597",
    discord: "https://discord.com/app",

    skills: [
        "JavaScript", "TypeScript", "Java", "Python",
        "ReactJS", "NextJS",
        "NodeJS (Express, NestJS)", "PostgreSQL",
        "Git", "Firebase", "Machine Learning",
        "Vercel", "Angular", "Docker", "Vue.js",
        "ExpressJS", "AWS", "Spring Boot", "Supabase", "NestJS", "Flutter", "Convex"
    ],

    skillsProgress: [
        { name: "React Native", level: 87 },
        { name: "GitHub", level: 97 },
        { name: "TypeScript", level: 83 },
        { name: "Tailwind CSS", level: 93 },
        { name: "Supabase", level: 92 }
    ],

    projects,
    certificates,
    experience
});

export const texts = [
    "Hi, I'm a developer passionate about building clean, intuitive, and visually engaging user interfaces. I focus on creating smooth user experiences, thoughtful interactions, and modern, responsive designs that feel great to use.",
    "I am committed to continually setting higher standards for myself to expand my knowledge and expertise.",
    "I believe great software isn't just functional—it's delightful. Every pixel matters, every animation tells a story, and every interaction should feel natural. Let's build something beautiful together."
];

export const popupMessages = [
    "Hi there!",
    "I'm Nguyen Huynh Minh Tuan",
    "I'm a software engineer & developer based in HCM City"
];
