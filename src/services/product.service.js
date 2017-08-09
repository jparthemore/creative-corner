/*jshint esversion: 6*/
const baseUrl = 'https://tranquil-hamlet-82605.herokuapp.com';
function ProductService($http){
   const productUrl = `${baseUrl}/products`;
   return {
     getProducts: getProducts,
     getProductsByCategory: getProductsByCategory
   };

   function getProducts(){
     //console.log('getting all the products');
     return $http.get(productUrl)
                 //.then(response=>console.log(response.data.products))
                 .then(response=>response.data.products);
   }

   function getProductsByCategory(category){
     //console.log('getting all the products for a given category');
     const url = `${productUrl}/category/${category}`;
     return $http.get(url)
                //.then(response=>console.log(response.data.products))
                 .then(response=>response.data.products);
   }
}

ProductService.$inject = ['$http'];

module.exports = ProductService;
