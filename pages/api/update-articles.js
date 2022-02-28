import client from "utils/prismic";

const handler = async (req, res) => {
  if (req.body.secret !== process.env.UPDATER_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (req.body.type !== "api-update" || !req.body.documents.length) {
    return res.json({ noUpdate: true });
  }

  try {
    const prismicRes = await client.getAllByType("article");

    const updatedUids = prismicRes
      .filter((e) => req.body.documents.includes(e.id))
      .map((e) => e.uid);
    const updatedPaths = updatedUids.map((e) => `/articles/${e}`);
    updatedPaths.push(...updatedPaths.map((e) => `/ar${e}`));

    const promises = updatedPaths.map((e) => res.unstable_revalidate(e));

    await Promise.all(promises);
    return res.json({ updated: true });
  } catch (err) {
    return res.status(500).send("Error updating");
  }
};

export default handler;
