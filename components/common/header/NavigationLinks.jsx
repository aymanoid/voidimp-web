const NavigationLinks = ({ linkList }) => {
  return (
    <>
      {linkList.map((link, index) => {
        return (
          <a
            key={index}
            href={link.url}
            className="text-grey-50 hover:text-grey-50 mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 "
          >
            {link.text}
          </a>
        );
      })}
    </>
  );
};

export default NavigationLinks;
