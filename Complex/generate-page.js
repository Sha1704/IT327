import Product from "./ProductClass.js";

const product = new Product();
console.log(product.displayInfo());

const productNameElement = document.createElement('p');
productNameElement.textContent = product.getName();
const productPriceElement = document.createElement('p');
productPriceElement.textContent = '$' + product.getPrice();

document.getElementById("productinfo").appendChild(productNameElement);
document.getElementById("productinfo").appendChild(productPriceElement);
