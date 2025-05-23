import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';
import FeedbackForm from './FeedbackForm';
import StorySubmission from './StorySubmission';
import RelatedPosts from './RelatedPosts';

const BlogPost = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('https://stocai-blog-backend.onrender.com/api/blogs/');
        const blogs = await response.json();
        const currentBlog = blogs.find(b => b.slug === slug);
        
        if (!currentBlog) {
          console.warn('Blog not found for slug:', slug);
        }

        setBlog(currentBlog);
        setLikes(currentBlog?.likes || 0);
        setDislikes(currentBlog?.dislikes || 0);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const handleLike = async () => {
    try {
      await fetch(`https://stocai-blog-backend.onrender.com/api/blogs/${blog.id}/like/`, {
        method: 'POST',
      });
      setLikes(prev => prev + 1);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleDislike = async () => {
    try {
      await fetch(`https://stocai-blog-backend.onrender.com/api/blogs/${blog.id}/dislike/`, {
        method: 'POST',
      });
      setDislikes(prev => prev + 1);
    } catch (error) {
      console.error('Error disliking post:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!blog) {
    return <div className="text-center py-10 text-red-500">Blog not found.</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <img 
        src={blog.image} 
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">TL;DR</h2>
        <p className="text-gray-700">{blog.tldr}</p>
      </div>

      <div className="prose max-w-none mb-8">
        {blog.content}
      </div>

      <div className="flex gap-4 mb-12">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200"
        >
          👍 Like ({likes})
        </button>
        <button
          onClick={handleDislike}
          className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200"
        >
          👎 Dislike ({dislikes})
        </button>
      </div>

      <CommentSection blogId={blog.id} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <FeedbackForm blogId={blog.id} />
        <StorySubmission />
      </div>

      <RelatedPosts currentBlogId={blog.id} />
    </article>
  );
};

export default BlogPost;