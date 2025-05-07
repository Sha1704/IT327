import Customer from "./Customer.js";
import CustomerQueue from "./CustomerQueue.js";
import Product from "./ProductClass.js";

const productInfo = document.getElementById("productinfo");
const customerFields = document.getElementById("customerFields");
const queueStatus = document.getElementById("queueStatus");
const debug = document.getElementById("debug");

const product = new Product();
const queue = new CustomerQueue();
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

const queueLocation = document.createElement('p');
const estimatedTime = document.createElement('p');

const debugInfo = document.createElement('p');
const advanceButton = document.createElement('button');
advanceButton.id = "advanceButton";
advanceButton.textContent = "Advance Queue";

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
	generateQueue(queue);
	queue.enqueue(customer);
	console.log(queue.size());
	let place = queue.size() - 1;
	queueLocation.textContent = ("There are " + place + " people in front of you, " + queue.getHead().customer.getName() + " is first!");
	let eta = place * 5;
	estimatedTime.textContent = ("Your estimated wait is " + eta + " mins!");
	queueStatus.appendChild(queueLocation);
	queueStatus.appendChild(estimatedTime);

	debugInfo.textContent = "The following button simulates the passage of 5 mins";
	debug.appendChild(debugInfo)
	debug.appendChild(advanceButton);
})

advanceButton.addEventListener("click", function() {
	queue.dequeue();
	let place = queue.size() - 1;
	let eta = place * 5;
	queueLocation.textContent = ("There are " + place + " people in front of you, " + queue.getHead().customer.getName() + " is first!");
	estimatedTime.textContent = ("Your estimated wait is " + eta + " mins!");
})

function generateQueue(inputQueue){
	inputQueue.enqueue(new Customer("Billy",2));
	inputQueue.enqueue(new Customer("Tom",3));
	inputQueue.enqueue(new Customer("George",4));
	inputQueue.enqueue(new Customer("Sarah",5));
	inputQueue.enqueue(new Customer("Lee",6));
}
