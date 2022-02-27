import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const mockArticlesData = [
  {
    title: "TikTok Cosplayer Yandere Freak Charged With Manslaughter",
    url: "/haha1",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1615961943966-ab7585d5bf4e",
      alt: "s1",
      dimensions: {
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    title:
      "Black Myth: Wukong New Year Trailer Reveals Cats Can Be Difficult Mo-Cap Actors",
    url: "/haha1",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1579400628679-baa28dadbd54",
      alt: "s2",
      dimensions: {
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    title: "Final Fantasy 14: Bardam’s Mettle Dungeon Guide",
    url: "/haha1",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1605804097616-ed12e891e514",
      alt: "s3",
      dimensions: {
        width: 1920,
        height: 1080,
      },
    },
  },
  {
    title: "So, What Games Are Women Supposed To Play, Exactly?",
    url: "/haha1",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1609365410860-bdd108741ef5",
      alt: "s4",
      dimensions: {
        width: 1920,
        height: 1080,
      },
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
          articlesData.map((articleData, index) => {
            return (
              <article key={index}>
                <Link href={articleData.url}>
                  <a className="decoration-violet-600 decoration-2 underline-offset-2 hover:underline dark:decoration-violet-400">
                    <figure>
                      <Image
                        className="rounded-3xl"
                        src={articleData.thumbnail.url}
                        alt={articleData.thumbnail.alt}
                        width={768}
                        height={768 / (16 / 9)}
                      />
                      {/* TODO: delete articleData.thumbnail.dimensions */}

                      {/* TODO: add and stylize figurecaption tag */}
                    </figure>

                    <h3 className="pt-2 font-semibold text-black dark:text-white">
                      {articleData.title}
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
