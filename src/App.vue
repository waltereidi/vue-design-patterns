<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { homeStore } from '@/stores/Home';
import {ref} from 'vue';

export default {
  data(){
    return{
      store : homeStore(),
      value : '',
    }
  },
  methods:{
    getValue(){
      this.value=this.store.getClasse;
    }
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
{{ store.getApiToken }} 

  <RouterView/>
  <router-view name="param"></router-view>
  <button @click="store.setApiToken('sdsd')">SDSD</button>
  <button @click="store.setClasse('token')">Classe</button>
  <button @click="getValue">setar valor da classe.</button>
  <h1>{{ value }}</h1>

</template>

<style scoped></style>
