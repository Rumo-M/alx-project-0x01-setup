import React from 'react';

type UserCardProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  company?: {
    name: string;
  };
};

const UserCard: React.FC<UserCardProps> = ({ id, name, username, email, company }) => {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm text-gray-700">Email: {email}</p>
      {company && (
        <p className="text-sm text-gray-500">Company: {company.name}</p>
      )}
      <p className="text-xs text-gray-400 mt-2">User ID: {id}</p>
    </div>
  );
};

export default UserCard;
