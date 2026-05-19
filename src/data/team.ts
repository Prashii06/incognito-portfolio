export type SocialLinks = {
  github?: string
  linkedin?: string
  twitter?: string
  email?: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  roleLabel: string
  tag: string
  isTeamLeader?: boolean
  motto: string
  shortBio: string
  fullBio: string
  stack: string[]
  accent: string
  photo: string
  avatarInitials: string
  resumeUrl: string
  social: SocialLinks
}

export const TEAM_MOTTO =
  'We vanish into the dark to build what the world isn\'t ready to see.'

export const TEAM_INTRO =
  'Team Incognito is a four-person product studio operating at the intersection of design, AI, and infrastructure. We prototype in the open, ship with discipline, and treat every interface like gallery work. Our current focus is BroFocus — a calm execution companion built for people who value depth over noise.'

/** Team leader inbox for contact form submissions */
export const TEAM_LEADER_EMAIL = 'prachi@incognito.dev'

export const teamMembers: TeamMember[] = [
  {
    id: 'prachi',
    name: 'Prachi Gupta',
    role: 'Product & Full-Stack Lead',
    roleLabel: 'Design Lead',
    tag: 'Vision',
    isTeamLeader: true,
    motto: 'Visual clarity is the antidote to mental noise.',
    shortBio:
      'Leads product vision and interface architecture for BroFocus — translating complex workflows into gallery-grade execution environments.',
    fullBio:
      'Prachi leads Team Incognito and full-stack delivery for BroFocus — from wireframes in Stitch to production-ready flows. She champions bold UX, crisp APIs, and teams that move with intention.',
    stack: ['React', 'TypeScript', 'Node.js', 'Figma', 'PostgreSQL'],
    accent: '#c43d6e',
    photo: '/team/prachi.jpg',
    avatarInitials: 'PG',
    resumeUrl: '/resumes/prachi-gupta.pdf',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:prachi@incognito.dev',
    },
  },
  {
    id: 'glaixy',
    name: 'Glaixy',
    role: 'AI & Backend Engineer',
    roleLabel: 'Engine Lead',
    tag: 'Intelligence',
    motto: 'Models serve people — never the reverse.',
    shortBio: 'Builds the intelligence layer: recommendations, focus scoring, and smart nudges.',
    fullBio:
      'Glaixy designs BroFocus’s AI backbone — habit inference, focus sessions, and privacy-first personalization. He obsesses over latency, evals, and explainable outputs users can trust.',
    stack: ['Python', 'FastAPI', 'PyTorch', 'Redis', 'Docker'],
    accent: '#1f8a82',
    photo: '/team/glaixy.jpg',
    avatarInitials: 'GM',
    resumeUrl: '/resumes/glaixy.pdf',
    social: {
      github: 'https://github.com/glaixy',
      linkedin: 'https://www.linkedin.com/in/glaixy-1051a9326?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
  },
  {
    id: 'sneha',
    name: 'Sneha Rao',
    role: 'Design Systems & Frontend',
    roleLabel: 'UX Lead',
    tag: 'Craft',
    motto: 'Every pixel earns its place.',
    shortBio: 'Shapes the vibrant UI, motion language, and component system for BroFocus.',
    fullBio:
      'Sneha translates Stitch designs into living interfaces — spring physics, 3D depth, and accessible contrast. She owns the design tokens, grid rhythm, and micro-interactions that make Incognito feel alive.',
    stack: ['React', 'Framer Motion', 'CSS', 'Storybook', 'Stitch'],
    accent: '#6b4fc4',
    photo: '/team/sneha.jpg',
    avatarInitials: 'SR',
    resumeUrl: '/resumes/sneha-rao.pdf',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'dev',
    name: 'Dev Patel',
    role: 'DevOps & Platform',
    roleLabel: 'Platform Lead',
    tag: 'Reliability',
    motto: 'Calm infra, bold launches.',
    shortBio: 'Keeps BroFocus fast, secure, and deployable from day one to scale.',
    fullBio:
      'Dev runs CI/CD, observability, and cloud architecture so the team ships fearlessly. He balances cost, uptime, and developer experience — the invisible engine behind every green deploy.',
    stack: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
    accent: '#b8922a',
    photo: '/team/dev.jpg',
    avatarInitials: 'DP',
    resumeUrl: '/resumes/dev-patel.pdf',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:dev@incognito.dev',
    },
  },
]
