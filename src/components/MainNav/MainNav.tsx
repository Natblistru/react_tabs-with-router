import { FC } from 'react';
import { NavigationLink } from '../NavigationLink';

export const MainNav: FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationLink to="/" text="Home" />
          <NavigationLink to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
