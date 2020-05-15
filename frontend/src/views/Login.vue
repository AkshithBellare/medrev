<template>
    <div class="auth-page">
        <form @submit.prevent="onSubmit(username, password)">
            <fieldset>
                <input type="text" placeholder="Username" v-model="username"/>
            </fieldset>

            <fieldset>
                 <input type="text" placeholder="Username" v-model="password"/>
            </fieldset>

            <button>Sign in</button>
        </form>
    </div>
</template>

<script>

import { LOGIN, CHECK_AUTH } from "../store/actions.type"
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
            then(this.$store.dispatch(CHECK_AUTH))
        },
    },
}
</script>

<style scoped>
    .auth-page {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>