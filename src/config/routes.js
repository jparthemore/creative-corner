/*jshint esversion: 6*/
const ProductDataResolve = require('./resolves/product-data.resolve');

function RouterConfig($routeProvider){
  $routeProvider
    .when('/',{
      template: '<home-page prods="$resolve.productData"><home-page>',
      resolve: {
        productData: ProductDataResolve
      }
    })
    .when('/contact',{
      template: '<contact-page></contact-page>'
    })
    .when('/paper',{
      template: '<paper></paper>'
    })
    .otherwise({
      redirectTo: '/'
    });

}

RouterConfig.$inject = ['$routeProvider'];

module.exports = RouterConfig;
