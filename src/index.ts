import { drizzle } from 'drizzle-orm/d1'
import { Hono } from 'hono'
import { test } from './db/schema'

export type Env = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Env }>()

app.get('/test', async (context) => {
  const db = drizzle(context.env.DB);
  const result = await db.select().from(test).all();
  return context.json(result)
}).post('/test', async (context) => {
  const db = drizzle(context.env.DB);
  const content = await context.req.json();
  const result = await db.insert(test).values(content).returning();
  return context.json(result)
})

export default app

//--file=./drizzle/migrations/0000_opposite_arclight.sql