/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-redux-twiddle-demo',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-fetch', target: '3.2.9' },
        { name: 'ember-cli-mirage', target: '0.3.4' },
        { name: 'ember-redux-shim', target: '2.1.0' },
        { name: 'ember-redux-thunk-shim', target: '2.0.0' }
      ]
    }).then(function() {
      return this.addPackagesToProject([
        // Installing ember-redux as a package to avoid running its blueprint
        // we want to use the demo blueprint instead
        { name: 'redux', target: '3.7.2' },
        { name: 'redux-thunk', target: '2.2.0' },
        { name: 'ember-redux', target: '2.10.1' }
      ])
    }.bind(this))
  }
};
