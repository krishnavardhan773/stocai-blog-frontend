import { e as createComponent, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate } from './astro/server_s204h1uY.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>StocAI - Latest Articles</title><meta name="description" content="Explore the latest articles about technology, development, and innovation.">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/krishnavardhan/stocai-blog-frontend/src/layouts/Layout.astro", void 0);

const Header = () => {
  return /* @__PURE__ */ jsx("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-2xl font-bold text-gray-900", children: "StocAI" }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "text-gray-600 hover:text-gray-900", children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "/about", className: "text-gray-600 hover:text-gray-900", children: "About" }),
      /* @__PURE__ */ jsx("a", { href: "/contact", className: "text-gray-600 hover:text-gray-900", children: "Contact" })
    ] })
  ] }) });
};

const BlogCard = ({ title, tldr, image, estimatedReadTime, slug }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: title,
        className: "w-full h-48 object-cover"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2 text-gray-900", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: tldr }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", children: [
          estimatedReadTime,
          " min read"
        ] }),
        /* @__PURE__ */ jsx("button", { className: "text-blue-600 hover:text-blue-800 font-medium", children: "Share with a Friend" })
      ] })
    ] })
  ] });
};

const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-900 text-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "StocAI" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Exploring the latest in technology, development, and innovation." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-gray-400 hover:text-white", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/about", className: "text-gray-400 hover:text-white", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/contact", className: "text-gray-400 hover:text-white", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Newsletter" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "Subscribe to our newsletter for the latest updates." }),
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              placeholder: "Enter your email",
              className: "px-4 py-2 rounded-l-md w-full text-gray-900"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700", children: "Subscribe" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 pt-8 border-t border-gray-800 text-center text-gray-400", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " StocAI. All rights reserved."
    ] }) })
  ] }) });
};

export { $$Layout as $, BlogCard as B, Footer as F, Header as H };
