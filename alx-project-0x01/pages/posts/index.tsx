import Layout from '@/components/layout/Layout';
import PostCard from '@/components/common/PostCard';

const mockPosts = [
  {
    id: 1,
    title: 'First Post',
    description: 'This is the description for the first post.',
  },
  {
    id: 2,
    title: 'Second Post',
    description: 'This is the description for the second post.',
  },
];

export default function PostsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">All Posts</h1>
        <div className="space-y-4">
          {mockPosts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
