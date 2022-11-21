<template>
  <div>
    <Nav />
    <v-row>
      <v-col cols="12">
        <h2 class="txt-header">All Preregistration</h2>
        <v-app id="inspire">
          <div class="table-style">
            <table id="pre">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Student Name</th>
                  <th>Parent Name</th>
                  <th>Gender</th>
                  <th>Date of Birth</th>
                  <th>Age group</th>
                  <th>School</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Instagram</th>
                  <th>Interest</th>
                  <th>Shoe Size</th>
                  <th>Additional</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </v-app>
        <button @click="ExportExcel('xlsx')" class="btn btn-thrid">
          Export List of Email
        </button>
      </v-col>
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
          res.data.forEach((element) => {
            var birthDates = new Date(element.date_of_birth);
            element.date_of_birth = birthDates.toDateString();
            this.onlyemail.push({ email: element.email + ";" });
          });
          this.data = res.data;
          this.table(res.data);
          console.log(this.data);
          console.log(this.onlyemail);
        })
        .catch((err) => console.log(err.message));
    },
    table(row) {
      $("#pre").DataTable({
        destroy: true,
        dom: "lBfrtip",
        buttons: ["excel", "print", "csv"],
        order: [[0, "desc"]],
        data: row,
        columns: [
          {
            data: "id",
          },
          {
            data: "student_name",
          },
          {
            data: "parent_name",
          },
          {
            data: "gender",
          },
          {
            data: "date_of_birth",
          },
          {
            data: "age_group",
          },
          {
            data: "school",
          },
          {
            data: "email",
          },
          {
            data: "phone",
          },
          {
            data: "instagram",
          },
          {
            data: "interest",
          },
          {
            data: "shoe_size",
          },
          {
            data: "additional_info",
          },
        ],
      });
    },
  },
  created() {
    this.getData();
  },
  components: { Nav },
};
</script>
