
<script lang="ts">
import { homeStore } from '@/stores/Home';
export default { 
    data(){
        return {
            homeStore : homeStore(), 
        }
    },
    mounted(){
        console.log(this.$route.params.routerParam);
    }

}
</script>
<template>
<h1>About</h1>
{{ homeStore.getApiToken }} 
</template>