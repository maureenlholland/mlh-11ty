module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats("html, liquid");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("serviceworker.js");
};
