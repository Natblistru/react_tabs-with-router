import { NavLink } from 'react-router-dom'
import cn from 'classnames'

export const NavBar = () => {

  const getLinksClass = ({ isActive }: {isActive: boolean}) => {
    return cn('navbar-item', {
      'is-active': isActive
    })
  }

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">

            <NavLink to="/" className={getLinksClass}>
              Home
            </NavLink>

            <NavLink to="/tabs" className={getLinksClass}>
              Tabs
            </NavLink>

          </div>
        </div>
      </nav>
    </>
  )
}
