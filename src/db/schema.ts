import { sql } from 'drizzle-orm';
import { timestamp } from 'drizzle-orm/mysql-core';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const test = sqliteTable('test', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    content: text('content', { length: 256 }).notNull(),
    timestamp: text('timestamp')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
});

export const tasks = sqliteTable('tasks', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    title: text('title', { length: 256 }).notNull(),
    description: text('description', { length: 512 }).notNull(),
    start_time: text('start_time').notNull(),
    end_time: text('end_time').notNull(),
    date: text('date').notNull(),
});