import Database from '@/server/schemas/Database';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

const dialect = new PostgresDialect({
  pool: new Pool({
    host: 'localhost',
    user: 'user',
    database: 'scroll',
    password: 'password',
    max: 10,
  }),
});

export const db = new Kysely<Database>({ dialect });
