import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { searchStringModule } from "./searchStringModule";

export interface State {
  count: number;
}
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    searchString: searchStringModule,
  },
});
