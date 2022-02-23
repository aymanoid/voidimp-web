import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const mockArticlesData = [
  {
    headline: "TikTok Cosplayer Yandere Freak Charged With Manslaughter",
    slug: "",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1615961943966-ab7585d5bf4e",
      alt: "s1",
    },
  },
  {
    headline:
      "Black Myth: Wukong New Year Trailer Reveals Cats Can Be Difficult Mo-Cap Actors",
    slug: "",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1579400628679-baa28dadbd54",
      alt: "s2",
    },
  },
  {
    headline: "Final Fantasy 14: Bardam’s Mettle Dungeon Guide",
    slug: "",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1605804097616-ed12e891e514",
      alt: "s3",
    },
  },
  {
    headline: "So, What Games Are Women Supposed To Play, Exactly?",
    slug: "",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1609365410860-bdd108741ef5",
      alt: "s4",
    },
  },
];

const LatestArticles = ({
  isMocked,
  articlesData = isMocked ? mockArticlesData : [],
}) => {
  const { locale } = useRouter();

  const strings = {
    en: {
      latest: "Latest Articles",
      noArticles: "This section has no articles.",
    },
    ar: { latest: "أحدث المقالات", noArticles: "ليس لهذا القسم أي مقالات." },
  }[locale];

  return (
    <section className="relative">
      <h3 className="text-2xl font-bold uppercase text-violet-600 dark:text-violet-400">
        {strings.latest}
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-8">
        {articlesData.length ? (
          articlesData.map((articleData, index) => {
            return (
              <article key={index}>
                <Link href={`/articles/${articleData.slug}`}>
                  <a className="decoration-violet-600 decoration-2 underline-offset-2 hover:underline dark:decoration-violet-400">
                    <figure>
                      <Image
                        className="rounded-xl"
                        src={articleData.thumbnail.url}
                        alt={articleData.thumbnail.alt}
                        width={640}
                        height={640 / (16 / 9)}
                      />
                    </figure>
                    <h3 className="font-semibold text-black dark:text-white ">
                      {articleData.headline}
                    </h3>
                  </a>
                </Link>
              </article>
            );
          })
        ) : (
          <p>{strings.noArticles}</p>
        )}
      </div>
    </section>
  );
};

export default LatestArticles;
