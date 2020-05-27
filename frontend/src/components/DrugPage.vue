<template>
    <div>
        <h1>{{getDrug.name}}</h1>
        <h2>{{getDrug.description}}</h2>
        <h2>{{getDrug.dosage}}</h2>
        <div v-for="comment in getCurDrugComments" v-bind:key="comment.did">
            {{comment}}
        </div>
    </div>
</template>

<script>
import { GET_DRUG, GET_DRUG_COMMENTS } from '../store/actions.type';
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            drug: {
                drugName: this.$route.params.name,
            }
        }
    },

    computed: {
        ...mapGetters(["getDrug", "getCurDrugComments"])
    },
    
    created() {
        this.$store.dispatch(GET_DRUG, this.drug.drugName).
        then(() => {
            this.$store.dispatch(GET_DRUG_COMMENTS, this.getDrug.id)
        })
    }
}
</script>