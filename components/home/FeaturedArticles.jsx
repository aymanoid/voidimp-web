import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const mockArticlesData = [
  {
    headline: "TikTok Cosplayer Yandere Freak Charged With Manslaughter",
    subheadline: "Activision Blizzard games won't be Xbox exclusives just yet.",
    slug: "",
    mainImage: {
      url: "https://images.unsplash.com/photo-1615961943966-ab7585d5bf4e",
      alternativeText: "s1",
    },
    category: { name: "News" },
  },
  {
    headline:
      "Black Myth: Wukong New Year Trailer Reveals Cats Can Be Difficult Mo-Cap Actors",
    subheadline:
      "The next Assassin's Creed game could be much smaller in scope than we're used to.",
    slug: "",
    mainImage: {
      url: "https://images.unsplash.com/photo-1579400628679-baa28dadbd54",
      alternativeText: "s2",
    },
    category: { name: "News" },
  },
  {
    headline: "Final Fantasy 14: Bardam’s Mettle Dungeon Guide",
    subheadline:
      "As Game Pass becomes even more powerful, indie devs are worried they'll have no choice but to be on it.",
    slug: "",
    mainImage: {
      url: "https://images.unsplash.com/photo-1605804097616-ed12e891e514",
      alternativeText: "s3",
    },
    category: { name: "News" },
  },
  {
    headline: "So, What Games Are Women Supposed To Play, Exactly?",
    subheadline: "It's a good time to be a Gen 4 fan.",
    slug: "",
    mainImage: {
      url: "https://images.unsplash.com/photo-1609365410860-bdd108741ef5",
      alternativeText: "s4",
    },
    category: { name: "News" },
  },
];

const FeaturedArticles = ({
  isMocked,
  articlesData = isMocked ? mockArticlesData : [],
}) => {
  const { locale } = useRouter();

  const strings = {
    en: {
      featured: "Featured Articles",
      noArticles: "This section has no articles.",
    },
    ar: {
      featured: "مقالات مميزة",
      noArticles: "ليس لهذا القسم أي مقالات.",
    },
  }[locale];

  return (
    <section className="mt-4 flex w-full flex-col md:mt-0 md:w-2/5 md:px-8">
      <h2 className="text-xl font-bold uppercase text-violet-600 shadow-violet-400/40 drop-shadow-lg dark:text-violet-400">
        {`🌟 ${strings.featured}`}
      </h2>
      {articlesData.length ? (
        articlesData.map((articleData) => {
          return (
            <article
              className="mt-6 border-b border-black/50 pb-6 dark:border-white/50"
              key={articleData.slug}
            >
              <Link href={`/articles/${articleData.slug}`}>
                <a className="flex flex-row decoration-violet-600 decoration-2 underline-offset-2 hover:underline dark:decoration-violet-400">
                  <div className="w-3/5">
                    <span className="inline-block text-sm uppercase text-violet-600 dark:text-violet-400">
                      {articleData.category.name}
                    </span>

                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {articleData.headline}
                    </h3>
                  </div>
                  <figure className="w-2/5">
                    <Image
                      className="rounded-3xl"
                      src={articleData.mainImage.url}
                      alternativeText={articleData.mainImage.alternativeText}
                      width={320}
                      height={320 / (16 / 9)}
                    />
                  </figure>
                </a>
              </Link>
            </article>
          );
        })
      ) : (
        <div className="mt-6">{strings.noArticles}</div>
      )}
    </section>
  );
};

export default FeaturedArticles;
