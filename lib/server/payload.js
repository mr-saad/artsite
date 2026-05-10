import { getPayload } from "payload"
import config from "@payload-config"

// for dev server only with production mongodb db url
import dns from "node:dns/promises"
dns.setServers(["8.8.8.8", "1.1.1.1"])

export const payload = await getPayload({ config })
