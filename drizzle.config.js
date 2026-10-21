import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './db/drizzle/migrations',
  schema: './db/drizzle/schemas.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: './db.sqlite3',
  },
});
