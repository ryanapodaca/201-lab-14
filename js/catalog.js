/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
state.cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');

  for (let i in state.allProducts) {
    let optionTag = document.createElementId('option');
    optionTag.textContent = state.allProducts[i].name;
    optionTag.value = state.allProducts[i].name;
    selectElement.appendChild(optionTag);

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  
  event.preventDefault(); // TODO: Prevent the page from reloading

  addSelectedItemToCart(); // Do all the things ...
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview();

}


function addSelectedItemToCart() {   // TODO: Add the selected item and quantity to the cart

  let item = document.getElementById('items',).value;    // TODO: suss out the item picked from the select list
  
  let quantity = document.getElementById('quantity').value;  // TODO: get the quantity
 
  state.cart.addItem(item, quantity);    // TODO: using those, add one item to the Cart
}

//  TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form

  // TODO: Add a new element to the cartContents div with that information
  let item = getElementById('items').value;
  let quantity = document.getElementById('quantity').value;
  
  let newItem = document.createElement('item');
  newItem.textContent = `${item}, ${quantity}`;

  let cartContents = document.getElementById('cartContents');
  cartContents.appendChild(newItem);
}

// Set up the "submit" event listener on the form.

// This is the trigger for the app. When a user "submits" the form, it will

// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
