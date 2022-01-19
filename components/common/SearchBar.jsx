import MagnifierIcon from "components/icons/magnifier.svg";

const SearchBar = ({ searchBarLabel }) => {
  return (
    <div className="relative mt-4 lg:mt-0 lg:mx-4">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifierIcon
          className="w-4 h-4 fill-current text-neutral-700 dark:text-neutral-200"
          viewBox="0 0 24 24"
          fill="none"
        />
      </span>

      <input
        type="text"
        className="w-full py-1 pl-10 pr-4 transition-colors duration-200 border-2 border-transparent rounded-full bg-neutral-200 hover:border-neutral-500 placeholder-neutral-500 text-neutral-700 dark:text-neutral-200 dark:placeholder-neutral-400 dark:bg-neutral-700 dark:hover:border-neutral-400 focus:border-violet-600 dark:focus:bg-neutral-900 focus:bg-white dark:focus:border-violet-500 lg:w-56 focus:outline-none"
        placeholder={searchBarLabel}
      />
    </div>
  );
};

export default SearchBar;

// svg icon from https://iconmonstr.com/
