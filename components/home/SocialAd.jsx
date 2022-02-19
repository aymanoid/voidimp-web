import { useRouter } from "next/router";
import Link from "next/link";
import TwitterSvg from "components/icons/social/twitter.svg";

const SocialAd = () => {
  const { locale } = useRouter();

  const strings = {
    en: {
      followTwitter: "Follow us on Twitter!",
    },
    ar: {
      followTwitter: "تابعنا على تويتر!",
    },
  }[locale];

  return (
    <div className="mt-4 flex justify-center">
      <Link href="/">
        <a className="grid h-[100px] w-[320px] place-items-center place-self-end rounded-xl bg-[#1DA1F2] transition duration-200 hover:brightness-110">
          <span className="inline-flex font-bold text-black dark:text-neutral-800">
            <TwitterSvg
              className="inline-block h-6 w-6 fill-current ltr:mr-2 rtl:ml-2"
              viewBox="0 0 24 24"
              fill="none"
            />
            {strings.followTwitter}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default SocialAd;
