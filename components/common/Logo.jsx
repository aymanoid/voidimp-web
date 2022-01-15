import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <a href="/">
        <span>
          <Image
            src="/logo.svg"
            alt="VoidImp Logo"
            width={1906.2 / 14}
            height={430.55 / 14}
          />
        </span>
      </a>
    </div>
  );
};

export default Logo;
