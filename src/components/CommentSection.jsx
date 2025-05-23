import React, { useState, useEffect } from 'react';

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', content: '' });

  useEffect(() => {
    fetchComments();
  }, [blogId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://stocai-blog-backend.onrender.com/api/comments/?blog_id=${blogId}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://stocai-blog-backend.onrender.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newComment,
          blog: blogId, // ✅ Fixed key from blog_id → blog
        }),
      });
      
      if (response.ok) {
        setNewComment({ name: '', content: '' });
        fetchComments();
      } else {
        console.error('Failed to post comment:', await response.text());
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            value={newComment.name}
            onChange={(e) => setNewComment(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your comment"
            value={newComment.content}
            onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4">
            <h3 className="font-semibold text-lg">{comment.name}</h3>
            <p className="text-gray-600">{comment.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
