import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PostCard from '@/components/common/PostCard';
import PostModal from '@/components/common/PostModal';
import { PostData, PostProps } from '@/interfaces';

const mockPosts: PostProps[] = [
  {
    userId: 1,
    id: 1,
    title: 'First Post',
    body: 'This is the first post body.',
  },
  {
    userId: 2,
    id: 2,
    title: 'Second Post',
    body: 'This is the second post body.',
  },
];

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>(mockPosts);
  const [post, setPost] = useState<PostData | null>(null);            // ✅ required
  const [isModalOpen, setModalOpen] = useState(false);                // ✅ required

  const handleAddPostClick = () => {
    setPost(null);  // reset post for new entry
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (newPost: PostData) => {
    // For demo: add new post with fake id & userId
    const id = posts.length + 1;
    setPosts([...posts, { id, userId: 1, ...newPost }]);
    setModalOpen(false);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">All Posts</h1>
        <button
          onClick={handleAddPostClick}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Post
        </button>

        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <PostModal onClose={handleCloseModal} onSubmit={handleSubmit} />
      )}
    </Layout>
  );
}
