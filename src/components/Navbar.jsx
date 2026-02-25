import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/cases', key: 'cases' },
  { to: '/resume', key: 'resume' },
  { to: '/contacts', key: 'contacts' }
]

export default function Navbar({ nav, lang, setLang }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-noir/85 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="group relative inline-flex items-center gap-2">
            <span className="text-2xl font-light tracking-[0.35em] text-mint drop-shadow-[0_0_10px_rgba(86,247,204,0.5)]">SB</span>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-mint transition-all duration-300 group-hover:w-full" />
          </NavLink>
          <button
            className="rounded-full border border-mint/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-mint transition hover:bg-mint/10"
            onClick={() => setLang((prev) => (prev === 'ru' ? 'en' : 'ru'))}
          >
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-4 md:mt-2 md:justify-end md:gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.18em] transition md:text-sm md:tracking-normal ${isActive ? 'text-mint' : 'text-white/75 hover:text-white'}`
              }
            >
              {nav[item.key]}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
