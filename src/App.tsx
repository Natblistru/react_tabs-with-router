import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { TabContent } from './components/TabContent';
import { TabsPage } from './components/TabsPage';
import { NotFound } from './components/NotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  // let [tabSelected, setTabSelected] = useState<Tab | null>(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="tabs/:tabId?" element={<TabsPage tabs={tabs} />}>
            <Route index element={<TabContent tabs={tabs} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* Also requires <html class="has-navbar-fixed-top"> */}
      {/* <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item is-active">
              Home
            </a>
            <a href="/tabs" className="navbar-item">
              Tabs
            </a>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <h1 className="title">Home page</h1>
          <h1 className="title">Tabs page</h1>
          <h1 className="title">Page not found</h1>

          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li data-cy="Tab" className="is-active" key={tab.id}>
                  <Link to="/">{tab.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        </div>
      </div> */}
    </>
  );
};
