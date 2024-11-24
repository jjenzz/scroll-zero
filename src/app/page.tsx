import { zero, prefetch } from '@/zero';
import { HydrateQuery } from '@/zero-client';
import { Users } from './users';

/* -------------------------------------------------------------------------------------------------
 * Home
 * -----------------------------------------------------------------------------------------------*/

async function Home() {
  const users = await prefetch(zero.query.user);

  return (
    <HydrateQuery initialData={prefetch.initialData()}>
      <main className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">server</h2>
        <pre>{JSON.stringify(users, null, 2)}</pre>

        <h2 className="text-2xl font-bold">client</h2>
        <Users />
      </main>
    </HydrateQuery>
  );
}

/* ---------------------------------------------------------------------------------------------- */

export default Home;
