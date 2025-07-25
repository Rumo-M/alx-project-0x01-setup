// pages/posts/index.tsx

import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: { posts },
  };
};

const Posts = ({ posts }: { posts: PostProps[] }) => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Posts;
