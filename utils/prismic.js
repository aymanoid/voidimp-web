import * as prismic from "@prismicio/client";

const endpoint = prismic.getEndpoint("voidimp");

const client = prismic.createClient(endpoint);

export default client;
