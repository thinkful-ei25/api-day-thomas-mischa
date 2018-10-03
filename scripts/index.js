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

// test code starts
// api.getItems(()=>{
//   const item = store.items[0];
//   console.log('current name: ' + item.name);
//   store.findAndUpdate(item.id, { name: 'bar' });
//   console.log('new name: ' + item.name);
// });
