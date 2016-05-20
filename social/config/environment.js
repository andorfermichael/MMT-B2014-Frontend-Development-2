/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'admin',
    environment: environment,
    baseURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {}
    },

    APP: {},

    'ember-simple-auth': {
      authenticationRoute: 'login'
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'facebook-oauth2': {
          apiKey: '813994582065273',
          redirectUri: 'http://localhost:4200'
        }
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' data: *.googleapis.com",
      'img-src': "'self' data: ws://localhost:49154 ws://0.0.0.0:49154 http://0.0.0.0:4200/csp-report https://api.clustar.net https://api-stage.clustar.net http://localhost:3000 *.googleapis.com maps.gstatic.com csi.gstatic.com",
      'font-src': "'self' data: fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' 'unsafe-eval' *.googleapis.com maps.gstatic.com fonts.googleapis.com maps.gstatic.com",
      'connect-src': "'self' ws://localhost:49154 ws://0.0.0.0:49154 http://0.0.0.0:4200/csp-report https://api.clustar.net https://api-stage.clustar.net http://localhost:3000"
    }
  }

  if (environment === 'development') {
  }

  if (environment === 'test') {
    ENV.baseURL = '/'
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {

  }

  return ENV
}
