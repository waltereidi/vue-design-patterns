import { ref , computed } from "vue";
import { defineStore } from 'pinia';

export const homeStore = defineStore('home',{
    state: () => {
        return {
            api_token : 'Bearer ' ,
            nome : 'Walter' ,

        }
    },
    getters: {
        getApiToken: (state) => {
          return state.api_token;
        },
    }
} );