import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { searchStringModule } from "./searchStringModule";

// define your typings for the store state
export interface State {
  count: number;
}

// export interface Mutation {
//   setCount(val: any): any;
// }

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    searchString: searchStringModule,
  },
});
