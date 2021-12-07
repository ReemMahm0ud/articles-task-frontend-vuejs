<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{  moment(String(article.created_at)).format('MM/DD/YYYY hh:mm') }}</span>
      <h1 class="title">{{ article.title }}</h1>
      <h5>created by {{ article.created_by }}</h5>
    </div>

    <h2>article details</h2>
    <p>{{ article.description }}</p>

    <router-link class="event-link" :to="{ name: 'article-edit', params: { id: article.id } }">
        <App-Button  buttonText="edit"></App-Button>
    </router-link>

<App-Button @click="handleDelete(article.id)" buttonText="delete" style="
    margin-left: 336px;"></App-Button>

  </div>
</template>
<script>
import ArticleService from '../services/ArticleService';
import AppButton from '../components/Button.vue';
var moment = require('moment');

export default {
  props: ['id'],
  name: "article-show",
  components:{
      AppButton
  },
  data() {
    return {
      moment:moment,
      article: {}
    }
  },
  created() {
    ArticleService.show(this.id)
      .then(response => {
        this.article = response.data.data[0];
        console.log(response.data.data[0]);
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  methods: {
      handleDelete(id){
          ArticleService.delete(id)
          .then(response=>{
              console.log(response);
              alert(response.data.data.original);
          })
          .catch(error => {
        console.log('There was an error:', error.response)
      })
      this.$router.push({name:'article-list'});

      }
  },
}
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
