import React from 'react';

const BlogCard = ({ title, tldr, image, estimatedReadTime, slug }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-600 mb-4">{tldr}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{estimatedReadTime} min read</span>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Share with a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;