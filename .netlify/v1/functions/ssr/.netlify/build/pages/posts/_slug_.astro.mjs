/* empty css                                    */
import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_s204h1uY.mjs';
import 'kleur/colors';
import { B as BlogCard, H as Header, F as Footer, $ as $$Layout } from '../../chunks/Footer_wq6B48Yg.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../../renderers.mjs';

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", content: "" });
  useEffect(() => {
    fetchComments();
  }, [blogId]);
  const fetchComments = async () => {
    try {
      const response = await fetch(`https://stocai-blog-backend.onrender.com/api/comments/?blog_id=${blogId}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://stocai-blog-backend.onrender.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...newComment,
          blog: blogId
          // ✅ Fixed key from blog_id → blog
        })
      });
      if (response.ok) {
        setNewComment({ name: "", content: "" });
        fetchComments();
      } else {
        console.error("Failed to post comment:", await response.text());
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "bg-white p-6 rounded-lg shadow-sm", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Comments" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Your name",
          value: newComment.name,
          onChange: (e) => setNewComment((prev) => ({ ...prev, name: e.target.value })),
          className: "w-full px-4 py-2 border rounded-lg",
          required: true
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Your comment",
          value: newComment.content,
          onChange: (e) => setNewComment((prev) => ({ ...prev, content: e.target.value })),
          className: "w-full px-4 py-2 border rounded-lg",
          rows: "4",
          required: true
        }
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700",
          children: "Post Comment"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: comments.map((comment) => /* @__PURE__ */ jsxs("div", { className: "border-b pb-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: comment.name }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: comment.content })
    ] }, comment.id)) })
  ] });
};

const FeedbackForm = ({ blogId }) => {
  const [feedback, setFeedback] = useState({
    email: "",
    rating: 5,
    message: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://stocai-blog-backend.onrender.com/api/feedback/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...feedback,
          blog: blogId
        })
      });
      setFeedback({ email: "", rating: 5, message: "" });
      alert("Thank you for your feedback!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Share Your Feedback" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          placeholder: "Your email",
          value: feedback.email,
          onChange: (e) => setFeedback((prev) => ({ ...prev, email: e.target.value })),
          className: "w-full px-4 py-2 border rounded-lg",
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-2", children: "Rating" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setFeedback((prev) => ({ ...prev, rating: star })),
            className: `text-2xl ${feedback.rating >= star ? "text-yellow-400" : "text-gray-300"}`,
            children: "★"
          },
          star
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Your message",
          value: feedback.message,
          onChange: (e) => setFeedback((prev) => ({ ...prev, message: e.target.value })),
          className: "w-full px-4 py-2 border rounded-lg",
          rows: "4",
          required: true
        }
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700",
          children: "Submit Feedback"
        }
      )
    ] })
  ] });
};

const StorySubmission = () => {
  const [story, setStory] = useState({
    story_text: "",
    allow_publish: false
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://stocai-blog-backend.onrender.com/api/stories/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(story)
      });
      setStory({ story_text: "", allow_publish: false });
      alert("Thank you for sharing your story!");
    } catch (error) {
      console.error("Error submitting story:", error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-lg text-white", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Share Your Story" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Have a similar experience? Share your story with our community!" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Your story...",
          value: story.story_text,
          onChange: (e) => setStory((prev) => ({ ...prev, story_text: e.target.value })),
          className: "w-full px-4 py-2 border rounded-lg text-gray-900",
          rows: "4",
          required: true
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            id: "allow_publish",
            checked: story.allow_publish,
            onChange: (e) => setStory((prev) => ({ ...prev, allow_publish: e.target.checked })),
            className: "mr-2"
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "allow_publish", children: "Allow us to publish your story" })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100",
          children: "Submit Story"
        }
      )
    ] })
  ] });
};

const RelatedPosts = ({ currentBlogId }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await fetch("https://stocai-blog-backend.onrender.com/api/blogs/");
        const blogs = await response.json();
        const filtered = blogs.filter((blog) => blog.id !== currentBlogId).slice(0, 3);
        setRelatedPosts(filtered);
      } catch (error) {
        console.error("Error fetching related posts:", error);
      }
    };
    fetchRelatedPosts();
  }, [currentBlogId]);
  return /* @__PURE__ */ jsxs("section", { className: "mt-12", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Next Up" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: relatedPosts.map((post) => /* @__PURE__ */ jsx("a", { href: `/posts/${post.slug}`, className: "no-underline", children: /* @__PURE__ */ jsx(
      BlogCard,
      {
        title: post.title,
        tldr: post.tldr,
        image: post.image,
        estimatedReadTime: post.estimated_read_time,
        slug: post.slug
      }
    ) }, post.id)) })
  ] });
};

const BlogPost = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("https://stocai-blog-backend.onrender.com/api/blogs/");
        const blogs = await response.json();
        const currentBlog = blogs.find((b) => b.slug === slug);
        if (!currentBlog) {
          console.warn("Blog not found for slug:", slug);
        }
        setBlog(currentBlog);
        setLikes(currentBlog?.likes || 0);
        setDislikes(currentBlog?.dislikes || 0);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);
  const handleLike = async () => {
    try {
      await fetch(`https://stocai-blog-backend.onrender.com/api/blogs/${blog.id}/like/`, {
        method: "POST"
      });
      setLikes((prev) => prev + 1);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };
  const handleDislike = async () => {
    try {
      await fetch(`https://stocai-blog-backend.onrender.com/api/blogs/${blog.id}/dislike/`, {
        method: "POST"
      });
      setDislikes((prev) => prev + 1);
    } catch (error) {
      console.error("Error disliking post:", error);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-10", children: "Loading..." });
  }
  if (!blog) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-10 text-red-500", children: "Blog not found." });
  }
  return /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: blog.image,
        alt: blog.title,
        className: "w-full h-64 object-cover rounded-lg mb-8"
      }
    ),
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: blog.title }),
    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2", children: "TL;DR" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: blog.tldr })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "prose max-w-none mb-8", children: blog.content }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mb-12", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleLike,
          className: "flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200",
          children: [
            "👍 Like (",
            likes,
            ")"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleDislike,
          className: "flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200",
          children: [
            "👎 Dislike (",
            dislikes,
            ")"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(CommentSection, { blogId: blog.id }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-12", children: [
      /* @__PURE__ */ jsx(FeedbackForm, { blogId: blog.id }),
      /* @__PURE__ */ jsx(StorySubmission, {})
    ] }),
    /* @__PURE__ */ jsx(RelatedPosts, { currentBlogId: blog.id })
  ] });
};

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex flex-col"> ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/krishnavardhan/stocai-blog-frontend/src/components/Header", "client:component-export": "default" })} <main class="flex-grow bg-gray-50"> ${renderComponent($$result2, "BlogPost", BlogPost, { "slug": slug, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/krishnavardhan/stocai-blog-frontend/src/components/BlogPost.jsx", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/krishnavardhan/stocai-blog-frontend/src/components/Footer", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/krishnavardhan/stocai-blog-frontend/src/pages/posts/[slug].astro", void 0);

const $$file = "/Users/krishnavardhan/stocai-blog-frontend/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
