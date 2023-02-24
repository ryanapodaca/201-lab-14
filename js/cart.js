/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let table = getElementByElement('tbody');
  table.removeItem('tr');
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let table = getElementByElement('tbody');

  // TODO: Iterate over the items in the cart
  for (let i in state.allProducts){
    
    let tr = document.createElement('tr');    // TODO: Create a TR
    table.appendChild(tr);  

    let td1 = document.createElement('td');
    td1.textContent = 'Delete Item';
    tr.appendChild(td1);
    
    let td2 = document.createElement('td');
    td2.textContent = +store.cart.quantity;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = store.cart.product;
    tr.appendChild(td3);
      // TODO: Create a TD for the delete link, quantity,  and the item
  }

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  let row = event.target.parentNode.parentNode;

  let itemName = row.getElementsByTagName('td')[0].textContent;

  state.cart.removeItem(itemName);
  // TODO: Save the cart back to local storage
  let stringifiedCart = JSON.stringify();
  localStorage.setItem('item', stringifiedCart);
  row.remove();

  renderCart();  // TODO: Re-draw the cart table

}
// 
// This will initialize the page and draw the cart on screen
renderCart();

