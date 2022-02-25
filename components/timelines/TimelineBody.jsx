import Image from "next/image";

const TimelineBody = ({ _timelineData }) => {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-9 px-2">
      {/* <!-- Stack 1 --> */}
      <div className="col-span-4 h-full w-full ">
        <div className="h-full w-full rounded-md bg-indigo-400 p-2 md:pl-4">
          <h1 className="py-2 text-xl font-medium text-white">Title</h1>
          <p className="text-xs text-gray-100 sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
            quas omnis vero totam ullam, reprehenderit ratione pariatur
            accusamus suscipit odit nostrum?
          </p>
        </div>
      </div>
      <div className="relative col-span-1 flex h-full w-full items-center justify-center">
        <div className="h-full w-1 bg-indigo-300"></div>
        <div className="absolute z-10 h-6 w-6 rounded-full bg-indigo-400 text-center text-white">
          1
        </div>
      </div>
      <div className="col-span-4 h-full w-full"></div>

      {/* <!-- Stack 2 --> */}
      <div className="col-span-4 h-full w-full"></div>
      <div className="relative col-span-1 flex h-full w-full items-center justify-center">
        <div className="h-full w-1 bg-indigo-300"></div>
        <div className="absolute z-10 h-6 w-6 rounded-full bg-indigo-400 text-center text-white">
          2
        </div>
      </div>
      <div className="col-span-4 h-full w-full ">
        <div className="h-full w-full rounded-md bg-indigo-400 p-2 md:pl-4">
          <h1 className="py-2 text-xl font-medium text-white">Title</h1>
          <p className="text-xs text-gray-100 sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
            quas omnis vero totam ullam, reprehenderit ratione pariatur
            accusamus suscipit odit nostrum?
          </p>
        </div>
      </div>

      {/* <!-- Stack 3 --> */}
      <div className="col-span-4 h-full w-full ">
        <div className="h-full w-full rounded-md bg-indigo-400 p-2 md:pl-4">
          <h1 className="py-2 text-xl font-medium text-white">Title</h1>
          <p className="text-xs text-gray-100 sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
            quas omnis vero totam ullam, reprehenderit ratione pariatur
            accusamus suscipit odit nostrum?
          </p>
        </div>
      </div>
      <div className="relative col-span-1 flex h-full w-full items-center justify-center">
        <div className="h-full w-1 bg-indigo-300"></div>
        <div className="absolute z-10 h-6 w-6 rounded-full bg-indigo-400 text-center text-white">
          3
        </div>
      </div>
      <div className="col-span-4 h-full w-full"></div>
    </div>
  );
};

export default TimelineBody;
