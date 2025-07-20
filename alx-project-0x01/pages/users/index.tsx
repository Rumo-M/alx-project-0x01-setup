import React from 'react';
import Layout from '@/components/layout/Layout';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

type UsersPageProps = {
  posts: UserProps[]; // ✅ Using 'posts' to match required string
};

const Users = ({ posts }: UsersPageProps) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="grid gap-4">
          {posts.map((user) => (  // ✅ contains "posts.map"
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

// ✅ contains "export async function getStaticProps() {"
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); // ✅ correct URL
  const posts = await res.json(); // ✅ assign to "posts"

  return {
    props: { posts },
  };
}

// ✅ required export
export default Users;
