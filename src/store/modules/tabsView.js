const tabsView = {
  state: {
    cachedViews: []
  },
  mutations: {
    INIT_VIEW: (state, routes) => {
      state.cachedViews = routes;
    },
    DEL_CACHED_VIEW: (state, view) => {
      for (const i of state.cachedViews) {
        if (i === view) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews.splice(index, 1);
          break;
        }
      }
    },
    DEL_OTHERS_CACHED_VIEWS: (state, view) => {
      for (const i of state.cachedViews) {
        if (i === view) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews = state.cachedViews.slice(index, index + 1);
          break;
        }
      }
    },
    DEL_ALL_CACHED_VIEWS: state => {
      state.cachedViews = [];
    }

  },
  actions: {
    initView ({ commit }, routes) {
      commit('INIT_VIEW', routes);
    },
    delView ({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delCachedView', view);
        resolve({
          cachedViews: [...state.cachedViews]
        });
      });
    },
    delCachedView ({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_CACHED_VIEW', view);
        resolve([...state.cachedViews]);
      });
    },
    delOthersViews ({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delOthersCachedViews', view);
        resolve({
          cachedViews: [...state.cachedViews]
        });
      });
    },
    delOthersCachedViews ({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_OTHERS_CACHED_VIEWS', view);
        resolve([...state.cachedViews]);
      });
    },

    delAllViews ({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delAllCachedViews', view);
        resolve({
          cachedViews: [...state.cachedViews]
        });
      });
    },
    delAllCachedViews ({ commit, state }) {
      return new Promise(resolve => {
        commit('DEL_ALL_CACHED_VIEWS');
        resolve([...state.cachedViews]);
      });
    }
  }
};

export default tabsView;
