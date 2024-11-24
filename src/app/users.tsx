'use client';

import * as React from 'react';
import { zero, useQuery } from '@/zero-client';

/* -------------------------------------------------------------------------------------------------
 * Users
 * -----------------------------------------------------------------------------------------------*/

const Users = () => {
  const users = useQuery(zero.query.user);
  return <pre>{JSON.stringify(users, null, 2)}</pre>;
};

/* ---------------------------------------------------------------------------------------------- */

export { Users };
