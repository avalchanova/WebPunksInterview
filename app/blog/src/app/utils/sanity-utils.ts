import { createClient, groq } from "next-sanity"
import { clientConfig } from "../sanity-config"
import { Page } from "../../../types/Page"
import {
  LogoTitleBgColor,
  Post,
  PostMetadata,
  SlugOnly,
} from "../../../types/Post"

// GROQ
export async function getPage(slug: SlugOnly): Promise<Page> {
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

export async function getPost(slug: SlugOnly): Promise<Post> {
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
  ) // grabs everything for the post content
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

export async function getPostMeta(slug: SlugOnly): Promise<PostMetadata> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'post' && seoData.slug.current == $slug][0]{
      "metaTitle": seoData.metaTitle,
      "metaDescription": seoData.metaDescription,
      "slug": seoData.slug.current
  }`,
    { slug: slug } // grabs all of the meta fields (aka the SEO fields) to attach to the <head> in the post's html
  )
}

export async function getLogoTitleBgColor(): Promise<LogoTitleBgColor> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "logoBgColor"][0]{
      title,
      "logo": logo.asset->url,
      backgroundColor,  
    }`
  )
}
