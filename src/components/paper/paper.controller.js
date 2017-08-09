/*jshint esversion: 6*/

function PaperController(ProductService){
  this.paperinputtypes =['Printed Paper','Cardstock Chalky Stripes'];
  this.paperinput = this.paperinputtypes[0];
  this.chosenpapertype = 'Printed Paper';

  this.onChange = function onChange(){
    this.chosenpapertype = this.paperinput;
  };

  ProductService.getProductsByCategory(this.chosenpapertype)
                .then(resp=> this.prods = resp)
                .catch(err=>console.error(err));
}

PaperController.$inject = ['products'];

module.exports = PaperController;
