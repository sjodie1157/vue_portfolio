import { createStore } from 'vuex'
const dataUrl = 'https://sjodie1157.github.io/todayPortfolioData/data/'

export default createStore({
  state: {
    home: null,
    about: null,
    projects: null,
    review: null,
    resume: null,
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
    setProjects(state, value) {
      state.projects = value
    },
    setReview(state, value) {
      state.review = value
    },
    setResume(state, value) {
      state.resume = value
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
    async fetchProjects(context) {
      let res = await fetch(dataUrl)
      let { projects } = await res.json()
      context.commit('setProjects', projects)
    },
    async fetchReview(context) {
      let res = await fetch(dataUrl)
      let { review } = await res.json()
      context.commit('setReview', review)
    },
    async fetchResume(context) {
      let res = await fetch(dataUrl)
      let { resume } = await res.json()
      context.commit('setResume', resume)
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
