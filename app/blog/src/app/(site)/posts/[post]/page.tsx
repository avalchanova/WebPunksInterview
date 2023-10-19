import { Metadata } from 'next'
import {  getPost, getPostMeta } from '@/app/utils/sanity-utils';
import Image from "next/image"
import { SlugOnly } from '../../../../../types/Post';

type Props = {
    params: {post: SlugOnly};
    searchParams: { [key: string]: string | string[] | undefined };
};


export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const slug = params.post
    // fetch data
  const metaObject = await getPostMeta(slug)

  return {
      title: metaObject.metaTitle,
      description: metaObject.metaDescription
  }
}


export default async function Post({params}: Props){
    const slug = params.post // this is called "post" because the folder is "[post]" and this is actually the post's slug
    const post = await getPost(slug)

    return (
    <div>
        <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{post.contents.title}</h1>
        {/* <a
            href={post.url}
            title="Edit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
            Edit
        </a> */}
        {/* this <a> button can be made an edit button but it's just an idea */}
        </header>

        <div className="text-lg text-gray-700 mt-5">
        <p className="whitespace-pre-wrap">{post.contents.body}</p>
        </div>

        <Image
            src={post.contents.cover.desktop}
            alt={post.contents.title}
            width={1920}
            height={1080}
            priority={true}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
            />
    </div>
    )
}

