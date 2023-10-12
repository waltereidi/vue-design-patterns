<script lang="ts">
import { RouterLink, RouterView , useRoute , useRouter, createRouter, createWebHashHistory } from 'vue-router';
import router from './router';
import { homeStore } from '@/stores/Home';
import {ref} from 'vue';



export default {
  data(){
    return{
      homeStore : homeStore(),
      value : '',
      route : useRoute() , 
      router : useRouter(), 
      obj:{ob : 'sd'},
    }
  },
  methods:{
    getValue(){
      this.value=this.homeStore.getClasse;
    },
    push(){
       this.$router.push({name:'about',params:{routerParam : 'sdsds'}});
    },
    routerGo(){
      this.router.go(+1);
    }
  
  },
  components:{
  },
  mounted(){
    console.log(this.$store.commit('openModal'));
  }

}
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink name="param" to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
{{ homeStore.getApiToken }} 

  <RouterView/>
  <router-view name="about" />
  <button @click="homeStore.setApiToken('sdsd')">SDSD</button>
  <button @click="homeStore.setClasse('token')">Classe</button>
  <button @click="getValue">setar valor da classe.</button>
  <h1>{{ value }}</h1>

  <button @click="push" >Router Push</button>
  <button @click="routerGo">Router Go+1</button>
  
</template>

<style scoped></style>
