<template>
  <div>
    <Nav />
    <!-- 
    <v-row>
      <h2 class="txt-header">View Schedule</h2>
      <v-col cols="12">
        <v-app id="inspire">
        
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="schedule"
            :items-per-page="20"
            :single-select="singleSelect"
            item-key="name"
            show-select
            class="elevation-1"
          >
            <template v-slot:top>
              <v-switch
                v-model="singleSelect"
                label="Single select"
                class="pa-3"
              ></v-switch>
            </template>
          </v-data-table>
          <v-btn @click="deleteRow(selected)">Delete Selected</v-btn>
        </v-app>
      </v-col>
    </v-row> -->
    <v-row>
      <h2 class="txt-header">View Schedule</h2>
      <v-col cols="12">
        <v-app id="inspire">
          <v-data-table
            :headers="headers"
            :items="schedule"
            :items-per-page="20"
            class="elevation-1"
          ></v-data-table>
        </v-app>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
import Nav from "../components/Nav.vue";
export default {
  name: "View Schedule",
  data() {
    return {
      singleSelect: false,
      selected: [],
      schedule: [],
      headers: [
        { text: "Day", value: "day" },
        { text: "Start Time", value: "timeStart" },
        { text: "End Time", value: "timeEnd" },
        { text: "Class Name", value: "className" },
        { text: "Studio Number", value: "studioNum" },
        { text: "Age Group", value: "ageGroup" },
        { text: "Additional Information", value: "addInformation" },
        { text: "Start Date", value: "startDate" },
        { text: "End Date", value: "endDate" },
      ],
    };
  },
  methods: {
    async getSchedule() {
      // console.log(this.form);
      await axios
        .get("https://www.beyonddancers.com/admin/schedule")
        .then((res) => {
          // this.schedule = res.data;
          this.schedule = res.data;
          console.log(typeof res.data);
        });
    },
  },
  created() {
    this.getSchedule();
    // this.sortArray()
  },
  components: { Nav },
};
</script>
