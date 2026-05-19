import { useState } from 'react'
import type { CSSProperties } from 'react'
import type { TeamMember } from '../data/team'
import './MemberPhoto.css'

type MemberPhotoProps = {
  member: TeamMember
  className?: string
}

export default function MemberPhoto({ member, className = '' }: MemberPhotoProps) {
  const [failed, setFailed] = useState(false)
  const fallback = `https://api.dicebear.com/7.x/notionists/png?seed=${member.id}&backgroundColor=${member.accent.replace('#', '')}`

  return (
    <div
      className={`member-photo ${className}`}
      style={{ '--photo-accent': member.accent } as CSSProperties}
    >
      <img
        src={failed ? fallback : member.photo}
        alt={member.name}
        onError={() => setFailed(true)}
        loading="lazy"
      />
    </div>
  )
}
