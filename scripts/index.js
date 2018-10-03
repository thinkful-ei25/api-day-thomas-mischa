'use strict';
/* global shoppingList, store api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

api.getItems(function(data) {
  console.log(data);
});

api.createItem('apples', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});
console.log(api.BASE_URL);