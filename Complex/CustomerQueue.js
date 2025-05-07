class CustomerQueue{
	constructor(){
		this.tail = null;
		this.head = null;
	}
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
	size(){
		let count = 0;
		let currNode = this.head;
		while(currNode !== null){
			count++;
			currNode = currNode.next;
		}
		return count;
	}
	getHead(){ return this.head; }
	getTail(){ return this.tail; }

}
export default CustomerQueue;

