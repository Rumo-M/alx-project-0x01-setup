import React from 'react';
import Layout from '@/components/layout/Layout';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

type UsersPageProps = {
  users: UserProps[];
};

const Users = ({ users }: UsersPageProps) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="grid gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

// ✅ getStaticProps function with the correct URL
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); // ✅ URL included
  const users = await res.json();

  return {
    props: { users },
  };
}

// ✅ Required default export
export default Users;
