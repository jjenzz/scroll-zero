import { ZeroProvider } from './zero-provider';
import { Users } from './users';
import { zero, prefetch } from '@/zero';

export default async function Home() {
  const users = await prefetch(zero.query.user);

  return (
    <ZeroProvider>
      <main className="flex flex-col items-center justify-center h-screen">
        <p>server: {JSON.stringify(users, null, 2)}</p>
        <p>
          client: <Users initialUsers={users} />
        </p>
      </main>
    </ZeroProvider>
  );
}
