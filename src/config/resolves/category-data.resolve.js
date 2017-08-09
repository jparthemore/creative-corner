function CategoryDataResolve(ProductService){
  return ProductService.getProductsByCategory();
}

CategoryDataResolve.$inject = ['products'];

module.exports = CategoryDataResolve;
