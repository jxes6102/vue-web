import { createI18n } from 'vue-i18n'
// 載入語言
import tw from '@/lang/config/tw.json'
import en from '@/lang/config/en.json'

const i18n = createI18n({
  locale: 'tw',
  fallbackLocale: 'tw',
  messages: {
    tw,
    en
  }
})
export default i18n
