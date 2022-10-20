<template>

  <v-row>
    <h2>View Schedule</h2>
    <v-col cols="12">
      <v-app id="inspire">
        <v-data-table
          :headers="headers"
          :items="schedule"
          :items-per-page="10"
          class="elevation-1"
        ></v-data-table>
      </v-app>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  name: "View Schedule",
  data() {
    return {
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

      await axios.get("https://www.beyonddancers.com/admin/schedule").then((res) => {
        // this.schedule = res.data;
        this.schedule = res.data ;
        console.log( typeof res.data);
      });
    },
  },
  created() {
    this.getSchedule();
    // this.sortArray()
  },
};
</script>
