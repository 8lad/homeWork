"use strict";

// The first task

let questionAboutNumbers = null;
let parentForm = document.querySelector("form");

for (let i = 0; i < 1; i++) {
  questionAboutNumbers = +prompt("Please enter any number from 1 to 100", "");
  if (
    !questionAboutNumbers ||
    questionAboutNumbers < 0 ||
    questionAboutNumbers > 100
  ) {
    alert("You entered invalid value. Please try again");
    i--;
  } else {
    i++;
  }
}

for (let index = questionAboutNumbers; index > 0; index--) {
  let singleInput = document.createElement("input");
  singleInput.classList.add("input-item");
  singleInput.value = `Input ${index}`;
  if (!(index % 2 === 0)) {
    singleInput.classList.add("input-background");
  }
  if (index % 3 === 0) {
    singleInput.value = ``;
    singleInput.placeholder = "I love JS)))";
  }
  if (index === questionAboutNumbers) {
    singleInput.classList.add("margin-zero");
  }
  parentForm.prepend(singleInput);
}

//  The second task

let clockContainer = document.querySelector(".clock");
let clockScreen = document.querySelector(".clock-screen");
let mainTimer = setInterval(startCountingTime, 1000, clockScreen);

function startCountingTime(parent) {
  let currentTime = new Date();
  let clockSeconds = currentTime.getSeconds();
  let clockMinutes = currentTime.getMinutes();
  let clockHours = currentTime.getHours();

  parent.textContent = `${clockHours < 10 ? "0" + clockHours : clockHours}:${
    clockMinutes < 10 ? "0" + clockMinutes : clockMinutes
  }:${clockSeconds < 10 ? "0" + clockSeconds : clockSeconds}`;
}

startCountingTime(clockScreen);

clockContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("clock-stop")) {
    clearInterval(mainTimer);
  }
  if (event.target.classList.contains("clock-start")) {
    mainTimer = setInterval(startCountingTime, 1000, clockScreen);
  }
});

//  The third task

let wrapper = document.querySelector("#wrapper");
let footer = document.querySelector("#footer");
let main = document.querySelector("#main");

function changingBlocks(parent, toEndBlock, toStartBlock) {
  parent.prepend(toStartBlock);
  parent.append(toEndBlock);
}

function paintingLastElement(parent) {
  let targetElement = parent.lastElementChild;
  targetElement.classList.add("red-bg");
}

paintingLastElement(main);

changingBlocks(wrapper, footer, main);

// The fourth task

let mainFoodMenu = document.querySelector("#menu");
const INGREDIENTS = {
  cocoa: ["cocoa powder", "milk", "sugar"],
  cappuccino: ["milk", "coffee"],
  smoothie: ["banana", "orange", "sugar"],
  "matcha frappe": ["matcha", "milk", "ice"],
};

function createElementsList(array, parent) {
  let foodList = document.createElement("ol");

  array.forEach((element) => {
    let listItem = document.createElement("li");
    listItem.textContent = element;
    foodList.append(listItem);
  });

  return parent.append(foodList);
}

mainFoodMenu.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.childNodes.length > 1) {
    return event.target.firstElementChild.remove();
  }

  for (let key in INGREDIENTS) {
    if (event.target.textContent === key) {
      createElementsList(INGREDIENTS[key], event.target);
    }
  }
});
