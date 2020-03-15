module.exports = {
  server: {
    command: "npx @11ty/eleventy --serve",
    port: 8080,
    debug: true,
    launchTimeout: 30000
  },
  launch: {
    headless: false,
    devtools: true,
    timeout: 30000
  }
};
