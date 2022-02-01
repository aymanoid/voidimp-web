import Link from "next/link";

const tagsData = [
  { name: "Women", url: "/women" },
  { name: "Movies", url: "/movies" },
  { name: "Games", url: "/games" },
  { name: "MCU", url: "/mcu" },
  { name: "Marvel", url: "/marvel" },
];

const TagsList = ({ _tagsData }) => {
  return (
    <ul className="mt-6 flex flex-wrap">
      {tagsData.map((tag, index) => {
        return (
          <li key={index}>
            <Link href={tag.url}>
              <a className="mr-2 mb-2 inline-block rounded-xl border-2 border-transparent bg-neutral-200 py-1.5 px-3 text-sm font-semibold text-neutral-700 transition-colors duration-200 hover:border-violet-600 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:border-violet-500 md:py-2 md:px-4">
                {tag.name}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TagsList;
