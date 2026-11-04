type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Multi-Agent Execution Platform',
    description:
      'A production-ready system for autonomous agent execution with sandboxed code execution, execution tracing, and comprehensive reporting. Agents plan complex tasks, execute code in isolated Docker containers, and generate artifacts—all with complete visibility into every step',
    link: 'https://github.com/Nebiyou-x/Multi-Agent',
    video:
      'https://github.com/Nebiyou-x/Multi-Agent',
    id: 'project1',
  },
  
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  
  {
    company: 'Addis Ababa University',
    title: 'Undergraduate Research Assistant',
    start: 'Sep. 2023',
    end: 'Jan. 2024',
    link: '',
    id: 'work2',
  },
  {
    company: 'Kifiya FinTech',
    title: 'Quality Assurance and DevOps ',
    start: 'Mar. 2025',
    end: 'Aug. 2025',
    link: 'https://kifiya.com/',
    id: 'work3',
  },
  {
    company: 'StockMarket.et',
    title: 'AI Chatbot Developer',
    start: 'Mar. 2025',
    end: 'July. 2025',
    link: 'https://www.stockmarket.et/',
    id: 'work4',
  },
  {
    company: 'EfuyeGela Tech Consultants ',
    title: 'Full Stack Web Developer',
    start: 'Jun. 2025',
    end: 'Sep. 2025',
    link: '',
    id: 'work5',
  },
  {
    company: 'TenaMart',
    title: 'Full Stack Web Developer',
    start: 'Jun. 2025',
    end: 'Feb. 2026',
    link: 'https://tenamart.et/',
    id: 'work6',
  },
  {
    company: 'Lersha Green Agro',
    title: 'Full Stack AI Developer ',
    start: 'Mar.2026',
    end: 'Present',
    link: 'https://lersha.com/',
    id: 'work6',
  },
];


export const BLOG_POSTS: BlogPost[] = [
  
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Nebiyou-x',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/nebiyou23',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/neba/',
  },
  {
    label: 'Resume',
    link: 'https://drive.google.com/file/d/1pBML2FSgks-8yJvxqOM5qWfHOPb-cpgr/view?usp=drive_link',
  },
]

export const EMAIL = 'Nebiyoutad@gmail.com'
