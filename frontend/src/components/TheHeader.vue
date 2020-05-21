<template>
    <nav>
        <div>
            <router-link class="navbar-brand" :to="{ name: 'home' }">
                MedRev
            </router-link>
            <ul v-if="!isAuthenticated" class="">
                <li class="">
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>

                <li class="">
                    <router-link :to="{ name: 'login' }">Sign In</router-link>
                </li>

                <li class="">
                    <router-link :to="{ name: 'register' }">Sign Up</router-link>
                </li>
            </ul>
            <ul v-else class="">
                <button v-on:click="logout">LOGOUT</button>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "../store/actions.type"

export default {
    name: "MedRevHeader",
    computed: {
        ...mapGetters(["currentUser", "isAuthenticated"])
    },
    methods: {
        logout() {
            this.$store.dispatch(LOGOUT)
        }
    }
}
</script>