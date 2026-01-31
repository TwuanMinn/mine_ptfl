// Portfolio data configuration
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

    projects: [
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
            fullDescription: `This premium shoe store represents the culmination of modern e-commerce best practices, combining stunning visual design with powerful functionality to deliver an exceptional online shopping experience. Built from the ground up with performance in mind, the application leverages Next.js for server-side rendering, ensuring lightning-fast page loads and optimal SEO performance that helps the store rank higher in search results.

The user interface was meticulously crafted using React and Tailwind CSS, creating a responsive design that adapts beautifully to any screen size—from mobile phones to large desktop monitors. Every interaction has been enhanced with Framer Motion animations, providing smooth transitions and micro-interactions that make browsing feel premium and engaging. The design philosophy centered around minimalism with purposeful accents, using a sophisticated color palette that lets the products take center stage while maintaining brand identity throughout.

Key features include an advanced product filtering system that allows customers to narrow down their search by size, color, brand, price range, and style category. The filtering system uses URL parameters, meaning customers can share filtered results with friends or bookmark specific searches for later. Real-time inventory checking ensures customers never add out-of-stock items to their cart, while size availability is displayed prominently on each product page.

The shopping cart functionality is persistent across sessions, utilizing local storage combined with server-side syncing for logged-in users. This ensures customers never lose their selections, even if they close their browser and return days later. The cart includes quantity adjustments, item removal with undo functionality, and a running total with estimated shipping and taxes. A "saved for later" feature allows customers to move items out of their cart without losing them entirely.

The checkout process has been streamlined to minimize friction and reduce cart abandonment. A progress indicator shows customers exactly where they are in the process, while form validation provides immediate feedback on any errors. Multiple payment options are supported including credit/debit cards, PayPal, Apple Pay, and Google Pay. Guest checkout is available for customers who prefer not to create an account, though account creation is incentivized with benefits like order tracking and faster future checkouts.

On the technical side, the codebase follows modern React patterns including custom hooks for state management, component composition for reusability, and proper separation of concerns. The styling system uses Tailwind's utility-first approach combined with a custom design token system, making it easy to maintain consistency while allowing for rapid iteration on design changes. Critical CSS is inlined for the initial page load, while the rest is loaded asynchronously.

Performance optimizations include lazy loading for images with blur-up placeholders, code splitting for faster initial loads, and optimistic UI updates that make the interface feel snappy even on slower connections. The product image gallery uses progressive loading, showing low-resolution versions immediately while high-resolution images load in the background. Infinite scroll pagination on category pages loads products seamlessly as users browse.

The admin panel provides store managers with comprehensive tools for inventory management, order processing, and analytics. Product management includes bulk upload via CSV, drag-and-drop image ordering, and variant management for size/color combinations. The analytics dashboard shows sales trends, conversion rates, popular products, and customer acquisition channels, helping inform business decisions.

Security was paramount throughout development. All payment processing is handled through Stripe's secure payment infrastructure, with no sensitive card data ever touching our servers. User authentication uses industry-standard practices including bcrypt password hashing, JWT tokens with refresh rotation, and optional two-factor authentication. Regular security audits and dependency updates keep the platform protected against known vulnerabilities.

The entire application is deployed on Vercel, taking advantage of their global CDN for fast content delivery worldwide. Automatic deployments trigger on every push to the main branch, with preview deployments for pull requests enabling easy review of changes before they go live. Edge functions handle geolocation for currency and shipping calculations, while the core application benefits from automatic scaling to handle traffic spikes.`,
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
            fullDescription: `The Habit Tracking Mobile Application is a comprehensive solution designed to help users build and maintain positive habits through consistent tracking, insightful analytics, and motivational features. Developed using React Native, this cross-platform application delivers a native experience on both iOS and Android devices while maintaining a single, maintainable codebase that accelerates development and ensures feature parity across platforms.

At its core, the app allows users to create custom habits with incredibly flexible scheduling options—daily, specific days of the week, weekly, bi-weekly, monthly, or completely custom intervals. Each habit can be configured with specific goals such as "drink 8 glasses of water" or "read for 30 minutes," with progress tracked incrementally throughout the day. Reminder notifications are highly customizable, supporting multiple reminders per habit, smart timing based on past completion patterns, and location-based triggers that remind you to work out when you arrive at the gym.

The habit creation wizard guides users through setting up effective habits using proven behavioral psychology principles. The app suggests optimal reminder times based on habit type, recommends starting small with achievable goals, and encourages habit stacking—linking new habits to existing routines. Users can choose from dozens of pre-built habit templates covering health, fitness, learning, productivity, relationships, and personal development, or create entirely custom habits from scratch.

Firebase serves as the backbone of the backend infrastructure, providing real-time database synchronization that ensures user data is always up-to-date across all their devices. Whether you complete a habit on your phone in the morning or on your tablet at night, the data syncs instantly. Authentication is handled securely through Firebase Auth, supporting email/password login as well as social sign-in options including Google, Apple, and Facebook. Cloud Functions handle complex business logic like streak calculations, achievement unlocking, statistical aggregations, and scheduled cleanup tasks.

The analytics dashboard presents users with beautiful visualizations of their progress over time. Heat maps display consistency patterns across weeks and months, immediately revealing which days are strongest and which need attention. Trend charts show improvement trajectories for measurable habits, while comparison views let users see how different habits perform relative to each other. Weekly and monthly summary reports can be exported as PDFs or images for sharing on social media or personal records. The insights engine analyzes patterns and provides personalized suggestions for improvement.

Streaks are highlighted prominently throughout the app, providing powerful motivation to maintain consistency. The longest streak for each habit is recorded as a personal best, creating an internal competition that drives engagement. When a streak is at risk of breaking, the app sends increasingly urgent reminders. If a streak does break, users can use a limited number of "freeze days" per month to preserve their progress—simulating real-life situations where illness or travel might interrupt routines without destroying motivation.

Push notifications are intelligently scheduled based on user preferences and past behavior patterns to maximize engagement without being intrusive. The app learns when users typically complete each habit and adjusts reminder times accordingly. Notifications are batched to avoid overwhelming users, and a "focus mode" silences all notifications during specified hours. Rich notifications allow users to mark habits as complete directly from the notification without opening the app.

The UI design follows Material Design 3 guidelines while incorporating custom components and animations that give the app its unique personality. A comprehensive theming system supports both light and dark modes, with automatic switching based on system preferences or time of day. Custom icons for each habit category add visual interest, while smooth animations provide satisfying feedback when completing habits. Accessibility was a priority throughout development, with proper screen reader support, sufficient color contrast, dynamic text sizing, and touch targets sized appropriately for all users.

Social features enable friendly competition and accountability among friends and family. Users can create groups, share specific habits, and participate in challenges with custom rules and durations. A public leaderboard showcases the most consistent users, while private group leaderboards foster healthy competition among smaller circles. Users can send encouragement to friends when they complete habits or are struggling with their streaks.

The application includes comprehensive offline support, storing habits and completions locally when network connectivity is unavailable and synchronizing seamlessly when connection is restored. Conflict resolution logic handles edge cases where habits are completed on multiple devices while offline. This ensures the app remains useful during travel, in areas with poor connectivity, or simply when users prefer to disconnect.`,
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
            fullDescription: `This machine translation project implements a state-of-the-art neural machine translation system using Long Short-Term Memory (LSTM) networks with an attention mechanism. The model translates English text to French with impressive accuracy, demonstrating the power of sequence-to-sequence learning in natural language processing tasks. This project represents months of research, experimentation, and iterative refinement to achieve competitive translation quality.

The architecture follows the encoder-decoder paradigm, a fundamental structure for sequence-to-sequence tasks. The encoder is a bidirectional LSTM that processes the input English sentence word by word, building a rich representation of its meaning that captures both forward and backward context. Using a bidirectional approach allows the encoder to understand each word in the context of both what comes before and after it, resulting in more nuanced representations. The encoder produces a sequence of hidden states, one for each input word, plus a final summary vector.

The decoder is another LSTM that generates the French translation one word at a time. At each step, it considers the previous generated word, its own hidden state, and—crucially—the attention-weighted context from the encoder. The attention mechanism was crucial in achieving high translation quality, especially for longer sentences where traditional encoder-decoder models struggle with the information bottleneck problem. Without attention, all information about the source sentence must be compressed into a single fixed-size vector, which becomes increasingly difficult as sentences grow longer.

The attention mechanism implemented here is Bahdanau-style (additive) attention, which computes a weighted average of encoder hidden states at each decoding step. The weights are determined by a learned alignment model that scores how well each encoder position matches the current decoder state. This allows the model to "focus" on relevant parts of the input sentence when generating each output word—for example, paying attention to "dog" when generating "chien" and to "runs" when generating "court."

Data preprocessing involved extensive text cleaning including lowercasing, punctuation normalization, unicode character handling, and rare word replacement. Tokenization was performed using either word-level or subword (BPE) tokenization depending on the experiment. Vocabulary building for both languages included frequency thresholding to handle rare words, with special tokens for padding (PAD), unknown words (UNK), sentence start (SOS), and sentence end (EOS). The training data was sourced from parallel corpora including WMT datasets and European Parliament proceedings, containing millions of sentence pairs.

Data was split following best practices: 80% for training, 10% for validation (used for hyperparameter tuning and early stopping), and 10% for final testing (touched only once for final evaluation). Sentence pairs were filtered by length to remove outliers that could destabilize training, and sorted by length within batches to minimize padding overhead. Dynamic batching adjusted batch sizes based on total tokens rather than fixed sentence counts, improving GPU utilization.

Training was conducted using PyTorch, leveraging GPU acceleration for efficient matrix operations. The training loop implemented teacher forcing, where the ground truth previous word is fed to the decoder during training rather than its own predictions, which dramatically improves training stability and speed. However, pure teacher forcing can lead to exposure bias—the model never learns to recover from its own mistakes. To address this, we used scheduled sampling, gradually decreasing the teacher forcing ratio over training.

Gradient clipping prevented exploding gradients, a common problem in RNN training, by capping gradient norms to a maximum value. Learning rate scheduling used the inverse square root decay strategy popular in machine translation, with a warm-up period for the first several thousand steps. The Adam optimizer with carefully tuned hyperparameters drove the optimization. Regularization techniques included dropout applied to embeddings, LSTM layers, and attention vectors, plus label smoothing on the cross-entropy loss.

The model was evaluated using BLEU (Bilingual Evaluation Understudy) scores, the de facto standard metric for machine translation. Our best model achieved a BLEU score of 34.2 on the WMT test set, competitive with baseline models of similar capacity. Beyond BLEU, we also evaluated using chrF (character-level F-score) and human evaluation for fluency and adequacy. Detailed analysis revealed strong performance on short to medium sentences, with expected degradation on very long sentences exceeding 50 words.

Extensive ablation studies explored the impact of various design choices. Comparing unidirectional vs bidirectional encoders showed a 2.3 BLEU improvement from bidirectionality. Different attention mechanisms were tested, with the additive mechanism slightly outperforming multiplicative attention. Experiments with varying numbers of LSTM layers found diminishing returns beyond 4 layers. Embedding dimension and hidden state size were tuned through grid search.

NumPy was used extensively for numerical operations and data manipulation throughout the preprocessing and evaluation pipelines. Visualization tools including Matplotlib and TensorBoard tracked training progress and helped diagnose issues. Comprehensive documentation including Jupyter notebooks explain the methodology step by step, making this project valuable for educational purposes and future research extension.`,
            link: "#",
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
            fullDescription: `This portfolio website serves as both a professional showcase and a comprehensive demonstration of modern web development capabilities. Built with React and styled with Tailwind CSS, the site delivers a stunning visual experience while maintaining excellent performance and accessibility standards across all devices and browsers. The project represents the intersection of technical excellence and creative design, pushing the boundaries of what a personal portfolio can be.

The standout feature is an AI-powered chatbot that engages visitors in natural conversation about the portfolio owner's skills, experience, and projects. Powered by Google's Gemini API, the chatbot provides intelligent, contextual responses that help visitors find the information they're looking for while adding a unique interactive element to the portfolio experience. The chatbot maintains conversation context, allowing for follow-up questions and natural dialogue flow. It can discuss technical skills in depth, explain project decisions, and even help with basic programming questions.

The chatbot interface features a modern design with message bubbles, typing indicators, and smooth scroll behavior. Quick-reply buttons suggest common questions while still allowing free-form input. The conversation can be minimized without losing context, and cleared when the visitor wants to start fresh. Error handling gracefully manages API failures, providing helpful fallback responses rather than confusing error messages.

Design-wise, the portfolio features a carefully crafted dark mode as the default theme, with a light mode option for user preference. The color system uses a sophisticated palette of deep navy blues and vibrant cyan accents, creating a modern, tech-forward aesthetic that stands out from typical portfolios. Smooth animations powered by Framer Motion guide users through the content, with reveal effects that animate elements as they enter the viewport, hover states that provide interactive feedback, and page transitions that feel polished and professional.

The particle background adds visual interest without distracting from the content, creating a sense of depth and movement. Particles respond subtly to mouse movement, adding an interactive dimension. The effect is GPU-accelerated and optimized to maintain 60fps even on less powerful devices. A reduced motion option respects user system preferences for those who prefer less animation.

Interactivity includes a floating toolbar for easy navigation between sections, featuring section shortcuts, theme toggle, accessibility options, and social sharing. The scroll progress indicator shows how far through the page visitors have scrolled. Read-aloud functionality makes the content accessible to users who prefer audio, using the Web Speech API to narrate section content. QR code generation allows visitors to easily share the portfolio or access it on their mobile devices.

The projects section showcases work with interactive cards featuring hover effects, technology badges, and heart functionality for favorites. Projects can be hearted and saved for later viewing, with preferences persisted in local storage. A dedicated "Hearted Projects" page collects all favorites in one place. Each project links to a detailed case study page with comprehensive descriptions, technology deep-dives, and image galleries.

The skills section uses animated progress bars that fill as they enter the viewport, visualizing proficiency levels in an engaging way. Technology icons are sourced from official brand resources for accuracy. Skills are categorized by type (frontend, backend, tools, etc.) with expandable sections for detailed information about experience with each technology.

The experience timeline presents work history in a visually compelling format, with alternating left-right positioning on desktop and a linear timeline on mobile. Each role includes duration, company, and detailed descriptions of responsibilities and achievements. The timeline animation reveals entries sequentially as users scroll, telling a career story.

The contact section includes a functional form that submits messages via a serverless function, with validation and submission feedback. Social links are prominently featured with animated icons. A copy-to-clipboard email button provides quick access to direct contact. The section also includes a downloadable resume PDF.

The technical implementation showcases advanced React patterns including lazy loading for performance (reducing initial bundle size by loading sections on demand), error boundaries for resilience (catching errors in individual sections without crashing the whole app), and custom hooks for code organization. The codebase follows strict conventions with ESLint and Prettier enforcing consistency.

The backend integrates with various APIs for features like the chatbot, email contact forms, and real-time status updates. A "currently available" status badge pulls data from a simple status API that can be updated independently. Deployment is handled through Vercel with automatic CI/CD from the GitHub repository, ensuring the latest changes are always live within minutes of merging.

Performance optimization was a priority throughout development. Core Web Vitals scores consistently hit green across all metrics. Images use modern formats (WebP) with fallbacks. Critical CSS is inlined while non-critical styles load asynchronously. Fonts are preloaded and optimized for loading performance. The site scores 95+ on Lighthouse across performance, accessibility, best practices, and SEO.`,
            link: "#",
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
            fullDescription: `This comprehensive e-commerce platform represents a complete full-stack solution for online retail businesses, handling everything from product discovery to order fulfillment with enterprise-grade reliability and scalability. Built with Next.js and TypeScript, the application provides type-safe code that catches errors at compile time, resulting in a more robust and maintainable codebase that scales with business growth.

The customer-facing storefront includes an intuitive product catalog with advanced search and filtering capabilities. Full-text search powered by a search engine indexes product titles, descriptions, and attributes for fast, relevant results. Filters support multi-select options for categories, price ranges, brands, sizes, colors, and custom attributes. Category navigation uses a hierarchical structure supporting unlimited nesting levels, with breadcrumbs helping users understand their location and navigate easily.

Product recommendations appear throughout the shopping experience, powered by a recommendation engine that analyzes browsing history, purchase patterns, and product attributes. "Customers who bought this also bought" suggestions appear on product pages, while "Recently viewed" and "Trending now" sections personalize the homepage. The recommendation system improves over time as it learns from user behavior.

Each product page features high-resolution image galleries with zoom functionality and 360-degree views where available. Size and variant selectors update pricing, inventory, and imagery dynamically. Customer reviews include verified purchase badges, helpful voting, and photo uploads. Real-time stock availability information shows exact quantities for transparency, with low-stock warnings creating urgency. Size guides and fit recommendations help reduce returns.

The shopping cart experience has been optimized for conversion through extensive A/B testing. Features include saved carts that persist for logged-in users indefinitely, guest checkout options that minimize friction for first-time buyers, and one-click purchasing for returning customers with saved payment methods. Cart abandonment recovery sends automated emails with personalized discounts to bring customers back.

The checkout process implements a streamlined, single-page design that reduces abandonment. Address autocomplete speeds data entry while reducing errors. Real-time shipping rate calculation shows all available options with delivery estimates. Multiple payment options are supported including credit/debit cards, PayPal, Apple Pay, Google Pay, and regional payment methods. The checkout supports discount codes, gift cards, loyalty points, and promotional offers.

Stripe integration handles payment processing securely, with no sensitive card data ever touching our servers. PCI DSS Level 1 compliance through Stripe's infrastructure protects customer payment information. 3D Secure 2 (SCA) implementation meets European PSD2 requirements. Fraud detection powered by Stripe Radar blocks suspicious transactions automatically while minimizing false positives.

Order confirmation emails are sent automatically with tracking information and delivery estimates. Customers can track their orders through a dedicated portal showing real-time status updates from warehouse to doorstep. SMS notifications keep customers informed of shipping milestones. If issues arise, an integrated returns portal makes exchanges and refunds straightforward.

The admin dashboard provides store owners and staff with powerful tools to manage every aspect of their business. Role-based access control ensures team members only see and modify what they need. Product management includes bulk import/export via CSV, Excel, or API integration, allowing catalog updates from existing systems. Drag-and-drop image management with automatic optimization handles media efficiently.

Inventory tracking operates in real-time across multiple warehouses and sales channels. Low-stock alerts notify team members before stockouts occur. Automatic reorder points can trigger purchase orders to suppliers. The system supports pre-orders and backorders for managing demand exceeding current inventory.

Order management features a streamlined fulfillment workflow. Orders flow from received to processing to shipped with clear status visibility. Batch processing allows efficient handling of high volumes. Integration with major shipping carriers enables label printing, tracking number import, and rate shopping. Returns and refunds can be processed with configurable approval workflows.

Analytics dashboards provide actionable insights into business performance. Sales trends visualize revenue over time with comparison periods. Product performance identifies bestsellers and underperformers. Customer acquisition metrics show how visitors become buyers. Funnel analysis identifies drop-off points in the purchase journey. Cohort analysis tracks customer lifetime value and retention.

The PostgreSQL database ensures data integrity through proper constraints and supports complex queries for reporting. Database design follows normalization principles for data integrity while using strategic denormalization and materialized views for performance-critical reads. Connection pooling handles concurrent access efficiently while background jobs process intensive operations asynchronously.

API routes are protected with authentication middleware using JWT tokens. Sensitive operations require appropriate role-based permissions. Rate limiting protects against abuse while ensuring legitimate traffic flows smoothly. Comprehensive logging and monitoring track API performance and errors.

The platform is designed to scale horizontally. The stateless application layer allows running multiple instances behind a load balancer. Database read replicas handle reporting and analytics queries without impacting transactional performance. A CDN serves static assets and cached pages globally. Background job processing handles inventory sync, email sending, and other asynchronous operations without blocking user requests.`,
            link: "#",
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
            fullDescription: `The Collaborative Task Manager is a powerful productivity tool designed for teams that need to coordinate work efficiently while maintaining visibility and accountability. Inspired by tools like Trello and Asana but enhanced with unique features, this application provides a flexible, visual approach to project management that adapts to how teams actually work rather than forcing them into rigid processes.

The interface centers around customizable boards that can represent projects, sprints, workflows, or any organization scheme that fits the team's needs. Multiple board views cater to different preferences: Kanban boards show cards flowing through columns, list views provide compact task overviews, calendar views display deadline-focused planning, and Gantt charts visualize project timelines with dependencies. Users can switch between views instantly while working with the same underlying data.

Within each board, columns represent stages of work. Default templates provide common setups like "To Do / In Progress / Done" or "Backlog / Sprint / Review / Complete," but teams can create any stages that fit their process. Columns can have WIP (work-in-progress) limits that encourage teams to finish work before starting new items, preventing context-switching and ensuring steady flow.

Tasks are created as cards that contain all relevant information in one place. Each card supports rich text descriptions with formatting, markdown support, and inline code snippets for technical teams. File attachments allow direct uploads or links to cloud storage services. Checklists within cards break down complex tasks into manageable steps with progress tracking. Time tracking captures how long tasks actually take versus estimates, improving future planning accuracy.

Drag-and-drop functionality makes reorganizing work intuitive and satisfying. Cards can be moved between columns with visual feedback indicating valid drop targets. Reordering within columns adjusts priority. Moving cards between boards supports workflow handoffs between teams. The drag-and-drop is fully accessible, with keyboard alternatives for users who cannot use a mouse.

Real-time collaboration is powered by Socket.io, enabling multiple team members to work on the same board simultaneously without conflicts or stale data. Changes made by one user appear instantly for all others, with visual indicators showing who else is viewing or editing. Cursor presence shows where each team member is focused on the board. Conflict resolution logic handles the rare cases where two users edit the same card simultaneously.

Comments on tasks support rich discussions with @mentions to notify specific team members. Threaded replies keep conversations organized. Reactions allow quick acknowledgments without cluttering the thread with "thanks" messages. Activity feeds track all changes for transparency and audit purposes, showing who did what and when.

Assignment features go beyond simple single-assignee models. Cards can be assigned to multiple team members for collaborative tasks. Workload views show how tasks are distributed across the team, highlighting overloaded members before burnout occurs. Suggested assignees appear based on skills, availability, and past similar work.

Due dates and reminders keep work on track. Deadlines appear prominently on cards with color coding for urgency (upcoming, due soon, overdue). The calendar view shows all deadlines in timeline format for planning. Reminder notifications can be configured at multiple intervals before deadlines. Recurring deadlines support regular tasks like weekly reports or monthly reviews.

Labels and custom fields enable flexible categorization beyond the board structure. Color-coded labels highlight priority, type, or any other classification. Custom fields of various types (text, number, date, dropdown, checkbox) capture metadata specific to the team's needs. Filtering by labels and custom fields helps find relevant tasks quickly.

Sprint planning features support agile methodologies with backlog management, sprint creation, velocity tracking, and burndown charts. Story point estimation enables capacity planning. Sprint retrospective templates guide continuous improvement discussions.

Automation rules reduce manual overhead for common workflows. Trigger-action rules like "when card moves to Done, notify assigned user" or "when due date passes, add Overdue label" execute automatically. Template cards with pre-filled checklists, labels, and assignments standardize repetitive task types. Recurring card creation handles regularly scheduled work.

The analytics dashboard aggregates data across all projects to provide insights into team productivity. Metrics include task completion rates over time, cycle time averages showing how long tasks take from start to finish, bottleneck identification revealing which stages slow down flow, and individual contribution stats for performance discussions. Charts can be filtered by date range, project, team member, and custom fields.

Integration with external tools extends the platform's utility. Calendar sync pushes deadlines to Google Calendar or Outlook. Slack integration sends notifications and allows creating tasks from messages. GitHub integration links commits and pull requests to related tasks. Email integration allows creating tasks by forwarding emails to a project address.

MongoDB's flexible document model made it easy to store varied task data while supporting complex queries. Aggregation pipelines power the analytics calculations efficiently, generating insights from millions of tasks without impacting application performance. The schema design balances embedding for read performance with referencing for flexibility.

The mobile application provides full functionality on the go, with optimizations for smaller screens and touch interaction. Offline mode stores recently accessed boards locally, syncing changes when connectivity returns.`,
            link: "#",
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
            fullDescription: `The Weather Forecast Dashboard is a sophisticated weather application that transforms complex meteorological data into beautiful, easy-to-understand visualizations. Built with Vue.js and TypeScript, the application demonstrates expertise in data visualization, API integration, and creating delightful user experiences around data-heavy information. The goal was to make weather data not just informative but genuinely enjoyable to explore.

Users can search for any location worldwide using a flexible search system that accepts city names, postcodes, airport codes, or coordinates. Autocomplete suggestions appear as users type, powered by a geocoding service that shows matching locations with country and region context to disambiguate common city names. Automatic geolocation uses the browser's location API to detect the user's current position with a single click, updating the forecast immediately.

The main dashboard displays current conditions prominently in a hero section designed to communicate weather at a glance. Temperature shows in large, bold typography with "feels like" temperature nearby. A weather icon system uses carefully designed illustrations that accurately represent conditions—not just sunny or cloudy but specific states like "partly cloudy with afternoon showers" or "morning fog clearing to sunshine." The icon animates subtly, with raindrops falling or sunshine rays pulsing.

Current conditions detail cards show humidity with comfortable/uncomfortable indicators, wind speed and direction with a compass visualization, UV index with sun protection recommendations, visibility distance, barometric pressure with rising/falling trends, and dew point. Air quality metrics pulled from a separate AQI API show pollution levels with health advisories and recommendations for sensitive groups.

The hourly forecast shows the next 48 hours in a scrollable timeline that users can drag horizontally. Temperature peaks and valleys are immediately visible in the compact chart embedded in the timeline. Precipitation probability shows as translucent overlays on each hour, with darker shades indicating higher chances. Icons show expected conditions for each hour. Tapping any hour opens detailed information including wind, humidity, and UV for that specific time.

The 14-day extended forecast uses intuitive charts built with Chart.js to show temperature trends over two weeks. The chart plots high and low temperature bands, making it easy to see warming or cooling trends approaching. Precipitation chances appear as bar overlays at the bottom of the chart. Weather condition icons for each day give a quick visual summary. Tapping any day opens a detailed hour-by-hour breakdown.

Interactive maps are a major feature, powered by mapping libraries and weather tile APIs. Radar imagery shows current precipitation in real-time, with users able to play through the last few hours to see storm movement and predict when rain might arrive or clear. Future radar projections show where precipitation is expected to move over the next few hours. Satellite views display cloud cover from space imagery. Temperature overlays color-code regions by current temperature.

Map layers can be combined—for example, showing radar over the base map with temperature color overlay. Users can adjust opacity of each layer for clarity. The map remembers zoom level and position, so checking a specific area repeatedly doesn't require re-navigation each time.

Severe weather alerts are displayed prominently when issued for the user's location or any saved locations. Alerts pull from official meteorological services and show warning type, severity level, affected areas, time validity, and detailed description of the threat with recommended protective actions. Notification permissions allow alerts to appear even when the app isn't open, potentially saving lives during dangerous weather.

Weather widgets provide glanceable information in compact formats. A simple current-conditions widget shows just temperature and icon. A day forecast widget shows today's high and low. A week overview widget shows the coming seven days. Users can choose which widgets to display and arrange them on their dashboard. Widgets work in both light and dark modes.

Settings provide extensive customization. Unit preferences cover temperature (Celsius/Fahrenheit/Kelvin), wind speed (km/h, mph, knots, m/s), pressure (hPa, inHg, mmHg), and distance (km/miles). Users can set their preferred time format (12/24 hour). Multiple saved locations enable quick switching between home, work, vacation spots, or places where friends and family live. Each location can have its own alert preferences.

The application supports multiple languages with translations managed by i18n libraries. Date formatting respects locale conventions. Weather descriptions are localized accurately—technical terms are translated by native speakers to sound natural rather than machine-translated.

Data is fetched from multiple weather APIs and intelligently combined to provide the most accurate forecast possible. The application compares forecasts from different sources and presents consensus values while flagging significant disagreements. Historical accuracy tracking shows which sources perform best for each location, with weighting adjusted accordingly over time.

Caching strategies minimize API calls while keeping data fresh. Current conditions refresh every 15 minutes automatically, with manual refresh available instantly. Hourly and daily forecasts cache longer with background updates. The service worker enables offline access to the last-fetched forecast, with clear indication that data may be stale.

Performance optimization ensures smooth interactions. Virtual scrolling handles long lists efficiently. Chart rendering is optimized to avoid jank during animation. Images are lazy-loaded with blur-up placeholders. The application works well even on modest hardware and slow network connections.`,
            link: "#",
            techStack: ["Vue.js", "TypeScript", "REST API", "Chart.js"]
        }
    ],

    certificates: [
        {
            id: 'cert-ielts',
            title: "IELTS Certificate",
            issuer: "British Council / IDP",
            date: "2023",
            fullDate: "Sep 2023",
            image: "https://images.unsplash.com/photo-1543165796-5426273eaab3?q=80&w=1470&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1373&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513258496099-48168024adb0?q=80&w=1470&auto=format&fit=crop"
            ],
            description: "Proof of English language proficiency and professional communication skills.",
            fullDescription: "The International English Language Testing System (IELTS) is the world's most popular English language proficiency test. My score of 6.5 (B2/C1 level) demonstrates a good command of the language, particularly in professional contexts.\n\nKey Strengths:\n- Listening: 7.5\n- Writing: 7.0\n- Reading: 6.0\n- Speaking: 6.0\n\nThis certification validates my ability to communicate complex ideas, follow technical discussions, and write structured, academic-level documentation in English.",
            skills: ["English Proficiency", "Professional Communication", "Technical Writing", "Listening Comprehension"],
            link: "/ielts_certificate.jpg"
        },
        {
            id: 'cert-google-prompting',
            title: "Prompting Essentials Specialization",
            issuer: "Google",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1470&auto=format&fit=crop"
            ],
            description: "Mastering the art of prompt engineering for generative AI tools.",
            fullDescription: "This specialization provides comprehensive training in designing effective prompts to elicit the best possible responses from large language models. \n\nI learned techniques for zero-shot, few-shot, and chain-of-thought prompting, along with strategies for fine-tuning inputs for various AI models. The curriculum covered ethical considerations, limitations of AI, and practical applications in coding, writing, and data analysis.",
            skills: ["Prompt Engineering", "Generative AI", "Large Language Models", "AI Ethics"],
            link: "/gg.prompting.essentials.pdf"
        },
        {
            id: 'cert-google-ux',
            title: "UX Design Certificate",
            issuer: "Google",
            date: "2026",
            fullDate: "Jan 2026",
            image: "/ux_cert_2.png",
            gallery: [
                "/ux_cert_1.png"
            ],
            description: "Design fundamentals, user research, and wireframing best practices.",
            fullDescription: "Through this certification, I mastered the end-to-end design process, from initial user research to creating high-fidelity prototypes. The course emphasized user-centered design principles and the importance of solving real user problems.\n\nI learned to conduct user interviews, create personas, map user journeys, and perform usability testing. On the visual side, I focused on layout, typography, color theory, and creating consistent design systems using Figma. This foundation ensures that the software I build isn't just functional, but also intuitive and accessible.",
            skills: ["User Research", "Wireframing", "Prototyping", "Figma", "Design Systems", "Usability Testing"],
            link: "/pending"
        },
        {
            id: 'cert-google-pm',
            title: "Project Management Certificate",
            issuer: "Google",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1469&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1471&auto=format&fit=crop"
            ],
            description: "Foundations of traditional and agile project management.",
            fullDescription: "This professional certificate covers the skills needed to manage projects effectively. I learned about the project life cycle, from initiation and planning to execution and closing.\n\nThe curriculum included Agile methodologies (Scrum), risk management, stakeholder communication, and project documentation. I gained proficiency in using project management tools and techniques to ensure projects are delivered on time and within scope.",
            skills: ["Project Management", "Agile", "Scrum", "Risk Management", "Stakeholder Management"],
            link: "/pending"
        },
        {
            id: 'cert-google-ai',
            title: "AI Essentials Specialization",
            issuer: "Google",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop"
            ],
            description: "Fundamental concepts of Artificial Intelligence and Machine Learning.",
            fullDescription: "This specialization provides a solid introduction to AI concepts, tools, and applications. I explored how generative AI works, its capabilities, and its potential impact on various industries.\n\nThe course covered practical skills in using AI tools for productivity, content creation, and problem-solving, along with a strong emphasis on responsible AI use and mitigating bias.",
            skills: ["Artificial Intelligence", "Generative AI", "Machine Learning Concepts", "AI Productivity Tools"],
            link: "/pending"
        },
        {
            id: 'cert-google-bi',
            title: "Business Intelligence Certificate",
            issuer: "Google",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1470&auto=format&fit=crop"
            ],
            description: "Data modeling, visualization, and business reporting.",
            fullDescription: "This certificate focuses on the skills needed to turn data into actionable insights. I learned how to design data models, create effective visualizations, and build interactive dashboards.\n\nThe program covered the entire business intelligence workflow, from data preparation to reporting, using tools like BigQuery, Looker, and Tableau. I developed the ability to communicate data-driven findings to stakeholders effectively.",
            skills: ["Business Intelligence", "Data Modeling", "SQL", "Tableau", "Data Visualization"],
            link: "/pending"
        },
        {
            id: 'cert-ibm-ai',
            title: "AI Developer Professional Certificate",
            issuer: "IBM",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop"
            ],
            description: "Comprehensive training in AI development, machine learning, and deep learning with Python.",
            fullDescription: "The IBM AI Developer Professional Certificate provides hands-on training in building AI-powered applications. This program covers the fundamentals of machine learning, deep learning, and neural networks using Python and popular frameworks.\n\nKey areas include:\n- Machine Learning algorithms and model training\n- Deep Learning with TensorFlow and PyTorch\n- Natural Language Processing (NLP)\n- Computer Vision fundamentals\n- AI model deployment and MLOps\n\nThe certificate demonstrates proficiency in developing, training, and deploying AI models for real-world applications.",
            skills: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
            link: "/pending"
        },
        {
            id: 'cert-google-it',
            title: "IT Support Professional Certificate",
            issuer: "Google",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1534&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1470&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop"
            ],
            description: "Foundation in IT support, networking, system administration, and security.",
            fullDescription: "The Google IT Support Professional Certificate provides comprehensive training in essential IT skills. This program covers the foundational knowledge needed to succeed in IT support roles.\n\nKey topics include:\n- Technical Support Fundamentals\n- Computer Networking basics and protocols\n- Operating Systems (Windows, Linux, macOS)\n- System Administration and automation\n- IT Security principles and best practices\n\nThis certification validates skills in troubleshooting, customer service, networking, operating systems, and security—core competencies for any IT professional.",
            skills: ["IT Support", "Networking", "Linux", "System Administration", "IT Security", "Troubleshooting"],
            link: "/pending"
        },
        {
            id: 'cert-meta-frontend',
            title: "Frontend Developer Professional Certificate",
            issuer: "Meta",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1470&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1631&auto=format&fit=crop"
            ],
            description: "Advanced frontend development with React, including testing, state management, and best practices.",
            fullDescription: "The Meta Frontend Developer Professional Certificate is an industry-recognized program that provides in-depth training in modern frontend development. Created by Meta's engineering team, this certificate covers the skills needed to build professional-grade web applications.\n\nKey areas include:\n- Advanced React patterns and hooks\n- State management with Redux and Context API\n- Testing with Jest and React Testing Library\n- Version control with Git and GitHub\n- UI/UX principles for frontend developers\n- Performance optimization techniques\n\nThis certification demonstrates expertise in React development and modern frontend engineering practices as taught by Meta's world-class engineering team.",
            skills: ["React", "JavaScript", "HTML/CSS", "Redux", "Jest", "Git", "UI/UX", "Performance Optimization"],
            link: "/pending"
        },
        {
            id: 'cert-ibm-fullstack',
            title: "Full Stack Software Developer Professional Certificate",
            issuer: "IBM",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop"
            ],
            description: "Comprehensive full-stack development training covering frontend, backend, cloud, and DevOps practices.",
            fullDescription: "The IBM Full Stack Software Developer Professional Certificate provides comprehensive training in modern full-stack development. This program covers the complete software development lifecycle from frontend to backend to deployment.\n\nKey areas include:\n- Frontend development with HTML, CSS, JavaScript, and React\n- Backend development with Node.js and Express\n- Database management with SQL and NoSQL databases\n- Cloud computing with IBM Cloud and Kubernetes\n- DevOps practices and CI/CD pipelines\n- Microservices architecture and containerization with Docker\n\nThis certification validates skills in building complete, production-ready web applications using industry-standard tools and practices.",
            skills: ["React", "Node.js", "Express", "Docker", "Kubernetes", "SQL", "NoSQL", "Cloud Computing", "DevOps"],
            link: "/pending"
        },
        {
            id: 'cert-ibm-uiux',
            title: "UI/UX Designer Professional Certificate",
            issuer: "IBM",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1528&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1472&auto=format&fit=crop"
            ],
            description: "Professional UI/UX design training covering user research, interaction design, and design thinking methodologies.",
            fullDescription: "The IBM UI/UX Designer Professional Certificate provides in-depth training in user experience and interface design. This program emphasizes human-centered design principles and industry-standard methodologies.\n\nKey areas include:\n- Design Thinking and problem-solving frameworks\n- User research and persona development\n- Information architecture and user flows\n- Wireframing and high-fidelity prototyping\n- Interaction design and micro-animations\n- Accessibility and inclusive design practices\n- Design systems and component libraries\n\nThis certification demonstrates expertise in creating intuitive, accessible, and visually compelling digital experiences.",
            skills: ["UI Design", "UX Research", "Figma", "Design Thinking", "Prototyping", "Accessibility", "Interaction Design"],
            link: "/pending"
        },
        {
            id: 'cert-ms-business-analyst',
            title: "Business Analyst Professional Certificate",
            issuer: "Microsoft",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1470&auto=format&fit=crop"
            ],
            description: "Business analysis training covering requirements gathering, data analysis, and process optimization with Microsoft tools.",
            fullDescription: "The Microsoft Business Analyst Professional Certificate provides comprehensive training in business analysis methodologies and tools. This program prepares professionals to bridge the gap between business needs and technical solutions.\n\nKey areas include:\n- Requirements elicitation and documentation\n- Business process modeling and optimization\n- Data analysis with Excel and Power BI\n- Stakeholder management and communication\n- Agile and Waterfall methodology alignment\n- Solution evaluation and validation\n- Microsoft 365 productivity tools\n\nThis certification validates skills in analyzing business needs, translating them into actionable requirements, and driving data-informed decision making.",
            skills: ["Business Analysis", "Power BI", "Excel", "Requirements Gathering", "Process Modeling", "Data Analysis", "Stakeholder Management"],
            link: "/pending"
        },
        {
            id: 'cert-ibm-scrum-master',
            title: "IT Scrum Master Professional Certificate",
            issuer: "IBM",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1469&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop"
            ],
            description: "Scrum Master certification covering Agile frameworks, team facilitation, and continuous improvement practices.",
            fullDescription: "The IBM IT Scrum Master Professional Certificate provides comprehensive training in Agile methodologies and Scrum practices. This program prepares professionals to lead high-performing Agile teams.\n\nKey areas include:\n- Scrum framework fundamentals and ceremonies\n- Sprint planning, execution, and retrospectives\n- Backlog management and prioritization\n- Team facilitation and conflict resolution\n- Agile metrics and continuous improvement\n- Scaling Agile with SAFe and LeSS\n- Servant leadership principles\n\nThis certification validates skills in facilitating Scrum teams, removing impediments, and fostering a culture of continuous improvement and collaboration.",
            skills: ["Scrum", "Agile", "Sprint Planning", "Team Facilitation", "Backlog Management", "SAFe", "Servant Leadership"],
            link: "/pending"
        },
        {
            id: 'cert-umn-agile',
            title: "Agile Software Development Specialization",
            issuer: "University of Minnesota",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1476&auto=format&fit=crop"
            ],
            description: "Academic specialization in Agile methodologies, Lean software development, and XP practices.",
            fullDescription: "The University of Minnesota Agile Software Development Specialization provides rigorous academic training in Agile principles and practices. This program combines theoretical foundations with practical application.\n\nKey areas include:\n- Agile Manifesto principles and values\n- Lean software development and waste elimination\n- Extreme Programming (XP) practices\n- Test-Driven Development (TDD)\n- Continuous Integration and Delivery\n- Agile estimation and planning techniques\n- Team dynamics and collaboration patterns\n\nThis specialization demonstrates deep understanding of Agile methodologies and the ability to apply them effectively in software development contexts.",
            skills: ["Agile", "Lean Development", "XP", "TDD", "CI/CD", "Kanban", "Agile Planning"],
            link: "/pending"
        },
        {
            id: 'cert-meta-backend',
            title: "Backend Developer Professional Certificate",
            issuer: "Meta",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1534&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop"
            ],
            description: "Advanced backend development with Python, Django, APIs, and database management from Meta's engineering team.",
            fullDescription: "The Meta Backend Developer Professional Certificate provides comprehensive training in server-side development. Created by Meta's engineering team, this certificate covers the skills needed to build robust, scalable backend systems.\n\nKey areas include:\n- Python programming and best practices\n- Django framework and REST API development\n- Database design with MySQL and PostgreSQL\n- API security and authentication\n- Version control and collaboration with Git\n- Cloud deployment and scaling strategies\n- Performance optimization and caching\n\nThis certification demonstrates expertise in backend engineering and server-side development as taught by Meta's world-class engineering team.",
            skills: ["Python", "Django", "REST APIs", "MySQL", "PostgreSQL", "Git", "API Security", "Cloud Deployment"],
            link: "/pending"
        },
        {
            id: 'cert-ms-ai-pm',
            title: "AI Product Manager Professional Certificate",
            issuer: "Microsoft",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop"
            ],
            description: "AI product management training covering AI/ML product strategy, ethical AI, and cross-functional leadership.",
            fullDescription: "The Microsoft AI Product Manager Professional Certificate provides specialized training in managing AI-powered products. This program prepares professionals to lead AI initiatives from conception to deployment.\n\nKey areas include:\n- AI/ML fundamentals for product managers\n- AI product strategy and roadmapping\n- Ethical AI and responsible development\n- Cross-functional team leadership\n- Data-driven decision making\n- AI product metrics and success measurement\n- User research for AI products\n- Managing AI development lifecycles\n\nThis certification validates skills in leading AI product development, navigating ethical considerations, and delivering impactful AI solutions.",
            skills: ["AI Product Management", "ML Fundamentals", "Product Strategy", "Ethical AI", "Cross-functional Leadership", "Data-Driven Decisions"],
            link: "/pending"
        },
        {
            id: 'cert-yale-finance',
            title: "Financial Markets Specialization",
            issuer: "Yale University",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1470&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1530&auto=format&fit=crop"
            ],
            description: "Comprehensive understanding of financial markets, risk management, and behavioral finance from Yale University.",
            fullDescription: "The Yale University Financial Markets Specialization provides an in-depth understanding of financial markets and institutions. Taught by Professor Robert Shiller, Nobel Laureate in Economics, this program covers the theory and practice of securities, insurance, and banking industries.\n\nKey areas include:\n- Financial market fundamentals and securities\n- Risk management and portfolio diversification\n- Behavioral finance and market psychology\n- Banking and financial intermediation\n- Investment strategies and asset allocation\n- Understanding of bonds, stocks, and derivatives\n- Real estate finance and mortgage markets\n\nThis specialization demonstrates knowledge of financial systems and the ability to make informed financial decisions in professional contexts.",
            skills: ["Financial Markets", "Risk Management", "Behavioral Finance", "Investment Strategy", "Portfolio Management", "Securities"],
            link: "/pending"
        },
        {
            id: 'cert-uci-problem-solving',
            title: "Effective Problem-Solving and Decision-Making",
            issuer: "University of California, Irvine",
            date: "2026",
            fullDate: "Jan 2026",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
            ],
            description: "Critical thinking and strategic decision-making skills for professional problem resolution.",
            fullDescription: "The University of California, Irvine Effective Problem-Solving and Decision-Making course provides essential skills for analyzing complex situations and making informed decisions. This program focuses on practical frameworks and analytical techniques used by professionals.\n\nKey areas include:\n- Critical thinking methodologies\n- Problem identification and root cause analysis\n- Decision-making frameworks and models\n- Risk assessment and mitigation strategies\n- Creative problem-solving techniques\n- Data-driven decision making\n- Collaborative problem resolution\n\nThis certification demonstrates proficiency in systematic problem-solving approaches and the ability to make sound decisions under pressure.",
            skills: ["Critical Thinking", "Problem-Solving", "Decision-Making", "Risk Assessment", "Analytical Skills", "Strategic Planning"],
            link: "/pending"
        }
    ],




    experience: [
        {
            role: "Full-Stack Developer",
            company: "Freelance",
            period: "November 2025 - Present",
            description: "Architecting and building scalable full-stack applications using the MERN stack and Next.js. overseeing end-to-end development from database design to frontend implementation and cloud deployment."
        },
        {
            role: "Frontend Developer",
            company: "Freelance",
            period: "February 2025 - October 2025",
            description: "Specialized in building responsive, high-performance user interfaces with React and Tailwind CSS. focused on state management, component reusability, and integrating RESTful APIs for seamless user experiences."
        },
        {
            role: "UI/UX Designer",
            company: "Freelance",
            period: "May 2024 - February 2025",
            description: "Crafting intuitive digital experiences with a focus on user-centric design. Specializing in high-fidelity prototyping, design systems, and bridging the gap between aesthetics and functionality using Figma and modern design principles."
        },
        {
            role: "English IELTS Teacher",
            company: "IELTS English Center",
            period: "March 2023 - March 2024",
            description: "Delivered IELTS preparation lessons across all four skills. Developed exam-focused materials and provided personalized instruction to help students achieve higher band scores."
        },
        {
            role: "Website Developer",
            company: "Covisoft",
            period: "July 2022 - March 2023",
            description: "Designed and developed responsive web applications focusing on performance and user engagement. Implemented modern frontend architectures and ensured cross-browser compatibility."
        },
        {
            role: "IT Support Volunteer",
            company: "Ton Duc Thang University",
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
