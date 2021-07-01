module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',

  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
