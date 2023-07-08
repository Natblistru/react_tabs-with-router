import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
// import { TabsList } from './components/TabsList';
import { TabsPage } from './components/TabsPage';
import { Navbar } from './components/Navbar';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  // const rout = useParams();
  // console.log(rout)

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <Navbar />
      {/* <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-active">Home</Link>
            <Link to="/tabs" className="navbar-item">Tabs</Link>
          </div>
        </div>
      </nav> */}

      <div className="section">
        <div className="container">

          <Routes>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />

            <Route
              path="/"
              element={<h1 className="title">Home page</h1>}
            />

            <Route
              path="/home"
              element={<Navigate to="/" />}
            />

            <Route path="/tabs">
              <Route
                index
                element={(<TabsPage tabs={tabs} />
                )}
              />

              <Route
                path=":tabId"
                element={(<TabsPage tabs={tabs} />
                )}
              />
            </Route>
          </Routes>

          {/* <h1 className="title">Home page</h1>
          <h1 className="title">Tabs page</h1>
          <h1 className="title">Page not found</h1>

          <div className="tabs is-boxed">
            <ul>
              <li data-cy="Tab" className="is-active">
                <Link to="#/">Tab 1</Link>
              </li>
              <li data-cy="Tab">
                <Link to="#/">Tab 2</Link>
              </li>
              <li data-cy="Tab">
                <Link to="#/">Tab 3</Link>
              </li>
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            Please select a tab
          </div> */}
        </div>
      </div>
    </>
  );
};
