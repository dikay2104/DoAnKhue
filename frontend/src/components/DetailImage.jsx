import { useEffect, useState } from 'react'

export default function DetailImage({ src, alt, className = '', loading = 'lazy' }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  return (
    <>
      <button
        className={`detail-image-trigger ${className}`.trim()}
        type="button"
        aria-label={`Phóng to ảnh: ${alt}`}
        aria-haspopup="dialog"
        onClick={() => setIsOpen(true)}
      >
        <img src={src} alt={alt} loading={loading} />
      </button>
      {isOpen && (
        <div
          className="detail-image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
        >
          <button
            className="detail-image-close"
            type="button"
            aria-label="Đóng ảnh phóng to"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <img
            className="detail-image-expanded"
            src={src}
            alt={alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
