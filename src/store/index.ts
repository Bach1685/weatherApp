import { searchStringModule } from "./searchStringModule";
import { createStore } from "vuex";

export default createStore({
  modules: {
    searchString: searchStringModule,
  },
});
