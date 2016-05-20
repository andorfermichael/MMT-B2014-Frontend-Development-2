/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {})

  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css')
  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js')

  app.import(app.bowerDirectory + '/moment/min/moment-with-locales.js')

  app.import(app.bowerDirectory + '/bootstrap-daterangepicker/daterangepicker.js')
  app.import(app.bowerDirectory + '/bootstrap-daterangepicker/daterangepicker.css')

  app.import(app.bowerDirectory + '/font-awesome/fonts/FontAwesome.otf', {destDir: 'fonts'})
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.eot', {destDir: 'fonts'})
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.svg', {destDir: 'fonts'})
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.ttf', {destDir: 'fonts'})
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff', {destDir: 'fonts'})
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff2', {destDir: 'fonts'})

  return app.toTree()
}
