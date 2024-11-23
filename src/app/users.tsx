'use client';

import * as React from 'react';
import { useQuery, useZero } from '@rocicorp/zero/react';
import { Schema, User } from '@/schema';

/* -------------------------------------------------------------------------------------------------
 * Users
 * -----------------------------------------------------------------------------------------------*/

const Users = (props: { initialUsers: User[] }) => {
  const z = useZero<Schema>();
  const users = useQuery(z.query.user, { initialData: props.initialUsers });

  return <div>{JSON.stringify(users, null, 2)}</div>;
};

/* ---------------------------------------------------------------------------------------------- */

export { Users };
