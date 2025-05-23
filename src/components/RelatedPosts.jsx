import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const RelatedPosts = ({ currentBlogId }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await fetch('https://stocai-blog-backend.onrender.com/api/blogs/');
        const blogs = await response.json();
        const filtered = blogs
          .filter(blog => blog.id !== currentBlogId)
          .slice(0, 3);
        setRelatedPosts(filtered);
      } catch (error) {
        console.error('Error fetching related posts:', error);
      }
    };

    fetchRelatedPosts();
  }, [currentBlogId]);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Next Up</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <a href={`/posts/${post.slug}`} key={post.id} className="no-underline">
            <BlogCard
              title={post.title}
              tldr={post.tldr}
              image={post.image}
              estimatedReadTime={post.estimated_read_time}
              slug={post.slug}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;