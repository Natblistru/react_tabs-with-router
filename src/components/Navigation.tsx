import { Routes, Route, Link } from 'react-router-dom';



export const Navigation: React.FC = ({

}) => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item is-active">
            Home
          </a>
          <a href="/tabs" className="navbar-item ">
            Tabs
          </a>
        </div>
      </div>
    </nav>
  );
};
