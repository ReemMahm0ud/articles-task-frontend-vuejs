<template>
  <article-form-edit :id="id" />
</template>

<script>
// @ is an alias to /src
import ArticleFormEdit from '../components/ArticleFormEdit.vue';

export default {
  props: ['id'],
  name: "Article-edit",
  components: {
    ArticleFormEdit
  },
};
</script>
