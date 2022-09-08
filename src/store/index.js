import { createStore } from 'vuex'
import i18n from '@/lang/plugins/i18n'

export default createStore({
  state: {
    lang: 'tw',
    loading: false
  },
  getters: {
  },
  mutations: {
    setLang(state,language ) {
      state.lang = language;
      localStorage.setItem('locale', language);
      i18n.global.locale = language;
    }
  },
  actions: {
  },
  modules: {
  }
})
