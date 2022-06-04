import Logo from "../Logo";
import SearchBar from "../SearchBar";
import SocialIcon from "../SocialIcon";
import LangSwitch from "./LangSwitch";
import NavigationLinks from "./NavigationLinks";
import Seperator from "./Seperator";
import ThemeSwitch from "./ThemeSwitch";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

export default function Example({
  searchBarLabel,
  headerLinks,
  socialNetworks,
}) {
  return (
    <Popover className="relative bg-neutral-100 shadow dark:bg-neutral-800">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-20">
        <div className="container mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-8 rtl:md:space-x-reverse">
          <Logo />
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 focus:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-400">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group
              as="nav"
              className="flex space-x-8 rtl:space-x-reverse"
            >
              <NavigationLinks links={headerLinks} />
            </Popover.Group>
            <SearchBar searchBarLabel={searchBarLabel} />

            <div className="flex items-center md:ml-12">
              <Seperator />
              <ThemeSwitch />
              <LangSwitch />
              <Seperator />
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
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-neutral-100 dark:bg-neutral-800 divide-y-2 dark:divide-neutral-700 divide-neutral-200">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Logo />
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 focus:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-400">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav>
                  <div className="flex flex-col gap-y-4">
                    <NavigationLinks links={headerLinks} />
                  </div>
                  <div className="mt-6">
                    <SearchBar searchBarLabel={searchBarLabel} />
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="flex justify-center">
                <Seperator />
                <ThemeSwitch />
                <LangSwitch />
                <Seperator />
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
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
