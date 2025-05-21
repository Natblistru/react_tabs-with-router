import { Link } from 'react-router-dom';
import { tabs } from '../store/Constants';

export const Tabs = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li data-cy="Tab" className="is-active" key={tab.id}>
              <Link to="{}">{tab.title}</Link>
            </li>
          ))}

          <li data-cy="Tab">
            <a href="#/">Tab 2</a>
          </li>
          <li data-cy="Tab">
            <a href="#/">Tab 3</a>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    </>
  );
};
