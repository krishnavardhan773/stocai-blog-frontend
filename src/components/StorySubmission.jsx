import React, { useState } from 'react';

const StorySubmission = () => {
  const [story, setStory] = useState({
    story_text: '',
    allow_publish: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://stocai-blog-backend.onrender.com/api/stories/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(story),
      });
      setStory({ story_text: '', allow_publish: false });
      alert('Thank you for sharing your story!');
    } catch (error) {
      console.error('Error submitting story:', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
      <p className="mb-6">Have a similar experience? Share your story with our community!</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            placeholder="Your story..."
            value={story.story_text}
            onChange={(e) => setStory(prev => ({ ...prev, story_text: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg text-gray-900"
            rows="4"
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="allow_publish"
            checked={story.allow_publish}
            onChange={(e) => setStory(prev => ({ ...prev, allow_publish: e.target.checked }))}
            className="mr-2"
          />
          <label htmlFor="allow_publish">Allow us to publish your story</label>
        </div>
        <button
          type="submit"
          className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100"
        >
          Submit Story
        </button>
      </form>
    </div>
  );
};

export default StorySubmission;