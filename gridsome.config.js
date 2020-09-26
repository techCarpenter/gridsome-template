const slugify = require('@sindresorhus/slugify');

module.exports = {
  siteName: "Anna's Dog Grooming",
  siteDescription: "Quality dog grooms at a great price",
  siteUrl: "https://annasdoggrooming.netlify.com",
  titleTemplate: "%s",
  templates: {
    webPage: [
      {
        path: (node) => {
          return `/${slugify(node.pageURL)}`;
        },
      },
    ],
  },
  plugins: [
    {
      use: "@gridsome/plugin-sitemap",
      options: {},
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "galleryEntry",
        path: "./content/galleryEntry/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "serviceEntry",
        path: "./content/serviceEntry/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "webPage",
        path: "./content/webPage/*.md",
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        enableIdentityWidget: false,
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
    },
  },
};
