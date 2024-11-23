import { ZeroProvider } from './zero-provider';
import { Users } from './users';
import { db } from '@/server/database';

export default async function Home() {
  const users = await db.selectFrom('user').selectAll().execute();

  return (
    <ZeroProvider>
      <main className="flex flex-col items-center justify-center h-screen">
        <Users initialUsers={users} />
      </main>
    </ZeroProvider>
  );
}
