function ProductDataResolve(ProductService){
  return ProductService.getProducts();
}

ProductDataResolve.$inject = ['products'];

module.exports = ProductDataResolve;
