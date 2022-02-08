import { useRouter } from "next/router";
import Link from "next/link";
import Imgix from "react-imgix";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

const formatDate = (timestamp, locale) => {
  const date = new Date(timestamp);

  const options = {
    dateStyle: "long",
    timeStyle: "short",
    numberingSystem: "latn",
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
};

const Metadata = ({ authorData, pubTimestamp }) => {
  const { locale } = useRouter();

  const pubDate = formatDate(pubTimestamp, locale);
  return (
    <div className="flex flex-shrink-0 items-center font-medium">
      <Link href={`/authors/${authorData.username}`}>
        <a className="flex items-center space-x-2">
          <div className="relative inline-flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden">
            <Imgix
              className="lazyload absolute inset-0 h-full w-full rounded-full object-cover"
              src={authorData.avatarThumbnail.url}
              alt={authorData.avatarThumbnail.alt}
              width={48}
              height={48}
              attributeConfig={{
                src: "data-src",
                srcSet: "data-srcset",
                sizes: "data-sizes",
              }}
            />
          </div>
        </a>
      </Link>
      <div className="ml-3 rtl:mr-3">
        <div className="flex items-center">
          <Link href={`/authors/${authorData.username}`}>
            <a className="block text-violet-600 dark:text-violet-500">
              {authorData.displayName}
            </a>
          </Link>
        </div>
        <div className="text-neutral-700 dark:text-neutral-200">{pubDate}</div>
      </div>
    </div>
  );
};

export default Metadata;
