<template>
    <div class="user-details">
        <div class="user-banner">
            <div>
                <img src="@/assets/user.png" alt="" class="user-icon">
            </div>
            <h1>{{ currentUser.username }}</h1>
        </div>
    
    <div class="user-info">
        <div class="detail">
            <div class="label"><h1>Name</h1></div>
            <div class="data"><h1>{{ currentUser.name }}</h1></div>
        </div>
  
        <div class="detail">
            <div class="label"><h1>Date of Birth</h1></div>
            <div class="data"><h1>{{ currentUser.dob }}</h1></div>
        </div>

        <div class="detail">
            <div class="label"><h1>Email</h1></div>
            <div class="data"><h1>{{ currentUser.email }}</h1></div>
        </div>

        <div class="detail">
            <div class="label"><h1>Blood group</h1></div>
            <div class="data"><h1>{{ currentUser.blood_grp }}</h1></div>
        </div>

        <div class="detail">
            <div class="label"><h1>Height</h1></div>
            <div class="data"><h1>{{ currentUser.height }}</h1></div>
        </div>

        <div class="detail">
            <div class="label"><h1>Weight</h1></div>
            <div class="data"><h1>{{ currentUser.weight }}</h1></div>
        </div>
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

  * {
  margin: 0px;
  padding: 0px; 
  box-sizing: border-box;
}
.user-info {
  display: flex;
  flex-direction: column;
  background: #56893c;
  width: 60%;
  border-radius: 8px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 1em;
}

.detail {
  display: flex;
  flex-direction: row;
  margin: 10px;
}

.data {
    color: white;
}

.label {
  background: #d2f8d2;
  border-radius: 4px;
  margin-right: 50px;
  padding: 4px;
}

</style>