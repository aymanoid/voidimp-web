import Layout from "components/common/Layout";
import Metadata from "components/articles/Metadata";
import ShareButtons from "components/articles/ShareButtons";
import HeadingImage from "components/articles/HeadingImage";
import TextSegment from "components/articles/TextSegment";
import ImageSegment from "components/articles/ImageSegment";
import SidebarRecommended from "components/articles/SidebarRecommended";
import TagsList from "components/articles/TagsList";
import AuthorInfo from "components/articles/AuthorInfo";
import LatestArticles from "components/articles/LatestArticles";

const testData = {
  globalData: {
    searchBarLabel: "Search",
    navbarLinks: [
      {
        text: "Latest",
        url: "/latest",
      },
      {
        text: "Leaks",
        url: "/leaks",
      },
      {
        text: "Guides",
        url: "/guides",
      },
    ],
    footerDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id malesuada nibh, in porttitor.",
    footerLinkColumns: [
      {
        title: "Explore",
        links: [
          {
            text: "Latest",
            url: "/latest",
          },
          {
            text: "Leaks",
            url: "/leaks",
          },
          {
            text: "Guides",
            url: "/guides",
          },
        ],
      },
      {
        title: "Links",
        links: [
          {
            text: "Terms",
            url: "/terms",
          },
          {
            text: "Privacy",
            url: "/privacy",
          },
          {
            text: "Copyright",
            url: "/copyright",
          },
        ],
      },
      {
        title: "Contact",
        links: [
          {
            text: "contact@example.com",
            url: "mailto:contact@example.com",
          },
        ],
      },
    ],
    footerRights: "© VoidImp {{year}} - All rights reserved",
    socialLinks: [
      {
        kind: "twitter",
        name: "Twitter",
        url: "https://twitter.com/",
      },
      {
        kind: "instagram",
        name: "Instagram",
        url: "https://instagram.com/",
      },
      {
        kind: "youtube",
        name: "YouTube",
        url: "https://youtube.com/",
      },
      {
        kind: "rss",
        name: "RSS",
        url: "/feed.xml",
      },
    ],
  },
  articleData: {
    headline:
      "This Post Is for Testing Purposes Only, There’s Nothing Interesting Here To Read",
    subheadline: "But you should read it anyway!",
    mainImage: {
      dimensions: {
        width: 1920,
        height: 1080,
      },
      alt: "Cute Deku",
      copyright: null,
      url: "https://images.prismic.io/voidimp/5f8e0c1e-a04e-4ae3-ad37-a4c456a8c00c_vlcsnap-2021-08-24-21h29m08s455.png?auto=compress,format",
    },
    postDate: "2022-01-22T07:04:45+0000",
    updateDate: "2022-02-02T03:08:20+0000",
    segments: [
      {
        type: "text",
        primary:
          '<p>So this is just some random text used for testing, I have no idea what the frick I&#39;m writing, so it&#39;s just a bunch of nonsense, this is a link to <a href="https://google.com" target="undefined" rel="noopener noreferrer">Google</a> to visualize links, and yes I will definitely do that here again, this time for another <a href="null">post</a> in VoidImp.</p>',
      },
      {
        type: "text",
        primary:
          "<p>This is a second paragraph, where we will talk about the picture of Deku in the <em>thumbnail</em> of this post, I just wanna say that he&#39;s so <strong>BEATIFUL</strong> and <strong>HOT</strong>, it&#39;s just incredible how <strong>amazing</strong> he is, not in a weird way obviously.</p>",
      },
      {
        type: "image",
        primary: {
          dimensions: {
            width: 756,
            height: 454,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/voidimp/60ad392c-6d80-4a14-bcdf-136f31b896ce_vlcsnap-2021-06-21-19h59m27s674.png?auto=compress,format",
          caption: "<p><strong>Cat</strong> eating meat</p>",
        },
      },
      {
        type: "text",
        primary:
          "<p>And in this paragraph, I&#39;ll talk about how cute that kitten is, it&#39;s so adorable, and I&#39;m out of things to say, so I&#39;m just gonna say whatever because I don&#39;t know what else to say, I&#39;m such a terrible writer, so I don&#39;t know why the <strong>heck</strong> am I starting a blog.</p>",
      },
    ],
  },
  authorData: {
    displayName: "The Aymane",
    username: "ayman",
    avatarThumbnail: {
      dimensions: {
        width: 128,
        height: 128,
      },
      alt: null,
      copyright: null,
      url: "https://images.prismic.io/voidimp/febe1b40-1dba-42d7-aeb0-1809d91424ab_10882278_f52065a68dad23c3c4a1cc4c49f1422f_170.jpg?auto=compress,format&rect=0,0,170,170&w=128&h=128",
    },
    bio: "I just write random stuff.",
  },
  tagsData: [
    {
      name: "Women",
      id: "women",
    },
    {
      name: "Movies",
      id: "movies",
    },
    {
      name: "Games",
      id: "games",
    },
    {
      name: "MCU",
      id: "mcu",
    },
    {
      name: "Marvel",
      id: "marvel",
    },
  ],
};
const Test = () => {
  const { globalData, articleData, authorData, tagsData } = testData;

  return (
    <Layout globalData={globalData}>
      <div className="container mx-auto max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <article className="flex flex-row flex-wrap">
          <header className="space-y-4">
            <HeadingImage imageData={articleData.mainImage} />
            <h1 className="text-center text-3xl font-extrabold text-neutral-700 dark:text-neutral-200 sm:text-4xl">
              {articleData.headline}
            </h1>
            <p className="text-center text-xl font-semibold text-neutral-600 dark:text-neutral-300 sm:text-3xl">
              {articleData.subheadline}
            </p>
            <div className="flex flex-col justify-between space-y-5 md:flex-row md:items-end md:space-y-0 md:space-x-5">
              <Metadata
                authorData={authorData}
                pubTimestamp={articleData.postDate}
              />
              <ShareButtons />
            </div>
            <div className="border-b border-violet-600/50 dark:border-violet-400/50"></div>
          </header>

          <section className="mt-4 w-full space-y-5 lg:w-2/3 lg:space-y-8 lg:ltr:pr-5 lg:rtl:pl-5 xl:w-3/4 xl:ltr:pr-10 xl:rtl:pl-10">
            {articleData.segments.map((segment, index) => {
              if (segment.type === "text")
                return <TextSegment key={index} textData={segment.primary} />;

              if (segment.type === "image")
                return <ImageSegment key={index} imageData={segment.primary} />;
            })}

            <TagsList tagsData={tagsData} />
            <div className="mt-6 border-b border-violet-600/50 dark:border-violet-400/50"></div>
            <AuthorInfo authorData={authorData} />
          </section>

          <aside className="mt-4 w-full lg:w-1/3 xl:w-1/4">
            <SidebarRecommended />
          </aside>
        </article>
        <div className="mt-6 border-b border-violet-600/50 dark:border-violet-400/50"></div>
        <div className="mt-6">
          <LatestArticles />
        </div>
      </div>
    </Layout>
  );
};

export default Test;
