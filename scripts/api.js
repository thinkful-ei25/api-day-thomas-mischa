'use strict';
/* global $ */

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/thomas-mischa';
  
  function getItems(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  }

  function createItem(name, callback){
    const newItem = JSON.stringify({name: name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  }
  function updateItem(id, updateData, callback){
    updateData = JSON.stringify(updateData);
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: updateData,
      success: callback,
    });
  }

  
  return {
    getItems,
    createItem,
    updateItem,
  };
}());
