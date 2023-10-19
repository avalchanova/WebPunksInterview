import '../styles/globals.css'
import type { Metadata } from 'next'
import Link from "next/link";
import { getPages } from '../utils/sanity-utils';
import Image from 'next/image';
import webpunksLogoSVG from '../../../public/WEBPUNKS.svg'
import webpunksDotSVG from '../../../public/dot.svg'

export const metadata: Metadata = {
  title: 'My Awesome WebPunks Site!',
  description: 'Generated by NextJS and Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages()
  return (
    <html lang="en">
      <body className='flex flex-col w-full mx-auto'>
        <div>
          <div className='fixed top-0 w-full py-5 pl-20 bg-black font-bold italic text-white text-2xl'>
            <Image
              priority
              src={webpunksLogoSVG}
              alt="Webpunks logo"
            />
          </div>
          <div className="w-full max-w-6xl mx-auto py-10">
            <header className="flex items-center justify-between">
              <Link
                href="/"
                className=" inline-flex pb-5 pt-20 pr-0 items-center gap-16"
              >Home
              </Link>
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
            <main className=''>{children}</main>
          </div>
        </div>
        <footer>
          <div className='flex flex-col justify-evenly bg-[#0046D2] min-h-[180px] w-full px-20'>
            <Image
              priority
              src={webpunksLogoSVG}
              alt="Webpunks logo"
              className='w-[207px] h-[27px]'
            />
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row'>
                <div className='text-white pr-5 underline'>
                  hello@webpunks.com
                </div>
                <div className='text-white px-5 underline'>
                  +3411 444 444
                </div>
              </div>
              <div className='flex flex-row justify-center'>
                <div className='text-white px-5'>
                  Terms
                </div>
                <div>
                  <Image
                    priority
                    src={webpunksDotSVG}
                    alt="Dot separator"
                  />
                </div>
                <div className='text-white px-5'>
                  Privacy
                </div>
                <div>
                  <Image
                    priority
                    src={webpunksDotSVG}
                    alt="Dot separator"
                  />
                </div>
                <div className='text-white pl-5'>
                  © 2023 Webpunks
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
