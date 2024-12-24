import classNames from 'classnames';

export const isActiveClass = (isActive: boolean) => {
  return classNames('navbar-item', { 'is-active': isActive });
};
