 //require('./app.css');
const angular = require('angular');

//create our applicaton
angular.module('creative-corner',[]);//setter syntax

angular.module('creative-corner') //getter syntax - angular version of require
        .controller('MainController', MainController);

MainController.$inject = []; //magic for us

function MainController(){
  this.message = 'hello from angular';
}
