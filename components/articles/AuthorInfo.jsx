import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const AuthorInfo = ({ authorData }) => {
  const { locale } = useRouter();

  const strings = {
    en: { writtenBy: "Written By" },
    ar: { writtenBy: "كتب بواسطة" },
  }[locale];

  return (
    <div className="group mt-6 flex">
      <Link href={`/authors/${authorData.username}`}>
        <a className="flex items-center ">
          <div className="relative inline-flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden text-lg font-semibold uppercase sm:h-24 sm:w-24 sm:text-xl ">
            <Image
              src={authorData.avatarThumbnail.url}
              alt={authorData.avatarThumbnail.alt}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full rounded-xl object-cover"
            />
          </div>
        </a>
      </Link>
      <div className="flex max-w-lg flex-col ltr:ml-3 rtl:mr-3 ltr:sm:ml-5 rtl:sm:ml-5">
        <span className="text-xs uppercase tracking-wider text-neutral-400">
          {strings.writtenBy}
        </span>
        <h2 className="text-lg font-semibold text-neutral-900 hover:text-violet-600 dark:text-neutral-200 dark:hover:text-violet-500">
          <Link href={`/authors/${authorData.username}`}>
            <a>{authorData.displayName}</a>
          </Link>
        </h2>
        <span className="text-sm text-neutral-500 dark:text-neutral-300 sm:text-base">
          {authorData.bio.text || authorData.bio}
          {authorData.bio.long ? (
            <Link href={`/authors/${authorData?.username}`}>
              <a className="inline ">
                {" "}
                [
                <span className="inline text-violet-600 dark:text-violet-500">
                  ...
                </span>
                ]
              </a>
            </Link>
          ) : (
            ""
          )}
        </span>
      </div>
    </div>
  );
};

export default AuthorInfo;
