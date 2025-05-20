import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === tab.id,
              })}
            >
              <NavLink to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabId === undefined
          ? 'Please select a tab'
          : tabs.find(tab => tab.id === tabId)?.content ||
            'Please select a tab'}
      </div>
    </>
  );
};
