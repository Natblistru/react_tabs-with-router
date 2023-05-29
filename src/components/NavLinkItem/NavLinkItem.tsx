import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  title: string;
};

export const NavLinkItem: React.FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      className={({ isActive }) => classNames('navbar-item', {
        'is-active': isActive,
      })}
      to={to}
    >
      {title}
    </NavLink>
  );
};
