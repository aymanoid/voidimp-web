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
} from "react-share";
const ShareButtons = ({ headline, subheadline, socialNetworks }) => {
  const { locale, asPath } = useRouter();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const localePath = locale === "ar" ? "/ar" : "";
  const url = origin + localePath + asPath;

  return (
    <div className="flex flex-row items-center space-x-2 rtl:space-x-reverse">
      <TwitterShareButton
        url={url}
        title={headline}
        via={socialNetworks.twitter.username}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <FacebookShareButton url={url} quote={headline}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <EmailShareButton url={url} subject={headline} body={subheadline}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
