//import Vue from 'vue'
import { createRouter, createWebHistory } from "vue-router";
//import Home from "../views/Home.vue";
import ArticleCreate from "../views/ArticleCreate.vue";
import ArticleList from "../views/ArticleList.vue";

const routes = [
  {
    path: "/",
    name: "article-list",
    component: ArticleList,
  },
//   {
//     path: "/article/:id",
//     name: "article-show",
//     component:ArticleShow,
//     props:true
//   },
//   {
//       path:"/articleEdit/:id",
//       name:"article-edit",
//       component:ArticleEdit,
//       props:true
//   },
  {
      path:"/article/create",
      name: "article-create",
      component:ArticleCreate
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
