import Customer from "./Customer.js";
import CustomerQueue from "./CustomerQueue.js";
import Product from "./ProductClass.js";

const productInfo = document.getElementById("productinfo");
const customerFields = document.getElementById("customerFields");
const queueStatus = document.getElementById("queueStatus");

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

const queueLocation = document.createElement('p');

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

	let queue = generateQueue();
	queue.enqueue(customer);
	console.log(queue.size());
	let place = queue.size() - 1;
	queueLocation.textContent = ("There are " + place + " people in front of you, " + queue.getHead().customer.getName() + " is first!");
	queueStatus.appendChild(queueLocation)
	console.log(queue.dequeue().printInfo());
	console.log(queue.size());
})

function generateQueue(){
	let queue = new CustomerQueue();
	queue.enqueue(new Customer("Billy",2));
	queue.enqueue(new Customer("Tom",3));
	queue.enqueue(new Customer("George",4));
	queue.enqueue(new Customer("Sarah",5));
	queue.enqueue(new Customer("Lee",6));
	return queue;
}
