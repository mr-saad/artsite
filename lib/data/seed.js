import { getPayload } from "payload"
import config from "@payload-config"
import { categories, globalProducts } from "./products" // Point this to where you saved the mock data
import slugify from "slugify"
import {
  convertMarkdownToLexical,
  editorConfigFactory,
} from "@payloadcms/richtext-lexical"

export async function seedProducts() {
  // 1. Initialize Payload
  const payload = await getPayload({ config })

  console.log("Starting Database Import...")

  for (const product of globalProducts) {
    // console.log(`Importing: ${product.title}`)

    // const formattedImages = []

    // 2. Loop through the 5 images for this specific product
    // for (let i = 0; i < product.images.length; i++) {
    //   const imgData = product.images[i]

    //   try {
    //     // Fetch the image from the Unsplash URL
    //     const response = await fetch(imgData.url)
    //     const arrayBuffer = await response.arrayBuffer()
    //     const buffer = Buffer.from(arrayBuffer)

    //     // Create the Media document in Payload
    //     const mediaDoc = await payload.create({
    //       collection: "media", // Make sure you have a 'media' collection configured in Payload
    //       data: {
    //         alt: imgData.alt,
    //       },
    //       file: {
    //         data: buffer,
    //         mimetype: "image/webp",
    //         name: `${product.slug}-img-${i + 1}.webp`,
    //         size: buffer.byteLength,
    //       },
    //     })

    //     // Push the formatted object matching our new Array schema
    //     formattedImages.push({
    //       image: mediaDoc.id,
    //       color: imgData.color,
    //       alt: imgData.desc,
    //     })
    //   } catch (err) {
    //     console.error(`Failed to upload image for ${product.title}`, err)
    //   }
    // }

    // 3. Create the Product in Payload

    const ct = product.category.split("/")
    const parentSlug = ct[1] // "paintings"
    const childSlug = ct[2] // "nature-paintings"

    // Fetch the Parent Category ID from the database
    const parentReq = await payload.find({
      collection: "categories",
      where: { slug: { equals: parentSlug } },
      limit: 1,
    })
    const parentId = parentReq.docs[0]?.id

    // // Fetch the Child Category ID from the database
    const childReq = await payload.find({
      collection: "categories",
      where: { slug: { equals: childSlug } },
      limit: 1,
    })
    const childId = childReq.docs[0]?.id

    const lexicalJSON = convertMarkdownToLexical({
      editorConfig: await editorConfigFactory.default({ config }),
      markdown: product.body,
    })

    await payload.create({
      collection: "products",
      data: {
        title: product.title,
        categories: [parentId, childId].filter(Boolean),
        description: product.description,
        price: product.price,
        discountedPrice: product.discountedPrice,
        discountPercent: product.discountPercent,
        body: lexicalJSON,
      },
    })
  }

  console.log("Completed importing Products!")
}

seedProducts()

export async function seedCategories() {
  const payload = await getPayload({ config })

  console.log("Starting Database Import...")

  for (const ct of categories) {
    const insert = await payload.create({
      collection: "categories",
      data: {
        title: ct.title,
      },
    })
    for (const sb of ct.subCategories) {
      await payload.create({
        collection: "categories",
        data: {
          title: sb.title,
          parent: insert.id,
        },
      })
    }
  }

  console.log("Completed importing Categories!")
}
// seedCategories()
