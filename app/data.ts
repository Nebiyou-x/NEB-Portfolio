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
    name: 'Ethiopian Premier League Agent',
    description:
      'Predicted Ethiopian Premier League match winners with 82 percent precision using team momentum features',
    link: 'https://github.com/Nebiyou-x/Epl-machine-learning',
    video:
      'https://github.com/Nebiyou-x/Epl-machine-learning',
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
    title: 'Quality Assurance and DevOps Intern',
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
    title: 'Full Stack Web Developer Intern',
    start: 'Jun. 2025',
    end: 'Sep. 2025',
    link: '',
    id: 'work5',
  },
  {
    company: 'TenaMart',
    title: 'Full Stack Web Developer',
    start: 'Jun. 2025',
    end: 'Present',
    link: 'https://tenamart.et/',
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
    link: 'https://drive.google.com/file/d/1ibPcl4NdbNE-UwSKzkfEI2jQC5tZlTVh/view?usp=sharing',
  },
]

export const EMAIL = 'Nebiyoutad@gmail.com'
