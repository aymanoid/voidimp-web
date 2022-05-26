import { useRouter } from "next/router";
import { useState } from "react";
import { Fragment } from "react";

const TimelineSegment = ({ timelineData }) => {
  const { locale } = useRouter();
  const [usingEnTiles, setUsingEnTiles] = useState(false);

  return (
    <>
      {locale === "ar" && (
        <div className="flex justify-end">
          <button
            onClick={() => setUsingEnTiles(!usingEnTiles)}
            className="rounded-full border border-violet-600 bg-transparent px-4 py-2 font-semibold hover:border-transparent hover:bg-violet-600 dark:border-violet-400 dark:hover:bg-violet-400"
          >
            {usingEnTiles
              ? "إستخدم العناوين العربية"
              : "إستخدم العناوين الإنجليزية"}
          </button>
        </div>
      )}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-9 px-2">
        {timelineData.map((e, i) => {
          if (e.direction === "left") {
            return (
              <Fragment key={i}>
                <div className="col-span-4 h-full w-full">
                  <div className="h-full w-full rounded-md p-2 ltr:text-right rtl:text-left md:pl-4">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                      {usingEnTiles && locale !== "en" ? e.enTitle : e.title}
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-400">
                      {e.note}
                    </p>
                  </div>
                </div>
                <div className="relative col-span-1 flex h-full w-full items-center justify-center">
                  <div className="h-full w-1 bg-violet-600 dark:bg-violet-400"></div>
                  <div className="absolute z-10 h-6 w-6 rounded-full bg-violet-400 text-center text-black dark:bg-violet-600 dark:text-white">
                    {i + 1}
                  </div>
                </div>
                <div className="col-span-4 h-full w-full"></div>
              </Fragment>
            );
          }
          if (e.direction === "right") {
            return (
              <Fragment key={i}>
                <div className="col-span-4 h-full w-full"></div>
                <div className="relative col-span-1 flex h-full w-full items-center justify-center">
                  <div className="h-full w-1 bg-violet-600 dark:bg-violet-400"></div>
                  <div className="absolute z-10 h-6 w-6 rounded-full bg-violet-400 text-center text-black dark:bg-violet-600 dark:text-white">
                    {i + 1}
                  </div>
                </div>
                <div className="col-span-4 h-full w-full ">
                  <div className="h-full w-full rounded-md p-2 ltr:text-left rtl:text-right md:pl-4">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                      {usingEnTiles && locale !== "en" ? e.enTitle : e.title}
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-400">
                      {e.note}
                    </p>
                  </div>
                </div>
              </Fragment>
            );
          }
        })}
      </div>
    </>
  );
};

export default TimelineSegment;
