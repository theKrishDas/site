/** biome-ignore-all lint/suspicious/noConsole:  enable logging later? */

import { Hono } from "hono"
import { Resend } from "resend"

const app = new Hono()
const resend = new Resend(process.env.RESEND_API_KEY)

app.get("/", async (c) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  })

  if (error) {
    console.error({ error })
    return c.json({ error })
  }

  return c.json(data)
})

export default {
  port: 3001,
  fetch: app.fetch,
}
