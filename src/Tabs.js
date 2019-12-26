import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import ErrorPath from './ErrorPath';

const Tabs = withRouter(({ tabs, match, currentTabId }) => {
  const tabId = match.params.tabTitle || currentTabId;

  if (tabs.find(tab => tab.id === tabId) !== undefined) {
    return (
      <section className="tabs">
        <h2>Tabs</h2>
        {tabs.map(tab => (
          <Link
            key={tab.id}
            to={`/tabs/${tab.id}`}
            className={(
              tab.id === tabId ? 'button button--active' : 'button'
            )}
          >
            { tab.title }
          </Link>
        )) }
        <hr />
        <div className="tab">
          { tabs.find(tab => tab.id === tabId).content }
        </div>
      </section>
    );
  }

  return <ErrorPath />;
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf.isRequired,
  currentTabId: PropTypes.string.isRequired,
};

export default Tabs;
