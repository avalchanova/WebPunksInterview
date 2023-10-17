import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "3rdvltpc",
  dataset: 'production',
  title: 'My WebPunks Blog',
  apiVersion: '2023-10-17',
  basePath: '/admin',
  plugins: [deskTool()],
  // schema: { types: schemas },
  //todo:
})

export default config