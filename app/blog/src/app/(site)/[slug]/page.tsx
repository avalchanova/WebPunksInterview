import { PortableText } from "@portabletext/react";
import { getPage } from "@/app/utils/sanity-utils";
import { Page } from "../../../../types/Page";
import { SlugOnly } from "../../../../types/Post";


type Props = {
  params: { slug: SlugOnly }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <p>{page.count}</p>
      </div>
    </div>
  )
}