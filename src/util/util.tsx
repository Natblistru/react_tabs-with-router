import classNames from 'classnames';

export const getLinkClassNavbarItem = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

export const getLinkClassTab = ({ isActive }: { isActive: boolean }) =>
  classNames({ 'is-active': isActive });
