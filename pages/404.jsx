import Layout from "components/common/Layout";
import { PageSEO } from "components/common/SEO";
import Link from "next/link";

const FourZeroFour = ({ headerData, footerData, pageSEO, pageData }) => {
  return (
    <Layout headerData={headerData} footerData={footerData}>
      <PageSEO title={pageSEO.title} />
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-violet-500 text-6xl font-extrabold leading-9 tracking-tight md:text-8xl mb-8 md:leading-14 md:px-6">
            404
          </h1>
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            {pageData.para1}
          </p>
          <p className="mb-8">{pageData.para2}</p>
          <Link href="/">
            <a className="bg-transparent hover:bg-violet-500 font-semibold py-2 px-4 border border-violet-500 hover:border-transparent rounded-full">
              {pageData.backButton}
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = ({ locale }) => {
  const data = {
    en: {
      headerData: {
        search: "Search",
        navLinks: [
          { text: "Latest", url: "/latest" },
          { text: "Leaks", url: "/leaks" },
          { text: "Guides", url: "/guides" },
        ],
      },
      footerData: {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id malesuada nibh, in porttitor.",
        footerLinks: [
          {
            title: "Explore",
            links: [
              { text: "Latest", url: "/latest" },
              { text: "Leaks", url: "/leaks" },
              { text: "Guides", url: "/guides" },
            ],
          },
          {
            title: "Links",
            links: [
              { text: "Terms", url: "/terms" },
              { text: "Privacy", url: "/privacy" },
              { text: "Copyright", url: "/copyright" },
            ],
          },
        ],
        footerContact: {
          title: "Contact",
          content: ["+1 234 567 8910", "contact@example.com"],
        },
        rights: "© VoidImp {{year}} - All rights reserved",
      },
      pageSEO: { title: "Page Not Found | VoidImp" },
      pageData: {
        para1: "Oh no! Seems like you've fallen into the void!",
        para2: "I suggest you go back to safety before it's too late.",
        backButton: "Go Back",
      },
    },
    ar: {
      headerData: {
        search: "بحث",
        navLinks: [
          { text: "آخر", url: "/latest" },
          { text: "تسريبات", url: "/leaks" },
          { text: "إرشادات", url: "/guides" },
        ],
      },
      footerData: {
        description:
          "الألم نفسه هو الحب ، نظام التخزين الرئيسي. ربما هذه فكرة سخيفة ، في العبارة.",
        footerLinks: [
          {
            title: "إكتشف",
            links: [
              { text: "آخر", url: "/latest" },
              { text: "تسريبات", url: "/leaks" },
              { text: "إرشادات", url: "/guides" },
            ],
          },
          {
            title: "روابط",
            links: [
              { text: "مصطلحات", url: "/terms" },
              { text: "خصوصية", url: "/privacy" },
              { text: "حقوق", url: "/copyright" },
            ],
          },
        ],
        footerContact: {
          title: "إتصل",
          content: ["+1 234 567 8910", "contact@example.com"],
        },
        rights: "© VoidImp {{year}} - جميع الحقوق محفوظة",
      },
      pageSEO: { title: "الصفحة غير موجودة | VoidImp" },
      pageData: {
        para1: "!أوه لا! يبدو أنك سقطت في الفراغ",
        para2: ".أقترح عليك العودة إلى بر الأمان قبل فوات الأوان",
        backButton: "عودة",
      },
    },
  };

  return {
    props: {
      ...data[locale],
    },
  };
};

export default FourZeroFour;
