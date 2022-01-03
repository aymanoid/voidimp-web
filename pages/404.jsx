import Metadata from "components/common/Metadata";
import Link from "next/link";

const FourZeroFour = () => {
  return (
    <div className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-violet-500 text-6xl font-extrabold leading-9 tracking-tight md:text-8xl mb-8 md:leading-14 md:px-6">
          404
        </h1>
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          {"Oh no! Seems like you've fallen into the void!"}
        </p>
        <p className="mb-8">
          {"I suggest you go back to safety before it's too late"}
        </p>
        <Link href="/" passHref>
          <a className="bg-transparent hover:bg-violet-500 font-semibold py-2 px-4 border border-violet-500 hover:border-transparent rounded-full">
            Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FourZeroFour;
