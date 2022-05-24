import TwitterSvg from "components/icons/social/twitter.svg";
import InstagramSvg from "components/icons/social/instagram.svg";
import YoutubeSvg from "components/icons/social/youtube.svg";
import RssSvg from "components/icons/social/rss.svg";
import Link from "next/link";

const SocialIcon = ({ social, label, href, size = 6 }) => {
  const IconSvg = {
    twitter: TwitterSvg,
    instagram: InstagramSvg,
    youtube: YoutubeSvg,
    rss: RssSvg,
  }[social];

  return (
    <Link href={href}>
      <a
        className="mx-2 transform text-neutral-700 transition-colors duration-200 hover:text-violet-600 dark:text-neutral-200 dark:hover:text-violet-400 lg:mt-0"
        aria-label={label}
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
