<template>
  <v-app light>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer  class="lefty" :absolute="!fixed" app>
      <p>
      </p>
      <span
      class="small-text"  >All right reserved to beyond Dance Studio &copy;
        {{ new Date().getFullYear() }} Powered beyond
        <a href="https://versavvymedia.com/">VERSAVVY MEDIA PLC</a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import Cookie from "js-cookie";
export default {
  name: "DefaultLayout",
  methods: {
    checkVerfication() {
      const email = Cookie.get("email");
      const user = Cookie.get("user_name");

      console.log(user);
      if (email == undefined) {
        // window.location.href = "/";
        this.$router.push("/");
      } else {
      }
    },
  },
  created() {
    // this.checkVerfication();
    // console.log(document.cookie);
    // this.$cookies.set("email");
  },
};
</script>
