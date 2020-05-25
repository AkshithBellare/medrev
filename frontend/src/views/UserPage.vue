<template>
    <div class="user-details">
        <div class="user-banner">
            <div>
                <img src="@/assets/user.png" alt="" class="user-icon">
            </div>
            <h1>{{ currentUser.username }}</h1>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["currentUser"])
    }
}
</script>

<style scoped>
 .user-details {
     height: 100vh;
 }

 .user-banner > h1 {
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
 }
 .user-banner {
     display: flex;
     flex-direction: column;
     height: 20%;
     background: lightgray;
     align-items: center;
 }

 .user-icon {
     height: 130px;
     padding-top: 1.5em;
 }
</style>