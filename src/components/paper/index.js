/*jshint esversion: 6*/
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
