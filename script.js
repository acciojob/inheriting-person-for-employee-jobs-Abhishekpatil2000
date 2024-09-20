// complete this js code
class Person {
	constructor (name, age){
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
	}
}

class Employee extends Person {
	constructor(name, age, jobTitle){
		super(name, age);
		this.jobTitle = jobTitle;
	}
	jobgreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
	}
} 
let person1= new Person('Arun',39);
let employee1= new Person('Kashish',26,'staff');
person1.greet();
employee1.jobgreet();
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
