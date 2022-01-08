import * as prismic from "@prismicio/client";

const endpoint = prismic.getEndpoint("voidimp");
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

const client = prismic.createClient(endpoint, { accessToken });

export default client;
