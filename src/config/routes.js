/*jshint esversion: 6*/
function RouterConfig($routeProvider){
  $routeProvider
    .when('/',{
      template: '<home-page><home-page>'
    })
    .otherwise({
      redirectTo: '/'
    });

}

RouterConfig.$inject = ['$routeProvider'];

module.exports = RouterConfig;
