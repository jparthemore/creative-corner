/*jshint esversion: 6*/
const navbarController = require('./nav-bar.controller');
const htmlTemplate = require('./nav-bar.html');

const navbarComponent = {
  controller: navbarController,
  template: htmlTemplate
};

module.exports = navbarComponent;
