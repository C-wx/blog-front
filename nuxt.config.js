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

  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],

  env: {
    BASE_API: "http://localhost:8000"
  },

  axios: {
    // Axios options here
    proxy: true
  },

  proxy: {
    "/api": {
      changeOrigin: true,
      target: "http://127.0.0.1:8000", // 允许跨域的服务器地址
      pathRewrite: {
        "^/api": ""
      }
    }
  },

  plugins: [
    "~/plugins/axios.js",
    "~/plugins/element-ui.js",
    "~/plugins/vue-qriously-plugin.js"
  ]
};
