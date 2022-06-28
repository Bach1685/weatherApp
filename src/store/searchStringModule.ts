import { Expressions } from "../lang/Expressions";
import { translater } from "@/lang";

export const searchStringModule = {
  state: () => {
    return {
      query: "",
      placeholder: translater.getTranslateById(Expressions.EnterTheCity, "en"),
    };
  },
  getters: {
    getQuery(state: any) {
      return state.query;
    },
    getPlaceholder(state: any) {
      return state.placeholder;
    },
  },
  mutations: {
    setQuery(state: any, event: any) {
      state.query = event.target.value;
    },
    setPlaceholder(state: any, newPlaceholder: string) {
      state.placeholder = newPlaceholder;
    },
  },
};
