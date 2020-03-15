module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats("html");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("styles.css");
};
