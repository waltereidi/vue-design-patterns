import { ref , computed } from "vue";
import { defineStore } from 'pinia';
import { Classe } from "@/Classe";

export const homeStore = defineStore('home',{
    state: () => {
        return {
            api_token : 'Api' ,
            nome : 'Walter' ,
            classe : null,

        }
    },
    getters: {
        getApiToken: (state) => {
          return state.api_token;
        },
        getClasse:(state)=>{
            return state.classe.getClasse(); 
        }
    },
    actions:{
        setApiToken(value){
            this.api_token = value;
        },
        setClasse(api_token){
            this.classe = ref(new Classe(api_token));
            console.log(this.classe);
        },
        

    }

} );