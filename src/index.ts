import { drizzle } from 'drizzle-orm/d1'
import { Hono } from 'hono'
import { test, tasks, user_credentials } from './db/schema'

export type Env = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Env }>()

// CORS middleware
app.use('*', async (c, next) => {
  c.res.headers.append('Access-Control-Allow-Origin', '*'); // Replace '*' with your frontend URL for more security
  c.res.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  c.res.headers.append('Access-Control-Allow-Headers', 'Content-Type');
  await next();
});

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

app.get('/tasks', async (context) => {
  const db = drizzle(context.env.DB);
  const result = await db.select().from(tasks).all();
  return context.json(result)
}).post('/tasks', async (context) => {
  const db = drizzle(context.env.DB);
  const content = await context.req.json();
  const result = await db.insert(tasks).values(content).returning();
  return context.json(result)
})

app.get('user_credentials', async (context) => {
  const db = drizzle(context.env.DB);
  const result = await db.select().from(user_credentials).all();
  return context.json(result)
}).post('user_credentials', async (context) => {
  const db = drizzle(context.env.DB);
  const content = await context.req.json();
  const result = await db.insert(user_credentials).values(content).returning();
  return context.json(result)
})

export default app

//--file=./drizzle/migrations/0000_opposite_arclight.sql