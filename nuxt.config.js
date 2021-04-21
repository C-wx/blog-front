module.exports = {
  server: {
    port: 3000 // default: 3000
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "小菜良记",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "meta-key-words",
        name: "keywords",
        content: "小菜良记：SQL, Spring, 分布式, 微服务, 高并发, 架构"
      },
      {
        hid: "description",
        name: "description",
        content: "小菜良记：SQL, Spring, 分布式, 微服务, 高并发, 架构"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },

  modules: [
    "@nuxtjs/axios" //引入axios模块
  ],

  env: {
    BASE_API: "http://localhost"
  },

  axios: {
    // Axios options here
    baseURL: "http://localhost"
  },

  plugins: ["~/plugins/element-ui.js", "~/plugins/vue-qriously-plugin.js"]
};
