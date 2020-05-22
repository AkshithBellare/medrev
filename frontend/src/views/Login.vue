<template>
    <div class="auth-page">
        <form @submit.prevent="onSubmit(username, password)">
            <fieldset>
                <input type="text" placeholder="Username" v-model="username"/>
            </fieldset>

            <fieldset>
                 <input type="text" placeholder="Password" v-model="password"/>
            </fieldset>

            <button>Sign in</button>
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
</style>
