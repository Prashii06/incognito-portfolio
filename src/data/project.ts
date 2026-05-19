export const STITCH_DESIGN_URL =
  'https://stitch.withgoogle.com/projects/12900746201405881087'

export const DOCS_URL = '/project'

export const project = {
  name: 'BroFocus',
  tagline: 'Your focus, reframed — a premium companion for deep work and brotherhood accountability.',
  brief:
    'BroFocus is Incognito’s flagship product: a calm, gallery-grade focus app that blends AI-powered session planning, gentle accountability between friends, and luxury-minimal UI. We are building it for people who want flow without noise.',
  status: 'In active development',
  highlights: [
    { label: 'Focus Sessions', desc: 'Timed deep-work blocks with ambient cues and smart breaks.' },
    { label: 'Bro Circles', desc: 'Small accountability groups with respectful nudges, not guilt.' },
    { label: 'AI Coach', desc: 'Personalized plans that learn your rhythm without oversharing.' },
    { label: 'Stitch → Ship', desc: 'Designs prototyped in Google Stitch, refined in our design system.' },
  ],
  stack: ['React Native', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'OpenAI'],
  milestones: [
    { phase: 'Discovery', status: 'done', note: 'User interviews & Stitch prototypes' },
    { phase: 'MVP Core', status: 'active', note: 'Sessions, profiles, basic circles' },
    { phase: 'AI Layer', status: 'upcoming', note: 'Coach & habit inference' },
    { phase: 'Beta', status: 'upcoming', note: 'Closed launch with early bros' },
  ],
}
