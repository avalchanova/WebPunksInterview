import { defineField, defineType } from "sanity"

const postSchema = defineType({
  name: "post",
  type: "document",
  title: "Post",
  groups: [
    { name: "main", title: "Contents", default: true },
    { name: "meta", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "contents",
      type: "postContents",
      group: "main",
    }),
    defineField({
      name: "seoData",
      type: "postMetadata",
      group: "meta",
    }),
  ],
  preview: {
    select: {
      title: "contents.title",
      media: "contents.cover.mobile",
    },
  },
})

const postCoverSchema = defineType({
  name: "postCover",
  type: "object",
  title: "Cover",
  fields: [
    defineField({
      name: "mobile",
      type: "image",
    }),
    defineField({
      name: "tablet",
      type: "image",
    }),
    defineField({
      name: "desktop",
      type: "image",
    }),
  ],
})

const postContentsSchema = defineType({
  name: "postContents",
  type: "object",
  title: "Contents",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "text",
    }),
    defineField({
      name: "cover",
      type: "postCover",
    }),
  ],
})

const postMetadataSchema = defineType({
  name: "postMetadata",
  type: "object",
  title: "Metadata",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
    }),
    defineField({
      name: "metaTitle",
      type: "string",
    }),
    defineField({
      name: "metaDescription",
      type: "text",
    }),
  ],
})

export const postSchemas = [postSchema, postContentsSchema, postMetadataSchema, postCoverSchema]

