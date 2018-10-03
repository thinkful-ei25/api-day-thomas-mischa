'use strict';
/* global shoppingList, store api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

// test code starts
api.getItems((items) => {
  items.forEach((item) => store.addItem(item));
  shoppingList.render();
});