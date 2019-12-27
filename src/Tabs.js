import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';

import React from 'react';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

const Tabs = ({ match }) => {
  const variant = match.params.tabsId === undefined
    ? -2
    : match.params.tabsId.match(/\d/g) - 1;
  let showContentOfTabs = false;

  if (variant >= 0 && variant < tabs.length) {
    showContentOfTabs = true;
  }

  return (
    <section className="tabs__container">
      <h2 className="middle">Tabs</h2>
      <nav>
        {
          tabs.map(tab => (
            <NavLink
              key={tab.id}
              to={`/tabs/${tab.id}`}
              exact
              activeClassName="tab tab-selected"
              className="tab"
            >
              {tab.title}
            </NavLink>
          ))
        }
      </nav>
      <hr className="hr" />
      <div className="tab__content">
        {showContentOfTabs ? tabs[variant].content : ''}
      </div>

    </section>
  );
};

Tabs.propTypes = { match: PropTypes.objectOf(PropTypes.any).isRequired };

export default Tabs;
