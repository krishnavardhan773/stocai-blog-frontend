/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_s204h1uY.mjs';
import 'kleur/colors';
import { B as BlogCard, $ as $$Layout, H as Header, F as Footer } from '../chunks/Footer_wq6B48Yg.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://stocai-blog-backend.onrender.com/api/blogs/");
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-10", children: "Loading..." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-8", children: "Latest Blog Posts" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogs.map((blog) => /* @__PURE__ */ jsx("a", { href: `/posts/${blog.slug}`, className: "no-underline", children: /* @__PURE__ */ jsx(
      BlogCard,
      {
        title: blog.title,
        tldr: blog.tldr,
        image: blog.image,
        estimatedReadTime: blog.estimated_read_time,
        slug: blog.slug
      }
    ) }, blog.id)) })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex flex-col"> ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/krishnavardhan/stocai-blog-frontend/src/components/Header", "client:component-export": "default" })} <main class="flex-grow bg-gray-50"> ${renderComponent($$result2, "BlogList", BlogList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/krishnavardhan/stocai-blog-frontend/src/components/BlogList", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/krishnavardhan/stocai-blog-frontend/src/components/Footer", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/krishnavardhan/stocai-blog-frontend/src/pages/index.astro", void 0);

const $$file = "/Users/krishnavardhan/stocai-blog-frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
