import { Link, useLocation } from 'react-router-dom'

// Barre de navigation : Link permet de changer de page sans rechargement complet
function Navbarre() {
  const { pathname } = useLocation()

  const liens = [
    { to: '/', label: 'Accueil' },
    { to: '/tasks', label: 'Mes tâches' },
    { to: '/about', label: 'À propos' },
  ]

  return (
    <nav className="navbarre">
      <Link to="/" className="logo">
        Student<span>Tasks</span>
      </Link>
      <ul>
        {liens.map((lien) => (
          <li key={lien.to}>
            <Link
              to={lien.to}
              className={pathname === lien.to ? 'nav-link actif' : 'nav-link'}
            >
              {lien.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbarre
