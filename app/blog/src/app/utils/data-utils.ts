import axios from "axios"
import { localhostBackEnd, localhostFrontend } from "../constants"

export interface CountPageClickPros {
  slug: string
  title: string
}

export interface PageFromDB {
  slug: string
  pageUrl: string
  pageTitle: string
  count: number
}

export interface ResponseFromDb {
  data: PageFromDB[]
}

export const getAllPagesFromDB = async (): Promise<ResponseFromDb> =>
  await axios.get(localhostBackEnd)

export const getPageFromDB = async (slug: string): Promise<ResponseFromDb> =>
  await axios.get(`${localhostBackEnd}${slug}`)

export const countPageClicks = async ({
  slug,
  title,
}: CountPageClickPros): Promise<ResponseFromDb> =>
  await axios.put(`${localhostBackEnd}${slug}`, {
    pageTitle: title,
    pageUrl: `${localhostFrontend}/posts/${slug}`,
    // add more data if needed
  })
