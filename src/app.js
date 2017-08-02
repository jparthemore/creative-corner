/*jshint esversion: 6*/
//require('./app.css');
const angular = require('angular');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');

const NavbarComponent = require('./components/nav-bar');

//create our applicaton
angular.module('creative-corner',[])
       .component('navBar',NavbarComponent);
