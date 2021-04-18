import Link from 'next/link';

import { User } from '../types';

interface NavbarProps {
  currentUser: User;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const navLinks = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ].filter((link) => link);

  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Tketz</a>
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>
                <a className="navbar-brand">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
