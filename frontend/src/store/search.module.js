import ApiService from "../common/api.service"
import {
    SEARCH_DRUGS,
} from "./actions.type";

import {
    SET_DRUGS,
} from './mutations.type';

const state = {
  drugs: {},
}

const getters = {
    getDrugResults() {
        return state.drugs;
    }
}

const actions = {
   [SEARCH_DRUGS](context, searchString) {
    return new Promise((resolve, reject) => {
        ApiService.get(`/search?name=${searchString}`)
        .then((response) => {
            console.log(response.data)
            context.commit(SET_DRUGS, response.data)
            resolve(response)
        })
        .catch((error) => {
            console.log(error)
            reject(error)
        })
    })
   }
}

const mutations = {
    [SET_DRUGS](state, drugResults) {
        state.drugs = drugResults;
    }
}



export default {
    state,
    actions,
    mutations,
    getters,
}
