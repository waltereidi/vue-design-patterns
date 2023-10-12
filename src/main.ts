
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { appStore } from './stores/App';
import App from './App.vue';
import router from './router';


const app = createApp(App)

app.use(createPinia())
app.use(appStore);
app.use(router)

appStore.commit('openModal');
app.mount('#app')
