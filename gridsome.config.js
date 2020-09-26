module.exports = {
  siteName: "Anna's Dog Grooming",
  siteDescription: "Quality dog grooms at a great price",
  siteUrl: "https://annasdoggrooming.netlify.com",
  titleTemplate: "%s",
  templates: {
    markdownPage: [
      {
        path: (node) => {
          return `/${node.fileInfo.name}`;
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
        typeName: "markdownPage",
        path: "./content/markdownPage/*.md",
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
