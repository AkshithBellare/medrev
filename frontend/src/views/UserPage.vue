<template>
    <div class="userpage">
  <div class="user-banner">
    <div class="user-image">
     <img src="@/assets/user.png">
    </div>
    
    <div class="username">
      <h1>{{ currentUser.username }}</h1>
    </div>
  </div>
  
  <div class="userdetails shadow">
    <div class="detail">
      <div class="label"><h2>Name</h2></div>
      <div class="det"><h2>{{ currentUser.name }}</h2></div>
    </div>
  
        <div class="detail">
          <div class="label"><h2>Date of Birth</h2></div>
          <div class="det"><h2>{{currentUser.dob.slice(0, 10)}}</h2></div>
    </div>
    
        <div class="detail">
          <div class="label"><h2>Blood Group</h2></div>
          <div class="det"><h2>{{currentUser.blood_grp}}</h2></div>
    </div>
    
        <div class="detail">
          <div class="label"><h2>Height</h2></div>
          <div class="det"><h2>{{currentUser.height}}</h2></div>
    </div>
    
        <div class="detail">
      <div class="label"><h2>Weight</h2>       </div>
        <div class="det"><h2>{{currentUser.weight}}</h2></div>
    </div>
    
        <div class="detail">
          <div class="label"><h2>Gender</h2></div>
          <div class="det"><h2>{{currentUser.gender}}</h2></div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.userpage {
  display: flex;
  flex-direction: column;
}

.user-banner {
  background: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-image > h1 {
  font-size: 90px;
}

.username {
  padding-bottom: 10px;
  font-size: 20px;
}

.user-image > img {
    height: 8em;
}

.user-image {
    margin-top: 1em;
}

.userdetails {
  margin: 4em auto;
  border-radius: 4px;
  width: 50%;
}

.detail {
  display: flex;
  padding: 10px;
}

.det > h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4em;
}

.label > h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4em;
}

.label {
  padding: 5px;
  background: lightgreen;
  border-radius: 4px 0px 0px 4px;
}

.username > h1 {
    font-family: 'Raleway',sans-serif;
}
.det {
  padding-left: 1em;
  border-radius: 0px 4px 4px 0px;
  background: lightsalmon;
  padding-right: 1em;
  padding-top: 5px;
  padding-bottom: 5px;
}

.shadow {
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
   box-shadow:         3px 3px 5px 6px #ccc;
}
</style>