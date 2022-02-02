import Link from "next/link";
import Image from "next/image";

const authorData = { name: "The Ayman", bio: "Does cool stuff" };

const AuthorInfo = ({ authorData }) => {
  return (
    <div className="mt-6 flex">
      <Link href={`/authors/${authorData?.username}`}>
        <a className="flex items-center space-x-2">
          <div className="relative inline-flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden text-lg font-semibold uppercase sm:h-24 sm:w-24 sm:text-xl ">
            <Image
              src={authorData?.pfpThumbnail.url}
              alt={authorData?.pfpThumbnail.alt}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full rounded-xl object-cover"
            />
          </div>
        </a>
      </Link>
      <div className="ml-3 flex max-w-lg flex-col sm:ml-5">
        <span className="text-xs uppercase tracking-wider text-neutral-400">
          Written By
        </span>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          <Link href={`/authors/${authorData?.username}`}>
            <a>{authorData?.displayName}</a>
          </Link>
        </h2>
        <span className="text-sm text-neutral-500 dark:text-neutral-300 sm:text-base">
          Vitae id veniam saepe. Rem nobis earum ab. Quos expedita ducimus
          fugit.
          {
            "Vitae id veniam saepe. Rem nobis earum ab. Quos expedita ducimus fugit."
              .length
          }
        </span>
      </div>
    </div>
  );
};

export default AuthorInfo;