<template>
  <v-row>
    <v-col>
     
      <div class="section">
        <div class="container">
          <div class="logo1">
        <nuxt-link to="/">
          
          <div class="bg-container">
            <div class="bg-block active">
              <img src="../assets/images/logo1.svg" alt="" />
            </div>
            <div class="bg-block">
              <img class="mid2" src="../assets/images/logo2.svg" alt="" />
            </div>
            <div class="bg-block">
              <img src="../assets/images/logo3.svg" />
            </div>
            <div class="bg-block">
              <img src="../assets/images/logo4.svg" />
            </div>
            <div class="bg-block">
              <img src="../assets/images/logo5.svg" />
            </div>
            <div class="bg-block">
              <img src="../assets/images/logo6.svg" />
            </div>
          </div>
        </nuxt-link>
      </div>
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center">
              <div class="section text-center">
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Log In</h4>
                          <div class="form-group">
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
                          <button @click="loginSubmit">
                            <a class="btn mt-4">Login</a>
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
      email: "",
      password: "",
    };
  },
  methods: {
    async loginSubmit() {
      console.log("login");
      await axios
        .post("https://beyonddancers.com/admin/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data.jwt);
          if (res.data.message) {
            jwt.verify(res.data.jwt, "NARDOS_BEYOND", function (err, decoded) {
              console.log(decoded); // bar
              Cookie.set("email", decoded.email);
              Cookie.set("user_name", decoded.userName);
            });
            this.$router.push("/dashboard");
          } else {
            this.email = "";
            this.password = "";
          }
        })
        .catch((err) => console.log(err.message));
    },
  },
  created() {},
  components: { Nav },
};
</script>
