import { Query, Zero, createTableSchema } from '@rocicorp/zero';
import { Schema, schema } from '@/schema';

export type TableSchema = ReturnType<typeof createTableSchema>;

function createZero() {
  return new Zero({
    logLevel: 'info',
    server: process.env.NEXT_PUBLIC_SERVER_URL,
    userID: 'anon',
    schema,
    kvStore: 'mem',
  });
}

let zero: Zero<Schema>;

declare global {
  var __zero: Zero<Schema> | undefined;
}

if (process.env.NODE_ENV === 'production') {
  zero ??= createZero();
} else {
  global.__zero ??= createZero();
  zero = global.__zero;
}

function prefetch<T extends Query<TableSchema>>(query: T): Promise<ReturnType<T['run']>> {
  return new Promise((resolve, reject) => {
    try {
      const view = query.materialize();
      view.addListener((snap) => resolve(snap as any));
    } catch (e) {
      reject(e);
    }
  });
}

export { prefetch, zero };
