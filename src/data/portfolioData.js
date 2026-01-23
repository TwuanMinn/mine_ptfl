// Portfolio data configuration
export const getPortfolioData = (bioText) => ({
    name: "NGUYỄN HUỲNH MINH TUẤN",
    title: "Software Engineer",
    bio: bioText,
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
        "ExpressJS", "AWS", "Spring Boot", "Supabase"
    ],

    skillsProgress: [
        { name: "React Native", level: 87 },
        { name: "GitHub", level: 88 },
        { name: "Firebase", level: 76 },
        { name: "Tailwind CSS", level: 93 },
        { name: "Supabase", level: 78 }
    ],

    projects: [
        {
            id: 'proj-habit',
            title: "Habit Tracking Mobile Application",
            category: "Mobile Development",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop",
            description: "Native Android app with Firebase backend. Features habit creation, monitoring, reminders, and progress visualization with intuitive UI design and real-time data sync.",
            link: "#",
            techStack: ["React Native", "Firebase", "JavaScript", "Tailwind CSS"]
        },
        {
            id: 'proj-lstm',
            title: "LSTM Machine Translation (EN → FR)",
            category: "AI / Machine Learning",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop",
            description: "LSTM Encoder-Decoder with Attention mechanism for English-French translation using PyTorch. Handled ML workflow including preprocessing, model training, and performance evaluation.",
            link: "#",
            techStack: ["Python", "PyTorch", "Machine Learning", "NumPy"]
        },
        {
            id: 'proj-portfolio',
            title: "Resume Portfolio Website",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
            description: "Responsive portfolio built with React and Tailwind CSS. Features AI-powered chatbot for visitor engagement, smooth animations, dark/light mode, and backend API integration.",
            link: "#",
            techStack: ["React", "Tailwind CSS", "Node.js", "Vercel"]
        },
        {
            id: 'proj-ecommerce',
            title: "E-Commerce Platform",
            category: "Full Stack Development",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop",
            description: "Full-stack e-commerce solution with product management, shopping cart, secure checkout, and admin dashboard. Integrated payment processing and real-time inventory tracking.",
            link: "#",
            techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"]
        },
        {
            id: 'proj-taskmanager',
            title: "Collaborative Task Manager",
            category: "Productivity Tools",
            image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1476&auto=format&fit=crop",
            description: "Real-time task management app with team collaboration features, drag-and-drop boards, deadline notifications, and performance analytics dashboard.",
            link: "#",
            techStack: ["React", "Node.js", "MongoDB", "Socket.io"]
        },
        {
            id: 'proj-weatherapp',
            title: "Weather Forecast Dashboard",
            category: "Data Visualization",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop",
            description: "Beautiful weather application with location-based forecasts, interactive maps, hourly/weekly predictions, and severe weather alerts using multiple weather APIs.",
            link: "#",
            techStack: ["Vue.js", "TypeScript", "REST API", "Chart.js"]
        }
    ],

    certificates: [
        {
            title: "IELTS Certificate",
            issuer: "British Council / IDP",
            date: "2024",
            description: "Achieved an Overall Band Score of 7.5, demonstrating proficiency in English communication.",
            link: "#"
        },
        {
            title: "Full-Stack Web Development",
            issuer: "Coursera",
            date: "2024",
            description: "Completed a full-stack program covering React, Node.js, and REST APIs.",
            link: "#"
        },
        {
            title: "UI/UX Design Essentials",
            issuer: "Google",
            date: "2023",
            description: "Design fundamentals, user research, and wireframing best practices.",
            link: "#"
        },
        {
            title: "Cloud Fundamentals",
            issuer: "Microsoft",
            date: "2023",
            description: "Core cloud concepts, services, and security principles.",
            link: "#"
        }
    ],

    experience: [
        {
            role: "Freelance UI/UX Designer",
            period: "May 2024 - Present",
            description: "Crafting intuitive digital experiences with a focus on user-centric design. Specializing in high-fidelity prototyping, design systems, and bridging the gap between aesthetics and functionality using Figma and modern design principles."
        },
        {
            role: "English IELTS Teacher",
            period: "March 2023 - March 2024",
            description: "Delivered IELTS preparation lessons across all four skills. Developed exam-focused materials and provided personalized instruction to help students achieve higher band scores."
        },
        {
            role: "IT Support Volunteer",
            period: "February 2022 - May 2022",
            description: "Provided technical support for software and hardware issues. Assisted in setting up computer systems, network configurations, and created troubleshooting documentation."
        }
    ]
});

export const texts = [
    "Hi, I'm a developer passionate about building clean, intuitive, and visually engaging user interfaces. I focus on creating smooth user experiences, thoughtful interactions, and modern, responsive designs that feel great to use.",
    "I am committed to continually setting higher standards for myself to expand my knowledge and expertise.",
    "I believe great software isn't just functional—it's delightful. Every pixel matters, every animation tells a story, and every interaction should feel natural. Let's build something beautiful together."
];

export const popupMessages = [
    "Hi there!",
    "I'm Nguyen Huynh Minh Tuan",
    "I'm a software engineer & develop based in HCM City"
];
