import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'
import HudSection from '../components/layout/HudSection'
import Reveal from '../components/ui/Reveal'
import { contactChannels } from '../data/portfolioData'

const CHANNEL_ICON_MAP = {
  mail: MdEmail,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  whatsapp: BsWhatsapp,
}

const inputClass =
  'w-full rounded-lg border border-[color:var(--hud-border)] bg-black/40 px-4 py-3 text-base text-[color:var(--hud-title)] outline-none transition placeholder:text-slate-400 focus:border-[color:var(--hud-electric)] focus:shadow-[0_0_14px_rgba(37,166,255,0.18)] focus:ring-1 focus:ring-[color:var(--hud-electric)]/30'

function TacticalField({ label, id, children }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-[color:var(--hud-electric)]">
        {label}
      </label>
      {children}
    </div>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    if (status !== 'sending') setStatus('idle')
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const targetEmail = contactChannels.find((c) => c.id === 'mail')?.value ?? ''
    const endpoint = `https://formsubmit.co/ajax/${targetEmail}`
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 15000)

    try {
      const response = await fetch(endpoint, {
        signal: controller.signal,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `[Portfolio] Mensaje de ${form.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('No se pudo enviar el mensaje')
      }

      const result = await response.json()
      if (result.success !== true && result.success !== 'true') throw new Error('Envío no confirmado')

      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      window.clearTimeout(timeout)
    }
  }

  return (
    <HudSection
      id="contact"
      kicker="Hablemos"
      title="Contacto"
      subtitle="¿Tienes un proyecto o una oportunidad profesional? Cuéntame cómo puedo ayudarte."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        {/* Tactical Form */}
        <Reveal delay={80}>
          <form
            onSubmit={handleSubmit}
            className="neon-card neon-card-medium space-y-5 p-6"
          >
            <div className="border-b border-[color:var(--hud-border)] pb-3 text-sm font-medium text-[color:var(--hud-text)]/50">
              Escríbeme un mensaje
            </div>

            <TacticalField label="Nombre" id="contact-name">
              <input
                disabled={status === 'sending'}
                required
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                placeholder="Tu nombre completo"
                className={inputClass}
              />
            </TacticalField>

            <TacticalField label="Correo electrónico" id="contact-email">
              <input
                disabled={status === 'sending'}
                required
                type="email"
                id="contact-email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="tu@email.com"
                className={inputClass}
              />
            </TacticalField>

            <TacticalField label="Mensaje" id="contact-message">
              <textarea
                disabled={status === 'sending'}
                required
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Cuéntame sobre tu proyecto o consulta."
                className={`${inputClass} resize-y`}
              />
            </TacticalField>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
              whileTap={status !== 'sending' ? { scale: 0.97 } : {}}
              className="neon-btn flex w-full items-center justify-center gap-2 py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-3.5 w-3.5" />
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Mensaje enviado ✓
                  </motion.span>
                ) : status === 'error' ? (
                  <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Reintentar envío
                  </motion.span>
                ) : status === 'sending' ? (
                  <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Enviando…
                  </motion.span>
                ) : (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Enviar mensaje
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <p role="status" aria-live="polite" className="text-sm">{status === 'sent' ? 'Gracias por escribir. Tu mensaje se ha enviado.' : status === 'sending' ? 'Enviando tu mensaje…' : ''}</p>
            {status === 'error' && (
              <p role="alert" className="text-sm text-[color:var(--hud-text)]">
                No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por correo electrónico.
              </p>
            )}
          </form>
        </Reveal>

        {/* Quick contact channels */}
        <div className="space-y-3">
          <div className="text-sm font-medium text-[color:var(--hud-text)]/60">
            También puedes encontrarme en
          </div>
          {contactChannels.map((channel, index) => {
            const ChannelIcon = CHANNEL_ICON_MAP[channel.iconKey] ?? MdEmail
            const lineTone =
              channel.tone === 'electric'
                ? 'from-[color:var(--hud-electric)]/80 to-transparent'
                : 'from-[color:var(--hud-neon)]/80 to-transparent'
            const shadowTone =
              channel.tone === 'electric'
                ? 'hover:shadow-[0_0_18px_rgba(37,166,255,0.2)]'
                : 'hover:shadow-[0_0_18px_rgba(95,255,199,0.2)]'

            return (
              <Reveal key={channel.id} delay={120 + index * 100}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={`neon-card neon-card-soft group flex flex-col p-4 text-sm hover:-translate-y-1 ${shadowTone} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--hud-electric)]`}
                >
                  <div className={`pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r ${lineTone}`} />
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-[color:var(--hud-border)] bg-black/40 text-[color:var(--hud-neon)] group-hover:text-[color:var(--hud-electric)]">
                    <ChannelIcon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-[color:var(--hud-text)]/50">
                    {channel.label}
                  </span>
                  <span className="mt-1 break-words text-[color:var(--hud-title)]">{channel.value}</span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </HudSection>
  )
}

export default ContactSection
