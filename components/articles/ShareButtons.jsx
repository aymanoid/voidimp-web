import { useRouter } from "next/router";
import {
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";
const ShareButtons = () => {
  const { locale, asPath } = useRouter();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const localePath = locale === "ar" ? "/ar" : "";
  const url = origin + localePath + asPath;

  return (
    <div className="flex flex-row items-center space-x-2 rtl:space-x-reverse">
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
