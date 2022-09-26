"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _i18n = _interopRequireDefault(require("@/lang/plugins/i18n"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vuex.createStore)({
  state: {
    lang: 'tw',
    loading: false,
    isMobile: null,
    menuSize: 0
  },
  getters: {
    offset: function offset(state) {
      return state.isMobile ? 0 : state.menuSize;
    }
  },
  mutations: {
    setLang: function setLang(state, language) {
      state.lang = language;
      localStorage.setItem('locale', language);
      _i18n["default"].global.locale = language;
    },
    setMobile: function setMobile(state, val) {
      if (val <= 768) state.isMobile = true;else state.isMobile = false;
    },
    setMenuSize: function setMenuSize(state, val) {
      state.menuSize = val;
    }
  },
  actions: {},
  modules: {}
});

exports["default"] = _default;