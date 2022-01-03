<template>
  <div class="home">
    <h1 class="title has-text-white has-text-weight-light is-size-2"><span class="has-text-primary">Airsoft</span> Industries.</h1>
    <h2 class="subtitle has-text-white has-text-weight-light is-size-4">Site under construction.</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import { collection, addDoc } from "firebase/firestore";

@Component({
  components: {},
})
export default class Home extends Vue {
  private async mounted(): Promise<void> {
    // const docRef = await addDoc(collection(this.$firebase, "messages"), {
    //   name: "Alex J2",
    //   email: "alex@a-j.dev",
    //   date: new Date(),
    //   message: "hello there, general kenobi",
    // });
    // console.log("Document written with ID: ", docRef.id);
  }
}
</script>
