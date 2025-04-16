import {useState} from "react"
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-yellow-600' : 'text-white'}`}>
                BUILDMASTER
              </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" label="Home" isScrolled={isScrolled} />
              <NavLink to="/about" label="About" isScrolled={isScrolled} />
              <NavLink to="/services" label="Services" isScrolled={isScrolled} />
              <NavLink to="/projects" label="Projects" isScrolled={isScrolled} />
              <NavLink to="/testimonials" label="Testimonials" isScrolled={isScrolled} />
              <NavLink to="/contact" label="Contact" isScrolled={isScrolled} />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-300'
              } focus:outline-none`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink to="/" label="Home" toggleMenu={toggleMenu} />
          <MobileNavLink to="/about" label="About" toggleMenu={toggleMenu} />
          <MobileNavLink to="/services" label="Services" toggleMenu={toggleMenu} />
          <MobileNavLink to="/projects" label="Projects" toggleMenu={toggleMenu} />
          <MobileNavLink to="/testimonials" label="Testimonials" toggleMenu={toggleMenu} />
          <MobileNavLink to="/contact" label="Contact" toggleMenu={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink = ({ to, label, isScrolled }: NavLinkProps) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md text-sm font-medium ${
      isScrolled
        ? 'text-gray-700 hover:text-yellow-600'
        : 'text-white hover:text-yellow-300'
    }`}
  >
    {label}
  </Link>
);

interface MobileNavLinkProps {
  to: string;
  label: string;
  toggleMenu: () => void;
}

const MobileNavLink = ({ to, label, toggleMenu }: MobileNavLinkProps) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
    onClick={toggleMenu}
  >
    {label}
  </Link>
);

export default Navbar;
