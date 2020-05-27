<template>
    <div>Loading drug data...</div>
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
        ...mapGetters(["getDrug"])
    },
    
    created() {
        this.$store.dispatch(GET_DRUG, this.drug.drugName).
        then(() => {
            this.$store.dispatch(GET_DRUG_COMMENTS, this.getDrug.id)
        })
    }
}
</script>