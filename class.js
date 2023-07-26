"use strict";
class Employee {
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return this.name + ' stays at ' + this.address;
    }
}
let john = new Employee(1, "John", "Highway 71");
john.empId = 100;
console.log(john.empId);
//Employee.getEmployeeCount();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let address = john.getNameWithAddress();
// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";
console.log(address);
let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
