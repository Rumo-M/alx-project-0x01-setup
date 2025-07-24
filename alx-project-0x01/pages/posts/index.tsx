import { GetStaticProps } from 'next';
import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostProps[] = await res.json();

  return {
    props: { posts },
  };
};

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
