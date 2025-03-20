import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Routes, Route } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Home = () => (
  <div>
    <h1 className="title">Home page</h1>
  </div>
);

const Tabs = () => {
  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id} data-cy="Tab">
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Routes>
          {tabs.map(tab => (
            <Route
              key={tab.id}
              path={tab.id}
              element={<div>{tab.content}</div>}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

const NotFound = () => (
  <div>
    <h1>Page Not Found</h1>
  </div>
);

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/tabs" className="navbar-item">
            Tabs
          </Link>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tabs" element={<Tabs />}>
            {/* Вкладені маршрути для кожної вкладки */}
            {tabs.map(tab => (
              <Route
                key={tab.id}
                path={tab.id}
                element={<div>{tab.content}</div>}
              />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
