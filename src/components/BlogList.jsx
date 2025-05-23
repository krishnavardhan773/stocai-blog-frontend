import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://stocai-blog-backend.onrender.com/api/blogs/');
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <a href={`/posts/${blog.slug}`} key={blog.id} className="no-underline">
            <BlogCard
              title={blog.title}
              tldr={blog.tldr}
              image={blog.image}
              estimatedReadTime={blog.estimated_read_time}
              slug={blog.slug}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogList;