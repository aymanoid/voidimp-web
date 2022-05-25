import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const mockArticlesData = [
  {
    headline: "TikTok Cosplayer Yandere Freak Charged With Manslaughter",
    slug: "haha1",
    mainImage: {
      url: "https://images.unsplash.com/photo-1615961943966-ab7585d5bf4e",
      alternativeText: "s1",
    },
  },
  {
    headline:
      "Black Myth: Wukong New Year Trailer Reveals Cats Can Be Difficult Mo-Cap Actors",
    slug: "haha1",
    mainImage: {
      url: "https://images.unsplash.com/photo-1579400628679-baa28dadbd54",
      alternativeText: "s2",
    },
  },
  {
    headline: "Final Fantasy 14: Bardam’s Mettle Dungeon Guide",
    slug: "haha1",
    mainImage: {
      url: "https://images.unsplash.com/photo-1605804097616-ed12e891e514",
      alternativeText: "s3",
    },
  },
  {
    headline: "So, What Games Are Women Supposed To Play, Exactly?",
    slug: "haha1",
    mainImage: {
      url: "https://images.unsplash.com/photo-1609365410860-bdd108741ef5",
      alternativeText: "s4",
    },
  },
];

const SidebarRecommended = ({
  isMocked,
  articlesData = isMocked ? mockArticlesData : [],
}) => {
  const { locale } = useRouter();

  const strings = {
    en: {
      recommended: "Recommended",
      noArticles: "This section has no articles.",
    },
    ar: { recommended: "موصى به", noArticles: "ليس لهذا القسم أي مقالات." },
  }[locale];

  return (
    <section className="relative">
      <h3 className="text-lg font-bold uppercase text-neutral-600 shadow-violet-400/40 drop-shadow-lg dark:text-neutral-300">
        🔮 {strings.recommended}
      </h3>
      <div className="space-y-6 pt-6">
        {articlesData.length ? (
          articlesData.map((articleData) => {
            return (
              <article key={articleData.slug}>
                <Link href={articleData.slug}>
                  <a className="decoration-violet-600 decoration-2 underline-offset-2 hover:underline dark:decoration-violet-400">
                    <figure>
                      <Image
                        className="rounded-3xl"
                        src={articleData.mainImage.url}
                        alt={articleData.mainImage.alternativeText}
                        width={768}
                        height={768 / (16 / 9)}
                      />
                      {/* TODO: delete articleData.mainImage.dimensions */}

                      {/* TODO: add and stylize figurecaption tag */}
                    </figure>

                    <h3 className="pt-2 font-semibold text-black dark:text-white">
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

export default SidebarRecommended;
