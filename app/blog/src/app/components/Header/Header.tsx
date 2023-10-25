"use client"
import Link from "next/link"
import { Page } from "../../../../types/Page"
import HomeButton from "../HomeButton/HomeButton"

interface HeaderProps {
  pages: Page[]
}

const Header = ({ pages }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between">
      <HomeButton />
      <div className="flex items-center gap-3 text-sm text-gray-600">
        {pages.map((page) => (
          <Link
            key={page._id}
            href={`/${page.slug}`}
            className="hover:underline"
          >
            {page.title}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
