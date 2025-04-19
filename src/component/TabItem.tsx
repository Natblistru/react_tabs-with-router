import { Link } from 'react-router-dom';
export const TabItem = ({ title, id, isActive }) => {
  return (
    <li data-cy="Tab" className={isActive ? 'is-active' : ''}>
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
