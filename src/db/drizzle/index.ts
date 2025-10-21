import Database from 'better-sqlite3';
import { postsTable } from './schemas';
import { resolve } from 'path';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const sqliteDatabasePath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDatabe = new Database

export const drizzelDB = drizzle(sqliteDatabe, {
  schema: {
    posts: postsTable,
  },
  logger: true,
});       