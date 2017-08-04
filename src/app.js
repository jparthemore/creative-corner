/*jshint esversion: 6*/
//require('./app.css');
const angular = require('angular');
const ngRoute = require('angular-route');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
// require('./normalize.css');

//components
const NavbarComponent = require('./components/nav-bar');
const HomePageComponent = require('./components/home-page');

//configuration
const RoutesConfig = require('./config/routes');

//create our applicaton
angular.module('creative-corner',[ ngRoute ])
       .config(RoutesConfig)
       .component('homePage',HomePageComponent)
       .component('navBar',NavbarComponent);
