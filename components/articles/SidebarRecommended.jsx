import { useRouter } from "next/router";
import Link from "next/link";
import Imgix, { Picture, Source } from "react-imgix";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

const articlesData = [
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

const SidebarRecommended = ({ _articlesData }) => {
  const { locale } = useRouter();

  const strings = {
    en: { recommended: "Recommended" },
    ar: { recommended: "موصى به" },
  }[locale];

  return (
    <section className="relative mt-6 lg:mt-0">
      <h3 className="text-lg font-bold uppercase text-neutral-600 shadow-violet-400/40 drop-shadow-lg dark:text-neutral-300">
        🔮 {strings.recommended}
      </h3>
      <div className="space-y-6 pt-6">
        {articlesData.map((articleData, index) => {
          return (
            <article key={index}>
              <Link href={articleData.url}>
                <a className="decoration-violet-600 decoration-2 underline-offset-2 hover:underline dark:decoration-violet-400">
                  <figure>
                    <Picture>
                      <Source
                        src={articleData.thumbnail.url}
                        width={320}
                        height={320 / (16 / 9)}
                        htmlAttributes={{ media: "(min-width: 1024px)" }}
                      />
                      <Source
                        src={articleData.thumbnail.url}
                        width={1024}
                        height={1024 / (16 / 9)}
                        htmlAttributes={{ media: "(min-width: 768px)" }}
                      />
                      <Source
                        src={articleData.thumbnail.url}
                        width={768}
                        height={768 / (16 / 9)}
                        htmlAttributes={{ media: "(min-width: 640px)" }}
                      />
                      <Source
                        src={articleData.thumbnail.url}
                        width={640}
                        height={640 / (16 / 9)}
                        htmlAttributes={{ media: "(min-width: 0px)" }}
                      />
                      <Imgix
                        className="lazyload rounded-3xl"
                        src={articleData.thumbnail.url}
                        width={articleData.thumbnail.dimensions.width}
                        height={articleData.thumbnail.dimensions.height}
                        htmlAttributes={{ alt: articleData.thumbnail.alt }}
                        attributeConfig={{
                          src: "data-src",
                          srcSet: "data-srcset",
                          sizes: "data-sizes",
                        }}
                      />
                      {/* TODO: add and stylize figurecaption tag */}
                    </Picture>
                  </figure>

                  <h3 className="pt-2 font-semibold text-neutral-700 dark:text-neutral-200 ">
                    {articleData.title}
                  </h3>
                </a>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SidebarRecommended;
