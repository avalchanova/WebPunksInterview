import { createClient, groq } from "next-sanity";
import { clientConfig } from "./sanity-config";
import { Page } from "../../types/Page";
import { Post } from "../../types/Post";

// GROQ

// const asd = `*[_type == "page" && slug.current == $slug][0]{
//   _id,
//   title,
//   content[]{
//   "children": children[0].text
//   },
//   "slug": slug.current
// }`

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}
// page is --> /about, /contacts, etc

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
} // this is for the navbar


export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == 'post' && seoData.slug.current == $slug][0]{
      _id,
      contents{
        body,
        title,
        cover{
          "desktop": desktop.asset->url,
          "mobile": mobile.asset->url,
          "tablet": tablet.asset->url
        }
      },
      seoData{
        metaTitle,
        metaDescription,
        "slug": slug.current
      }
    }
    `,
    { slug: slug }
  ); // grabs everything for the post content
}


export async function getPosts(): Promise<Post[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == 'post']{
      _id,
      contents{
        title,
        body,
        cover{
          "desktop": desktop.asset->url,
          "tablet": tablet.asset->url,
          "mobile": mobile.asset->url,
        }
      },
      seoData{
        metaTitle,
        metaDescription,
        "slug": slug.current,
      }
  }` // grabs all of the posts to display in the homepage

  )

}