<template>
  <div>
  <Nav />
  <v-row>
    <h2>Edit Schedule</h2>
    <v-col cols="12">
      <v-app id="inspire">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="1"
          class="elevation-1"
        ></v-data-table>
      </v-app>
    </v-col>
  </v-row>
  </div>
</template>
<script>
import Nav from '../components/Nav.vue';
export default {
    name: "Edit Schedule",
    components: { Nav }
};
</script>
