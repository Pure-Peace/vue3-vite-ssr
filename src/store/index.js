import { createStore } from "vuex"
import layouts from './modules/layouts'

const state = () => {
  return {
    isMobile: false,
    pageWidth: 1024
  }
}

const getters = {
  getLocale: state => state.locale,
  pageWidth: state => state.pageWidth,
  isMobile: state => state.isMobile
}

const mutations = {
  setLocale (state, locale) {
    console.log(this)
    state.locale = locale
    this.app.i18n.locale = locale
    // if (process.client) { this.$cookies.set('locale', locale, '5y') }
  },
  setPageWidth (state, setting) {
    state.pageWidth = setting
  },
  setIsMobile (state, setting) {
    state.isMobile = setting
  }
}

const actions = {}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: { layouts }
})
