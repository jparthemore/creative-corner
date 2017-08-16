/*jshint esversion: 6*/
const ProductDataResolve = require('./resolves/product-data.resolve');
const CategoryDataResolve = require('./resolves/category-data.resolve');

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
    .when('/paper/:category',{
      template: '<paper prods="$resolve.categoryData"></paper>',
      resolve: {
        categoryData: CategoryDataResolve
      }
    })
    .when('/stamps/:category',{
      template: '<stamps prods="$resolve.categoryData"></stamps>',
      resolve: {
        categoryData: CategoryDataResolve
      }
    })
    .otherwise({
      redirectTo: '/'
    });

}

RouterConfig.$inject = ['$routeProvider'];

module.exports = RouterConfig;
