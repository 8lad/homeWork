"use strict";

// The first task
class Student {
  static id = 1;
  static amountFreePayment = 5;
  static listOfStudents = [];

  constructor(enrollee) {
    this.id = Student.id++;
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
    this.course = enrollee.course;
    this.isSelfPayment = this.setSelfPayment();
    Student.listOfStudents.push(this);
  }
  static constructArraySelfPayment(arr) {
    let counter = 0;
    arr.forEach((element) => {
      if (element.isSelfPayment === true) {
        counter++;
      }
    });
    if (counter < Student.amountFreePayment) {
      return arr;
    }
    if (counter > Student.amountFreePayment) {
      arr.sort((a, b) => {
        if (a.ratingPoint > b.ratingPoint) return -1;
        if (a.ratingPoint == b.ratingPoint) {
          if (a.schoolPoint > b.schoolPoint) {
            return -1;
          }
          if (a.schoolPoint < b.schoolPoint) {
            return 1;
          }
        }
        if (a.ratingPoint < b.ratingPoint) return 1;
      });
    }
    arr.forEach((element) => {
      if (arr.indexOf(element) >= Student.amountFreePayment) {
        element.isSelfPayment = false;
      }
    });
    arr.sort((a, b) => {
      return a.id - b.id;
    });
    return arr;
  }

  setSelfPayment() {
    if (this.ratingPoint !== NaN && this.ratingPoint >= 800) {
      return true;
    } else {
      return false;
    }
  }
}

new Student(studentArr[0]);
new Student(studentArr[1]);
new Student(studentArr[2]);
new Student(studentArr[3]);
new Student(studentArr[4]);
new Student(studentArr[5]);
new Student(studentArr[6]);
new Student(studentArr[7]);
new Student(studentArr[8]);
new Student(studentArr[9]);
new Student(studentArr[10]);

console.log(Student.listOfStudents);
Student.constructArraySelfPayment(Student.listOfStudents);
console.log(Student.listOfStudents);

// The secont task

class CustomString {
  stringReverse(string) {
    return string.split("").reverse().join("");
  }
  ucFirst(string) {
    return string[0].toUpperCase() + string.substr(1);
  }
  ucWords(string) {
    let result = string.split(" ");
    result = result.map((item) => this.ucFirst(item));
    return result.join(" ");
  }
}

const myString = new CustomString();
console.log(myString.stringReverse("qwerty"));
console.log(myString.ucFirst("qwerty"));
console.log(myString.ucWords("qwerty qwerty qwerty"));

// The third task

class Validator {
  chekingRegularExp(reg, input) {
    return reg.test(input);
  }
  checkIsEmail(email) {
    let emailExp = /^[a-zA-Z0-9\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    return this.chekingRegularExp(emailExp, email);
  }
  checkIsDomain(domain) {
    let domainExp =
      /^(http\:\/\/|\w{0})(www\.|\w{0})[a-zA-Z0-9]+\.([a-z]{2,3}|([a-z]{2,3}\.[a-z]{2,3}))$/;
    return this.chekingRegularExp(domainExp, domain);
  }
  checkIsDate(date) {
    let result = date.split(".");

    if (isNaN(+result[0]) || +result[0] > 31) {
      return "You inputed incorrect day";
    }

    if (isNaN(+result[1]) || +result[1] > 12) {
      return "You inputed incorrect month";
    }

    if (isNaN(+result[2]) || +result[2] > 2050 || +result[2] < 1800) {
      return "You inputed incorrect year";
    }

    if (+result[1] === 2 && +result[0] > 29) {
      return "You inputed incorrect day";
    }

    let dateExp = /^[0-3][0-9]\.[0-1][0-9]\.[0-2][0-9][0-9][0-9]$/;
    return this.chekingRegularExp(dateExp, date);
  }
  checkIsPhone(phoneNumber) {
    let phoneExp =
      /\+38(\s|\S|-)\(0\d{2}\)(\s|-)\b\d{3}\b(\s|-)\b\d{2}\b(\s|-)\b\d{2}\b/;
    return this.chekingRegularExp(phoneExp, phoneNumber);
  }
}

let validator = new Validator();
console.log(validator.checkIsPhone("+38 (066) 937 99 92"));
console.log(validator.checkIsEmail("vasya.pupkin@gmail.com"));
console.log(validator.checkIsDate("29.02.2019"));
console.log(validator.checkIsDomain("google.com"));
