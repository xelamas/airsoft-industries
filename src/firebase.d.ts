import Vue from "vue";
import TokenService from "../path/to/token-service";
import { Firestore } from "firebase/firestore";

declare module "vue/types/vue" {
  interface Vue {
    $firebase: Firestore;
  }
}
