import { PageLink } from '../PageLink';

export const Header = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageLink to="/" text="Home" />
          <PageLink to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
