const state = () => {
  return {
    showSider: true,
    showBreadcrum: false,
    openSider: false,
    siderFixed: true,
    topNavbarFixed: true,
    siderWidth: 210
  }
}

const getters = {
  showSider: state => state.showSider,
  showBreadcrum: state => state.showBreadcrum,
  openSider: state => state.openSider,
  siderFixed: state => state.siderFixed,
  topNavbarFixed: state => state.topNavbarFixed,
  siderWidth: state => state.siderWidth
}

const mutations = {
  setShowSider (state, setting) {
    state.showSider = typeof (setting) === 'boolean' ? setting : !state.showSider
  },
  setShowBreadcrum (state, setting) {
    state.showBreadcrum = typeof (setting) === 'boolean' ? setting : !state.showBreadcrum
  },
  setOpenSider (state, setting) {
    state.openSider = typeof (setting) === 'boolean' ? setting : !state.openSider
  },
  setSiderFixed (state, setting) {
    state.siderFixed = typeof (setting) === 'boolean' ? setting : !state.siderFixed
  },
  setTopNavbarFixed (state, setting) {
    state.topNavbarFixed = typeof (setting) === 'boolean' ? setting : !state.topNavbarFixed
  },
  setSiderWidth (state, setting) {
    state.siderWidth = setting
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
