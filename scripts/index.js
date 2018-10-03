'use strict';
/* global shoppingList, store api Item */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems((items) => {
  items.forEach((item) => store.addItem(item));
  shoppingList.render();
});

