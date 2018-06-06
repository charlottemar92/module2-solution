(function () {
  'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getItems(1);

  buyList.buyIt= function (itemIndex) {
    ShoppingListCheckOffService.buying(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getItems(2);

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of toBuy items
  var toBuyItems = [{name : "cookies", quantity : 10 }, {name : "chips bags", quantity : 5},
                    {name : "sugary bevereges", quantity : 5}, {name : "biscuits bags", quantity : 10},
                  {name : "wine bottles", quantity : 2}];


  // List of bought items
 var boughtItems = [];

 service.buying = function (itemIndex) {
   boughtItems.push(toBuyItems[itemIndex]);
   toBuyItems.splice(itemIndex,1);

 };

 service.getItems = function (num) {
   if(num === 1){
   return toBuyItems;}
   else if(num === 2){
     return boughtItems;
   }
 };
}


})();
