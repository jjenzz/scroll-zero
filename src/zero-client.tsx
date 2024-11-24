'use client';

import * as React from 'react';
import { Query, QueryType, Smash, TableSchemaToRow } from '@rocicorp/zero';
import { useQuery as _useQuery, ZeroProvider as _ZeroProvider } from '@rocicorp/zero/react';
import { TableSchema } from '@/schema';
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

type Rows = Map<string, TableSchemaToRow<any>>;
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
  opts?: Parameters<typeof _useQuery>[1],
) {
  const hydratedData = React.useContext(HydrateQueryContext);
  const key = JSON.stringify((query as any)._completeAst());
  const initialData = (opts?.initialData ?? hydratedData?.get(key)) as Smash<TReturn> | undefined;
  return _useQuery(query, { ...opts, initialData });
}

/* ---------------------------------------------------------------------------------------------- */

export { ZeroProvider, HydrateQuery, useQuery, zero };
