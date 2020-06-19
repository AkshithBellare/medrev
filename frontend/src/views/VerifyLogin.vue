<template>
  <div class="verify-page">
    <div class="verify-account">
      <h1 style="text-align: center">Click on the button below to verify your Account</h1>
      <button @click="verifyLogin" style="color: white; background: green">Verify Account</button>
    </div>
  </div>
</template>

<script>
import ApiService from "../common/api.service";
export default {
  data() {
    return {
      verified: false
    };
  },

  methods: {
    verifyLogin: function() {
      return new Promise((resolve, reject) => {
        ApiService.post(`/verify-account?email=${this.$route.params.email}`)
          .then(response => {
            console.log(response);
            resolve(response);
            this.$router.push({ name: "home" });
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    }
  }
};
</script>

<style scoped>
.verify-page {
  height: 100vh;
}

button {
  width: 400px;
  font-size: 30px;
}

.verify-account {
  text-align: center;
}

.verify-account > h1 {
  font-family: "Raleway", sans-serif;
  margin-bottom: 30px;
}

button:hover {
  background: #3ca55c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #b5ac49,
    #3ca55c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #b5ac49,
    #3ca55c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

button:active {
  transform: translateY(4px);
}
</style>