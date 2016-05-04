/*jshint node:true*/
module.exports = {
  description: ''

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/tribute/dist/tribute.js');
    app.import('bower_components/tribute/dist/tribute.css');
  }
};
