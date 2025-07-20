import React, { useState, useEffect, useRef } from 'react';
import { PostData, PostModalProps } from '@/interfaces';

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  // Use <PostData> to type your form state explicitly
  const [post, setPost] = useState<PostData>({ title: '', body: '' });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!post.title.trim() || !post.body.trim()) return;
    onSubmit(post);
    setPost({ title: '', body: '' });
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
        className="bg-white rounded-lg shadow-lg max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-medium mb-1">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={post.title}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="body" className="block font-medium mb-1">
              Body
            </label>
            <textarea
              id="body"
              name="body"
              value={post.body}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded resize-none"
              rows={4}
              required
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

export default PostModal;
