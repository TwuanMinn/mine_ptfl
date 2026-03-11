// Projects data module
export const projects = [
    {
        id: 'proj-gamratic',
        title: "Gamratic - Game Review Platform",
        category: "Full Stack Development",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1465&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop"
        ],
        description: "A premium game review and discovery platform featuring user ratings, detailed reviews, game catalogs with filtering, community discussions, and a cinematic dark UI with gold accents.",
        fullDescription: `Gamratic is a full-stack game review and discovery platform that lets users rate, review, and discover video games. Inspired by platforms like Metacritic and IGN, it delivers a premium cinematic experience with a sleek dark UI, gold accent theming, and smooth animations throughout.

The platform features a comprehensive game catalog with advanced filtering by genre, platform, and rating. Each game detail page showcases rich information including cover art, screenshots, platform availability, publisher details, and aggregated user ratings. Users can write and submit their own reviews, vote on helpful reviews, and engage with the gaming community.

Key features include:
- Game Catalog: Browse and search a curated library of games with real-time filtering by genre, platform, rating, and release date.
- Detailed Game Pages: Rich game profiles with cover art, screenshots, metadata, critic scores, and user reviews.
- User Reviews & Ratings: Submit star ratings and written reviews, with helpful vote functionality for community curation.
- Community Hub: Discussion boards, featured polls, and trending topics for gaming community engagement.
- Where to Buy: Retailer links and pricing information based on each game's available platforms.
- Responsive Design: Fully responsive layout optimized for desktop, tablet, and mobile with a mobile-first navigation system.

The frontend is built with React and Vite for blazing-fast development and optimized production builds. The design system uses CSS custom properties with a cohesive dark theme featuring glassmorphism effects, gradient overlays, and staggered entrance animations. The backend is powered by Express.js with a RESTful API architecture, handling game data, user authentication, reviews, and community features.

Deployed on Vercel with optimized asset delivery, the platform demonstrates expertise in building content-rich, interactive web applications with premium visual polish.`,
        link: "https://gamratic.vercel.app/",
        techStack: ["React", "Vite", "Express.js", "Node.js", "CSS3", "Vercel"]
    },
    {
        id: 'proj-clevcipe',
        title: "Clevcipe - AI Recipe & Meal Planning",
        category: "Full Stack Development",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1480&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop"
        ],
        description: "A modern, full-stack recipe discovery and meal planning platform with AI-powered suggestions, weekly meal planner with calorie tracking, and a beautiful mobile-first interface.",
        fullDescription: `Clevcipe is a modern, full-stack recipe discovery and meal planning platform designed to help users find, save, and organize recipes based on their dietary preferences and nutritional goals. Built with Next.js 14 and TypeScript, the application features AI-powered recipe suggestions, a weekly meal planner with calorie tracking, and a beautiful mobile-first interface with smooth animations.

The backend leverages Supabase for authentication, real-time database operations, and secure API routes. Users can create accounts, save their favorite recipes, and sync their meal plans across devices seamlessly.

Key features include:
- AI-Powered Recommendations: Personalized "For You" recipe suggestions based on dietary preferences, past interactions, and nutritional goals.
- Dynamic Category Filtering: Browse recipes by cuisine, meal type, difficulty, cooking time, and dietary restrictions with intuitive filters.
- Weekly Meal Planner: Drag-and-drop interface for planning meals throughout the week with automatic calorie and macro tracking.
- Nutritional Insights Dashboard: Comprehensive breakdown of daily and weekly nutritional intake with visual charts and goal tracking.
- Detailed Recipe Pages: Step-by-step instructions with timers, ingredient scaling, and serving size adjustments.

The mobile-first design ensures a seamless experience across all devices, with smooth Framer Motion animations enhancing user interactions. The application uses Tailwind CSS for styling, creating a cohesive and modern visual language throughout.

Performance optimization was a priority, with server-side rendering for fast initial loads, image optimization, and efficient data fetching strategies. The platform is deployed on Vercel, taking advantage of edge functions for optimal global performance.`,
        link: "https://clevecipe-o78i9czd0-twuanminns-projects.vercel.app/",
        techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Vercel"]
    },
    {
        id: 'proj-typlax',
        title: "Typlax - Visual Typing Experience",
        category: "Full Stack Development",
        image: "/typlax_logo.jpg",
        gallery: [
            "/typlax_gallery1.png",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop"
        ],
        description: "A visually immersive typing practice application where keystrokes transform beautiful visual scenes. Features 6 unique visual modes, real-time metrics, global leaderboard, and a premium space-themed dark UI.",
        fullDescription: `Typlax is a visually immersive typing practice application that transforms the mundane act of typing into an artistic experience. Unlike traditional typing tutors, Typlax gamifies practice by letting users watch their progress unfold through stunning animations — from growing a tree from seed, to hatching an egg into a bird, to clearing TV static to reveal hidden images.

The application features 6 unique visual "TypeVibe" modes, each offering a distinct meditative experience:
- Tree Growing: Watch a seed sprout and grow into a majestic tree with each keystroke
- Egg Hatching: Nurture an egg until it cracks open to reveal a beautiful bird
- TV Static: Clear the noise to reveal stunning hidden imagery
- Starfield: Type through a cosmic journey across the universe
- Ocean Waves: Create rippling wave patterns with your keystrokes
- Fire Embers: Ignite and control dancing flames through typing

Real-time typing metrics track WPM (Words Per Minute), accuracy percentage, and streak counts, providing instant feedback on performance. The global leaderboard system powered by Firebase enables competitive ranking among users worldwide, while comprehensive progress tracking helps users monitor their improvement over time.

The UI embraces a premium space-themed dark aesthetic with glassmorphism effects, smooth Framer Motion animations, and responsive design that feels premium on any device. The "Pulse Key" logo — a 3D keyboard key merged with a typing pulse wave — embodies the app's core identity of rhythm and precision.

Key technical features include:
- Canvas API for high-performance visual animations
- Web Audio API for optional ambient soundscapes
- Firebase Realtime Database for leaderboard and user progress
- Express.js backend for secure API operations
- Responsive design optimized for both desktop and mobile experiences

Typlax represents the fusion of productivity and artistry, turning typing practice into a form of digital meditation where every keystroke brings visual transformation.`,
        link: "https://typlax-eg1rzheex-twuanminns-projects.vercel.app/",
        techStack: ["TypeScript", "React", "Express.js", "Node.js", "Firebase", "Tailwind CSS"]
    },
    {
        id: 'proj-barber',
        title: "Barber Haircut Booking System",
        category: "Full Stack Development",
        image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800",
        gallery: [
            "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        description: "A comprehensive booking system for barber shops featuring real-time appointment scheduling, staff management, and automated notifications.",
        fullDescription: `The Barber Haircut Booking System is a modern solution designed to streamline operations for barber shops and salons. Built with TypeScript and PostgreSQL, it offers a seamless booking experience for customers while providing shop owners with powerful management tools.

The application allows clients to view real-time availability of their favorite barbers, select services, and book appointments instantly. It handles complex scheduling scenarios, including varying service durations, staff breaks, and shop operating hours.

Key features include:
- Real-time Availability: Leaning on Supabase's real-time capabilities to prevent double bookings.
- Staff Management: Barbers can manage their own schedules, view upcoming appointments, and block out time off.
- Automated Notifications: Confirmation emails and appointment reminders reduce schedule gaps and no-shows.
- Customer Profiles: History of past cuts and preferences helps barbers provide personalized service.

Technically, the project utilizes PostgreSQL for robust data integrity and complex relation handling. Row Level Security (RLS) policies in Supabase ensure data privacy. The application is deployed on Vercel, utilizing serverless functions for scalability.`,
        link: "https://fadelab.vercel.app/",
        techStack: ["TypeScript", "PostgreSQL", "Supabase", "Vercel", "JavaScript"]
    },
    {
        id: 'proj-furniture',
        title: "Furniture Haven",
        category: "E-Commerce Development",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=1374&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503602642458-2321159af561?q=80&w=1374&auto=format&fit=crop"
        ],
        description: "A comprehensive furniture e-commerce platform featuring a modern catalog, interactive product views, and a secure checkout process. Built with Next.js and Supabase.",
        fullDescription: `Furniture Haven is a high-end e-commerce platform designed to redefine the online furniture shopping experience. This project showcases the power of modern web technologies by combining a stunning, interactive frontend with a robust, scalable backend to handle everything from product discovery to secure transactions.

The user interface was built using Next.js and React with TypeScript, ensuring a highly performant and type-safe application. Tailwind CSS was utilized to create a sophisticated, responsive design that emphasizes visual hierarchy and high-quality imagery, making every piece of furniture look as premium as it feels. Framer Motion animations provide smooth transitions between products and categories, creating a seamless and engaging browsing experience.

On the backend, Supabase serves as the primary data and authentication layer. Leveraging PostgreSQL with RLS (Row Level Security), the application ensures that user data and order history are securely managed. The real-time capabilities of Supabase are used to sync inventory levels across the platform, preventing overselling and providing customers with accurate stock information.

Key features include an advanced search and filtering system, allowing users to find pieces by material, style, color, and price. A persistent shopping cart handles guest and registered users alike, while the checkout flow is optimized for speed and security. The integration of Vercel for deployment guarantees lightning-fast load times and global availability through their edge network.

This project represents a deep dive into building functional, beautiful commerce applications that meet modern standards for performance, security, and aesthetics.`,
        link: "https://furnthome.vercel.app/",
        techStack: ["Next.js", "React", "TypeScript", "Supabase", "Express.js", "PostgreSQL", "Tailwind CSS", "Vercel", "JavaScript"]
    },
    {
        id: 'proj-shoestore',
        title: "Premium Shoe Store",
        category: "E-Commerce Development",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1471&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1374&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop"
        ],
        description: "A high-performance e-commerce storefront for premium footwear. Features a sleek, responsive design, product filtering, and a seamless shopping experience.",
        fullDescription: `This premium shoe store represents the culmination of modern e-commerce best practices, combining stunning visual design with powerful functionality to deliver an exceptional online shopping experience. Built from the ground up with performance in mind, the application leverages Next.js for server-side rendering, ensuring lightning-fast page loads and optimal SEO performance.

The user interface was meticulously crafted using React and Tailwind CSS, creating a responsive design that adapts beautifully to any screen size. Every interaction has been enhanced with Framer Motion animations, providing smooth transitions and micro-interactions that make browsing feel premium and engaging.

Key features include an advanced product filtering system, persistent shopping cart across sessions, streamlined checkout process, and comprehensive admin panel for store management.`,
        link: "https://shoestore-tau.vercel.app/",
        techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
        id: 'proj-habit',
        title: "Habit Tracking Mobile Application",
        category: "Mobile Development",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1374&auto=format&fit=crop"
        ],
        description: "Native Android app with Firebase backend. Features habit creation, monitoring, reminders, and progress visualization with intuitive UI design and real-time data sync.",
        fullDescription: `The Habit Tracking Mobile Application is a comprehensive solution designed to help users build and maintain positive habits through consistent tracking, insightful analytics, and motivational features. Developed using React Native, this cross-platform application delivers a native experience on both iOS and Android devices.

Firebase serves as the backbone of the backend infrastructure, providing real-time database synchronization that ensures user data is always up-to-date across all devices. The analytics dashboard presents users with beautiful visualizations of their progress over time.`,
        link: "https://habitora-6txvv7n9f-twuanminns-projects.vercel.app/",
        techStack: ["React Native", "Firebase", "JavaScript", "Tailwind CSS"]
    },
    {
        id: 'proj-lstm',
        title: "LSTM Machine Translation (EN → FR)",
        category: "AI / Machine Learning",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop"
        ],
        description: "LSTM Encoder-Decoder with Attention mechanism for English-French translation using PyTorch. Handled ML workflow including preprocessing, model training, and performance evaluation.",
        fullDescription: `This machine translation project implements a state-of-the-art neural machine translation system using Long Short-Term Memory (LSTM) networks with an attention mechanism. The model translates English text to French with impressive accuracy, demonstrating the power of sequence-to-sequence learning in natural language processing tasks.

The architecture follows the encoder-decoder paradigm with Bahdanau-style attention. Training was conducted using PyTorch, leveraging GPU acceleration. The model achieved a BLEU score of 34.2 on the WMT test set.`,
        link: "/pending",
        techStack: ["Python", "PyTorch", "Machine Learning", "NumPy"]
    },
    {
        id: 'proj-portfolio',
        title: "Resume Portfolio Website",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1374&auto=format&fit=crop"
        ],
        description: "Responsive portfolio built with React and Tailwind CSS. Features AI-powered chatbot for visitor engagement, smooth animations, dark/light mode, and backend API integration.",
        fullDescription: `This portfolio website serves as both a professional showcase and a comprehensive demonstration of modern web development capabilities. Built with React and styled with Tailwind CSS, the site delivers a stunning visual experience while maintaining excellent performance and accessibility standards.

The standout feature is an AI-powered chatbot that engages visitors in natural conversation about the portfolio owner's skills, experience, and projects. Powered by Google's Gemini API, the chatbot provides intelligent, contextual responses.`,
        link: "/pending",
        techStack: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Vercel"]
    },
    {
        id: 'proj-ecommerce',
        title: "E-Commerce Platform",
        category: "Full Stack Development",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop"
        ],
        description: "Full-stack e-commerce solution with product management, shopping cart, secure checkout, and admin dashboard. Integrated payment processing and real-time inventory tracking.",
        fullDescription: `This comprehensive e-commerce platform represents a complete full-stack solution for online retail businesses. Built with Next.js and TypeScript, the application features advanced search, Stripe payment processing, and a powerful admin dashboard.`,
        link: "/pending",
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"]
    },
    {
        id: 'proj-taskmanager',
        title: "Collaborative Task Manager",
        category: "Productivity Tools",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1476&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1439&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
        ],
        description: "Real-time task management app with team collaboration features, drag-and-drop boards, deadline notifications, and performance analytics dashboard.",
        fullDescription: `The Collaborative Task Manager is a powerful productivity tool designed for teams that need to coordinate work efficiently. Real-time collaboration is powered by Socket.io, enabling multiple team members to work on the same board simultaneously.`,
        link: "/pending",
        techStack: ["React", "Node.js", "MongoDB", "Socket.io"]
    },
    {
        id: 'proj-weatherapp',
        title: "Weather Forecast Dashboard",
        category: "Data Visualization",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1465&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1389&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1375&auto=format&fit=crop"
        ],
        description: "Beautiful weather application with location-based forecasts, interactive maps, hourly/weekly predictions, and severe weather alerts using multiple weather APIs.",
        fullDescription: `The Weather Forecast Dashboard is a sophisticated weather application that transforms complex meteorological data into beautiful, easy-to-understand visualizations. Built with Vue.js and TypeScript, featuring interactive maps, severe weather alerts, and multiple data sources.`,
        link: "/pending",
        techStack: ["Vue.js", "TypeScript", "REST API", "Chart.js"]
    }
];
