/*jshint esversion: 6*/

function HomePageController(ProductService){
  //this.message = "this is home view";
  //ProductService.getProducts();
  ProductService.getProducts()
                .then(resp=> this.prods = resp)
                .catch(err=>console.error(err));
  // ProductService.getProductsByCategory('animal stamps')
  //               .then(resp=> this.prods = resp)
  //               .catch(err=>console.error(err));
}

HomePageController.$inject = ['products'];

module.exports = HomePageController;
