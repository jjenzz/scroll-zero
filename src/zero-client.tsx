'use client';

import * as React from 'react';
import type { Query, QueryType, Smash, Row } from '@rocicorp/zero';
import { useQuery as _useQuery, ZeroProvider as _ZeroProvider } from '@rocicorp/zero/react';
import { type TableSchema } from '@/schema';
import { zero } from '@/zero';

/* -------------------------------------------------------------------------------------------------
 * ZeroProvider
 * -----------------------------------------------------------------------------------------------*/

interface ZeroProviderProps extends React.PropsWithChildren {}

const ZeroProvider = ({ children }: ZeroProviderProps) => (
  <_ZeroProvider zero={zero}>{children}</_ZeroProvider>
);

/* -------------------------------------------------------------------------------------------------
 * HydrateQuery
 * -----------------------------------------------------------------------------------------------*/

type Rows = Map<string, Row<any>>;
const HydrateQueryContext = React.createContext<Rows | undefined>(undefined);

interface HydrateQueryProps extends React.PropsWithChildren {
  initialData?: Rows;
}

const HydrateQuery = ({ children, initialData }: HydrateQueryProps) => (
  <HydrateQueryContext.Provider value={initialData}>{children}</HydrateQueryContext.Provider>
);

/* -------------------------------------------------------------------------------------------------
 * useQuery
 * -----------------------------------------------------------------------------------------------*/

function useQuery<TSchema extends TableSchema, TReturn extends QueryType>(
  query: Query<TSchema, TReturn>,
  enabled?: boolean,
) {
  const [originalData, details] = _useQuery(query, enabled);
  const hydratedData = React.useContext(HydrateQueryContext);
  const key = JSON.stringify((query as any)._completeAst());
  const initialData = hydratedData?.get(key) ?? originalData;
  const data = details.type === 'complete' ? originalData : initialData;
  return data as Smash<TReturn>;
}

/* ---------------------------------------------------------------------------------------------- */

export { ZeroProvider, HydrateQuery, useQuery, zero };
