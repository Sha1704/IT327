/* This file contains code for the customer object.
 * Author: Baandhav Velicheti, Naren Desai*/

/**
 * Customer object class. The customer object class keeps track of customer information
 */
class Customer{

	/**
	 * constructor to create a customer object
	 *
	 * @param {string} name - Name of the customer
	 * @param {string} lastName - Last name of the customer
	 * @param {string} email - Email of the customer
	 * @param {number} accountId - Unique account id of the customer
	 */
	constructor(name, lastName, email, accountId){
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.accountId = accountId;
	}

	/**
	 * Returns the customer's name
	 *
	 * @returns {string} name - Name of the customer
	 */
	getName(){
		return this.name;
	}

	/**
	 * Returns the last name of the customer
	 *
	 * @returns {string} lastName - Last name of the customer
	 */
	getLastName(){
		return this.lastName;
	}

	/**
	 * Returns the email address of the customer
	 *
	 * @returns {string} email - email address of the customer
	 */
	getEmail(){
		return this.email;
	}
	
	/**
	 * returns account id of the customer
	 *
	 * @returns {number} accountId - account id of the customer
	 */
	getId(){
		return this.accountId;
	}

	/**
	 * Prints the customer's information into the console
	 *
	 */
	printInfo(){
		console.log("Name: " + this.getName() + "\n" + "Last Name: " + this.getLastName()+ "\n" + "Email: " + this.getEmail() 
			+ "\n" + "Id: " + this.getId());
	}
}
export default Customer;
