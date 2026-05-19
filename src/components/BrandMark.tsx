import './BrandMark.css'

type BrandMarkProps = {
  size?: 'header' | 'hero' | 'footer'
}

export default function BrandMark({ size = 'header' }: BrandMarkProps) {
  return (
    <span className={`brand-mark brand-mark--${size}`}>
      <span className="brand-mark__text">Incognito</span>
      <span className="brand-mark__underscore" aria-hidden>
        _
      </span>
    </span>
  )
}
