import { type Query, type Row, Zero } from '@rocicorp/zero';
import { type TableSchema, type Schema, schema } from '@/schema';
import { createLRUCache } from '@/utils/lru-cache';

/* -------------------------------------------------------------------------------------------------
 * createZero
 * -----------------------------------------------------------------------------------------------*/

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

/* -------------------------------------------------------------------------------------------------
 * prefetch
 * -----------------------------------------------------------------------------------------------*/

const rows = createLRUCache<string, Row<any>>();

function prefetch<T extends Query<TableSchema>>(
  query: T,
  timeout = 5000,
): Promise<ReturnType<T['materialize']>['data']> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('prefetch timeout'));
    }, timeout);

    try {
      const view = query.materialize();
      view.addListener((snap, resultType) => {
        if (resultType !== 'complete') return;
        const key = JSON.stringify((query as any)._completeAst());
        clearTimeout(timer);
        rows.set(key, snap);
        resolve(snap as any);
      });
    } catch (e) {
      clearTimeout(timer);
      reject(e);
    }
  });
}

prefetch.initialData = () => rows.cache;

/* ---------------------------------------------------------------------------------------------- */

export { prefetch, zero };
