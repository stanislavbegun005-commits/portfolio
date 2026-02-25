import { useEffect, useState } from 'react'

export default function IntroOverlay({ onDone }) {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const fade = setTimeout(() => setHide(true), 1450)
    const done = setTimeout(onDone, 2000)
    return () => {
      clearTimeout(fade)
      clearTimeout(done)
    }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#030605] transition-opacity duration-700 ${hide ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="text-center">
        <div className="mx-auto mb-6 h-20 w-20 rounded-full border border-mint/50 shadow-glow animate-pulse" />
        <p className="text-4xl font-light tracking-[0.35em] text-mint">SB</p>
        <p className="mt-3 text-xs uppercase tracking-[0.4em] text-white/60">Stanislav Begun</p>
      </div>
    </div>
  )
}
