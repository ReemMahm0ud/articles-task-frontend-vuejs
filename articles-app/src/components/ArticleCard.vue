<template>
  <router-link class="event-link" :to="{ name: 'article-show', params: { id: article.id } }">
    <div class="event-card -shadow">
      <span class="eyebrow">@{{  moment(String(article.created_at)).format('MM/DD/YYYY hh:mm') }}</span>
      <h4 class="title">{{ article.title }}</h4>
      <BaseIcon name="users">{{ article.created_by }}</BaseIcon>
    </div>
  </router-link>
</template>

<script>
var moment = require('moment');
export default {
  props: {
    article: Object
  },
  data() {
      return {
          moment:moment,
      }
  },
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
