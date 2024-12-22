'use client';

import * as React from 'react';
import { nanoid } from 'nanoid';
import { zero } from '@/zero-client';

/* -------------------------------------------------------------------------------------------------
 * AddUser
 * -----------------------------------------------------------------------------------------------*/

const AddUser = () => (
  <button
    className="bg-slate-700 rounded-md px-3 py-1"
    onClick={() => {
      zero.mutate.user.insert({
        id: nanoid(),
        name: 'Abby',
      });
    }}
  >
    add user
  </button>
);

/* ---------------------------------------------------------------------------------------------- */

export { AddUser };
