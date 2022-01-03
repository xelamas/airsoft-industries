<template>
  <div class="home">
    <h1 class="title has-text-white has-text-weight-light is-size-2"><span class="has-text-primary">Airsoft</span> Industries.</h1>
    <h2 class="subtitle has-text-white has-text-weight-light is-size-4">Site under construction.</h2>

    <div class="card-container">
      <div class="columns is-multiline">
        <div class="column is-6">
          <b-field label="Name:">
            <b-input v-model="formData.name"></b-input>
          </b-field>
        </div>

        <div class="column is-6">
          <b-field label="Email:">
            <b-input v-model="formData.email"></b-input>
          </b-field>
        </div>

        <div class="column is-12">
          <b-field label="Message:">
            <b-input type="textarea" v-model="formData.message"></b-input>
          </b-field>
        </div>

        <div class="column is-12">
          <vue-recaptcha ref="c" sitekey="6LfhEeodAAAAAHR5MmovBFnDR73AkhOZ6kVcajEk" :loadRecaptchaScript="true">
            <b-button class="is-fullwidth" type="is-primary" @click="SendEnquiry">Send Enquiry</b-button>
          </vue-recaptcha>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { collection, addDoc } from "firebase/firestore";

@Component({})
export default class Home extends Vue {
  private formData: { name: string; email: string; message: string; date: Date } = {
    name: "",
    email: "",
    message: "",
    date: new Date(),
  };
  private resetFormData: { name: string; email: string; message: string; date: Date } = {
    name: "",
    email: "",
    message: "",
    date: new Date(),
  };

  private async SendEnquiry(): Promise<void> {
    try {
      await addDoc(collection(this.$firebase, "messages"), {
        name: this.formData.name,
        email: this.formData.email,
        date: this.formData.date,
        message: this.formData.message,
      });
      this.$buefy.toast.open({
        message: `Enquiry Sent`,
        type: "is-success",
      });
      this.formData = this.resetFormData;
    } catch (err) {
      this.$buefy.toast.open({
        message: `Failed To Send Enquiry`,
        type: "is-danger",
      });
    }
  }
}
</script>

<style lang="scss">
.toast.is-success {
  background-color: $success;
  color: $white;
}
.toast.is-danger {
  background-color: $danger;
  color: $white;
}
.card-container {
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;

  .field {
    position: relative;
    .help {
      position: absolute;
      top: 100%;
      left: 50%;
      color: $danger;
      width: 100%;
      transform: translateX(-50%);
    }
    .label {
      color: $primary;
      text-align: left;
      font-weight: 100;
      font-size: 24px;
      margin-bottom: -3px;
    }
  }
}
</style>
