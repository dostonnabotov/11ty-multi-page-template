# Start 11ty Project

1. run `npm init -y`
2. run `npm install @11ty/eleventy --save-dev`
3. create `eleventy.js`, and paste:

```js
module.exports = function (eleventyConfig) {
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
```

4. See how to add a Sass workflow [here](https://11ty.recipes/recipes/add-a-sass-workflow/)
