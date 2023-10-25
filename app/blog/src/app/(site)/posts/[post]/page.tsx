import { Metadata } from "next"
import { getPost, getPostMeta } from "@/app/utils/sanity-utils"
import { SlugOnly } from "../../../../../types/Post"
import ImageRenderer from "@/app/components/ImageRenderer/ImageRenderer"
import styles from "./styles.module.css"

type Props = {
  params: { post: SlugOnly }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.post
  // fetch data
  const metaObject = await getPostMeta(slug)

  return {
    title: metaObject.metaTitle,
    description: metaObject.metaDescription,
  }
}

export default async function Post({ params }: Props) {
  const slug = params.post // this is called "post" because the folder is "[post]" and this is actually the post's slug
  const post = await getPost(slug)

  return (
    <div
      className={`flex flex-1 justify-evenly min-h-fit ${styles.tabletSinglePageContainer}`}
    >
      <div
        className={`flex max-w-[50%] items-center ${styles.tabletImageContainer}`}
      >
        <ImageRenderer
          priority={true}
          src={post.contents.cover}
          alt={post.contents.title}
          width={1920}
          height={1080}
          className="mt-10 object-cover rounded-xl"
        />
      </div>
      <div
        className={`flex flex-col flex-1 pl-20 justify-center ${styles.tabletTextContainer}`}
      >
        <header className="flex items-center justify-between">
          <h1 className="py-5 font-bold font-semibold text-gray-900 text-6xl">
            {post.contents.title}
          </h1>
        </header>

        <div className="text-lg text-gray-700 mt-5">
          <p className="whitespace-pre-wrap">{post.contents.body}</p>
        </div>
      </div>
    </div>
  )
}
