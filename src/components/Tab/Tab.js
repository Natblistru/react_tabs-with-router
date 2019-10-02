import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { TabProps } from '../../constants/proptypes';

import './Tab.css';

const Tab = ({
  id, title, isActive,

}) => {
  const tabClasses = classNames({
    'tabs-list__item': true,
    'tabs-list__item--active': isActive,
  });

  return (
    <Link to={`/tabs/${id}`} className="tabs-list__link">
      <li
        className={tabClasses}
        key={id}
      >
        {title}
      </li>
    </Link>
  );
};

Tab.propTypes = TabProps;

export default Tab;
