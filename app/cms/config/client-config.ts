import { createClient } from "next-sanity";

const client = createClient({
  projectId: "2tkojebt",
  dataset: "production",
  apiVersion: "2022-10-17",
  useCdn: false
});

export default client;