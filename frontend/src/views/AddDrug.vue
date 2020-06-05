<template>
    <div>
        <form @submit.prevent="addDrug(drug)">
        <fieldset>
        <input type="text" placeholder="Enter Drug Name" v-model="$v.drug.name.$model">
        </fieldset>

        <fieldset>
        <input type="text" placeholder="Enter Description" v-model="$v.drug.description.$model">
        </fieldset>

        <fieldset>
        <input type="text" placeholder="Enter Dosage" v-model="$v.drug.dosage.$model">
        </fieldset>

        <fieldset>
            <input type="submit" value="Post Drug">
        </fieldset>
    </form>
    </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators';
import { ADD_DRUG } from '../store/actions.type';
export default {
    data() {
        return {
            drug: {
                name: '',
                description: '',
                dosage: '',
                userid: this.$store.getters.currentUser.id,
            }
        }
    },

    validations: {
        drug: {
            name: {
                required,
            },

            description: {
                required,
            },

            dosage: {
                required,
            },

            userid: {
                required,
            }

        }
    },

    methods: {
        addDrug: function(drug) {
            this.$store.dispatch(ADD_DRUG, drug);
        }
    }
}
</script>

<style scoped>

</style>