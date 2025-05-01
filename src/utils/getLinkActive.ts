import cn from 'classnames';

export default function getLinkActive({ isActive }: { isActive: boolean }) {
  return cn('navbar-item', { 'is-active': isActive });
}
