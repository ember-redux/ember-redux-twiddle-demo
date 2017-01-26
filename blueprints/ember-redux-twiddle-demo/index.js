/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-redux-twiddle-demo',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-fetch', target: '1.3.0' },
        { name: 'ember-cli-mirage', target: '0.2.4' },
        { name: 'ember-lodash-shim', target: '^1.0.0' },
        { name: 'ember-symbol-observable', target: '0.1.2'}
      ]
    }).then(function() {
      return this.addPackagesToProject([
        // Installing ember-redux as a package to avoid running its blueprint
        // we want to use the demo blueprint instead
        { name: 'ember-redux', target: '2.0.0-beta.7' }
      ])
    }.bind(this))
  }
};
