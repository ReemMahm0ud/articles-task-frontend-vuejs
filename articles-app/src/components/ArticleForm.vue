<template>
  <form @submit.prevent="handleCreateEvent">
    <h3>Add a New article</h3>

    <label for="title">Article title:</label>
    <input type="text" name="title" v-model="title" required>

    <label for="author">Article author:</label>
    <input type="text" name="author" v-model="author" required>

    <label for="description">description:</label>
    <textarea type="text" name="description" v-model="description" required/>

    <App-button buttonText="post"></App-button>
  </form>
</template>

<script>
import AppButton from './Button';
import ArticleService from '../services/ArticleService';
export default{
    data() {
        return {
            title:'',
            author:'',
            description:''
        }
    },
    components:{
        AppButton
    },
    methods: {
        handleCreateEvent() {
            ArticleService.create({
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
