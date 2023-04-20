import { NavBarLink } from '../NavBarLink/NavBarLink';

export const NavBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavBarLink to="/" title="Home" />

        <NavBarLink to="/tabs" title="Tabs" />
      </div>
    </div>
  </nav>
);
