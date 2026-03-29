import 'dotenv/config';
import { expect, test } from '@playwright/test';
import { Client } from 'pg';

function resolveConnectionString(): string {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  const host = process.env.POSTGRES_HOST ?? process.env.PGHOST ?? '127.0.0.1';
  const port = process.env.POSTGRES_PORT ?? process.env.PGPORT ?? '5432';
  const user = process.env.POSTGRES_USER ?? process.env.PGUSER ?? 'postgres';
  const password =
    process.env.POSTGRES_PASSWORD ?? process.env.PGPASSWORD ?? 'postgres';
  const database = process.env.POSTGRES_DB ?? process.env.PGDATABASE ?? user;

  return `postgresql://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}/${encodeURIComponent(database)}`;
}

test('User and Tweet tables exist in the database', async () => {
  const client = new Client({
    connectionString: resolveConnectionString(),
  });

  await client.connect();

  try {
    const result = await client.query<{ table_name: string }>(
      `
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public'
          AND table_name = ANY($1::text[])
      `,
      [['User', 'Tweet']],
    );

    const tableNames = new Set(result.rows.map((row) => row.table_name));

    expect(tableNames.has('User')).toBeTruthy();
    expect(tableNames.has('Tweet')).toBeTruthy();
  } finally {
    await client.end();
  }
});
