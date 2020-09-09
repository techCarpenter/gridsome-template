// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "~/assets/reset.css";
import "~/assets/styles.css";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  head.link.push({
    rel: "author",
    link: "/humans.txt/"
  });
  head.link.push({
    rel: "icon",
    link: "/favicon.svg"
  })
}
