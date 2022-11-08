<template>
  <div>
    <Nav />
    <v-row>
      <v-col cols="12">
        <h2 class="txt-header">View All Preregistration</h2>
        <v-app id="inspire">
          <v-data-table
            :headers="headers"
            :items="data"
            :items-per-page="20"
            class="elevation-1"
          ></v-data-table>
        </v-app>
       
        <button class="btn btn-thrid" id="btn">Export to Excel</button>
      </v-col>
      <!-- <v-col cols="12" >
      <h2 class="txt-header">View All Preregistration</h2>
      <v-app id="inspire">
        <v-data-table
          :headers="headers"
          :items="data"
          :items-per-page="20"
          class="elevation-1"
        ></v-data-table>
      </v-app>
    </v-col> -->
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../components/Nav.vue";
import * as xlsx from "xlsx/xlsx.mjs";

export default {
  name: "All Preregistration",
  data() {
    return {
      data: [],
      onlyemail: [],
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
    ExportExcel(email) {
      console.log("export");
   

      const XLSX = xlsx;
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(this.onlyemail);
      XLSX.utils.book_append_sheet(workbook, worksheet, "Student_Email");
      XLSX.writeFile(workbook, "Student_Email.xlsx");
    },
    async getData() {
      await axios
        .get("https://www.beyonddancers.com/admin/register")
        .then((res) => {
          // console.log(res.data);
          this.data = res.data;
          res.data.forEach((element) => {
            this.onlyemail.push({ email: element.email + ";" });
          });
          console.log(this.data);
          console.log(this.onlyemail);
        })
        .catch((err) => console.log(err.message));
    },
  },
  created() {
    this.getData();
  },
  components: { Nav },
};
</script>
