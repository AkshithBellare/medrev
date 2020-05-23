<template>
    <div class="auth-form">
            <h1>Sign in</h1>
            <router-link :to="{ name: 'register'}"><h2>Don't have an account?</h2></router-link>

        <form @submit.prevent="onSubmit(username, password)">
            <fieldset>
                <input type="text" placeholder="Username" v-model="username"/>
            </fieldset>

            <fieldset>
                 <input type="password" placeholder="Password" v-model="password"/>
            </fieldset>

            <input type="submit" name="login" id="submit" value="LOGIN">
        </form>
    </div>
</template>

<script>

import { LOGIN } from "../store/actions.type"
export default {
    name: "MedRevLogin",
    data() {
        return {
            username: null,
            password: null,
        }
    },

    methods: {
        onSubmit(username, password) {
            this.$store.dispatch(LOGIN, { username, password }).
            then(() => {
                this.$router.push({ name: "home" })
            })
        },
    },
}
</script>

<style scoped>
    .auth-form {
        width: 35%;
        margin: 0 auto;
        text-align: center;
    }

    .auth-form > h1 {
        font-family: 'Roboto', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .auth-form > a {
        color: #56893c;
        font-family: 'Raleway', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    form {
        padding-top: 30px;
    }
</style>
