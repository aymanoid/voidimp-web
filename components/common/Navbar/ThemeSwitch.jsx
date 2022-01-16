import { useTheme } from "next-themes";
import MoonIcon from "components/icons/moon.svg";
import SunIcon from "components/icons/sun.svg";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="mx-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <MoonIcon
          className={`w-6 h-6 fill-current`}
          viewBox="0 0 24 24"
          fill="none"
        />
      ) : (
        <SunIcon
          className={`w-6 h-6 fill-current`}
          viewBox="0 0 24 24"
          fill="none"
        />
      )}
    </button>
  );
};

export default ThemeSwitch;
