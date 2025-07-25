// pages/posts/index.tsx

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import { PostProps, PostData } from "@/interfaces";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: { posts },
  };
}

const Posts = ({ posts }: { posts: PostProps[] }) => {
  // State to hold the selected post for modal
  const [post, setPost] = useState<PostData | null>(null);
  // State to toggle modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Open modal and set the selected post
  const openModal = (selectedPost: PostData) => {
    setPost(selectedPost);
    setModalOpen(true);
  };

  // Close modal and clear the selected post
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
