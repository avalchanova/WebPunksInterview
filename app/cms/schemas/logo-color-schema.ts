import { defineType, defineField } from "sanity"

const logoBgColorSchemas = defineType({
  name: "logoBgColor",
  title: "Logo Background Color Schema",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      type: "image",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    }),
  ],
})

export default logoBgColorSchemas
