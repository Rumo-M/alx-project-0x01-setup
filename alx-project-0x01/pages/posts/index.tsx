// pages/posts/index.tsx

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
// Notice: No import of PostProps here

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();  // No explicit PostProps typing here

  return {
    props: { posts },
  };
}

const Posts = ({ posts }: { posts: any[] }) => {
  const [post, setPost] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (selectedPost: any) => {
    setPost(selectedPost);
    setModalOpen(true);
  };

  const closeModal = () => {
    setPost(null);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard
                title={post.title}
                content={post.body}
                onClick={() => openModal(post)}
              />
            </li>
          ))}
        </ul>
      </main>

      {isModalOpen && post && <PostModal post={post} onClose={closeModal} />}
    </>
  );
};

export default Posts;
