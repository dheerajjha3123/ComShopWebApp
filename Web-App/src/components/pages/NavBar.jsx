import { useState } from 'react';
import { Menu, X, ShoppingCart, MessageSquareQuote } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="/">
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-17 h-10 sm:h-8"
            />
          </a>
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="toggle menu"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`
            absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800
            ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}
            md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center
          `}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            {/* {['Home', ''].map((item) => (
              <a
                key={item}
                href="/"
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                {item}
              </a>
            ))}
             */}
            {/* Contact link using Link component */}
<Link
              to="/"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Home
            </Link>

            <Link
              to="/aboutUs"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              About Us
            </Link>

            <Link
              to="#"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Our Services
            </Link>

            <Link
              to="contactUs"
              className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            >
              Contact
            </Link>

            <div className="flex justify-center md:block">
              <a
                href="#"
                className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {/* <MessageSquareQuote className="w-5 h-5" />
                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;