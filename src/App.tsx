import { Routes, Route, Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}

      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-active">
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
            <Route path="/" element={<HomePage path={'/'} />} />
            <Route path={`/tabs/:tabsId?`} element={<Tabs tabs={tabs} path={`/tabs`} />} />

            {/* <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />  */}
          </Routes>
          {/* <h1 className="title">Home page</h1>
        <h1 className="title">Tabs page</h1>
        <h1 className="title">Page not found</h1> */}
          {/* <HomePage/> */}

          {/* <div className="block" data-cy="TabContent">
            Please select a tab
          </div> */}
        </div>
      </div>
    </>
  );
};
