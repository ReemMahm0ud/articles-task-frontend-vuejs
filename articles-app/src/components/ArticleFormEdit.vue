<template>
  <form @submit.prevent="handleUpdateEvent">
    <h3>Add a New article</h3>

    <label for="title">Article title:</label>
    <input type="text" name="title" v-model="title" required>

    <label for="author">Article author:</label>
    <input type="text" name="author" v-model="author" required>

    <label for="description">description:</label>
    <textarea type="text" name="description" v-model="description" required/>

    <App-button buttonText="update"></App-button>
  </form>
</template>

<script>
import AppButton from './Button';
import ArticleService from '../services/ArticleService';
export default{
    props: ['id'],
    // props:{
    //     id:{
    //         type:Number,
    //     }
    // },
    data() {
        return {
            title:'',
            author:'',
            description:'',
            article: {}
        }
    },
    components:{
        AppButton
    },
    created() {
    ArticleService.show(this.id)
      .then(response => {
        this.article = response.data.data[0]
        console.log(response.data.data[0]);
        this.title = this.article.title;
        this.author = this.article.created_by;
        this.description = this.article.description;
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
    methods: {
        handleUpdateEvent() {
            ArticleService.update(this.id,{
                title:this.title,
                created_by:this.author,
                description:this.description
                })
                .then(response=>{
                    alert(response.data.data.original);
                    //console.log(response.data.data.original);
                })
                .catch(error=>{
                    console.log('error',error.response);
                })
                this.$router.push({name:'article-list'});
        }
    },
}
</script>

<style>
form {
  padding: 10px;
  margin-top: 10px;
  border: 1px dashed #c3c8ce;
}
</style>
