"use strict";

// The first task

const mainPromise = new Promise((resolve, reject) => {
  let number;
  setTimeout(() => {
    for (let i = 0; i < 1; i++) {
      number = Math.trunc(Math.random() * 10);
      if (!(number <= 6 && number >= 1)) {
        i--;
      }
    }
    if (number <= 5 && number >= 1) {
      console.log("Start the game...");
      resolve(number);
    } else {
      reject("Exit");
    }
  }, 2000);
});

mainPromise
  .then((data) => {
    if (data === 1) {
      console.log("Stay here");
    } else {
      console.log(`Go ${data} steps.`);
    }
  })
  .catch((err) => {
    console.error(err);
  });

//   The second task

const foodList = [
  "potateos",
  "carrots",
  "milk",
  "cakes",
  "ice-cream",
  "cheese",
];

class Error {
  constructor(message) {
    this.message = message;
    this.name = "Product Error";
  }
}

let goToShop = function () {
  return new Promise((resolve, reject) => {
    if (foodList && foodList.length > 0 && typeof foodList === "object")
      resolve(foodList.length);
    else reject(new Error("Invalig input value of products list"));
  });
};

let makeDinner = function () {
  return new Promise(() => {
    setTimeout(() => {
      console.log("Bon Appetit");
    }, 3000);
  });
};

goToShop()
  .then((result) => {
    if (result < 4) {
      console.log("Too low products");
    } else {
      makeDinner();
    }
  })
  .catch((err) => console.error(err));

// The third task

const mainContainer = document.querySelector(".container");
let mainForm = document.querySelector(".form-container");
let resourseUrl =
  "https://rickandmortyapi.com/api/character/46,2,3,4,5,9,11,17,26,27,39,61,71,91,94,106,114,123,131,137";

function createSingleCard(obj) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="card-info">
				<div class="title">
					<h1>${obj.name}</h1>
					<div class="status">
						<div class="live-status ${obj.status === "Dead" ? "dead" : null}"></div>
						<p>${obj.species} -- ${obj.status}</p>
					</div>
				</div>
				<div class="content">
					<p>${obj.location.name}</p>
				</div>
			</div>
			<div class="card-image">
				<img src=${obj.image} alt="Img">
			</div>`;
  return card;
}

function filterCards(arr, option, value) {
  let newListOfCards = arr.filter((item) => {
    if (item[option] === value) {
      return item;
    }
  });
  return newListOfCards;
}

fetch(resourseUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    mainContainer.innerHTML = ``;
    for (let key in data) {
      mainContainer.append(createSingleCard(data[key]));
    }
  });

mainForm.addEventListener("change", (e) => {
  e.preventDefault();
  e.target.checked = true;
  let valueOfTarget;
  if (e.target.id === "male" || e.target.id === "female")
    valueOfTarget = "gender";
  if (e.target.id === "alive" || e.target.id === "dead")
    valueOfTarget = "status";
  let valueOfLabel = e.target.nextElementSibling.textContent;
  let allInputs = mainForm.querySelectorAll('input[type = "checkbox"]');
  allInputs.forEach((item) => {
    if (item !== e.target) {
      item.checked = false;
    }
  });

  fetch(resourseUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      mainContainer.innerHTML = ``;
      let newListOfPersons = filterCards(data, valueOfTarget, valueOfLabel);
      for (let key in newListOfPersons) {
        mainContainer.append(createSingleCard(newListOfPersons[key]));
      }
    });
});
