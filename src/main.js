// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/reset.css";
import "~/assets/styles.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "author",
    href: "/humans.txt",
  });
  head.link.push({
    rel: "icon",
    sizes: "16x16",
    href: "/favicon-16x16.png",
    type: "image/png",
  });
  head.link.push({
    rel: "icon",
    sizes: "32x32",
    href: "/favicon-32x32.png",
    type: "image/png",
  });
  head.link.push({
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  });
  head.link.push({
    rel: "manifest",
    href: "/site.webmanifest",
  });
}
