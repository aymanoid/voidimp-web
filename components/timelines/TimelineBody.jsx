import Image from "next/image";

const timelineData = [
  {
    title: "Captain America: The First Avenger",
    portion: "",
    notes: "",
    direction: "left",
  },
  {
    title: "Agent Carter",
    portion: "season 01",
    notes: "",
    direction: "right",
  },
  {
    title: "Agent Carter",
    portion: "season 02",
    notes: "",
    direction: "right",
  },
  {
    title: "Agent Carter",
    portion: "one-shot on Iron Man 3 DVD",
    notes: "",
    direction: "right",
  },
  {
    title: "Captain Marvel",
    portion: "",
    notes: "",
    direction: "left",
  },
  {
    title: "Iron Man",
    portion: "",
    notes: "",
    direction: "left",
  },
  {
    title: "Iron Man 2",
    portion: "",
    notes: "",
    direction: "left",
  },
  {
    title: "The Incredible Hulk",
    portion: "",
    notes: "",
    direction: "left",
  },
];

const TimelineBody = ({ _timelineData }) => {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-9 px-2">
      {timelineData.map((e, i) => {
        if (e.direction === "left") {
          return (
            <>
              <div className="col-span-4 h-full w-full">
                <div className="h-full w-full rounded-md p-2 md:pl-4">
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    {e.title}
                  </h2>
                  <p className="text-neutral-700 dark:text-neutral-400">
                    {e.portion}
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
            </>
          );
        }
        if (e.direction === "right") {
          return (
            <>
              <div className="col-span-4 h-full w-full"></div>
              <div className="relative col-span-1 flex h-full w-full items-center justify-center">
                <div className="h-full w-1 bg-violet-600 dark:bg-violet-400"></div>
                <div className="absolute z-10 h-6 w-6 rounded-full bg-violet-400 text-center text-black dark:bg-violet-600 dark:text-white">
                  {i + 1}
                </div>
              </div>
              <div className="col-span-4 h-full w-full ">
                <div className="h-full w-full rounded-md p-2 md:pl-4">
                  <h2 className="text-xl font-semibold text-black dark:text-white">
                    {e.title}
                  </h2>
                  <p className="text-neutral-700 dark:text-neutral-400">
                    {e.portion}
                  </p>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default TimelineBody;
