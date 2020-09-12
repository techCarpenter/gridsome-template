module.exports = {
  siteName: "Anna's Dog Grooming",
  siteDescription: "",
  siteUrl: "https://annasdoggrooming.netlify.com",
  titleTemplate: "%s",
  templates: {
    PageMarkdown: [
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
        typeName: "PageMarkdown",
        baseDir: "./content/markdownPages",
        path: "*.md",
      },
    },
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     typeName: "galleryEntry",
    //     baseDir: "./content/galleryEntries",
    //     path: "*.md",
    //   },
    // },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Service",
        baseDir: "./content/serviceEntries",
        path: "*.md",
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
