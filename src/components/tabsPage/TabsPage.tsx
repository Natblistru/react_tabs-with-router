import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const [selectTab, setSelectTab] = useState<null | string>(null);
  const { tabId = 0 } = useParams();

  useEffect(() => {
    if (!tabId) {
      setSelectTab(null);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((el:Tab) => (
            <li
              data-cy="Tab"
              className={classNames('', {
                'is-active': tabId === el.id,
              })}
              key={el.id}
            >
              <Link to={`/tabs/${el.id}`} state={{ text: el.content }} onClick={() => setSelectTab(el.content)}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectTab || 'Please select a tab'}
      </div>
    </>

  );
};
