const NavigationLinks = ({ linkList }) => {
  return (
    <>
      {linkList.map((link, index) => {
        return (
          <a
            key={index}
            href={link.url}
            className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
          >
            {link.text}
          </a>
        );
      })}
    </>
  );
};

export default NavigationLinks;
