export const searchStringModule = {
  state: () => {
    return {
      query: "",
      placeholder: "привет",
    };
  },
  getters: {
    getQuery(state: any) {
      return state.query;
    },
    getPlaceholder(state: any) {
      console.log(112);

      return state.placeholder;
    },
  },
  mutations: {
    setQuery(state: any, newQuery: string) {
      state.query = newQuery;
    },
    setPlaceholder(state: any, newPlaceholder: string) {
      state.placeholder = newPlaceholder;
    },
  },
};
