"use strict";

// The first task

function Emploee(employee) {
  this.id = employee.id;
  this.name = employee.name;
  this.surname = employee.surname;
  this.salary = employee.salary;
  this.workExperience = employee.workExperience;
  this.isPrivileges = employee.isPrivileges;
  this.gender = employee.gender;
}

// The second task

Emploee.prototype.getFullName = function () {
  return String(`${this.surname} ${this.name}`);
};

// The third task

let createEmployesFromArr = (arr) => {
  let result = arr.map((item) => new Emploee(item));
  return result;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

console.log(emplyeeConstructArr);

// The fourth task

const getFullNamesFromArr = (arr) => {
  let result = arr.map((item) => item.getFullName());
  return result;
};

getFullNamesFromArr(emplyeeConstructArr);

console.log(getFullNamesFromArr(emplyeeConstructArr));

// The fifth task

const getMiddleSalary = (arr) => {
  let result = arr.map((item) => item.salary);
  let allSalary = result.reduce((sum, current) => sum + current);
  let allMidleSalary = Math.trunc(allSalary / arr.length);
  return allMidleSalary;
};

console.log(getMiddleSalary(emplyeeConstructArr));

// The sixth task

const getRandomEmployee = (arr) => {
  let factor = 10;
  if (arr.length - 1 > 10) {
    factor = 100;
  }
  let randomNumber = Math.round(Math.random() * factor);
  if (randomNumber > arr.length - 1) {
    getRandomEmployee(arr);
  }
  return arr[randomNumber];
};

console.log(getRandomEmployee(emplyeeConstructArr));

// The seventh task

const employeeObj = new Emploee(emplyeeArr[0]);

Object.defineProperty(Emploee.prototype, "fullInfo", {
  get: function () {
    let result = "";
    for (let key in this) {
      if (typeof this[key] !== "function") {
        result += `${key} - ${this[key]}, `;
      }
    }
    return result;
  },

  set(value) {
    for (let key in value) {
      if (this.hasOwnProperty(key)) {
        this[key] = value[key];
      }
    }
  },
});
employeeObj.fullInfo = { salary: 4525 };
console.log(employeeObj.fullInfo);
