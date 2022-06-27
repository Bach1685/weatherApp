import { createStore } from "vuex";

export default createStore({
   state(){
    return{
        query: '',
    }
   },
   mutations:{
    setQueary(state, newQuery){
        state.query = newQuery;
    }
   }
});