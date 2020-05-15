<template>
    <nav>
        <div>
            <router-link class="navbar-brand" :to="{ name: 'home' }">
                MedRev
            </router-link>
            <ul v-if="!isAuthenticated" class="">
                <li class="">
                    <router-link :to="{}">Home</router-link>
                </li>

                <li class="">
                    <router-link :to="{ name: 'login' }">Sign In</router-link>
                </li>

                <li class="">
                    <router-link :to="{}">Sign Up</router-link>
                </li>
            </ul>
            <ul v-else class="">

            </ul>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "MedRevHeader",
    computed: {
        ...mapGetters(["currentUser", "isAuthenticated"])
    }
}
</script>