"use client" //client in this case means we make backend tasks queries (ex. fetch)
import Link from "next/link"
import { sliceFirstHundred } from "../../utils/formatting-utils"
import { getLogoTitleBgColor, getPosts } from "../../utils/sanity-utils"
import axios from "axios"
import { localhostBackEnd, localhostFrontend } from "../../constants"
import { CountPageClickPros } from "../../utils/data-utils"
import ImageRenderer from "../ImageRenderer/ImageRenderer"

async function PostsList() {
  const logoColorTitle = await getLogoTitleBgColor()
  const posts = await getPosts() // all of this is happening on the server
  //because all of the pages in the app folder are server-side rendered in nextjs13
  const displayedPosts = posts.slice(0, 10) // a maximum of 10 posts

  const handleClick = async ({ slug, title }: CountPageClickPros) => {
    try {
      await axios.put(`${localhostBackEnd}${slug}`, {
        pageTitle: title,
        pageUrl: `${localhostFrontend}/posts/${slug}`,
        // add more data if needed
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="py-5 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedPosts.map(
        (
          post // we would have needed to say that post is of type Post from the types created, but we did it in the sanity-utils.ts
        ) => (
          <Link
            href={`/posts/${post.seoData.slug}`}
            // getPosts() provides all the props we need in this page
            key={post._id}
            onClick={async () => {
              return await handleClick({
                slug: post.seoData.slug,
                title: post.contents.title,
              })
            }}
            className={`bg-[${logoColorTitle.backgroundColor}] shadow-xl hover:shadow-2xl rounded-3xl items-center`}
          >
            {post.contents.cover && (
              // if post.contents.cover is true then display this (the Image below)
              <ImageRenderer
                priority={true}
                src={post.contents.cover}
                alt={post.contents.title}
                width={750}
                height={300}
                className="object-cover rounded-tl-3xl rounded-tr-3xl"
              />
            )}
            <div className="px-5 justify-center content-center">
              <div className="py-5 text-center font-extrabold text-3xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {post.contents.title}
              </div>
              <p className="pb-5 whitespace-pre-wrap content-center justify-center">
                {sliceFirstHundred(post.contents.body)}
              </p>
            </div>
          </Link>
        )
      )}
    </div>
  )
}

export default PostsList
