<template>
  <div>
    <h1>Article Listing</h1>
    <ArticleCard v-for="article in articles" :key="article.id" :article="article"/>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue'
import ArticleService from '../services/ArticleService';

export default {
    name: "article-list",
  components: {
    ArticleCard
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    ArticleService.getArticles()
      .then(response => {
        this.articles = response.data.data
        //console.log(response.data.data[0].id);
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
