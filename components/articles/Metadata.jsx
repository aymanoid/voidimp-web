import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

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
          <Image
            className="rounded-full"
            src={authorData.avatarThumbnail.url}
            alt={authorData.avatarThumbnail.alt}
            width={48}
            height={48}
          />
          {/* TODO: delete authorData.avatarThumbnail.dimensions */}
        </a>
      </Link>
      <div className="ml-3 rtl:mr-3">
        <div className="flex items-center">
          <Link href={`/authors/${authorData.username}`}>
            <a className="block text-violet-600 dark:text-violet-400">
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
