const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Home Page',
    },
    movies: {
      entry: 'src/movies.js',
      template: 'public/index.html',
      filename: 'movies.html',
      title: 'movies Page',
    },
    login: {
      entry: 'src/login.js',
      template: 'public/index.html',
      filename: 'login.html',
      title: 'login Page',
    },
  }

})
