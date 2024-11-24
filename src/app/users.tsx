'use client';

import * as React from 'react';
import { User } from '@/schema';
import { useQuery } from '@/zero-client';
import { zero } from '@/zero';

/* -------------------------------------------------------------------------------------------------
 * Users
 * -----------------------------------------------------------------------------------------------*/

const Users = (props: { initialUsers: User[] }) => {
  const users = useQuery(zero.query.user, { initialData: props.initialUsers });
  return <>{JSON.stringify(users, null, 2)}</>;
};

/* ---------------------------------------------------------------------------------------------- */

export { Users };
