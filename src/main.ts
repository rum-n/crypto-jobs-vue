import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      numberOfSavedJobs: JSON.parse(localStorage.getItem("savedJobs") || "[]")
        .length,
    };
  },
  mutations: {
    increment(state) {
      state.numberOfSavedJobs++;
    },
    decrement(state) {
      state.numberOfSavedJobs--;
    },
  },
});

const app = createApp(App);
app.use(router);
app.provide("$store", store);
app.use(store);
app.mount("#app");
