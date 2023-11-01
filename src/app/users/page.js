import prisma from '@/db/client';

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export default async function UsersIndex() {
  const users = await getUsers();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user, i) => {
          return (
            <li key={user.id}>
              <a href={`mailto:${user.email}`}>
                {user.name}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  );
};
