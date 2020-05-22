<template>
    <header>
	    <router-link class="navbar-brand" :to="{ name: 'home' }">
                MEDREV
        </router-link>
			<nav>
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
    		</nav>
    </header>
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

<style scoped>
	header,
    nav {
        display: flex;
    }

    header {
        flex-direction: row;
        justify-content: space-between;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }

    .navbar-brand {
        padding-left: 5%;
        font-size: 1.5em;
        margin: 0;

    }

    nav a {
        padding: 10px 15px;
        text-transform: uppercase;
        text-align: center;
        color: #696966;
    }

    nav a:hover {
        color: #464646;
    }

    nav a.router-link-exact-active {
        color: #000000;
    }
    li {
        display: inline;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a{
        text-decoration: none;

    }
</style>
