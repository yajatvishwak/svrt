const preprocess = require("svelte-preprocess");

const config = {
  vitePlugin: {
    disableDependencyReinclusion: ["@roxi/routify"],
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

module.exports = config;
