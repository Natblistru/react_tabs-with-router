import { PageNavLink } from './PageNavLink';

export const Navigation = () => (
  <nav
    className="navbar is-light is-fixed-top
      is-mobile has-shadow has-navbar-fixed-top"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" text="Home" end />
        <PageNavLink to="/tabs" text="Tabs" end={false} />
      </div>
    </div>
  </nav>
);
