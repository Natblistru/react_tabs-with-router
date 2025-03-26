import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import { Link, Outlet, useParams } from 'react-router-dom';
// import { NotFound } from '../NotFound';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // <li data-cy="Tab" className="is-active" key={tab.id}>
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === tab.id,
              })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
      {/* {isValid ? (
        <Outlet />
      ) : (
          <NotFound />
      )} */}

      {/* <div className="block" data-cy="TabContent">
        Please select a tab
      </div> */}
    </>
  );
};
