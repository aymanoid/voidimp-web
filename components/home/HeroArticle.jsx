import Link from "next/link";
import Image from "next/image";

const articleData = {
  headline: "TikTok Cosplayer Yandere Freak Charged With Manslaughter",
  subheadline: "Activision Blizzard games won't be Xbox exclusives just yet.",
  slug: "haha1",
  mainImage: {
    url: "https://images.unsplash.com/photo-1615961943966-ab7585d5bf4e",
    alt: "s1",
  },
  postDate: "2021-03-09T01:02:09+0000",
};

const HeroArticle = ({ _articleData }) => {
  return (
    <article>
      <Link href={`/articles/${articleData.slug}`}>
        <a className="group space-y-4">
          <Image
            className="rounded-3xl"
            src={articleData.mainImage.url}
            alt={articleData.mainImage.alt}
            layout="responsive"
            width={768}
            height={768 / (16 / 9)}
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
