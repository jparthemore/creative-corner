/*jshint esversion: 6*/
//require('./app.css');
const angular = require('angular');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./normalize.css');

const NavbarComponent = require('./components/nav-bar');
const HomePageComponent = require('./components/home-page');

//create our applicaton
angular.module('creative-corner',[])
       .component('homePage',HomePageComponent)
       .component('navBar',NavbarComponent);
