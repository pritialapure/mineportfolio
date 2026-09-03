// Data-driven project structure:
// title, tagline, description, problemSolved, features[], tech[],
// githubUrl, liveUrl, image, featured, status
//
// githubUrl / liveUrl are left blank ('') where a verified link has not
// been supplied yet — components render a "link pending" placeholder
// instead of a fabricated URL.

export const projects = [
  {
  id: 'careerpilot-ai',
  title: 'CareerPilot AI',
  tagline: 'AI-powered internship CRM',
  description:
    'An AI-powered internship CRM that parses a resume, discovers and scores internship opportunities — including ones pulled automatically from college placement emails — tailors a resume per job, and tracks every application through a kanban board.',
  problemSolved:
    'Job hunting means juggling scattered opportunities, a resume that never quite matches the job description, and applications tracked nowhere in particular. CareerPilot AI centralizes discovery, tailors the resume per role, and tracks the whole pipeline in one place.',
  features: [
    'Resume upload & parsing (skills, projects, experience, education)',
    'Internship discovery: curated catalog + live feed + Gmail-based AI automation via n8n',
    'Resume-to-internship matching with skill-gap analysis',
    'AI-tailored resumes with professional PDF export, per job description',
    'Application tracker (kanban board) with notifications',
    'Analytics dashboard',
  ],
  tech: [
    'React',
    'Vite',
    'Tailwind CSS',
    'React Query',
    'Zustand',
    'Node.js',
    'Express',
    'MongoDB',
    'JWT',
    'Ollama',
    'Gemini',
    'n8n',
  ],
  githubUrl: 'https://github.com/pritialapure/copilot',
  liveUrl: 'https://copilot-inky-tau.vercel.app/',
  featured: true,
  status: 'Live',
},
{
  id: 'ai-finance-tracker',
  title: 'AI Finance Tracker',
  tagline: 'Full-stack personal finance management app',
  description:
    'A full-stack finance app for tracking income and expenses, managing budgets, and visualizing financial activity through interactive charts.',
  problemSolved:
    'Personal finance tracking is easy to abandon when it\u2019s tedious. This app pairs simple entry flows with clear visual insights so patterns in spending and budgeting are easy to see at a glance.',
  features: [
    'User registration with secure JWT-based authentication',
    'Add and manage income and expense transactions',
    'Budget management with financial insights',
    'Interactive data visualization with Recharts',
    'Centralized state management using Redux Toolkit',
    'Protected routes and RESTful API integration',
  ],
  tech: [
    'React',
    'Vite',
    'React Router',
    'Redux Toolkit',
    'Axios',
    'Tailwind CSS',
    'Recharts',
    'Node.js',
    'Express',
    'MongoDB',
    'Mongoose',
    'JWT',
  ],
  githubUrl: 'https://github.com/pritialapure/ai-finance-tracker',
  liveUrl: 'https://ai-finance-tracker-eosin.vercel.app',
  featured: true,
  status: 'Live',
},
  {
    id: 'docuchat-ai',
    title: 'DocuChat AI',
    tagline: 'RAG-based PDF assistant',
    description:
      'A retrieval-augmented generation assistant that ingests PDF documents and answers questions grounded in their content.',
    problemSolved:
      'Reading long documents to find one answer is slow. DocuChat AI ingests a PDF, retrieves the most relevant passages for a question, and lets an LLM answer using that grounded context.',
    features: [
      'Document ingestion pipeline',
      'Embedding generation and vector storage',
      'Retrieval of relevant passages',
      'LLM-assisted question answering',
    ],
    tech: ['LangChain', 'ChromaDB', 'Hugging Face Embeddings', 'Google Gemini API', 'Python'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    status: 'In development',
  },
  {
    id: 'ai-study-assistant',
    title: 'AI Study Assistant',
    tagline: 'AI-powered learning assistant',
    description:
      'An AI-powered assistant for studying and revision, built around prompt engineering and applied GenAI workflows.',
    problemSolved:
      'Turning raw notes into something studyable takes time. This assistant helps structure and explain study material through guided AI interactions.',
    features: ['Prompt-engineered study workflows', 'AI-assisted explanations'],
    tech: ['Google Gemini API', 'Prompt Engineering', 'React'],
    githubUrl: 'https://github.com/pritialapure/AiStudyAssistant',
    liveUrl: 'https://huggingface.co/spaces/priti1704/AIStudyAssistant',
    featured: false,
    status: 'In development',
  },
  {
    id: 'twitter-backend-clone',
    title: 'Twitter Backend Clone',
    tagline: 'Backend-focused social platform API',
    description:
      'A backend-only project demonstrating server-side architecture for a social platform, including authentication and REST APIs.',
    problemSolved:
      'A focused exercise in backend architecture: modeling users, posts, and relationships, and securing access with token-based authentication.',
    features: [
      'REST API design',
      'JWT authentication',
      'Server-side data modeling with SQLite',
    ],
    tech: ['Node.js', 'Express', 'SQLite', 'JWT', 'REST APIs'],
    githubUrl: 'https://github.com/pritialapure/twitter-backend',
    liveUrl: '',
    featured: false,
    status: 'In development',
  },
  {
  id: 'ai-learning-path-generator',
  title: 'AI Learning Path Generator',
  tagline: 'Personalized day-wise learning roadmaps, automated end to end',
  description:
    'An AI-powered n8n workflow that turns a learning goal into a personalized day-wise curriculum, complete with sourced resources, a shareable Google Doc, and scheduled Google Calendar sessions.',
  problemSolved:
    'Turning a vague goal like "learn LangChain in 30 days" into a concrete, scheduled plan usually takes hours of manual research. This workflow automates the research, planning, documentation, and scheduling into one pipeline.',
  features: [
    'AI-generated day-wise curriculum using Mistral AI',
    'Automated learning resource discovery via SerpAPI',
    'Auto-generated Google Doc with the full roadmap',
    'Calendar events scheduled automatically for each session',
    'Returns a shareable Google Doc link on completion',
  ],
  tech: ['n8n', 'Mistral AI', 'Google Docs API', 'Google Calendar API', 'MCP Client Tool', 'SerpAPI'],
  githubUrl: 'https://github.com/pritialapure/learning-path-generator',
  liveUrl: '',
  featured: true,
  status: 'working',
},
{
  id: 'ai-podcast-generator',
  title: 'AI Podcast Generator',
  tagline: 'Turns any topic into a fully narrated podcast',
  description:
    'An automated workflow that converts a topic into a complete narrated podcast — from AI-generated script to realistic voice audio — triggered through a webhook and playable or downloadable from the UI.',
  problemSolved:
    'Producing a podcast normally means writing a script and separately recording narration. This system automates both steps: a topic goes in, and a ready-to-play audio file comes out.',
  features: [
    'AI-generated podcast scripts from a topic input',
    'Realistic voice narration via Murf.ai text-to-speech',
    'Real-time audio generation triggered by webhooks',
    'In-browser audio playback with a download option',
  ],
  tech: ['Lovable', 'n8n', 'Murf.ai', 'REST APIs', 'Webhooks'],
  githubUrl: 'https://github.com/pritialapure/podcast-generator',
  liveUrl: 'https://happy-hear-hub.lovable.app/',
  featured: true,
  status: 'Live',
},
]
