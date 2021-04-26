import { Message } from "element-ui";

export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
  });

  $axios.onRequestError(error => {
    console.log("onRequestError", error); // for debug
  });

  $axios.onResponse(response => {
    if (response.data.code === 0) {
      return response;
    }
    // } else if (response.data.code === -211) {
    //   console.log("用户校验失败");
    //   // debugger
    //   cookie.set("userInfo", "");
    //   window.location.href = "/";
    // } else {
    //   Message({
    //     message: response.data.message,
    //     type: "error",
    //     duration: 5 * 1000
    //   });
    //   return Promise.reject(response);
    // }
  });

  //通信失败
  $axios.onResponseError(error => {
    console.log("onResponseError", error); // for debug
  });
}
