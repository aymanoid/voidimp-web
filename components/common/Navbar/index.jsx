import { useState } from "react";
import Logo from "components/common/Logo";
import NavigationLinks from "components/common/Navbar/NavigationLinks";
import ThemeSwitch from "components/common/Navbar/ThemeSwitch";
import LangSwitch from "components/common/Navbar/LangSwitch";
import SocialIcon from "components/common/SocialIcon";

const Navbar = ({ searchBarLabel, navbarLinks, socialLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-50 shadow">
      <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            <Logo />

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center`}
          >
            <NavigationLinks links={navbarLinks} />

            <div className="relative mt-4 lg:mt-0 lg:mx-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                type="text"
                className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                placeholder={searchBarLabel}
              />
            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2`}
        >
          <div className="border-r mx-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"></div>
          <ThemeSwitch />
          <LangSwitch />
          <div className="border-r mx-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"></div>
          {socialLinks.map((link, index) => (
            <SocialIcon
              key={index}
              kind={link.kind}
              name={link.name}
              url={link.url}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
