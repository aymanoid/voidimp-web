import MagnifierIcon from "components/icons/magnifier.svg";

const SearchBar = ({ searchBarLabel }) => {
  return (
    <form className="relative mt-4 xl:mx-4 xl:mt-0">
      <button
        className="absolute inset-y-0 left-0 flex items-center pl-3"
        type="submit"
      >
        <MagnifierIcon
          className="h-4 w-4 fill-current text-neutral-700 dark:text-neutral-200"
          viewBox="0 0 24 24"
          fill="none"
        />
      </button>

      <input
        required
        type="text"
        className="w-full rounded-full border-2 border-transparent bg-neutral-200 py-1 pl-10 pr-4 text-neutral-700 placeholder-neutral-500 transition-colors duration-200 hover:border-neutral-500 focus:border-violet-600 focus:bg-white focus:outline-none dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder-neutral-400 dark:hover:border-neutral-400 dark:focus:border-violet-400 dark:focus:bg-neutral-900 xl:w-56"
        placeholder={searchBarLabel}
      />
    </form>
  );
};

export default SearchBar;

// svg icon from https://iconmonstr.com/
