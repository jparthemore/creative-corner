/*jshint esversion: 6*/
function RouterConfig($routeProvider){
  $routeProvider
    .when('/',{
      template: '<home-page><home-page>'
    })
    .when('/contact',{
      template: '<contact-page></contact-page>'
    })
    .otherwise({
      redirectTo: '/'
    });

}

RouterConfig.$inject = ['$routeProvider'];

module.exports = RouterConfig;
