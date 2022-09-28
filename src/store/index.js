import { createStore } from 'vuex'
import i18n from '@/lang/plugins/i18n'

export default createStore({
  state: {
    lang: 'tw',
    loading: false,
    isMobile: null,
  },
  getters: {
    // offset (state) {
    //   return state.isMobile ? 0 : state.menuSize
    // },
  },
  mutations: {
    setLang(state,language) {
      state.lang = language;
      localStorage.setItem('locale', language);
      i18n.global.locale = language;
    },
    setMobile(state,val) {
      if (val <= 768) state.isMobile = true
      else state.isMobile = false
    },
    setLoad(state,val) {
      state.loading = val
    }
  },
  actions: {
  },
  modules: {
  }
})
