<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-img
        :src="require('../assets/images/logo2.png')"
        max-height="180px"
        max-width="180px"
        alt="logo"
        contain
        eager
      ></v-img>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <!-- <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon> -->
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <!-- <v-icon>mdi-application</v-icon> -->
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <!-- <v-icon>mdi-minus</v-icon> -->
      </v-btn>
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer />
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "Nav",
  methods: {
    logout() {
      console.log("logout");
      Cookies.remove("email");
      Cookies.remove("user_name");
      this.$router.push("/");
    },
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/dashboard",
        },
        {
          icon: "mdi-format-align-justify",
          title: "View Preregistration",
          to: "/preregistration",
        },
        {
          icon: "mdi-account-multiple-plus",
          title: "Register",
          to: "/register",
        },

        {
          icon: "mdi-playlist-plus",
          title: "Add Schedule",
          to: "/addschedule",
        },
        {
          icon: "mdi-format-align-justify",
          title: "View Schedule",
          to: "/viewschedule",
        },
        {
          icon: "mdi-account-plus",
          title: "Add Account",
          to: "/signup",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
