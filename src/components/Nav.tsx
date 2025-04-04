import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }: { isActive: boolean }) => {
  return cn('navbar-item', { 'is-active': isActive });
};

export const Nav = () => {
  return (
    <div className="navbar-brand" data-cy="Nav">
      <NavLink to="/" end className={getClassName}>
        Home
      </NavLink>
      <NavLink to="/tabs" className={getClassName}>
        Tabs
      </NavLink>
    </div>
  );
};
