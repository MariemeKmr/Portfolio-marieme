import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/projects', label: 'Projets' },
  { to: '/experience', label: 'Experiences' },
  { to: '/skills', label: 'Competences' },
  { to: '/about', label: 'A propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-stone-50/75 dark:bg-stone-950/60 border-b border-stone-200/60 dark:border-stone-800">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-tight">
          <span className="font-serif">Marieme Kamara</span> 
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => 
                `font-medium hover:text-primary ${isActive ? 'text-primary' : 'text-stone-700 dark:text-stone-200'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="md:hidden btn-ghost">Menu</button>
        </div>
      </div>
    </header>
  )
}





