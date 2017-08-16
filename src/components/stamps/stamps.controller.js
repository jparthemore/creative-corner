/*jshint esversion: 6*/
var chosenstamptype ='';
function StampController(ProductService, $location){
  this.stampinputtypes =['Nature & Scenery'];
  this.stampinput = chosenstamptype||this.stampinputtypes[0];

  this.onChange = function onChange(){
    chosenstamptype = this.stampinput;
    const category = chosenstamptype;
    ProductService.getProductsByCategory(category)
                  .then(() => $location.path(`/stamps/${category}`))
                  .catch(() => console.error('path not found'));
  };

}

StampController.$inject = ['products','$location'];

module.exports = StampController;
