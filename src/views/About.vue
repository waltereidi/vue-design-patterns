
<script setup lang="ts">
import { homeStore } from '@/stores/Home';

const store =homeStore();

</script>
<template>
<h1>About</h1>
{{ store.getApiToken }} 
</template>