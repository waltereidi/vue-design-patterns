<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { homeStore } from '@/stores/Home';
import {ref} from 'vue';
const store = homeStore();
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
{{ store.getApiToken }}

  <RouterView />
</template>

<style scoped></style>
