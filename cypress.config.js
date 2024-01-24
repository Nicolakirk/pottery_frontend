const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "tw17w2",
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
