<template>
<div>
  <Nav />
  <v-row>
  
    <v-col cols="12" >
      <h2 class="txt-header">View All Preregistration</h2>
      <v-app id="inspire">
        <v-data-table
          :headers="headers"
          :items="data"
          :items-per-page="10"
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
    name: "All Preregistration",
    data() {
        return {
            data: [],
            headers: [
                { text: "NAME", value: "student_name" },
                { text: "PARENT NAME", value: "parent_name" },
                { text: "GENDER", value: "gender" },
                { text: "DATE OF BIRTH", value: "date_of_birth" },
                { text: "AGE GROUP", value: "age_group" },
                { text: "SCHOOL", value: "school" },
                { text: "EMAIL", value: "email" },
                { text: "PHONE", value: "phone" },
                { text: "INSTAGRAM", value: "instagram" },
                { text: "INTEREST", value: "interest" },
                { text: "SHOE SIZE", value: "shoe_size" },
                { text: "ADDITIONAL INFO", value: "additional_info" },
            ],
        };
    },
    methods: {
        async getData() {
            await axios
                .get("https://www.beyonddancers.com/admin/register")
                .then((res) => {
                // console.log(res.data);
                this.data = res.data;
                console.log(this.data);
            })
                .catch((err) => console.log(err.message));
        },
    },
    created() {
        this.getData();
    },
    components: { Nav }
};
</script>
