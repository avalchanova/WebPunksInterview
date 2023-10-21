import { defineType, defineField } from "sanity"

const logoBgColorSchema = defineType({
  name: "logoBgColor",
  type: "object",
  title: "LogoBgColorSchema",
  fields: [
    defineField({
      name: "logo",
      type: "image",
    }),
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    },
  ],
})

export default logoBgColorSchema
