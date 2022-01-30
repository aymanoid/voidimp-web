import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const IconSvg =
    theme === "dark"
      ? dynamic(() => import("components/icons/sun.svg"))
      : dynamic(() => import("components/icons/moon.svg"));

  return (
    <button
      className="mx-2 transform text-neutral-700 transition-colors duration-200 hover:text-violet-600 dark:text-neutral-200 dark:hover:text-violet-500 lg:mt-0"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <IconSvg
        className="h-6 w-6 fill-current"
        viewBox="0 0 24 24"
        fill="none"
      />
    </button>
  );
};

export default ThemeSwitch;

// svg icons from https://iconmonstr.com/
