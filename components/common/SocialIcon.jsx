import Link from "next/link";
import TwitterIcon from "components/icons/social/twitter.svg";
import InstagramIcon from "components/icons/social/instagram.svg";
import YoutubeIcon from "components/icons/social/youtube.svg";
import RssIcon from "components/icons/social/rss.svg";

const components = {
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  rss: RssIcon,
};

const SocialIcon = ({ kind, name, url, size = 6 }) => {
  const SocialSvg = components[kind];

  return (
    <Link href={url}>
      <a
        className="mx-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
        aria-label={name}
      >
        <SocialSvg
          className={`w-${size} h-${size} fill-current`}
          viewBox="0 0 24 24"
          fill="none"
        />
      </a>
    </Link>
  );
};

export default SocialIcon;
