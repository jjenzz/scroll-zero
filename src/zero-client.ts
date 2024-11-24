import { Query, QueryType, Smash } from '@rocicorp/zero';
import { useQuery as useZeroQuery } from '@rocicorp/zero/react';
import { type TableSchema, zero } from '@/zero';

function useQuery<TSchema extends TableSchema, TReturn extends QueryType>(
  query: Query<TSchema, TReturn>,
  opts?: { enable?: boolean; initialData?: Smash<TReturn> },
) {
  return useZeroQuery(query, opts);
}

export { useQuery, zero };
