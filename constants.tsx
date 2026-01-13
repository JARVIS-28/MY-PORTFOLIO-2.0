import React from 'react';
import { Github, Linkedin, Mail, Globe, Terminal, Cpu, Database, Layout } from 'lucide-react';
import { Project, Skill, Experience, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Janvii R V",
  realName: "Janvii R V",
  role: "Computer Science Engineer",
  bio: "Software Engineering focused Computer Science undergraduate with experience building backend APIs, scalable task queues, and Spark-based data pipelines. Skilled in Python, Java, SQL, and distributed systems, with a passion for scalable backend systems and AI.",
  email: "janviirv@gmail.com",
  location: "Bangalore, India",
  github: "https://github.com/JARVIS-28",
  website: "https://github.com/JARVIS-28" 
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: PERSONAL_INFO.github,
    icon: <Github className="w-5 h-5" />
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/janvii-rv",
    icon: <Linkedin className="w-5 h-5" />
  },
  {
    platform: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: <Mail className="w-5 h-5" />
  }
];

export const SKILLS: Skill[] = [
  // Core & Backend (From Resume)
  { name: "Python", level: 95, category: "Core" },
  { name: "Java", level: 85, category: "Core" },
  { name: "SQL", level: 80, category: "Backend" },
  { name: "Flask", level: 85, category: "Backend" },
  { name: "Apache Spark", level: 75, category: "Backend" },
  { name: "Kafka", level: 75, category: "Backend" },
  { name: "REST APIs", level: 90, category: "Backend" },

  // Frontend & Tools (From Projects & Resume)
  { name: "React.js", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "Electron", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Linux", level: 80, category: "Tools" },
  { name: "GenAI / RAG", level: 80, category: "Core" },
];

export const PROJECTS: Project[] = [
  {
    title: "Group Article Recommendation System",
    description: "Ongoing Research: Engineered a group-based article recommendation engine using a Knowledge Graph. Applied metaheuristic optimization to rank articles for multiple users, improving shared interest coverage.",
    tags: ["Research", "Python", "Knowledge Graph", "Optimization"],
    github: "https://github.com/JARVIS-28",
    image: "https://picsum.photos/seed/research_graph/800/600"
  },
  {
    title: "Pixel Art Converter",
    description: "Electron desktop app converting images to pixel art with multiple styles (ASCII, Mosaic, Cartoon). Features live preview, local file handling, and custom pixelation algorithms.",
    tags: ["Electron", "Node.js", "Canvas API", "Desktop App"],
    github: "https://github.com/JARVIS-28/Pixel-Art-Converter",
    image: "https://picsum.photos/seed/pixelart/800/600"
  },
  {
    title: "Playlist Generation (RAG)",
    description: "AI-powered emotional playlist generator. Uses BERT for emotion detection, ChromaDB for song retrieval, and Llama 3.2 via Ollama to generate empathetic responses and playlists based on diary entries.",
    tags: ["GenAI", "RAG", "ChromaDB", "Ollama", "React", "Python"],
    github: "https://github.com/JARVIS-28/EMOTION_BASED_PLAYLIST_GENERATOR",
    image: "https://picsum.photos/seed/playlist/800/600"
  },
  {
    title: "Infinite Dataverse Search Engine",
    description: "Modern search engine integrating Reddit and Web sources. Features real-time results, TF-IDF ranking, source reliability weighting, and a responsive React frontend with Flask backend.",
    tags: ["React", "Flask", "NLP", "TF-IDF", "Redis"],
    github: "https://github.com/JARVIS-28/Search-Engine",
    image: "https://picsum.photos/seed/searchengine/800/600"
  },
  {
    title: "Recruitment Analytics Dashboard",
    description: "Centralized platform for optimizing recruitment. manages job postings, applications, and interviews with role-based access for recruiters and candidates, plus comprehensive analytics.",
    tags: ["Full Stack", "SQL", "Analytics", "Management"],
    github: "https://github.com/JARVIS-28/Recruitment-Analysis-Dashboard",
    image: "https://picsum.photos/seed/dashboard_rec/800/600"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "GrayStag",
    period: "Nov 2025 – Dec 2025",
    description: "Developed REST endpoints and SQL queries for internal web modules. Refactored validation logic reducing code duplication. Collaborated in an agile team to ship monthly releases."
  },
  {
    role: "Marketing Team Member",
    company: "CodeChef PESU ECC",
    period: "Sept 2023 – Apr 2025",
    description: "Promoted coding contests and hackathons through online campaigns and on-campus events, increasing participation from first-year students."
  }
];

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
