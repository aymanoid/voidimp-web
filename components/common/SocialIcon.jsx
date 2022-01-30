import dynamic from "next/dynamic";
import Link from "next/link";

const SocialIcon = ({ kind, name, url, size = 6 }) => {
  const IconSvg = {
    twitter: dynamic(() => import("components/icons/social/twitter.svg")),
    instagram: dynamic(() => import("components/icons/social/instagram.svg")),
    youtube: dynamic(() => import("components/icons/social/youtube.svg")),
    rss: dynamic(() => import("components/icons/social/rss.svg")),
  }[kind];

  return (
    <Link href={url}>
      <a
        className="mx-2 transform text-neutral-700 transition-colors duration-200 hover:text-violet-600 dark:text-neutral-200 dark:hover:text-violet-500 lg:mt-0"
        aria-label={name}
      >
        <IconSvg
          className={`w-${size} h-${size} fill-current`}
          viewBox="0 0 24 24"
          fill="none"
        />
      </a>
    </Link>
  );
};

export default SocialIcon;

// svg icons from https://simpleicons.org/
