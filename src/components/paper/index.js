/*jshint esversion: 6*/
require('./paper.css');
const controller = require('./paper.controller');
const template = require('./paper.html');

const component = {
  controller,
  template,
  bindings:{
    prods: '<'
  }
};

module.exports = component;
