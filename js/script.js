"use strict";

// Global variables

const minuteStep = 2;
const startPoint = 8;
const mainEventColor = "#679FCD";
const mainContainer = document.querySelector(".main");
const eventsMainContainer = document.querySelector(".calendar__container");
const mainForm = document.querySelector("#main-form");
const extraForm = document.querySelector("#extra-form");
const notificationContainer = document.querySelector(".notification");
let eventsList = taskArray.map((el) => {
  el["bgColor"] = mainEventColor;
  el["startTime"] = convertStartMinutesToTimeStart(el["start"]);
  return el;
});
let targetElement;

// Functions

function renderingEvents(parent, array) {
  array.forEach((element) => {
    addingElementToBlock(
      parent,
      createCalendarEvent(
        element.title,
        element.start,
        element.duration,
        element.bgColor
      )
    );
  });
}

function createCalendarEvent(title, start, duration, bgColor = mainEventColor) {
  let calendarBox = document.createElement("div");
  calendarBox.classList.add("event");
  calendarBox.innerHTML = `
  <div class="delete">
        <div class="delete__line"></div>
        <div class="delete__line"></div>
    </div>
  <h3 class="event__title" data-task_time="${convertStartMinutesToTimeStart(
    start
  )}"> ${title} </h3>`;
  calendarBox.style.top = `${start * minuteStep}px`;
  calendarBox.style.height = `${duration * minuteStep}px`;
  calendarBox.style.backgroundColor = `rgba(${compileColorToRgb(
    bgColor
  )}, 0.5)`;
  calendarBox.style.borderLeftColor = bgColor;
  return calendarBox;
}

function createNotification(message) {
  let notification = document.createElement("div");
  notification.classList.add("message");
  notification.innerHTML = `
     <div class="delete">
        <div class="delete__line"></div>
        <div class="delete__line"></div>
    </div>
    <h3 class="message__title"> Time to do this task </h3>
    <p class="message__text"> ${message} </p>`;
  return notification;
}

function addingElementToBlock(parent, targetOject) {
  parent.append(targetOject);
}

function deleteComponent(event, elementClass) {
  if (event.target.classList.contains(elementClass)) {
    event.target.remove();
  }
}
function compileColorToRgb(colorValue) {
  colorValue = colorValue.slice(1).match(/.{2}/g);
  let currentColor = colorValue.map((el) => parseInt(el, 16));
  currentColor = currentColor.toString();
  return currentColor;
}

function cleaningElement(element) {
  return (element.innerHTML = ``);
}

function convertStartMinutesToTimeStart(start) {
  let hours = Math.trunc(start / 60) + startPoint;
  let minutes = start % 60;
  let result = `${hours > 9 ? hours : "0" + hours}:${
    minutes > 9 ? minutes : "0" + minutes
  }`;
  return result;
}
function convertTimeStartToStartMinutes(time) {
  let hours = (parseInt(time) - startPoint) * 60;
  let minutes = +time.slice(3);
  let result = hours + minutes;
  return result;
}

function findingTime() {
  let currentTime = new Date();
  let taskTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
  return taskTime;
}
function aligningEvents() {
  let sideStep = 45;
  let events = document.querySelectorAll(".event");
  let eventsLength = events.length;
  let maxHeight = 1080;
  let timeslots = [];
  let event;

  for (let i = 0; i < maxHeight; i++) {
    timeslots[i] = [];
  }
  events.forEach((element, index) => {
    element.setAttribute("data-collide", "");
    element.setAttribute("data-conflicts", 0);
    element.setAttribute("data-index", index);
    element.setAttribute(
      "data-end",
      parseInt(element.style.top) + parseInt(element.style.height)
    );
  });

  for (let i = 0; i < eventsLength; i++) {
    event = events[i];

    if (parseInt(event.style.top) > event.getAttribute("data-end")) {
      let temp = parseInt(event.style.top);
      event.style.top = `${event.getAttribute("data-end")}px`;
      event.setAttribute("data-end", temp);
    }

    for (
      let j = parseInt(event.style.top);
      j < parseInt(event.getAttribute("data-end"));
      j++
    ) {
      timeslots[j].push(event.getAttribute("data-index"));
    }
  }

  for (let i = 0; i < maxHeight; i++) {
    let next_hindex = 0;
    let timeslotLength = timeslots[i].length;

    if (timeslotLength > 0) {
      for (let j = 0; j < timeslotLength; j++) {
        event = events[timeslots[i][j]];

        if (
          !event.getAttribute("data-conflicts") ||
          event.getAttribute("data-conflicts") < timeslotLength
        ) {
          event.setAttribute("data-conflicts", timeslotLength);

          if (event.getAttribute("data-collide") == 0) {
            event.setAttribute("data-collide", next_hindex);
            next_hindex++;
          }
        }
      }
    }
  }
  for (let i = 0; i < events.length; i++) {
    event = events[i];

    let blockStart = parseInt(event.style.top);
    let blockWidth = 200 / parseInt(event.getAttribute("data-conflicts"));

    let blockLeftSpace =
      parseInt(event.getAttribute("data-collide")) * blockWidth;

    event.style.width = blockWidth + "px";
    event.style.top = blockStart + "px";
    event.style.left = sideStep + blockLeftSpace + "px";
  }
}

// Main code

renderingEvents(eventsMainContainer, eventsList);

aligningEvents();

mainForm.addEventListener("click", (event) => {
  let eventTitle = mainForm.querySelector("#task-description");
  let eventStart = mainForm.querySelector("#task-time");
  let eventDuration = mainForm.querySelector("#task-duration");
  let eventColor = mainForm.querySelector("#task-color");

  if (event.target.id === "button-create" && eventTitle.value) {
    event.preventDefault();
    addingElementToBlock(
      eventsMainContainer,
      createCalendarEvent(
        eventTitle.value,
        convertTimeStartToStartMinutes(eventStart.value),
        eventDuration.value,
        eventColor.value
      )
    );

    eventTitle.value = "";
    eventDuration.value = 10;
    eventStart.value = "08:00";
    aligningEvents();
  }
});

mainContainer.addEventListener("click", (event) => {
  let extraTitle = extraForm.querySelector("#extra-description");
  let extraStart = extraForm.querySelector("#extra-time");
  let extraDuration = extraForm.querySelector("#extra-duration");
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    aligningEvents();
  }

  if (event.target.id === "button-cancel") {
    event.preventDefault();
    extraForm.classList.remove("active");
    aligningEvents();
  }
  if (event.target.classList.contains("event")) {
    event.preventDefault();
    extraForm.classList.add("active");
    targetElement = event.target;
  }
  if (event.target.id === "button-change" && extraTitle.value) {
    event.preventDefault();
    targetElement.innerHTML = `
    <div class="delete">
        <div class="delete__line"></div>
        <div class="delete__line"></div>
    </div>
  <h3 class="event__title" data-task_time="${extraStart.value}"> ${extraTitle.value} </h3>
    `;
    targetElement.style.top = `${
      convertTimeStartToStartMinutes(extraStart.value) * minuteStep
    }px`;
    targetElement.style.height = `${extraDuration.value * minuteStep}px`;
    extraDuration.value = 10;
    extraStart.value = "08:00";
    extraTitle.value = "";
    extraForm.classList.remove("active");
    aligningEvents();
  }
});

setInterval(() => {
  let allEvents = document.querySelectorAll(".event__title");
  let currentTime = findingTime();
  allEvents.forEach((element) => {
    if (element.getAttribute("data-task_time") === currentTime) {
      addingElementToBlock(
        notificationContainer,
        createNotification(element.textContent)
      );
    }
  });
}, 60000);
