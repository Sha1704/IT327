/* This file contains code for the product page. It handles all the required logic and interactions
 * Author: Baandhav Velicheti, Naren Desai*/

import Customer from "./Customer.js";
import CustomerQueue from "./CustomerQueue.js";
import Product from "./ProductClass.js";

// Stores all the DOM elements from product.html
const productInfo = document.getElementById("productinfo");
const customerFields = document.getElementById("customerFields");
const queueStatus = document.getElementById("queueStatus");
const debug = document.getElementById("debug");

// Generates a new product and CustomerQueue
const product = new Product();
const queue = new CustomerQueue();
console.log(product.displayInfo());

// Creates elements to display the product info on the page
const productNameElement = document.createElement('p');
productNameElement.textContent = product.getName();
const productPriceElement = document.createElement('p');
productPriceElement.textContent = '$' + product.getPrice();

// Adds the elements to the page
productInfo.appendChild(productNameElement);
productInfo.appendChild(productPriceElement);

// Creates a name label for the submission field
const nameLabel = document.createElement('label');
nameLabel.htmlFor = 'name';
nameLabel.textContent = 'Name:';

// Creates an input field for the customer to enter their name
const nameField = document.createElement('input');
nameField.type = "text";
nameField.name = "name";
nameField.id = "name";

// Creates a button that takes the customers submission
const submitButton = document.createElement('button');
submitButton.id = "submitButton";
submitButton.textContent ="Submit";

// Creates a paragraph to display the customers position and eta in the queue
const queueLocation = document.createElement('p');
const estimatedTime = document.createElement('p');

// Creates a button for debugging purposes, for the sake of avoiding wait time
const debugInfo = document.createElement('p');
const advanceButton = document.createElement('button');
advanceButton.id = "advanceButton";
advanceButton.textContent = "Advance Queue";

// Creates a pragraph to inform the customer that the item has been added to the cart
const addedToCart = document.createElement('h1');
addedToCart.textContent = "Congratulations! Item has been added to the cart!";

// Displays submitssion field when the buy button is clicked
document.getElementById("buyButton").addEventListener("click", function() {
	console.log("Buy button clicked");
	customerFields.appendChild(nameLabel);
	customerFields.appendChild(nameField);
	customerFields.appendChild(submitButton);
});

// Interval object to start the 5 min interval to dequeue
let interval = null;

// Adds the customer to the list and starts the 5 min interval
submitButton.addEventListener("click", function () {

	console.log("Submit button clicked");
	let customerName = nameField.value;
	console.log(customerName);
	let customer = new Customer(customerName, "Doe", customerName + "@ilstu.edu", 1);
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

	debugInfo.textContent = "The following button simulates the passage of 5 mins (to avoid waiting 25 mins)";
	debug.appendChild(debugInfo);
	debug.appendChild(advanceButton);

	interval = setInterval(() => advanceQueue(queue), 5 * 60 * 1000);
})

// Button that simulates the passing of 5 mins
advanceButton.addEventListener("click", function() {
	advanceQueue(queue);
})

/**
 * A helper method to fill the queue with premade customers
 *
 * @param {CustomerQueue} inputQueue - the queue to be filled
 */
function generateQueue(inputQueue){
	inputQueue.enqueue(new Customer("Billy", "Doe", "billy@ilstu.edu", 2));
	inputQueue.enqueue(new Customer("Tom", "Doe", "tom@ilstu.edu", 3));
	inputQueue.enqueue(new Customer("George", "Doe", "george@ilstu.edu", 4));
	inputQueue.enqueue(new Customer("Sarah", "Doe", "sarah@ilstu.edu", 5));
	inputQueue.enqueue(new Customer("Lee", "Doe", "lee@ilstu.edu", 6));
}

/**
 * Advances the queue by calling dequeue
 *
 * @param {CustomerQueue} inputQueue - the queue to be advanced
 */
function advanceQueue(inputQueue){
	inputQueue.dequeue();
	let place = inputQueue.size() - 1;
	let eta = place * 5;
	queueLocation.textContent = ("There are " + place + " people in front of you, " + inputQueue.getHead().customer.getName() + " is first!");
	estimatedTime.textContent = ("Your estimated wait is " + eta + " mins!");
	if (inputQueue.size() === 1){
		clearInterval(interval);
		debugInfo.appendChild(addedToCart);
	}
}
