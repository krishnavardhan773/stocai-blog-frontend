import React, { useState } from 'react';

const FeedbackForm = ({ blogId }) => {
  const [feedback, setFeedback] = useState({
    email: '',
    rating: 5,
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://stocai-blog-backend.onrender.com/api/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...feedback,
          blog: blogId,
        }),
      });
      setFeedback({ email: '', rating: 5, message: '' });
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Share Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your email"
            value={feedback.email}
            onChange={(e) => setFeedback(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFeedback(prev => ({ ...prev, rating: star }))}
                className={`text-2xl ${feedback.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your message"
            value={feedback.message}
            onChange={(e) => setFeedback(prev => ({ ...prev, message: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;