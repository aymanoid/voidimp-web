import Image from "next/image";
import { getCmsURL } from "utils/api";

const VoidImage = (props) => {
  const imgProps = Object.assign({}, props);
  imgProps.src = imgProps.cmsMedia ? getCmsURL(imgProps.src) : imgProps.src;
  delete imgProps.cmsMedia;
  return <Image {...imgProps} />;
};

export default VoidImage;
