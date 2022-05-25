import Link from "next/link";
import Image from "next/image";

const HeroArticle = ({ articleData }) => {
  return (
    <article>
      <Link href={`/articles/${articleData.slug}`}>
        <a className="group space-y-4">
          <Image
            className="rounded-3xl"
            src={articleData.mainImage.url}
            alt={articleData.mainImage.alternativeText}
            width={768}
            height={768 / (16 / 9)}
            priority
          />
          <h3 className="text-center text-xl font-extrabold text-black decoration-violet-600 decoration-2 underline-offset-4 group-hover:underline dark:text-white dark:decoration-violet-400 sm:text-2xl">
            {articleData.headline}
          </h3>
          <p className="text-center text-lg font-semibold text-neutral-600 dark:text-neutral-300 sm:text-xl">
            {articleData.subheadline}
          </p>
        </a>
      </Link>
    </article>
  );
};

export default HeroArticle;
