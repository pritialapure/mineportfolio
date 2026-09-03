// Skill categories. Icon names map to lucide-react components in SkillCategory.jsx.

export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming',
    icon: 'Code2',
    items: ['C++', 'JavaScript', 'Python', 'SQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'LayoutTemplate',
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'bcrypt'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: 'Database',
    items: ['MongoDB', 'MongoDB Atlas', 'SQL', 'SQLite'],
  },
  {
    id: 'ai',
    label: 'AI / GenAI',
    icon: 'Sparkles',
    items: [
      'Google Gemini API',
      'n8n - ai automation',
      'LangChain',
      'RAG',
      'ChromaDB',
      'Hugging Face Embeddings',
      'Prompt Engineering',
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Deployment',
    icon: 'Wrench',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Vercel'],
  },
]
