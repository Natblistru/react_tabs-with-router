import { NavLink, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const isCorrectTab = tabs.find(t => t.id === tabId);

  const getTitle = () => {
    if (isCorrectTab) {
      return isCorrectTab.content;
    }

    return 'Please select a tab';
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tabId === tab.id ? 'is-active' : ''}
            >
              <NavLink to={`${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTitle()}
      </div>
    </>
  );
};
