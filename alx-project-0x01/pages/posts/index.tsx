// pages/posts/index.tsx

import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";  // Import PostCard component
import { PostProps } from "@/interfaces";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: { posts },
  };
}

const Posts = ({ posts }: { posts: PostProps[] }) => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard title={post.title} content={post.body} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Posts;
