<template>
  <v-row>
    <v-col>
      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center">
              <div class="section text-center">
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Sign Up</h4>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-style"
                              placeholder="User Name"
                              id="username"
                              autocomplete="off"
                              v-model="userName"
                            />

                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="email"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                              v-model="email"
                            />

                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                              v-model="password"
                            />

                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>

                          <div class="form-group mt-2">
                            <input
                              type="confirmpassword"
                              class="form-style"
                              placeholder="Confirm password"
                              id="logpass"
                              autocomplete="off"
                              v-model="confirmPassword"
                            />

                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button @click="loginSubmit">
                            <a href="#" class="btn mt-4">Sign Up</a>
                          </button>

                          <!-- <p class="mb-0 mt-4 text-center">
                            <a href="#0" class="link">Forgot your password?</a>
                          </p> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import Nav from "../components/Nav.vue";
import jwt from "jsonwebtoken";
import Cookie from "js-cookie";

export default {
  name: "",
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async loginSubmit() {
      await axios
        .post("https://www.beyonddancers.com/admin/signup", {
          userName: this.userName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message == "signedup") {
            this.$router.push("/");
          } else {
            this.password = "";
            this.confirmPassword = "";
          }
        })
        .catch((err) => console.log(err.message));
    },
  },
  created() {},
  components: { Nav },
};
</script>
