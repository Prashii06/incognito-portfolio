import { useState, useEffect } from 'react'

const SECTION_IDS = ['home', 'team', 'projects'] as const
export type SectionId = (typeof SECTION_IDS)[number]

export function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    if (!enabled) return

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (elements.length === 0) return

    const updateActive = () => {
      const offset = 120
      const scrollPos = window.scrollY + offset
      let current: SectionId = 'home'

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActive(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)

    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [enabled])

  return active
}
