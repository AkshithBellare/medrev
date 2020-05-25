<template>
    <div id="home-page">
    <div class="brand-banner">
        <h1>MEDREV</h1>
        <h2>A place to search Drugs</h2>
    </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["isAuthenticated", "currentUser"])
    }
}
</script>
<style scoped>
    h1, h2 {
        color: white;
        font-family: 'Raleway', 'sans-serif';
    }

    .brand-banner {
        padding-top: 2em;
        padding-bottom: 2em;
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        background: #56893c;
        text-align: center;
    }

    .brand-banner > h1 {
        font-size: 2.5em;
    }

    #home-page {
        height: 100vh;
    }
</style>