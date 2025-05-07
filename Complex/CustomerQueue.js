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
		currHead = this.head;
		result = currHead.customer;
		this.head = currHead.next;
		if (this.head === null){
			this.tail = null;
		}
		return result;
	}

	size(){
		count = 0;
		currNode = this.head;
		while(currNode !== null){
			count++;
			currNode = currNode.next;
		}
		return count;
	}
}
export default CustomerQueue

