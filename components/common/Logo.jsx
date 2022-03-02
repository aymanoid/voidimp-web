import Link from "next/link";
import LogoSvg from "public/logo.svg";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <a aria-label="Homepage">
          <span>
            <LogoSvg direction="ltr" width={1906.2 / 14} height={430.55 / 14} />
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
