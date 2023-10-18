import { createClient } from '@sanity/client'


const client = createClient({
  projectId: "2tkojebt",
  dataset: "production",
  useCdn: false, // Set to true if you want to use the content delivery network for faster responses.
});

export default client;