import Metadata from "components/common/Metadata";

const Error404 = () => {
  return (
    <>
      <Metadata title={"Not Found"} />
      <h1>404</h1>
      <h6>{"Oh no! Seems like you've fallen into the void!"}</h6>
      <p>{"I suggest you go back to safety before it's too late"}</p>
    </>
  );
};

export default Error404;
