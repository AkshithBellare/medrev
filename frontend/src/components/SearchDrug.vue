<template>
    <div class="container shadow">
        <div class="input-container">
            <input type="text" placeholder="Enter Drug name" v-model="searchStr" @change="search()">
        </div>

        <div class="results">
            <ul>
                <li v-if="getDrugResults.length == 0" class="noresult">No Drug by that name</li>
                <li v-for="drug in getDrugResults" v-bind:key="drug.id" @click="showDrugPage">
                    {{ drug }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { SEARCH_DRUGS } from "../store/actions.type";
export default {
    data() {
        return {
            searchStr: '',
        }
    },

    computed: {
        ...mapGetters(['getDrugResults'])
    },

    methods: {
        search() {
            this.$store.dispatch(SEARCH_DRUGS, this.searchStr)
        },

        showDrugPage() {
            this.$router.push({ name: 'register' })
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    border-radius: 4px 04px 4px 4px;
    border: 1px solid lightgray;
}

.input-container > input {
    margin-bottom: 0;
    border: none;
    border-radius: 4px 4px 0px 0p56893cx;
}
 .results {
     
 }
 
 li {
     height: 60px;
     font-size: 1.4em;
     font-family: 'Roboto', sans-serif;
     padding-left: 10px;
     list-style: none;
 }

 li:hover {
     color: #56893c;
 }

.shadow {
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
   box-shadow:         3px 3px 5px 6px #ccc;
}

.noresult {
    color: red;
    font-size: 1.4em;
}
</style>