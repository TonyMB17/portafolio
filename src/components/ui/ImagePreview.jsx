import { useEffect, useId, useRef } from 'react'
import { Maximize2, X } from 'lucide-react'

export default function ImagePreview({ src, alt, title }) {
  const dialog = useRef(null)
  const titleId = useId()
  const previousOverflow = useRef('')

  const restoreScroll = () => {
    document.body.style.overflow = previousOverflow.current
  }

  const close = () => {
    if (dialog.current?.open) {
      dialog.current.close()
    }
  }

  useEffect(() => {
    const node = dialog.current
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && node?.open) {
        e.preventDefault()
        close()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      if (node?.open) document.body.style.overflow = previousOverflow.current
    }
  }, [])

  const open = () => {
    previousOverflow.current = document.body.style.overflow
    dialog.current.showModal()
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <button
        type="button"
        className="project-image-button"
        onClick={open}
        aria-label={`Ampliar captura de ${title}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          width="1600"
          height="786"
          className="h-full w-full bg-black/40 object-cover"
        />
        <span className="image-zoom-label">
          <Maximize2 size={16} aria-hidden="true" /> Ampliar
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        aria-modal="true"
        className="image-dialog"
        onClose={restoreScroll}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        <div className="image-dialog-content">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">
            <h2 id={titleId} className="text-lg font-semibold text-white">
              {title}
            </h2>
            <button
              autoFocus
              type="button"
              className="dialog-close"
              onClick={close}
              aria-label="Cerrar captura (Escape)"
              title="Cerrar (Escape)"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="p-2 sm:p-4">
            <img src={src} alt={alt} className="preview-full-image" />
          </div>
        </div>
      </dialog>
    </>
  )
}
