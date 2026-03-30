import { AnimatePresence, motion } from 'framer-motion'

const BOOT_LINES = [
  'cargando modulos de interfaz',
  'sincronizando paneles de datos',
  'calibrando visor tactico',
  'estado: operativo',
]

function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--hud-bg)] px-6"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <motion.div
          className="hud-shell hud-cut-corners w-full max-w-xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--hud-electric)]">// Boot Sequence</p>
          <h1 className="mt-3 text-2xl text-[color:var(--hud-title)] md:text-3xl">Inicializando Interfaz...</h1>

          <div className="mt-6 space-y-1.5 rounded-lg border border-[color:var(--hud-border)] bg-black/35 p-3 text-xs text-[color:var(--hud-neon)]/90">
            {BOOT_LINES.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.22 + 0.3 }}
              >
                &gt; {line}
                {i === BOOT_LINES.length - 1 && (
                  <span className="ml-2 inline-block animate-blink text-[color:var(--hud-electric)]">_</span>
                )}
              </motion.p>
            ))}
          </div>

          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-black/40">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[color:var(--hud-neon)] to-[color:var(--hud-electric)]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
