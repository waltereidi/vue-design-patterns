export {appStore} ;
import {createStore} from 'vuex';

const appStore = createStore({
    
    mutations: {
        openModal(state) {
            console.log('mutation')
        },
    }
       
} );