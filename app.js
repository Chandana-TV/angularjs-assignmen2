(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService );

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemToBuy = this;
  itemToBuy.items = ShoppingListCheckOffService.getItemsToBeBought();

  itemToBuy.bought = function (itemIndex)
  {
    ShoppingListCheckOffService.bought(itemIndex);
  }
  itemToBuy.hasItems = function ()
  {
    return (ShoppingListCheckOffService.items.hasItems);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBought = this;
  itemBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBeBought = [{
    name: "Milk",
    quantity: "10"
  },
  {
    name: "Donuts",
    quantity: "20"
  },
  {
    name: "Cookies",
    quantity: "30"
  },
  {
    name: "Chocolate",
    quantity: "15"
  },
  {
    name: "Cake",
    quantity: "1"
  },
  {
    name: "Chips",
    quantity: "5"
  }
];
var itemsAlreadyBought =[];

  service.bought = function (itemIndex) {
    var item = {
        name: itemsToBeBought[itemIndex].name,
        quantity: itemsToBeBought[itemIndex].quantity
      };
    itemsAlreadyBought.push(item);
    itemsToBeBought.splice(itemIndex, 1);
  };
  service.getItemsToBeBought = function () {
    return itemsToBeBought;
  };
  service.getItemsAlreadyBought = function () {
    return itemsAlreadyBought;
  };
}

})();
