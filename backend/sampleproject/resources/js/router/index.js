import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/HomeComponent.vue'
import about from '../pages/about.vue'
import notFound from '../pages/401.vue'
import login from '../pages/login.vue'
import register from '../pages/register.vue'
// import CategoryList from '../pages/category/index.vue'
// import CreateCategory from '../pages/category/create.vue'
// import EditCategory from '../pages/category/edit.vue'

// import ProductList from '../pages/product/index.vue'
// import CreateProduct from '../pages/product/create.vue'
// import EditProduct from '../pages/product/edit.vue'

// 認証ページ

// import Login from '../pages/auth/login.vue'
// import Register from '../pages/auth/register.vue'



const routes = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Home,
      name:'home',
    },
    {
      path: '/about',
      component: about,
      name:'about',
    },
    {
      path: '/login',
      component: login,
      name:'login',
    },
    {
      path: '/register',
      component: register,
      name:'register',
    },
    {
      path: '*',
      component: notFound,
      name:'401',
    },
    // {
    //   path: '/category',
    //   component: CategoryList,
    //   name:'category-list',
    // },
    // {
    //   path: '/category/create',
    //   component: CreateCategory,
    //   name:'create-category',
    // },
    // {
    //   path: '/category/edit/:id',
    //   component: EditCategory,
    //   name:'edit-category',
    // },
    // {
    //   path: '/product',
    //   component: ProductList,
    //   name:'product-list',
    // },
    // {
    //   path: '/product/create',
    //   component: CreateProduct,
    //   name:'create-product',
    // },
    // {
    //   path: '/product/edit/:id',
    //   component: EditProduct,
    //   name:'edit-product',
    // },
    // {
    //   path: '/auth/login',
    //   component: Login,
    //   name:'login',
    // },
    // {
    //   path: '/auth/register',
    //   component: Register,
    //   name:'register',
    // },
    // {
    //   path: '*',
    //   component: Home,
    //   name:'home',
    // },
  ]
})

export default routes;