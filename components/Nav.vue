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
        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </v-app-bar>
      
      <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
        <v-list>
          <v-list-item @click.native="right = !right">
            <v-list-item-action>
              <v-icon light> mdi-repeat </v-icon>
            </v-list-item-action>
            <v-list-item-title>Switch drawer (click me)</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    </v-app>
  </template>
  
  <script>
  export default {
    name: "Nav",
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: "mdi-apps",
            title: "Dashboard",
            to: "/",
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
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: "Vuetify.js",
      };
    },
  };
  </script>
  