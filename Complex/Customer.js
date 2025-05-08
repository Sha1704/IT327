class Customer{
	constructor(name, lastName, email, accountId){
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.accountId = accountId;
	}

	getName(){
		return this.name;
	}

	getLastName(){
		return this.lastName;
	}

	getEmail(){
		return this.email;
	}
	
	getId(){
		return this.accountId;
	}

	printInfo(){
		console.log("Name: " + this.getName() + "\n" + "Last Name: " + this.getLastName()+ "\n" + "Email: " + this.getEmail() 
			+ "\n" + "Id: " + this.getId());
	}
}
export default Customer;
