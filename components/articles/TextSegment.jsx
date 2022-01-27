const TextSegment = ({ textData }) => {
  return (
    <div
      className="prose prose-neutral max-w-none dark:prose-invert lg:prose-xl"
      dangerouslySetInnerHTML={{ __html: textData }}
    ></div>
  );
};

export default TextSegment;
