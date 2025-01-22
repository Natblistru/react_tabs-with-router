import cn from 'classnames';

export const getLinkActiveClass = ({ isActive }: { isActive: boolean }) => cn("navbar-item", { "is-active": isActive });
