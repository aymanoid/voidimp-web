import Link from "next/link";
import Image from "next/image";

const articlesData = [
  {
    title: "TikTok Cosplayer Yandere Freak Charged With Manslaughter",
    url: "/haha1",
    thumbnail: { url: "https://i.imgur.com/cfzPJwa.jpeg", alt: "s1" },
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

const SidebarTrending = ({ _articlesData }) => {
  return (
    <section>
      <h3 className="pb-4 text-center text-lg font-semibold uppercase text-neutral-600 dark:text-neutral-300">
        Popular Now
      </h3>
      <div className="columns-1 space-y-6">
        {articlesData.map((articleData, index) => {
          return (
            <article key={index}>
              <Link href={articleData.url}>
                <a>
                  <div className="">
                    <Image
                      src={articleData.thumbnail.url}
                      alt={articleData.thumbnail.alt}
                      width={1920 / 6}
                      height={1080 / 6}
                      className="rounded"
                    />
                  </div>
                  <h3 className="text-neutral-700 dark:text-neutral-200">
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

export default SidebarTrending;
