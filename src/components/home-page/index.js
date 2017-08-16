/*jshint esversion: 6*/
const controller = require('./home-page.controller');
const template = require('./home-page.html');

const component = {
  controller,
  template,
  bindings:{
    prods: '<'
  }
};

module.exports = component;
