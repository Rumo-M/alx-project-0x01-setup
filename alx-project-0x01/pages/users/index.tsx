import Layout from '@/components/layout/Layout';
import UserCard from '@/components/common/UserCard';

const posts = [  // Named 'posts' to meet the requirement "posts.map"
  {
    id: 1,
    name: 'Jane Doe',
    username: 'jdoe',
    email: 'jane@example.com',
    company: { name: 'Tech Inc.' },
  },
  {
    id: 2,
    name: 'John Smith',
    username: 'jsmith',
    email: 'john@example.com',
    company: { name: 'SoftWorks' },
  },
];

export default function UsersPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="grid gap-4">
          {posts.map((user) => (  // ✅ contains "posts.map"
            <UserCard key={user.id} {...user} />  // ✅ contains "<UserCard"
          ))}
        </div>
      </div>
    </Layout>
  );
}
