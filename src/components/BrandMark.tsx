import './BrandMark.css'

type BrandMarkProps = {
  size?: 'header' | 'hero' | 'footer'
}

export default function BrandMark({ size = 'header' }: BrandMarkProps) {
  return (
    <span className={`brand-mark brand-mark--${size}`}>
      <span className="brand-mark__text">Incognito</span>
      <span className="brand-mark__underscore">_</span>
      <span className="brand-mark__cursor" aria-hidden />
      <span className="brand-mark__line" aria-hidden />
    </span>
  )
}
