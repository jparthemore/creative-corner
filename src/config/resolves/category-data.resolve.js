/*jshint esversion: 6*/
function CategoryDataResolve(ProductService, $route){
  const category = $route.current.params.category;
  return ProductService.getProductsByCategory(category);
}

CategoryDataResolve.$inject = ['products','$route'];

module.exports = CategoryDataResolve;
