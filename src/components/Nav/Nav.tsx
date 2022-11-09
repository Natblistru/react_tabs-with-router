import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  text: string;
};

const NavLinkItem: React.FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (
      classNames(
        'navbar-item',
        { 'is-active': isActive },
      ))}
  >
    {text}
  </NavLink>
);

export const Nav = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLinkItem to="/" text="Home" />
          <NavLinkItem to="/tabs" text="Tabs" />

        </div>
      </div>
    </nav>
  );
};
