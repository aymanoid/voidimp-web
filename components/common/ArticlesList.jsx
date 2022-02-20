import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const articlesData = [
  {
    headline: "TikTok Cosplayer Yandere Freak Charged With Manslaughter",
    subheadline: "Activision Blizzard games won't be Xbox exclusives just yet.",
    url: "/haha1",
    mainImage: {
      url: "https://images.unsplash.com/photo-1615961943966-ab7585d5bf4e",
      alt: "s1",
    },
    categoryName: "News",
  },
  {
    headline:
      "Black Myth: Wukong New Year Trailer Reveals Cats Can Be Difficult Mo-Cap Actors",
    subheadline:
      "The next Assassin's Creed game could be much smaller in scope than we're used to.",
    url: "/haha1",
    mainImage: {
      url: "https://images.unsplash.com/photo-1579400628679-baa28dadbd54",
      alt: "s2",
    },
    categoryName: "News",
  },
  {
    headline: "Final Fantasy 14: Bardam’s Mettle Dungeon Guide",
    subheadline:
      "As Game Pass becomes even more powerful, indie devs are worried they'll have no choice but to be on it.",
    url: "/haha1",
    mainImage: {
      url: "https://images.unsplash.com/photo-1605804097616-ed12e891e514",
      alt: "s3",
    },
    categoryName: "News",
  },
  {
    headline: "So, What Games Are Women Supposed To Play, Exactly?",
    subheadline: "It's a good time to be a Gen 4 fan.",
    url: "/haha1",
    mainImage: {
      url: "https://images.unsplash.com/photo-1609365410860-bdd108741ef5",
      alt: "s4",
    },
    categoryName: "News",
  },
];

const formatDate = (timestamp, locale) => {
  const date = new Date(timestamp);

  const options = {
    dateStyle: "long",
    numberingSystem: "latn",
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
};

const ArticlesList = ({ topStr, noArticlesStr, articlesData }) => {
  const { locale } = useRouter();

  return (
    <div className="mx-auto mt-12 max-w-4xl">
      <h2 className="text-xl font-bold uppercase text-violet-600 shadow-violet-400/40 drop-shadow-lg dark:text-violet-400">
        {topStr}
      </h2>
      {articlesData.length ? (
        articlesData.map((articleData, index) => {
          return (
            <article
              className="mt-6 flex flex-row flex-wrap border-b border-black/50 pb-6 dark:border-white/50 sm:flex-nowrap"
              key={index}
            >
              <figure className="w-full ltr:mr-5 rtl:ml-5 sm:w-1/2">
                <Link href={`/articles/${articleData.slug}`}>
                  <a className="decoration-violet-600 decoration-2 underline-offset-2 hover:underline dark:decoration-violet-400">
                    <Image
                      className="rounded-3xl"
                      src={articleData.mainImage.url}
                      alt={articleData.mainImage.alt}
                      width={640}
                      height={640 / (16 / 9)}
                      priority={index === 0}
                    />
                  </a>
                </Link>
              </figure>
              <div className="w-full sm:w-1/2">
                <Link href="/categories/news">
                  <a>
                    <span className="mt-4 inline-block rounded-full bg-violet-600 px-2 py-1 align-top font-extrabold uppercase text-white dark:bg-violet-400 dark:text-neutral-900 sm:mt-0">
                      {articleData.categoryName}
                    </span>
                  </a>
                </Link>
                <Link href={`/articles/${articleData.slug}`}>
                  <a>
                    <h3 className="mt-2 text-2xl font-semibold text-black decoration-violet-600 decoration-2 underline-offset-2 hover:underline dark:text-white dark:decoration-violet-400">
                      {articleData.headline}
                    </h3>
                  </a>
                </Link>
                <p className="mt-2 text-neutral-700 dark:text-neutral-200">
                  {articleData.subheadline}
                </p>
                <time
                  className="mt-2 inline-block text-sm uppercase text-neutral-700 dark:text-neutral-400"
                  dateTime={articleData.postDate}
                >
                  {formatDate(articleData.postDate, locale)}
                </time>
              </div>
            </article>
          );
        })
      ) : (
        <p className="mt-6">{noArticlesStr}</p>
      )}
    </div>
  );
};

export default ArticlesList;
