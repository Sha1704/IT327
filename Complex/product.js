import Customer from "./Customer.js";
import Product from "./ProductClass.js";

const productInfo = document.getElementById("productinfo");
const customerFields = document.getElementById("customerFields");

const product = new Product();
console.log(product.displayInfo());

const productNameElement = document.createElement('p');
productNameElement.textContent = product.getName();
const productPriceElement = document.createElement('p');
productPriceElement.textContent = '$' + product.getPrice();

productInfo.appendChild(productNameElement);
productInfo.appendChild(productPriceElement);

const nameLabel = document.createElement('label');
nameLabel.htmlFor = 'name';
nameLabel.textContent = 'Name:';

const nameField = document.createElement('input');
nameField.type = "text";
nameField.name = "name";
nameField.id = "name";

const submitButton = document.createElement('button');
submitButton.id = "submitButton";
submitButton.textContent ="Submit";


document.getElementById("buyButton").addEventListener("click", function() {
	console.log("Buy button clicked");
	customerFields.appendChild(nameLabel);
	customerFields.appendChild(nameField);
	customerFields.appendChild(submitButton);
});

submitButton.addEventListener("click", function () {
	console.log("Submit button clicked");
	let customerName = nameField.value;
	console.log(customerName);
	let customer = new Customer(customerName, 1);
	customer.printInfo();
})
