const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  dir: {
    output: "_site";
  }

  eleventyConfig.setTemplateFormats("html, liquid");
  eleventyConfig.addPassthroughCopy("img");
  // eleventyConfig.addPassthroughCopy("serviceworker.js");

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addTransform("CleanCSS", function(content, outputPath) {
    if (outputPath.endsWith(".css")) {
      let minified = new CleanCSS().minify(content).styles;
      return minified;
    }

    return content;
  });
};
