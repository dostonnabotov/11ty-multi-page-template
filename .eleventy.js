const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// import filters
const filterTagList = require("./src/_11ty/filters/filterTagList.js");
const limit = require("./src/_11ty/filters/limit.js");
const date = require("./src/_11ty/filters/date.js");

// import collections
const tagList = require("./src/_11ty/collections/tagList.js");

module.exports = function (eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // filters
  eleventyConfig.addFilter("filterTagList", filterTagList);
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("dateMedium", date.getMedium);
  eleventyConfig.addFilter("dateISO", date.getISO);

  // collections
  eleventyConfig.addCollection("tagList", tagList);

  // passthrough copy
  eleventyConfig.addPassthroughCopy("./src/assets/img/");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/uploads/");

  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: "./dist/assets/css/**/*.css",
  });

  // base config
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
