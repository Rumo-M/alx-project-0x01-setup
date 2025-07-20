import React, { useState, useEffect, useRef } from 'react';
import { UserProps, UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserProps>({
    id: 0,
    name: '',
    username: '',
    email: '',
    address: { street: '', city: '', zipcode: '' },
    company: { name: '', catchPhrase: '' },
  });

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'street') {
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, street: value },
      }));
    } else if (name === 'companyCatchPhrase') {
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, catchPhrase: value },
      }));
    } else if (name === 'companyName') {
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, name: value },
      }));
    } else if (name === 'city') {
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, city: value },
      }));
    } else if (name === 'zipcode') {
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, zipcode: value },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation example
    if (!user.name.trim() || !user.username.trim() || !user.email.trim()) {
      alert('Please fill in required fields');
      return;
    }
    onSubmit(user);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Add / Edit User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={user.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="username" className="block font-medium mb-1">
              Username *
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={user.username}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="street" className="block font-medium mb-1">
              Street
            </label>
            <input
              id="street"
              name="street"
              type="text"
              value={user.address.street}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="city" className="block font-medium mb-1">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={user.address.city}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="zipcode" className="block font-medium mb-1">
              Zipcode
            </label>
            <input
              id="zipcode"
              name="zipcode"
              type="text"
              value={user.address.zipcode}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block font-medium mb-1">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={user.company.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="companyCatchPhrase" className="block font-medium mb-1">
              Company Catch Phrase
            </label>
            <input
              id="companyCatchPhrase"
              name="companyCatchPhrase"
              type="text"
              value={user.company.catchPhrase}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
