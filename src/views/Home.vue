<template>
  <div class="home">
    <h1 class="title"><span class="is-primary">Airsoft</span> Industries.</h1>
    <h2 class="subtitle">Site under construction.</h2>
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
