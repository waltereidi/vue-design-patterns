import { ref , computed } from "vue";
import { createStore } from 'vuex';

export const appStore = createStore({
    state:{
        user : {
            nome: 'Walter' , 
            api_token:'Bearer sdsd',
        }
    },
    getters:{
        getUser(state){
            return state.user;
        }
    },
    mutations :{
        startUser(state){
            state.user.nome='Mutated';
            state.user.api_token='Bearer Token Mutated'
        }
    }
} );