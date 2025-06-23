import { Routes, Route, Link, useLocation } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomeTitle } from './components/HomePage';
import { Tabs } from './components/Tabs';
import cn from 'classnames';

export const App = () => {
  const validPage = ['/tabs/tab-1', '/tabs/tab-2', '/tabs/tab-3', '/tabs', '/'];
  const location = useLocation();
  const isValid = validPage.includes(location.pathname);

  let activ = validPage.find(valid => valid === location.pathname) || useLocation;
  if (activ) {
    activ = activ.toString()
  }

  console.log('activ-----activ', activ);

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}

      {<nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">

          <Link to="/" className={cn("navbar-item", {'is-active': activ ==='/'})}>
            Home
          </Link>
          <Link to="/tabs" className={cn("navbar-item", {'is-active': activ.length > 1})}>
            Tabs
          </Link>

        </div>
      </div>
      </nav>}

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/:tabs?" element={<HomeTitle />} />

            <Route
              path="tabs/:tabsId?"
              element={
                isValid ? (
                  <>
                    <HomeTitle />
                    <Tabs />{' '}
                  </>
                ) : (
                  <HomeTitle />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
