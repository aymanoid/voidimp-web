import { useState } from "react";
import Logo from "components/common/Logo";
import NavigationLinks from "components/common/Navbar/NavigationLinks";
import SearchBar from "components/common/SearchBar";
import ThemeSwitch from "components/common/Navbar/ThemeSwitch";
import LangSwitch from "components/common/Navbar/LangSwitch";
import SocialIcon from "components/common/SocialIcon";

const Navbar = ({ searchBarLabel, headerLinks, socialNetworks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-100 shadow dark:bg-neutral-800">
      <div className="container mx-auto px-6 py-4 xl:flex xl:items-center xl:justify-between">
        <div className="xl:flex xl:items-center">
          <div className="flex items-center justify-between">
            <Logo />

            {/* Mobile menu button */}
            <div className="flex xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
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
            } flex-col capitalize text-gray-600 dark:text-gray-300 xl:-mx-4 xl:flex xl:flex-row xl:items-center xl:px-16`}
          >
            <NavigationLinks links={headerLinks} />

            <SearchBar searchBarLabel={searchBarLabel} />
          </div>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } mt-6 justify-center xl:-mx-2 xl:mt-0 xl:flex`}
        >
          <div className="mx-2 transform border-r border-neutral-700 transition-colors duration-200 dark:border-neutral-200"></div>
          <ThemeSwitch />
          <LangSwitch />
          <div className="mx-2 transform border-r border-neutral-700 transition-colors duration-200 dark:border-neutral-200"></div>
          <SocialIcon
            social={"twitter"}
            label={"Twitter"}
            href={`https://twitter.com/${socialNetworks.twitter.username}`}
          />
          <SocialIcon
            social={"instagram"}
            label={"Instagram"}
            href={`https://instagram.com/${socialNetworks.instagram.username}/`}
          />
          <SocialIcon
            social={"youtube"}
            label={"YouTube"}
            href={`https://www.youtube.com/channel/${socialNetworks.youtube.username}`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
