// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Anna's Dog Grooming",
  siteDescription: "",
  siteUrl: "https://annasdoggrooming.netlify.com/",
  titleTemplate: "%s",
  templates: {
    PageMarkdown: "/:slug",
  },
  plugins: [
    {
      use: "@gridsome/plugin-sitemap",
      options: {},
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "PageMarkdown",
        baseDir: "./content/markdownPages",
        path: "*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "galleryEntry",
        baseDir: "./content/galleryEntries",
        path: "*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Service",
        baseDir: "./content/serviceEntries",
        path: "*.md",
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
    },
  },
};
