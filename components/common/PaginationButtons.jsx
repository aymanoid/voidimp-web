import { useRouter } from "next/router";
import Link from "next/link";
import ArrowSvg from "components/icons/arrow.svg";

const paginationData = {
  page: 2,
  resultsPerPage: 20,
  resultsSize: 20,
  totalResultsSize: 596,
  totalPages: 30,
  nextPage: 3,
  prevPage: 1,
};

const PaginationButtons = ({ paginationData }) => {
  const { locale } = useRouter();

  const strings = {
    en: {
      showing: "Showing",
      to: "to",
      of: "of",
      articles: "Articles",
      prev: "Prev",
      next: "Next",
    },
    ar: {
      showing: "إظهار",
      to: "إلى",
      of: "من أصل",
      articles: "مقالات",
      prev: "السابق",
      next: "التالي",
    },
  }[locale];

  const fromCount =
    (paginationData.page - 1) * paginationData.resultsPerPage + 1;
  const toCount = Math.min(
    paginationData.totalResultsSize,
    paginationData.page * paginationData.resultsPerPage
  );

  return (
    <div className="mt-6 flex flex-col items-center">
      <span className="text-sm text-neutral-700 dark:text-neutral-400">
        {strings.showing}{" "}
        <span className="font-semibold text-black dark:text-white">
          {fromCount}
        </span>{" "}
        {strings.to}{" "}
        <span className="font-semibold text-black dark:text-white">
          {toCount}
        </span>{" "}
        {strings.of}{" "}
        <span className="font-semibold text-black dark:text-white">
          {paginationData.totalResultsSize}
        </span>{" "}
        {strings.articles}
      </span>
      <div className="mt-2 inline-flex space-x-1 rtl:space-x-reverse">
        {paginationData.prevPage && (
          <Link href={prevHref}>
            <a className="dark:hover:bg-400-700 inline-flex items-center border bg-transparent py-2 px-4 text-sm font-medium hover:border-transparent hover:bg-violet-600 ltr:rounded-l-full ltr:rounded-r-lg rtl:rounded-l-lg rtl:rounded-r-full dark:border-violet-400 dark:bg-transparent dark:hover:bg-violet-400">
              <ArrowSvg
                className="h-5 w-5 ltr:mr-2 ltr:-scale-x-100 rtl:ml-2 rtl:scale-x-100"
                viewBox="0 0 24 24"
                fill="currentColor"
              />
              {strings.prev}
            </a>
          </Link>
        )}
        {paginationData.nextPage && (
          <Link href={nextHref}>
            <a className="inline-flex items-center border border-violet-600 bg-transparent py-2 px-4 text-sm font-semibold hover:border-transparent hover:bg-violet-600 ltr:rounded-r-full ltr:rounded-l-lg rtl:rounded-r-lg rtl:rounded-l-full dark:border-violet-400 dark:bg-transparent dark:hover:bg-violet-400">
              {strings.next}
              <ArrowSvg
                className="h-5 w-5 ltr:ml-2 ltr:scale-x-100 rtl:mr-2 rtl:-scale-x-100"
                viewBox="0 0 24 24"
                fill="currentColor"
              />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PaginationButtons;
