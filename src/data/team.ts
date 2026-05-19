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
  'We operate entirely within the blindspot of mainstream innovation, we engineer the impossible from the shadows of the tech world. Combining ghost developers who deploy code in absolute silence with invisible designers crafting seamless, untraceable experiences, we orchestrate our breakthroughs in total secrecy—remaining completely undetected until the exact moment we change everything.'

/** Team leader inbox for contact form submissions */
export const TEAM_LEADER_EMAIL = 'prachi@incognito.dev'

export const teamMembers: TeamMember[] = [
  {
    id: 'prachi',
    name: 'Prachi Gupta',
    role: 'Backend & DevOps Engineer',
    roleLabel: 'Team Lead',
    tag: 'Backend & DevOps',
    isTeamLeader: true,
    motto: 'Do not race against others; Race against the absolute limit and plan on winning.',
    shortBio: 
  'I orchestrate the invisible infrastructure and core engine for BroFocus, translating complex real-time workflows into flawless, high-octane execution environments.',
  fullBio: 
  'Prachi drive the backend architecture and cloud delivery for BroFocus by building everything from robust API pipelines to bulletproof DevOps automation, while championing ruthless optimization, unbreakable data layers and systems that move with absolute intention.',
    stack: ['React', 'TypeScript', 'Node.js', 'Stitch', 'GCP'],
    accent: '#3d51c4',
    photo: '/team/prachi.jpeg',
    avatarInitials: 'PG',
    resumeUrl: '/resumes/Resume_Prachi_Gupta.pdf',
    social: {
      github: 'https://github.com/Prashii06',
      linkedin: 'https://linkedin.com/prachi-gupta00',
      email: 'mailto:prashii2806@gmail.com',
    },
  },
  {
    id: 'glaixy',
    name: 'Glaixy',
    role: 'AI & Frontend Engineer',
    roleLabel: 'AI Lead',
    tag: 'Frontend Developer',
    motto: 'Models serve people — never the reverse.',
    shortBio: 'I Build the intelligence layer: recommendations, focus scoring and smart nudges.',
    fullBio:
      'Glaixy designs BroFocus’s AI backbone — habit inference, focus sessions and privacy-first personalization. He obsesses over latency, evals, and explainable outputs users can trust.',
    stack: ['Python', 'FastAPI', 'PyTorch', 'Redis', 'Docker'],
    accent: '#1f448a',
    photo: '/team/glaixy.jpeg',
    avatarInitials: 'GM',
    resumeUrl: '/resumes/Resume_Prachi_Gupta.pdf',
    social: {
      github: 'https://github.com/glaixy',
      linkedin: 'https://www.linkedin.com/in/glaixy-1051a9326?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      email: 'mailto:glaixy2007@gmail.com',
    },
  },
  {
    id: 'mamta',
    name: 'Mamta Kumari',
    role: 'Frontend Developer',
    roleLabel: 'Design Lead',
    tag: 'Frontend Developer',
    motto: 'Every pixel earns its place.',
    shortBio: 'I shape the vibrant UI, motion language, and component system for BroFocus.',
    fullBio:
      'Mamta translates Stitch designs into living interfaces — spring physics, 3D depth, and accessible contrast. She owns the design tokens, grid rhythm, and micro-interactions that make Incognito feel alive.',
    stack: ['React', 'Framer Motion', 'CSS', 'Storybook', 'Stitch'],
    accent: '#4418d7',
    photo: '/team/mamta.jpeg',
    avatarInitials: 'MK',
    resumeUrl: '/resumes/Resume_Prachi_Gupta.pdf',
    social: {
      linkedin: 'https://www.linkedin.com/in/mamta-kumari-869969318',
      github: 'https://github.com/NScoder8384',
      email: 'mailto:mamta.kumari@example.com',
    },
  },
  {
    id: 'prince',
    name: 'Prince Singh',
    role: 'UI & Visual Designer',
    roleLabel: 'UI/UX Lead',
    tag: 'UI/UX Designer',
    motto: 'Code with purpose, Build with precision',
    shortBio: 'I keep BroFocus fast, secure, and appealing from day one to scale.',
    fullBio:
      'Prince runs UI/Ux, observability and cloud architecture so the team ships fearlessly. He balances cost, uptime, and developer experience — the invisible engine behind every green deploy.',
    stack: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
    accent: '#2a36b8',
    photo: '/team/prince.jpeg',
    avatarInitials: 'PS',
    resumeUrl: '/resumes/Resume_Prachi_Gupta.pdf',
    social: {
      github: 'https://github.com/prince-350',
      linkedin: 'https://www.linkedin.com/in/prince-singh-568898364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      email: 'mailto:prince@example.com',
    },
  },
]
