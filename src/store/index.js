import { createStore } from 'vuex'

function updateLocalStorage(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export default createStore({
  state: {
    favorites: [],
    isFavorite: false
  },
  mutations: {
    updateFavorite(state, home) {
      let itemHome = state.favorites.find(i => i.id === home.id)

      if (itemHome) {
        state.favorites = state.favorites.filter(i => i.id !== home.id)
        state.isFavorite = false
      } else {
        state.favorites.push({
          ...home,
        })
        state.isFavorite = true;
      } 

      updateLocalStorage(state.favorites)
    }
  },
  getters: {
    isFavorite: state => {
      return state.isFavorite.valueOf
    }
  },
  actions: {
  },
  modules: {
  }
})
