import { Page } from "../../../../types/Page"
import { SlugOnly } from "../../../../types/Post"
import TableCounter from "@/app/components/TableCounter/TableCounter"

type Props = {
  params: { slug: SlugOnly }
}

export default async function Page() {
  return (
    <div>
      <h1 className="py-5 font-bold font-semibold text-gray-900 text-6xl">
        Page Counter
      </h1>
      <TableCounter />
    </div>
  )
}
