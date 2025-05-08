/* This file contains code for the customer queue object.
 * Author: Baandhav Velicheti, Naren Desai*/

/**
 * This is the object class for the CustomerQueue object
 * The CustomerQueue is a queue that has a pointer to the first and last customer inside of it
 * enqueue can be used to add a customer to the back and dequeue can be used to remove the customer at the front
 */
class CustomerQueue{

	/**
	 * Constructor for the CustomerQueue, creates an empty queue
	 *
	 */
	constructor(){
		this.tail = null;
		this.head = null;
	}

	/**
	 * Adds the given customer to the back of the queue
	 *
	 * @param {Customer} customerValue - the customer to be added
	 */
	enqueue(customerValue){
		const node = {customer: customerValue, next: null}
		if (this.tail !== null){
			this.tail.next = node;
		}
		this.tail = node;
		if (this.head === null){
			this.head = node;
		}
	}

	/**
	 * Removes the customer at the front of the queue and returns the customer
	 *
	 * @returns {Customer} the customer at the front of the queue
	 */
	dequeue(){
		if (this.head === null){
			return
		}
		let currHead = this.head;
		let result = currHead.customer;
		this.head = currHead.next;
		if (this.head === null){
			this.tail = null;
		}
		return result;
	}

	/**
	 * Returns the number of customers contained inside the queue
	 *
	 * @returns {number} the number of customers inside the queue
	 */
	size(){
		let count = 0;
		let currNode = this.head;
		while(currNode !== null){
			count++;
			currNode = currNode.next;
		}
		return count;
	}

	/**
	 * Returns the customer at the front of the queue
	 *
	 * @returns {Customer} The customer at the front of the queue
	 */
	getHead(){ return this.head; }

	/**
	 * Returns the customer at the back of the queue
	 *
	 * @returns {Customer} The customer at the back of the queue
	 */
	getTail(){ return this.tail; }

}
export default CustomerQueue;

