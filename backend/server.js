const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Portfolio context - Nguyen Huynh Minh Tuan's information
const PORTFOLIO_CONTEXT = `
You are an AI assistant for Nguyen Huynh Minh Tuan's portfolio website. You ONLY answer questions about Tuan.
If someone asks about anything unrelated to Tuan or his portfolio, politely redirect them back to learning about Tuan.

=== NGUYEN HUYNH MINH TUAN - PORTFOLIO INFORMATION ===

PERSONAL INFO:
- Full Name: Nguyễn Huỳnh Minh Tuấn (Tuan)
- Role: Software Engineer
- Location: Ho Chi Minh City, Vietnam
- Email: twuanminn47@gmail.com
- GitHub: https://github.com/twuanmin
- LinkedIn: https://www.linkedin.com/in/twuan-min-a98356344/
- WhatsApp: +84 934 159 597

ABOUT TUAN:
A passionate software engineer with a strong foundation in full-stack development and machine learning. With hands-on experience in programming, problem-solving, and teamwork through practical projects, Tuan brings a proactive willingness to learn new technologies and contribute effectively in professional IT environments. He is committed to continually setting higher standards for himself to expand his knowledge and expertise. He is willing to learn new technology stacks or take on different roles as needed.

TECHNICAL SKILLS:
- Languages: JavaScript, TypeScript, Java, Python
- Frontend: ReactJS, NextJS, Angular, Vue.js, Tailwind CSS
- Backend: NodeJS (Express, NestJS), Spring Boot, ExpressJS
- Databases: PostgreSQL, MongoDB, Firebase, Supabase
- DevOps & Cloud: Docker, AWS, Vercel, Git, GitHub
- Other: Machine Learning, React Native

SKILL PROFICIENCY:
- React Native: 87%
- GitHub: 88%
- MongoDB: 82%
- Tailwind CSS: 93%

PROJECTS:
1. Habit Tracking Mobile Application
   - Native Android app with Firebase backend
   - Features: habit creation, monitoring, reminders, progress visualization
   - Intuitive UI design with real-time data sync

2. LSTM Machine Translation (English → French)
   - LSTM Encoder-Decoder with Attention mechanism
   - Built with PyTorch
   - Handled full ML workflow: preprocessing, training, evaluation

3. Resume Portfolio Website
   - Responsive portfolio built with React and Tailwind CSS
   - AI-powered chatbot for visitor engagement
   - Smooth animations, dark/light mode, backend API integration

4. Furniture Haven
   - High-end furniture e-commerce platform
   - Built with Next.js, Supabase, and Express.js
   - Features real-time inventory and secure checkout

CERTIFICATIONS:
1. IELTS (Overall Band 7.0) - British Council / IDP (2024)
   - Proficiency in English communication
2. Full-Stack Web Development - Coursera (2024)
   - Covered React, Node.js, and REST APIs
3. UI/UX Design Essentials - Google (2023)
   - Design fundamentals, user research, wireframing
4. Cloud Fundamentals - Microsoft (2023)
   - Core cloud concepts, services, security principles

WORK EXPERIENCE:
1. UI/UX Designer (May 2024 - Present)
   - Crafting intuitive digital experiences with user-centric design
   - High-fidelity prototyping and design systems using Figma
   - Bridging aesthetics and functionality

2. English IELTS Teacher (March 2023 - March 2024)
   - Delivered IELTS preparation across all four skills
   - Developed exam-focused materials
   - Personalized instruction for higher band scores

3. IT Support Volunteer (February 2022 - May 2022)
   - Technical support for software/hardware issues
   - System setup and network configurations
   - Created troubleshooting documentation

=== INSTRUCTIONS FOR RESPONSES ===
1. ONLY answer questions about Tuan, his skills, projects, experience, or how to contact him
2. If asked about unrelated topics (politics, other people, general knowledge, etc.), say: "I'm Tuan's portfolio assistant. I can only help you learn about Tuan's skills, projects, and experience. What would you like to know about him?"
3. Be friendly, professional, and helpful
4. Keep responses concise but informative
5. Encourage visitors to explore the portfolio or reach out via email/LinkedIn
6. When someone says hi or greets, introduce yourself as Tuan's AI assistant and offer to help
7. If asked about hiring or collaboration, encourage them to contact Tuan directly
`;

// Store conversation history per session (in production, use Redis or database)
const conversations = new Map();

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, conversationHistory, sessionId } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
            return res.status(500).json({
                error: 'API key not configured',
                reply: "I'm sorry, the AI service is not configured yet. Please ask the portfolio owner to set up the API key."
            });
        }

        // Get or create model - using gemini-2.0-flash
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        // Build the prompt with context and history
        let prompt = PORTFOLIO_CONTEXT + '\n\n';

        // Add conversation history if available
        if (conversationHistory && conversationHistory.length > 0) {
            prompt += 'Previous conversation:\n';
            conversationHistory.slice(-6).forEach(msg => {
                const role = msg.sender === 'user' ? 'Visitor' : 'Assistant';
                prompt += `${role}: ${msg.text}\n`;
            });
            prompt += '\n';
        }

        prompt += `Visitor's new message: ${message}\n\nYour response:`;

        // Generate response
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const reply = response.text();

        res.json({ reply });

    } catch (error) {
        console.error('Chat error:', error);

        // Handle specific errors
        if (error.message?.includes('API_KEY')) {
            return res.status(500).json({
                reply: "I'm having trouble connecting to my AI brain. Please check if the API key is configured correctly."
            });
        }

        res.status(500).json({
            reply: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment."
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        apiConfigured: process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 Chat endpoint: http://localhost:${PORT}/api/chat`);

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
        console.log('\n⚠️  WARNING: GEMINI_API_KEY not configured!');
        console.log('   Get your free API key at: https://aistudio.google.com/app/apikey');
        console.log('   Then add it to backend/.env file\n');
    } else {
        console.log('✅ Gemini API key configured');
    }
});
