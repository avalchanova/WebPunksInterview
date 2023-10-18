import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "default",
  title: "WP Coding Interview",
  projectId: "2tkojebt",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
