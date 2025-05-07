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

	printInfo(){
		console.log("Name: " + this.getName() + "\n" + "Id: " + this.getId());
	}
}
export default Customer;
