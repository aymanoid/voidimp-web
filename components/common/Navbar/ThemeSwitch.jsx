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
      className="mx-2 transition-colors duration-200 transform lg:mt-0 text-neutral-700 dark:text-neutral-200 hover:text-violet-600 dark:hover:text-violet-500"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <IconSvg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        fill="none"
      />
    </button>
  );
};

export default ThemeSwitch;

// svg icons from https://iconmonstr.com/
