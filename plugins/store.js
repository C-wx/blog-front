import Vue from "vue";
import Vuex from "vuex";
import cookie from "js-cookie";
Vue.use(Vuex);
var store = {
  install(Vue) {
    Vue.prototype.store = new Vuex.Store({
      state: {},

      getters: {
        getToken() {
          return cookie.get("token");
        }
      },

      mutations: {
        setToken(state, token) {
          cookie.set("token", token);
        },

        removeToken(state) {
          state.token = "";
        }
      },

      actions: {}
    });
  }
};
Vue.use(store);
