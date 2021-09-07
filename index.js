"use strict";

//  The first task

const searchCandidatesByPhoneNumber = (phone, arr) => {
  let onlyNumber = /[^\d]/g;
  let currentPhone = phone.replace(onlyNumber, "");
  let result = arr.filter((item) => {
    let candidatePhone = item["phone"].replace(onlyNumber, "");
    if (item && candidatePhone.includes(currentPhone)) {
      return item;
    }
  });
  return result;
};

console.log(searchCandidatesByPhoneNumber("43", condidateArr));
console.log(searchCandidatesByPhoneNumber("+1(869) 40", condidateArr));
console.log(searchCandidatesByPhoneNumber("+1 (869) 408-3982", condidateArr));

//  The second task

const getCandidateById = (id, arr) => {
  let temporaryCandidate = arr.filter((item) => {
    if (item["_id"] === id) {
      return item;
    }
  });
  let result =
    temporaryCandidate.length === 1
      ? temporaryCandidate[0]
      : "You have invalid id";
  if (typeof result === "object") {
    let registrationDate = new Date(result.registered);
    let registrationCondidate = `${
      registrationDate.getDate() >= 10
        ? registrationDate.getDate()
        : `0${registrationDate.getDate()}`
    }/${
      registrationDate.getMonth() >= 10
        ? registrationDate.getMonth() + 1
        : `0${registrationDate.getMonth() + 1}`
    }/${registrationDate.getFullYear()}`;
    result.registered = registrationCondidate;
  }
  return result;
};

console.log(getCandidateById("5e216bc9a6059760578aefa4", condidateArr));
console.log(getCandidateById("5e216bc9cab1bd9dbae25637", condidateArr));
console.log(getCandidateById("5e216bc92a071ce4dc2c3e85", condidateArr));

// The third task

const sortCandidatesArr = (sortBy) => {
  let arr = [...condidateArr];
  if (sortBy === "asc") {
    return arr.sort((a, b) => {
      return (
        Number(a.balance.replace(/[^\d]/g, "")) -
        Number(b.balance.replace(/[^\d]/g, ""))
      );
    });
  }
  if (sortBy === "desc") {
    return arr.sort((a, b) => {
      return (
        Number(b.balance.replace(/[^\d]/g, "")) -
        Number(a.balance.replace(/[^\d]/g, ""))
      );
    });
  }
  return arr;
};

console.log(sortCandidatesArr("asc"));
console.log(sortCandidatesArr("desc"));
console.log(sortCandidatesArr());

//  The fourth task

const getEyeColorMap = (arr) => {
  const obj = {};
  let arrWithEyesColor = [...new Set(arr.map((item) => item.eyeColor))];
  for (let key in arrWithEyesColor) {
    obj[arrWithEyesColor[key]] = arr.filter((item) => {
      if (arrWithEyesColor[key] === item.eyeColor) {
        return item;
      }
    });
  }
  return obj;
};

console.log(getEyeColorMap(condidateArr));

// Test with new teacher

const result2 = condidateArr
  .filter((cand) => cand.age >= 20 && cand.age <= 25)
  .map(({ name: fullName, email }) => ({ fullName, email }));

console.log(result2);

// const result3 = condidateArr.reduce((acc, item) => {
//   if (item.age >= 20 && item.age <= 25) {
//     acc.push(item);
//   }
// });

// console.log(result3);

const result3 = condidateArr.reduce((acc, candidate) => {
  if (candidate.age >= 20 && candidate.age <= 25) {
  }
}, []);
