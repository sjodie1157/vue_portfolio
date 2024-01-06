import { createStore } from 'vuex'
const dataUrl = 'https://sjodie1157.github.io/todayPortfolioData/data/'

export default createStore({
  state: {
    home: null,
    about: null,
    contact: null
  },
  getters: {
  },
  mutations: {
    setHome(state, value) {
      state.home = value
    },
    setAbout(state, value) {
      state.about = value
    },
    setContact(state, value) {
      state.contact = value
    }
  },
  actions: {
    async fetchHome(context) {
      let res = await fetch(dataUrl)
      let { home } = await res.json()
      context.commit('setHome', home)
    },
    async fetchAbout(context) {
      let res = await fetch(dataUrl)
      let { about } = await res.json()
      context.commit('setAbout', about)
    },
    async fetchContact(context) {
      let res = await fetch(dataUrl)
      let { contact } = await res.json()
      context.commit('setContact', contact)
    }
  },
  modules: {
  }
})
