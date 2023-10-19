import Image from "next/image";
import Link from "next/link";
import { getPosts } from "../utils/sanity-utils";
import { Metadata } from "next";
import { sliceFirstHundred } from "../utils/formatting-utils";
import '../styles/globals.css';
import { SlugOnly } from "../../../types/Post";


export const metadata: Metadata = {
  title: 'Recipe Post Static Meta Title',
  description: 'Recipe Post Static Meta Description',
}
export default async function Home() {
  const posts = await getPosts(); // all of this is happening on the server
  //because all of the pages in the app folder are server-side rendered in nextjs13
  // console.log({seo: posts.map(post => {
  //   return {seo: post.seoData.slug, _id: post._id}
  // })})
  // console.log({posts});

  const displayedPosts = posts.slice(0, 10); // a maximum of 10 posts

  interface HandleClickProps {
    slug: string,
    title: string,
    url: string
  }

  const handleClick = async ({ slug, title, url }: HandleClickProps) => {
    const response = await fetch(`${localhost}/v1/tracking/${slug}`, {
      method: "PUT",
      body: JSON.stringify({ pageUrl: url, pageTitle: title }),
    });
    return response.json();
  };



  return (
    <div>
      <h1 className="py-5 font-bold font-semibold text-gray-900 text-6xl">Title</h1>
      <p className="py-5 text-black font-prompt font-light text-2xl leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, libero.</p>
      <div className="py-5 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post) => ( // we would have needed to say that post is of type Post from the types created, but we did it in the sanity-utils.ts
          <Link href={`/posts/${post.seoData.slug}`}
            // getPosts() provides all the props we need in this page
            key={post._id}
            onClick={async (event: React.MouseEvent) => {
              await handleClick({ slug: post.seoData.slug, title: post.contents.title, url: `/posts/${post.seoData.slug}` })
              event.preventDefault()
            }}
            className="bg-[#F5F5F5] shadow-xl hover:shadow-2xl rounded-3xl items-center">
            {post.contents.cover && (
              // if post.contents.cover is true then display this (the Image below)
              <Image
                priority={true}
                src={post.contents.cover.desktop}
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
              <p className="pb-5 whitespace-pre-wrap content-center justify-center">{sliceFirstHundred(post.contents.body)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

