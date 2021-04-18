import Link from 'next/link';

import { User } from '../types';

interface NavbarProps {
  currentUser: User;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Tketz</a>
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{currentUser ? 'Sign Out' : 'Sign In/Up'}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
