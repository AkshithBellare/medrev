<template>
	<div>
	<star-rating :increment="0.5" v-model="rating" @rating-selected ="setRating"></star-rating>
	<div class="comment-editor">
    	<textarea
        rows="3"
        placeholder="Enter comment"
		v-model="comment"
		></textarea>
      	<div class="card-footer">
        	<h1>A</h1>
        	<button @click="addComment()">Post comment</button>
      	</div>
    </div>
	</div>
</template>


<script>
import { ADD_COMMENT, ADD_RATING } from '../store/actions.type';
import StarRating from 'vue-star-rating';
export default {
	name: "MedRevCommentEditor",
	components: {
		StarRating,
	},
	// props: ['uid', 'did'],
	data() {
		return{
			rating: 5,
			uid: '',
			did: '',
			comment: '',
		}
	},
	methods: {
		addComment() {
			this.$store.dispatch(ADD_COMMENT, {
				uid: this.$attrs.uid,
				did: this.$attrs.did,
				comment_desc: this.comment,
			}).then(
				this.$store.dispatch(ADD_RATING, {
					rating: this.rating,
					did: this.$attrs.did,
				})
			).then(
				window.location.reload()
			)
		},

		setRating: (rating) => {
			this.rating = rating;
		}
	}
	
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  .comment-editor {
    width: 50%;
  }

  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
	textarea {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		width: 100%;
		padding: 5px;
	}

	.card-footer > button {
		padding-left: 5px;
		padding-right: 5px;
		padding-top: 1px;
		width: 100px;
		height: 50px;

	}
</style>