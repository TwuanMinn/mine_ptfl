const { GoogleGenerativeAI } = require('@google/generative-ai');

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

CERTIFICATIONS:
1. Full-Stack Web Development - Coursera (2024)
   - Covered React, Node.js, and REST APIs
2. UI/UX Design Essentials - Google (2023)
   - Design fundamentals, user research, wireframing
3. Cloud Fundamentals - Microsoft (2023)
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

exports.handler = async function (event, context) {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { message, conversationHistory } = JSON.parse(event.body);

        if (!message) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Message is required' }) };
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: 'API key not configured',
                    reply: "I'm sorry, the AI service is not configured yet. Please ask the portfolio owner to set up the API key."
                })
            };
        }

        // Initialize Gemini AI
        const genAI = new GoogleGenerativeAI(apiKey);
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

        return {
            statusCode: 200,
            body: JSON.stringify({ reply }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

    } catch (error) {
        console.error('Chat error:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                reply: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment.",
                error: error.message
            })
        };
    }
};
