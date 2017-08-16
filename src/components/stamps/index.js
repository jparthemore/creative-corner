/*jshint esversion: 6*/
const controller = require('./stamps.controller');
const template = require('./stamps.html');

const component = {
  controller,
  template,
  bindings:{
    prods: '<'
  }
};

module.exports = component;
