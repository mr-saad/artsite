import "server-only"
import { payload } from "./payload"
import { connection } from "next/server"

export const getData = async (filter = {}) => {
  await connection()
  const { docs } = await payload.find({
    collection: "products",
    pagination: false,
    ...filter,
  })
  return docs
}

export const getGlobal = async (filter) => {
  await connection()
  const gb = await payload.findGlobal(filter)
  return gb
}
