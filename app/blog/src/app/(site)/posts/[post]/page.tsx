import { getPost } from '@/app/sanity-utils';
import Image from "next/image"

type Props = {
    params: {post: string};
};


export default async function Post({params}: Props){
    const slug = params.post // this is called "post" because the folder is "[post]" and this is actually the post's slug
    const post = await getPost(slug)
    // console.log({post: post.contents.body});

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

