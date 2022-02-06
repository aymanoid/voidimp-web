import { useRouter } from "next/router";
import Link from "next/link";
import Imgix from "react-imgix";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

const articlesData = [
  {
    title: "TikTok Cosplayer Yandere Freak Charged With Manslaughter",
    url: "/haha1",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1615961943966-ab7585d5bf4e",
      alt: "s1",
    },
  },
  {
    title:
      "Black Myth: Wukong New Year Trailer Reveals Cats Can Be Difficult Mo-Cap Actors",
    url: "/haha1",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1579400628679-baa28dadbd54",
      alt: "s2",
    },
  },
  {
    title: "Final Fantasy 14: Bardam’s Mettle Dungeon Guide",
    url: "/haha1",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1605804097616-ed12e891e514",
      alt: "s3",
    },
  },
  {
    title: "So, What Games Are Women Supposed To Play, Exactly?",
    url: "/haha1",
    thumbnail: {
      url: "https://images.unsplash.com/photo-1609365410860-bdd108741ef5",
      alt: "s4",
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
      <h3 className="text-lg font-bold uppercase text-neutral-600 shadow-violet-500/40 drop-shadow-lg dark:text-neutral-300">
        🔮 {strings.recommended}
      </h3>
      <div className="space-y-6 pt-6">
        {articlesData.map((articleData, index) => {
          return (
            <article key={index}>
              <Link href={articleData.url}>
                <a className="decoration-violet-600 decoration-2 underline-offset-2 hover:underline dark:decoration-violet-500">
                  <Imgix
                    className="lazyload rounded-2xl"
                    src={articleData.thumbnail.url}
                    alt={articleData.thumbnail.alt}
                    sizes="100vw"
                    attributeConfig={{
                      src: "data-src",
                      srcSet: "data-srcset",
                      sizes: "data-sizes",
                    }}
                  />
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
