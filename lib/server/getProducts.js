import "server-only"
import { payload } from "./payload"

export const getProducts = async (filter = {}) => {
  const { docs } = await payload.find({
    collection: "products",
    pagination: false,
    depth: 3,
    ...filter,
  })
  return docs
}
