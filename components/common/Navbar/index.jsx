import { useState } from "react";
import Logo from "components/common/Logo";
import NavigationLinks from "components/common/Navbar/NavigationLinks";
import SearchBar from "components/common/SearchBar";
import ThemeSwitch from "components/common/Navbar/ThemeSwitch";
import LangSwitch from "components/common/Navbar/LangSwitch";
import SocialIcon from "components/common/SocialIcon";

const Navbar = ({ searchBarLabel, navbarLinks, socialLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow bg-neutral-100 dark:bg-neutral-800">
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

            <SearchBar searchBarLabel={searchBarLabel} />
          </div>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2`}
        >
          <div className="mx-2 text-gray-600 transition-colors duration-200 transform border-r dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"></div>
          <ThemeSwitch />
          <LangSwitch />
          <div className="mx-2 text-gray-600 transition-colors duration-200 transform border-r dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"></div>
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
