<template>
  <div>
    <button @click="verifyLogin" style="color: white; background: green">Verify Login</button>
  </div>
</template>

<script>
import ApiService from "../common/api.service";
export default {
    data() {
        return {
            verified: false,
        }
    },

    methods: {
        verifyLogin: function() {
            return new Promise((resolve, reject) => {
                ApiService.post(`/verify-account?email=${this.$route.params.email}`).
                then((response) => {
                    console.log(response);
                    resolve(response);
                }).
                catch((error) => {
                    console.log(error);
                    reject(error);
                })
            })
        }
    },
}
</script>

<style scoped>
</style>