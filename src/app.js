/*jshint esversion: 6*/
const angular = require('angular');
const ngRoute = require('angular-route');

//fonts
require('font-awesome/css/font-awesome.css');
require('./fonts/DancingScript-Regular.ttf');

//stylesheets
// require('bootstrap/dist/css/bootstrap.css');
require('./stylesheets/grid.css');
require('./stylesheets/app.css');
require('./stylesheets/components.css');
require('./stylesheets/normalize.css');

//components
const NavbarComponent = require('./components/nav-bar');
const HomePageComponent = require('./components/home-page');
const ContactPageComponent = require('./components/contact-page');
const PaperComponent = require('./components/paper');
const StampComponent = require('./components/stamps');

//services
const ProductService = require('./services/product.service');

//configuration
const RoutesConfig = require('./config/routes');

//create our applicaton
angular.module('creative-corner',[ ngRoute ])
       .config(RoutesConfig)
       .component('homePage',HomePageComponent)
       .component('navBar',NavbarComponent)
       .component('contactPage',ContactPageComponent)
       .component('paper',PaperComponent)
       .component('stamps',StampComponent)
       .factory('products', ProductService);
