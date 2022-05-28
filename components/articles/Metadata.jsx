import { useRouter } from "next/router";
import Link from "next/link";
import Image from "components/common/VoidImage";

const formatDate = (timestamp, locale) => {
  const date = new Date(timestamp);

  const options = {
    dateStyle: "long",
    timeStyle: "short",
    numberingSystem: "latn",
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
};

const Metadata = ({ authorData, publishedAt }) => {
  const { locale } = useRouter();

  const strings = {
    en: {
      lastPublishDate: "Last publish date",
    },
    ar: {
      lastpublishedAte: "تاريخ آخر نشر",
    },
  }[locale];

  const publishedAtDate = formatDate(publishedAt, locale);
  return (
    <div className="flex flex-shrink-0 items-center font-semibold">
      <Link href={`/authors/${authorData.slug}`}>
        <a className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={authorData.avatar.url}
            alt={authorData.avatar.alternativeText}
            width={48}
            height={48}
            cmsMedia
          />
          {/* TODO: delete authorData.avatarThumbnail.dimensions */}
        </a>
      </Link>
      <div className="ml-3 rtl:mr-3">
        <div className="flex items-center">
          <Link href={`/authors/${authorData.slug}`}>
            <a className="block text-violet-600 dark:text-violet-400">
              {authorData.displayName}
            </a>
          </Link>
        </div>
        <time
          className="text-neutral-700 dark:text-neutral-200"
          dateTime={publishedAt}
          title={strings.lastPublishDate}
        >
          {publishedAtDate}
        </time>
      </div>
    </div>
  );
};

export default Metadata;
