import React from "react"
import { getAllPagesFromDB } from "../../utils/data-utils"

const TableCounter = async () => {
  const response = await getAllPagesFromDB()
  return (
    <div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Slug
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Page URL
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Page Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Count
            </th>
          </tr>
        </thead>
        <tbody>
          {response.data.map((item) => (
            <tr key={item.slug}>
              <td className="px-6 py-4 whitespace-nowrap">{item.slug}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href={item.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {item.pageUrl}
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.pageTitle}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableCounter
