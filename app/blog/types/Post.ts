import { PortableTextBlock } from "sanity";
// types lay in the next project because we will be using the while we query the posts (for instance) and we need to have a return type; displaying it
// Define types for the post schema
export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  contents: PostContents;
  seoData: PostMetadata;
  // Add any other fields specific to your post document
}

// Define types for the postContents schema
type PostContents = {
  title: string;
  body: string;
  cover: PostCover;
  // Add any other fields specific to your postContents object
}

// Define types for the postCover schema
type PostCover = {
  mobile: string;
  tablet: string;
  desktop: string;
  // Add any other fields specific to your postCover object
}

// Define types for the postMetadata schema
type PostMetadata = {
  slug: {
    current: string;
  };
  metaTitle: string;
  metaDescription: string;
  // Add any other fields specific to your postMetadata object
}
