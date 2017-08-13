/*jshint esversion: 6*/
var chosenpapertype ='';
function PaperController(ProductService, $location){
  this.paperinputtypes =['Printed Paper','Cardstock Chalky Stripes'];
  this.paperinput = chosenpapertype||this.paperinputtypes[0];

  this.onChange = function onChange(){
    chosenpapertype = this.paperinput;
    const category = chosenpapertype;
    ProductService.getProductsByCategory(category)
                  .then(() => $location.path(`/paper/${category}`))
                  .catch(() => console.error('path not found'));
  };

}

PaperController.$inject = ['products','$location'];

module.exports = PaperController;
