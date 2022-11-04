<template>
  <div>
<Nav />
<v-row>
  <h2 class="txt-header">Register Student</h2>
  <v-col cols="12">
    <v-app id="inspire">
      <form>
        <v-text-field
          sm="6"
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Student Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          cols="6"
          v-model="form.parent_name"
          :error-messages="nameErrors"
          :counter="10"
          label="Parent/Guardian Name
Required for Children Ages 18 and Under"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-radio-group v-model="row" row>
          <v-radio
            v-model="form.gender"
            label="Female"
            value="radio-1"
          ></v-radio>
          <v-radio
            v-model="form.gender"
            label="Male"
            value="radio-2"
          ></v-radio>
        </v-radio-group>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Birthday date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="form.dob"
            :active-picker.sync="activePicker"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
        <v-radio-group v-model="column" column>
          <h4>Age group</h4>
          <v-radio
            v-model="form.age_group"
            label="3-5 year old"
            value="radio-1"
          ></v-radio>
          <v-radio
            v-model="form.age_group"
            label="6-9 year old"
            value="radio-2"
          ></v-radio>
          <v-radio
            v-model="form.age_group"
            label="10-13 year old"
            value="radio-3"
          ></v-radio>
          <v-radio
            v-model="form.age_group"
            label="14-18 year old"
            value="radio-4"
          ></v-radio>
          <v-radio
            v-model="form.age_group"
            label="Other"
            value="radio-5"
          ></v-radio>
        </v-radio-group>
        <v-text-field
          v-model="form.school"
          label="School (if applicable)"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
        
          v-model="form.phone"
          :error-messages="emailErrors"
          label="Phone Number"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.instagram"
          :rules="rules"
          counter
          maxlength="25"
          label="Instagram Account (if applicable)"
        ></v-text-field>
        <h4>What are you interested in? (Check all that applies)</h4>
        <v-checkbox
          v-model="form.interest"
          label=" Children's Dance Classes (Ballet, Jazz, Hip Hop, Lyrical Etc.)"
          value=" Children's Dance Classes (Ballet, Jazz, Hip Hop, Lyrical Etc.)"
        ></v-checkbox>
        <v-checkbox
          v-model="form.interest"
          label="Adults Classes (Yoga, Kickboxing,Salsa, Zumba...)"
          value="Adults Classes (Yoga, Kickboxing,Salsa, Zumba...)"
        ></v-checkbox>
        <v-checkbox
          v-model="form.interest"
          label="Taekwondo "
          value="Taekwondo "
        ></v-checkbox>
        <v-checkbox
          v-model="form.interest"
          label="Summer Camp"
          value="Summer Camp"
        ></v-checkbox>
        <v-checkbox
          v-model="form.interest"
          label="Birthday Parties  "
          value="Birthday Parties  "
        ></v-checkbox>
        <v-checkbox
          v-model="form.interest"
          label="Private Piano Lessons"
          value="Private Piano Lessons"
        ></v-checkbox>
        <v-checkbox
          v-model="form.interest"
          label="Studio Space Rental"
          value="Studio Space Rental"
        ></v-checkbox>
        <v-checkbox
          v-model="form.interest"
          label="Job Opportunity"
          value="Job Opportunity"
        ></v-checkbox>
        <v-checkbox
          v-model="form.interest"
          label="Other"
          value="Other"
        ></v-checkbox>
        <v-text-field
          v-model="form.shoe"
          label="Dancer's Shoe Size (Euro Measurements)"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.add_info"
          label="Additional Information"
          required
        ></v-text-field>

        <v-btn type="submit" class="mr-4" @click="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </v-app>
  </v-col>
</v-row>
  </div>
</template>
<script>
import axios from "axios";
import Nav from "../components/Nav.vue";
export default {
    name: "IndexPage",
    data() {
        return {
            form: {
                student_name: "",
                parent_name: "",
                gender: "",
                dob: "",
                age_group: "",
                school: "",
                email: "",
                phone: "",
                instagram: "",
                interest: [],
                shoe: "",
                add_info: "",
            },
        };
    },
    methods: {
        async submitForm() {
            // console.log(this.form);
            await axios
                .post("https://www.beyonddancers.com/admin/register", {
                form: this.form,
            })
                .then((res) => {
                console.log(res.data);
            });
        },
    },
    components: { Nav }
};
</script>
