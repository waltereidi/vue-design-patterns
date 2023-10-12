import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Error from '@/components/Error.vue';
import Loading from '@/components/Loading.vue';
import Modal from '@/components/Modal.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
     {
       path: '/',
       name: 'home',
       component: Home 
     },
     {
       path: '/about/:routerParam',
       name: 'about',
       component: About 
     },
     {
        path:'/messages',
        name:'messages',
        components:{
          default: Modal,
          error:Error , 
          loading:Loading ,
        }
     },
     
  ],
  scrollBehavior(to, from, savedPosition) {
      return {top:0}
  }
})

export default router
