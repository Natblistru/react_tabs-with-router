import classNames from 'classnames';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../services/services';
import { TabContent } from './TabContent';
export const List = () => {
  const tabs = useContext(TabsContext);
  const param = useParams();

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { title, id } = tab;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={classNames({ 'is-active': id == param.id })}
              >
                <Link to={`${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <TabContent />
    </>
  );
};
