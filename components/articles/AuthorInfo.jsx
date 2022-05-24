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
      <Link href={`/authors/${authorData.slug}`}>
        <a className="flex items-center ">
          <Image
            className="rounded-xl"
            src={authorData.avatar.url}
            alt={authorData.avatar.alternativeText}
            width={96}
            height={96}
          />
          {/* TODO: delete authorData.avatarThumbnail.dimensions */}
        </a>
      </Link>
      <div className="flex max-w-lg flex-col ltr:ml-3 rtl:mr-3 ltr:sm:ml-5 rtl:sm:ml-5">
        <span className="text-xs uppercase tracking-wider text-neutral-700 dark:text-neutral-400">
          {strings.writtenBy}
        </span>
        <h2 className="text-lg font-semibold text-black hover:text-violet-600 dark:text-white dark:hover:text-violet-400">
          <Link href={`/authors/${authorData.slug}`}>
            <a>{authorData.displayName}</a>
          </Link>
        </h2>
        <span className="text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
          {authorData.bio.text || authorData.bio}
          {authorData.bio.long ? (
            <Link href={`/authors/${authorData?.slug}`}>
              <a className="inline ">
                {" "}
                [
                <span className="inline text-violet-600 dark:text-violet-400">
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
