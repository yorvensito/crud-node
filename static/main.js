const { get } = require('express/lib/response');

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function add() {
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;

  const product = {
    id: uuidv4(),
    productName,
    productPrice,
  };

  const products = localStorage.getItem('products');

  const data =
    products !== undefined
      ? [JSON.stringify(product)]
      : [...products, JSON.stringify(product)];

  // alert('Adding product');
  localStorage.setItem('products', data);
}

function getProducts() {}

function UpdateProducts() {}

function DeleteProducts() {}
