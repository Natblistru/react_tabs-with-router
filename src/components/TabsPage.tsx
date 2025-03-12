import { NavLink } from 'react-router-dom';

const Tabs = () => {
  return (
    <>
      <h1 className="title">Tabs</h1>

      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className="is-active">
            <NavLink to="/tabs/tab1">Tab 1</NavLink>
          </li>
          <li data-cy="Tab">
            <NavLink to="/tabs/tab2">Tab 2</NavLink>
          </li>
          <li data-cy="Tab">
            <NavLink to="/tabs/tab3">Tab 3</NavLink>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    </>
  );
};

export default Tabs;
