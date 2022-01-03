import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/main.scss";
import Buefy from 'buefy'

Vue.use(Buefy)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyD9MaJGmuNifgZL6NbvZk5Ul61R_PFycDY",
  authDomain: "airsoft-industries.firebaseapp.com",
  projectId: "airsoft-industries",
  storageBucket: "airsoft-industries.appspot.com",
  messagingSenderId: "668405214095",
  appId: "1:668405214095:web:5dbd95e6e4d82d2bf039fa",
  measurementId: "G-Z3HPDGBL97",
});

Vue.prototype.$firebase = getFirestore();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
