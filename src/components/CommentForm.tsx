'use client';

import { useEffect, useState } from "react";

type Comment = {
  name: string;
  comment: string;
  date: string;
};

type CommentSectionProps = {
  blogId: string;
};

const CommentForm = ({ blogId }: CommentSectionProps) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments-${blogId}`) || '[]');
    setComments(storedComments);
  }, [blogId]);

  useEffect(() => {
    localStorage.setItem(`comments-${blogId}`, JSON.stringify(comments));
  }, [comments, blogId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      setComments([...comments, { name, comment, date: new Date().toISOString() }]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-4 text-[#48cfad]">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-black p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#493638]"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-lg font-medium mb-1">
            Your Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full text-black p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#493638]"
            placeholder="Your comment"
            rows={2}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#48cfad] text-black font-bold shadow-xl px-8 py-2 rounded hover:bg-gray-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;