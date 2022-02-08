const TextSegment = ({ textData }) => {
  return (
    <div
      className="prose prose-neutral max-w-none prose-a:font-semibold prose-a:decoration-violet-600 prose-a:underline-offset-2 hover:prose-a:decoration-2 dark:prose-invert dark:decoration-violet-400 dark:prose-a:decoration-violet-400 lg:prose-xl"
      dangerouslySetInnerHTML={{ __html: textData }}
    ></div>
  );
};

export default TextSegment;
