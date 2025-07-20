import React from 'react';
import { UserProps } from '@/interfaces'; // ✅ import { UserProps } from

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, company }: UserProps) => { // ✅ <UserProps>
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm text-gray-700">Email: {email}</p>
      <p className="text-sm text-gray-500">Address: {address.street}, {address.city}</p>
      <p className="text-sm text-gray-500">Company: {company.name}</p>
      <p className="text-sm text-gray-500 italic">"{company.catchPhrase}"</p>
      <p className="text-xs text-gray-400 mt-2">User ID: {id}</p>
    </div>
  );
};

export default UserCard;
