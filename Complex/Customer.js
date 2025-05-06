class Customer{
	constructor(name, accountId){
		this.name = name;
		this.accountId = accountId;
	}

	getName(){
		return this.name;
	}
	
	getId(){
		return this.accountId;
	}
}
export default Customer;
