"use strict";

class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }
  displayInfo() {
    console.log(this);
  }
}

class Employee extends Human {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }
  displayInfo() {
    super.displayInfo();
  }
}

class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary, department, manager) {
    super(name, age, dateOfBirth, salary, department);
    this.manager = manager;
  }
  setManager(manager) {
    this.manager = manager;
  }
  displayInfo() {
    super.displayInfo();
  }
}

class Manager extends Employee {
  constructor(name, age, dateOfBirth, salary, department, developers) {
    super(name, age, dateOfBirth, salary, department);
    this.developers = [];
  }
  addDevelopers(developer) {
    this.developers.push(developer);
  }
  delDevelopers(developer) {
    for (let item in this.developers) {
      if (this.developers[item] == developer) {
        this.developers.splice(item, 1);
      }
    }
  }
  displayInfo() {
    super.displayInfo();
  }
}

let manager1 = new Manager("Boss", 35, "01.01.1984", 95000, "Sales");

let developer1 = new Developer("Ivan", 25, "22/07/1993", 50000, "Front-end");
let developer2 = new Developer("Max", 26, "21/07/1992", 60000, "Back-end");
let developer3 = new Developer("Anrew", 27, "20/07/1991", 70000, "Front-end");

console.group('Разработчики')
manager1.addDevelopers(developer1);
manager1.addDevelopers(developer2);
manager1.addDevelopers(developer3);
manager1.delDevelopers(developer2);
developer1.setManager(manager1);
developer2.setManager(manager1);
developer3.setManager(manager1);
developer1.displayInfo();
developer2.displayInfo();
developer3.displayInfo();
manager1.displayInfo();
console.groupEnd()
