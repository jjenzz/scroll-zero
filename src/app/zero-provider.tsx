'use client';

import * as React from 'react';
import { Zero } from '@rocicorp/zero';
import { ZeroProvider as RocicorpZeroProvider } from '@rocicorp/zero/react';
import { schema } from '@/schema';

/* -------------------------------------------------------------------------------------------------
 * ZeroProvider
 * -----------------------------------------------------------------------------------------------*/

const ZeroProvider = ({ children }: { children: React.ReactNode }) => {
  const [z] = React.useState(() => {
    return new Zero({
      logLevel: 'info',
      server: process.env.NEXT_PUBLIC_SERVER_URL,
      userID: 'anon',
      schema,
      kvStore: 'mem',
    });
  });

  return <RocicorpZeroProvider zero={z}>{children}</RocicorpZeroProvider>;
};

/* ---------------------------------------------------------------------------------------------- */

export { ZeroProvider };
