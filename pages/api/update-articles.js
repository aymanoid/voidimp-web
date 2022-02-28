import client from "utils/prismic";

const handler = async (req, res) => {
  if (req.body.secret !== process.env.UPDATER_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (req.body.type !== "api-update" || !req.body.documents.length) {
    console.log("hi 1");
    return res.json({ noUpdate: true });
  }

  try {
    console.log("hi 2");

    const prismicRes = await client.getAllByType("article");
    console.log("hi 3");

    const updatedUids = prismicRes
      .filter((e) => req.documents.includes(e.id))
      .map((e) => e.uid);
    const updatedPaths = updatedUids.map((e) => `/articles/${e}`);
    updatedPaths.push(...updatedPaths.map((e) => `/ar${e}`));
    console.log(updatedPaths);

    const promises = updatedPaths.map((e) => res.unstable_revalidate(e));
    console.log(promises);

    await Promise.all(promises);
    return res.json({ updated: true });
  } catch (err) {
    console.error(err);
    console.log("hi 4");

    return res.status(500).send("Error updating");
  }
};

export default handler;
