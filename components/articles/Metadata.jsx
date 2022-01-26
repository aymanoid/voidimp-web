import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const formatDate = (timestamp, locale) => {
  const date = new Date(timestamp);

  const options = {
    dateStyle: "long",
    timeStyle: "short",
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
};

const Metadata = ({ authorData, pubTimestamp }) => {
  const { locale } = useRouter();

  const pubDate = formatDate(pubTimestamp, locale);
  return (
    <div className="flex items-center flex-shrink-0 font-medium">
      <Link href={`/authors/${authorData.username}`}>
        <a className="flex items-center space-x-2">
          <div className="relative inline-flex items-center justify-center flex-shrink-0 w-12 h-12 overflow-hidden">
            <Image
              src={authorData.pfpThumbnail.url}
              alt={authorData.pfpThumbnail.alt}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 object-cover w-full h-full rounded-full"
            />
          </div>
        </a>
      </Link>
      <div className="ml-3 rtl:mr-3">
        <div className="flex items-center">
          <Link href={`/authors/${authorData.username}`}>
            <a className="block dark:text-violet-500 text-violet-600">
              {authorData.displayName}
            </a>
          </Link>
        </div>
        <div className="dark:text-neutral-200 text-neutral-700">{pubDate}</div>
      </div>
    </div>
  );
};

export default Metadata;
