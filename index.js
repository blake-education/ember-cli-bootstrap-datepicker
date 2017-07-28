/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-bootstrap-datepicker',

  included: function(...args) {
    // this._super.included(app);
    const [app, parentAddon] = args
    const target = (parentAddon || app)
    this._super.included.apply(this, ...args)

    if (process.env.EMBER_CLI_FASTBOOT !== 'true' && target.bowerDirectory) {
      target.import(target.bowerDirectory + '/bootstrap-datepicker/dist/js/bootstrap-datepicker.js');
      target.import(target.bowerDirectory + '/bootstrap-datepicker/dist/css/bootstrap-datepicker.css');
    }
  }
};
