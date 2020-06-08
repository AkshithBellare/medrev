<template>
  <div id="rating-editor">
    <star-rating
      :increment="0.5"
      v-model="rating"
      @rating-selected="setRating"
      v-bind:show-rating="false"
    ></star-rating>
    <button v-bind:disabled="ratingSubmitted" @click="submitRating">{{ratingStatus}}</button>
  </div>
</template>

<script>
import { ADD_RATING } from "../store/actions.type";
import StarRating from "vue-star-rating";
export default {
  name: "MedRevRating",
  components: {
    StarRating
  },
  data() {
    return {
      rating: null,
      ratingSubmitted: false
    };
  },

  computed: {
    ratingStatus: function() {
      if (this.ratingSubmitted == false) {
        return "Submit rating";
      } else return "Rating Submitted";
    }
  },
  methods: {
    setRating: function(rating) {
      this.rating = rating;
    },

    submitRating: function() {
      this.$store
        .dispatch(ADD_RATING, {
          rating: this.rating,
          did: this.$store.getters.getDrug.id
        })
        .then((this.ratingSubmitted = true));
    }
  }
};
</script>

<style scoped>
#rating-editor {
  display: flex;
  flex-direction: row;
}

#rating-editor > button {
  width: 150px;
}

#rating-editor > button:disabled {
  background: lightgreen;
  color: black;
}
</style>