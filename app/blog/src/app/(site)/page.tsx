import { Metadata } from "next"
import "../styles/globals.css"
import PostsList from "../components/PostsList/PostsList"
import { getLogoTitleBgColor } from "../utils/sanity-utils"

export const metadata: Metadata = {
  title: "Recipe Post Static Meta Title",
  description: "Recipe Post Static Meta Description",
  // when overwritten on a page post link and if back button is clicked, the title and description
  // will be again as above
}
export default async function Home() {
  const logoColorTitle = await getLogoTitleBgColor()

  return (
    <div>
      <h1 className="py-5 font-bold font-semibold text-gray-900 text-6xl">
        {logoColorTitle.title}
      </h1>
      <p className="py-5 text-black font-prompt font-light text-2xl leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, libero.
      </p>
      <PostsList />
    </div>
  )
}
