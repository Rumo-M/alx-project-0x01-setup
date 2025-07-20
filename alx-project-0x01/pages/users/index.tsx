import Layout from '@/components/layout/Layout';

export default function UsersPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <p className="text-gray-700">List of registered users will appear here.</p>
        {/* Add user cards or table here */}
      </div>
    </Layout>
  );
}
