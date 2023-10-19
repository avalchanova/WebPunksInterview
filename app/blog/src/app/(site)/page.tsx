import Image from "next/image";
import Link from "next/link";
import { getPosts } from "../sanity-utils";

export default async function Home() {
    const posts = await getPosts(); // all of this is happening on the server
    //because all of the pages in the app folder are server-side rendered in nextjs13
    // console.log({seo: posts.map(post => {
    //   return {seo: post.seoData.slug, _id: post._id}
    // })})
    // console.log({posts});

    const displayedPosts = posts.slice(0, 10); // a maximum of 10 posts

  return (
    <div>
        <h1 className="text-7xl font-extrabold">Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                Alex
            </span>
            !
        </h1>
        <p className="mt-3 text-xl text-gray-600">Aloha, everyone! Check out my posts!</p>
        <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Posts</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post) => ( // we would have needed to say that post is of type Post from the types created, but we did it in the sanity-utils.ts
                    <Link href={`/posts/${post.seoData.slug}`}
                    // getPosts() provides all the props we need in this page
                        key={post._id}
                        className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-800 transition">
                        {post.contents.cover && (
                          // if post.contents.cover is true then display this (the Image below)
                            <Image
                                src={post.contents.cover.desktop}
                                alt={post.contents.title}
                                width={750}
                                height={300}
                                className="object-cover rounded-lg border border-gray-500"
                            />
                        )}

                        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                            {post.contents.title}
                        </div>
                    </Link>
                ))}
        </div>
    </div>
  )
}

