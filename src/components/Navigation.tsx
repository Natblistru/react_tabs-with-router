import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            Home
          </NavLink>
          <NavLink to="/tabs" className="navbar-item">
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
