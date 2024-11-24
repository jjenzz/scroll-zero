'use client';

import * as React from 'react';
import { ZeroProvider as RocicorpZeroProvider } from '@rocicorp/zero/react';
import { zero } from '@/zero';

/* -------------------------------------------------------------------------------------------------
 * ZeroProvider
 * -----------------------------------------------------------------------------------------------*/

const ZeroProvider = ({ children }: { children: React.ReactNode }) => {
  return <RocicorpZeroProvider zero={zero}>{children}</RocicorpZeroProvider>;
};

/* ---------------------------------------------------------------------------------------------- */

export { ZeroProvider };
