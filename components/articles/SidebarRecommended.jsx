import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const articlesData = [
  {
    title: "TikTok Cosplayer Yandere Freak Charged With Manslaughter",
    url: "/haha1",
    thumbnail: { url: "https://i.imgur.com/r9uzP8l.jpeg", alt: "s1" },
  },
  {
    title:
      "Black Myth: Wukong New Year Trailer Reveals Cats Can Be Difficult Mo-Cap Actors",
    url: "/haha1",
    thumbnail: { url: "https://i.imgur.com/4rYm8jR.png", alt: "s2" },
  },
  {
    title: "Final Fantasy 14: Bardam’s Mettle Dungeon Guide",
    url: "/haha1",
    thumbnail: { url: "https://i.imgur.com/krNaVuU.jpeg", alt: "s3" },
  },
  {
    title: "So, What Games Are Women Supposed To Play, Exactly?",
    url: "/haha1",
    thumbnail: { url: "https://i.imgur.com/HbQN8w0.png", alt: "s4" },
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
                <a>
                  <Image
                    src={articleData.thumbnail.url}
                    alt={articleData.thumbnail.alt}
                    width={1920 / 3}
                    height={1080 / 3}
                    className="rounded-2xl"
                  />
                  <h3 className="pt-2 font-semibold text-neutral-700 decoration-violet-600 decoration-2 underline-offset-2 hover:underline dark:text-neutral-200 dark:decoration-violet-500">
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
