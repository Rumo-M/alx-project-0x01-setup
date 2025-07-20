import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ userId, id, title, body }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 mb-2">{body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
      <p className="text-sm text-gray-500">Post ID: {id}</p>
    </div>
  );
};

export default PostCard;
