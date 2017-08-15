/*jshint esversion: 6*/
var chosenpapertype ='';
function PaperController(ProductService, $location){
  this.paperinputtypes =['Printed Paper','Cardstock Chalky Stripes'];
  this.paperinput = chosenpapertype||this.paperinputtypes[0];
  this.addToCart = addToCart;
  // this.total = 0;
  // this.updateTotal = updateTotal;

  // function updateTotal(){
  //    console.log('updating totals');
  // }

  this.onChange = function onChange(){
    chosenpapertype = this.paperinput;
    const category = chosenpapertype;
    ProductService.getProductsByCategory(category)
                  .then(() => $location.path(`/paper/${category}`))
                  .catch(() => console.error('path not found'));
  };

  function addToCart(){
    console.log('adding to cart');
  }

}

PaperController.$inject = ['products','$location'];

module.exports = PaperController;
