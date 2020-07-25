import './css/base.scss';
import './css/styles.scss';
const moment = require("moment");

import userData from './data/users';
import activityData from './data/activity';
import sleepData from './data/sleep';
import hydrationData from './data/hydration';

import UserRepository from './UserRepository';
import User from './User';
import UserAction from '../src/UserAction';
import Activity from './Activity';
import Hydration from './Hydration';
import Sleep from './Sleep';
import getApiData from './api';

let userRepository = new UserRepository();
let user = {};
let sortedHydrationDataByDate = [];

getApiData().then(allData => {
  allData.userData.forEach(person => {
    userRepository.users.push(new User(person));
  });
  // console.log('users array', userRepository.users);
  allData.sleepData.forEach(sleep => {
    sleep = new Sleep(sleep, userRepository);
  });
  allData.activityData.forEach(activity => {
    activity = new Activity(activity, userRepository);
  });
  allData.hydrationData.forEach(hydration => {
    hydration = new Hydration(hydration, userRepository);
  });
  // keep in mind if yo need soemthing from a then, you need ot return so next then has it
  // return allData- just an exp
  // drag whatever you return through .then chain
})
.then(() => {
  user = userRepository.users[0]
  user.findFriendsNames(userRepository.users)
  // console.warn(user.ouncesRecord)
  sortedHydrationDataByDate = user.ouncesRecord.sort((a, b) => {
    if (Object.keys(a)[0] > Object.keys(b)[0]) {
      return -1;
    }
    if (Object.keys(a)[0] < Object.keys(b)[0]) {
      return 1;
    }
    return 0;
  });
  })
  .then(() => populatePage());

  // whatever is returned out of a then goes into next then as the data
  function populatePage() {
    // call all sub functions
    dailyOzCreater();
    displayDropDown();
    displayName();
    displayHydration();
    displaySleep();
    averageFlights();
    displayCalenderSteps();
    displayAllUsersSteps();
    displayCaloriesBurnedToday();
    displayFriendsSteps()
    displayFriendsStepsColor();
  }

let todayDate = "2019/09/22";
const dailyOz = document.querySelectorAll('.daily-oz');

//event listeners
const hydrationMainCard = document.querySelector('#hydration-main-card');
const mainPage = document.querySelector('main');
const stairsTrendingButton = document.querySelector('.stairs-trending-button');
const stepsTrendingButton = document.querySelector('.steps-trending-button');
const addButton = document.getElementById('add-instance-button');
const newInstances = document.getElementById('add-instances-dropdown');

// called mult times
const profileButton = document.querySelector('#profile-button');
const sleepMainCard = document.querySelector('#sleep-main-card');
const stepsMainCard = document.querySelector('#steps-main-card');
const modalWindow = document.getElementById('mpopupBox');
const stairsMainCard = document.querySelector('#stairs-main-card');



const hydrationModal = document.querySelector(".mpopup-hydration");
const activityModal = document.querySelector(".mpopup-activity");
const closeModal = document.querySelector('.close');
const userActionTitle = document.querySelector('.action-title');

window.addEventListener('click', closeModalWindow);
mainPage.addEventListener('click', showInfo);
profileButton.addEventListener('click', showDropdown);
addButton.addEventListener("click", showInstanceDropdown);
newInstances.addEventListener('click', displayModal);
closeModal.addEventListener('click', closeWindow);
stairsTrendingButton.addEventListener('click', handleStairsDaysButton);
stepsTrendingButton.addEventListener('click', handleStepDays);

function handleStairsDaysButton() {
  updateTrendingStairsDays();
}

function handleStepDays() {
  updateTrendingStepDays()
} 

function displayModal(event) {
  const sleepModal = document.querySelector('.mpopup-sleep');
  modalWindow.style.display = 'none';
  if (event.target.text === 'Add Sleep') {
    modalWindow.style.display = "block";
    userActionTitle.innerText = 'New Sleep';
    sleepModal.classList.remove("hide");
    activityModal.classList.add("hide");
    hydrationModal.classList.add("hide");
  } else if (event.target.text === 'Add Activity') {
    modalWindow.style.display = "block";
    userActionTitle.innerText = "New Activity";
    sleepModal.classList.add("hide");
    activityModal.classList.remove("hide");
    hydrationModal.classList.add("hide");
  } else if (event.target.text === 'Add Hydration') {
    modalWindow.style.display = "block";
    userActionTitle.innerText = "New Hydration";
    sleepModal.classList.add("hide");
    activityModal.classList.add("hide");
    hydrationModal.classList.remove("hide");
  }
}

function closeModalWindow(event) {
  if (event.target === modalWindow) {
    modalWindow.style.display = "none";
  }
}

function closeWindow() {
  modalWindow.style.display = "none";
}

function flipCard(cardToHide, cardToShow) {
  cardToHide.classList.add('hide');
  cardToShow.classList.remove('hide');
}

function showDropdown() {
  const userInfoDropdown = document.querySelector('#user-info-dropdown');
  userInfoDropdown.classList.toggle('hide');
}

function showInstanceDropdown() {
  newInstances.classList.toggle("hide");
}

function showInfo() {
  const stepsInfoCard = document.querySelector('#steps-info-card');
  if (event.target.classList.contains('steps-info-button')) {
    flipCard(stepsMainCard, stepsInfoCard);
  }
  const stepsAllUsersCard = document.querySelector('#steps-all-users-card');
  if (event.target.classList.contains('steps-all-users-button')) {
    flipCard(stepsMainCard, stepsAllUsersCard);
  }
  const stepsTrendingCard = document.querySelector('#steps-trending-card');
  if (event.target.classList.contains('steps-trending-button')) {
    flipCard(stepsMainCard, stepsTrendingCard);
  }
  const stepsCalendarCard = document.querySelector('#steps-calendar-card');
  if (event.target.classList.contains('steps-calendar-button')) {
    flipCard(stepsMainCard, stepsCalendarCard);
  }
  const hydrationInfoCard = document.querySelector('#hydration-info-card');
  if (event.target.classList.contains('hydration-info-button')) {
    flipCard(hydrationMainCard, hydrationInfoCard);
  }
  const hydrationAllUsersCard = document.querySelector('#hydration-all-users-card');
  if (event.target.classList.contains('hydration-all-users-button')) {
    flipCard(hydrationMainCard, hydrationAllUsersCard);
  }
  const hydrationCalendarCard = document.querySelector('#hydration-calendar-card');
  if (event.target.classList.contains('hydration-calendar-button')) {
    flipCard(hydrationMainCard, hydrationCalendarCard);
  }
  const stairsInfoCard = document.querySelector('#stairs-info-card');
  if (event.target.classList.contains('stairs-info-button')) {
    flipCard(stairsMainCard, stairsInfoCard);
  }
  const stairsAllUsersCard = document.querySelector('#stairs-all-users-card');
  if (event.target.classList.contains('stairs-all-users-button')) {
    flipCard(stairsMainCard, stairsAllUsersCard);
  }
  const stairsTrendingCard = document.querySelector('#stairs-trending-card');
  if (event.target.classList.contains('stairs-trending-button')) {
    flipCard(stairsMainCard, stairsTrendingCard);
  }
  const stairsCalendarCard = document.querySelector('#stairs-calendar-card');
  if (event.target.classList.contains('stairs-calendar-button')) {
    flipCard(stairsMainCard, stairsCalendarCard);
  }
  const sleepInfoCard = document.querySelector('#sleep-info-card');
  if (event.target.classList.contains('sleep-info-button')) {
    flipCard(sleepMainCard, sleepInfoCard);
  }
  const sleepAllUsersCard = document.querySelector('#sleep-all-users-card');
  if (event.target.classList.contains('sleep-all-users-button')) {
    flipCard(sleepMainCard, sleepAllUsersCard);
  }
  const sleepCalendarCard = document.querySelector('#sleep-calendar-card');
  if (event.target.classList.contains('sleep-calendar-button')) {
    flipCard(sleepMainCard, sleepCalendarCard);
  }
  if (event.target.classList.contains('steps-go-back-button')) {
    flipCard(event.target.parentNode, stepsMainCard);
  }
  if (event.target.classList.contains('hydration-go-back-button')) {
    flipCard(event.target.parentNode, hydrationMainCard);
  }
  if (event.target.classList.contains('stairs-go-back-button')) {
    flipCard(event.target.parentNode, stairsMainCard);
  }
  if (event.target.classList.contains('sleep-go-back-button')) {
    flipCard(event.target.parentNode, sleepMainCard);
  }
}

function updateTrendingStairsDays() {
  const trendingStairsPhraseContainer = document.querySelector('.trending-stairs-phrase-container');
  user.findTrendingStairsDays();
  trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
}

function updateTrendingStepDays() {
  const trendingStepsPhraseContainer = document.querySelector('.trending-steps-phrase-container');
  user.findTrendingStepDays();
  trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
}

function dailyOzCreater() {
  Array.from(dailyOz).forEach((drinkSlot, index) => {
    drinkSlot.innerText = user.addDailyOunces(Object.keys(sortedHydrationDataByDate[index + 1])[0]);
  })
}

function displayDropDown() {
  const dropdownEmail = document.querySelector('#dropdown-email');
  const dropdownGoal = document.querySelector('#dropdown-goal');
  const dropdownName = document.querySelector('#dropdown-name');
  dropdownGoal.innerText = `DAILY STEP GOAL | ${user.dailyStepGoal}`;
  dropdownEmail.innerText = `EMAIL | ${user.email}`;
  dropdownName.innerText = user.name.toUpperCase();
}

function displayName() {
  const headerName = document.querySelector('#header-name');  
  headerName.innerText = `${user.getFirstName()}'S `;
}

function displayHydration() {
  const hydrationUserOuncesToday = document.querySelector('#hydration-user-ounces-today');
  const hydrationAllUsersOuncesToday = document.querySelector('#hydration-all-users-ounces-today');
  const hydrationInfoGlassesToday = document.querySelector('#hydration-info-glasses-today');
  hydrationUserOuncesToday.innerText = hydrationData.find(hydration => {
  return hydration.userID === user.id && hydration.date === todayDate;
  }).numOunces;
  hydrationAllUsersOuncesToday.innerText = userRepository.calculateAverageDailyWater(todayDate);
  hydrationInfoGlassesToday.innerText = hydrationData.find(hydration => {
    return hydration.userID === user.id && hydration.date === todayDate;
  }).numOunces / 8;
}

function displaySleep() {
  const sleepCalendarHoursAverageWeekly = document.querySelector('#sleep-calendar-hours-average-weekly');
  const sleepCalendarQualityAverageWeekly = document.querySelector('#sleep-calendar-quality-average-weekly');
  const sleepAllUsersLongestSleeper = document.querySelector('#sleep-all-users-longest-sleeper');
  const stepsInfoMilesWalkedToday = document.querySelector('#steps-info-miles-walked-today');
  const sleepAllUsersWorstSleeper = document.querySelector('#sleep-all-users-worst-sleeper');
  const sleepInfoHoursAverageAlltime = document.querySelector('#sleep-info-hours-average-alltime');
  const sleepInfoQualityAverageAlltime = document.querySelector('#sleep-info-quality-average-alltime');
  const sleepInfoQualityToday = document.querySelector('#sleep-info-quality-today');
  const sleepUserHoursToday = document.querySelector('#sleep-user-hours-today');

  sleepCalendarHoursAverageWeekly.innerText = user.calculateAverageHoursThisWeek(todayDate);
  sleepCalendarQualityAverageWeekly.innerText = user.calculateAverageQualityThisWeek(todayDate);
  sleepAllUsersLongestSleeper.innerText = userRepository.users.find(user => {
    return user.id === userRepository.getLongestSleepers(todayDate)
  }).getFirstName();
  sleepAllUsersWorstSleeper.innerText = userRepository.users.find(user => {
    return user.id === userRepository.getWorstSleepers(sleepData, todayDate)
  }).getFirstName();
  sleepInfoHoursAverageAlltime.innerText = user.hoursSleptAverage;
  stepsInfoMilesWalkedToday.innerText = user.activityRecord.find(activity => {
    return (activity.date === todayDate && activity.userId === user.id)
  }).calculateMiles(userRepository);
  sleepInfoQualityAverageAlltime.innerText = user.sleepQualityAverage;
  sleepInfoQualityToday.innerText = sleepData.find(sleep => {
    return sleep.userID === user.id && sleep.date === todayDate;
  }).sleepQuality;
  sleepUserHoursToday.innerText = sleepData.find(sleep => {
    return sleep.userID === user.id && sleep.date === todayDate;
  }).hoursSlept;
}

function averageFlights() {
  const stairsAllUsersFlightsAverageToday = document.querySelector('#stairs-all-users-flights-average-today');
  const stairsInfoFlightsToday = document.querySelector('#stairs-info-flights-today');
  const stairsUserStairsToday = document.querySelector('#stairs-user-stairs-today');
  const stairsCalendarFlightsAverageWeekly = document.querySelector('#stairs-calendar-flights-average-weekly');
  const stairsCalendarStairsAverageWeekly = document.querySelector('#stairs-calendar-stairs-average-weekly');

  stairsCalendarFlightsAverageWeekly.innerText = user.calculateAverageFlightsThisWeek(todayDate); 
  stairsCalendarStairsAverageWeekly.innerText = (user.calculateAverageFlightsThisWeek(todayDate) * 12).toFixed(0);
  stairsAllUsersFlightsAverageToday.innerText = (userRepository.calculateAverageStairs(todayDate) / 12).toFixed(1);
  stairsInfoFlightsToday.innerText = activityData.find(activity => {
    return activity.userID === user.id && activity.date === todayDate;
  }).flightsOfStairs;
  stairsUserStairsToday.innerText = activityData.find(activity => {
    return activity.userID === user.id && activity.date === todayDate;
  }).flightsOfStairs * 12;
  stairsCalendarFlightsAverageWeekly.innerText = user.calculateAverageFlightsThisWeek(todayDate);
  stairsCalendarStairsAverageWeekly.innerText = (user.calculateAverageFlightsThisWeek(todayDate) * 12).toFixed(0);
}

function displayCalenderSteps() {
  const stepsCalendarTotalActiveMinutesWeekly = document.querySelector('#steps-calendar-total-active-minutes-weekly');
  const stepsInfoActiveMinutesToday = document.querySelector('#steps-info-active-minutes-today');
  const stepsCalendarTotalStepsWeekly = document.querySelector('#steps-calendar-total-steps-weekly');
  stepsCalendarTotalStepsWeekly.innerText = user.calculateAverageStepsThisWeek(todayDate);
  stepsCalendarTotalActiveMinutesWeekly.innerText = user.calculateAverageMinutesActiveThisWeek(todayDate);
  stepsInfoActiveMinutesToday.innerText = activityData.find(activity => {
    return activity.userID === user.id && activity.date === todayDate;
  }).minutesActive;
}

function displayAllUsersSteps() {
  const stepsAllUsersActiveMinutesAverageToday = document.querySelector('#steps-all-users-active-minutes-average-today');
  const stepsAllUsersAverageStepGoal = document.querySelector('#steps-all-users-average-step-goal');
  const stepsAllUsersStepsAverageToday = document.querySelector('#steps-all-users-steps-average-today');
  const stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
  stepsAllUsersActiveMinutesAverageToday.innerText = userRepository.calculateAverageMinutesActive(todayDate);
  stepsAllUsersAverageStepGoal.innerText = `${userRepository.calculateAverageStepGoal()}`;
  stepsAllUsersStepsAverageToday.innerText = userRepository.calculateAverageSteps(todayDate);
  stepsUserStepsToday.innerText = activityData.find(activity => {
    return activity.userID === user.id && activity.date === todayDate;
  }).numSteps;
}

function displayCaloriesBurnedToday() {
  const caloriesBurnedToday = document.querySelector('#calories-burned-today')
  caloriesBurnedToday.innerText = user.calculateDailyCalories(todayDate);
}


function displayFriendsSteps() {
  const dropdownFriendsStepsContainer = document.querySelector('#dropdown-friends-steps-container');
  user.findFriendsTotalStepsForWeek(userRepository.users, todayDate);
  user.friendsActivityRecords.forEach(friend => {
    dropdownFriendsStepsContainer.innerHTML += `
    <p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>
    `;
  });
} 

function displayFriendsStepsColor() {
  let friendsStepsParagraphs = document.querySelectorAll('.friends-steps');
  friendsStepsParagraphs.forEach(paragraph => {
    if (friendsStepsParagraphs[0] === paragraph) {
      paragraph.classList.add('green-text');
    }
    if (friendsStepsParagraphs[friendsStepsParagraphs.length - 1] === paragraph) {
      paragraph.classList.add('red-text');
    }
    if (paragraph.innerText.includes('YOU')) {
      paragraph.classList.add('yellow-text');
    }
  });
}

const userHoursSleptInput = document.querySelector(".user-input-hours-slept");
const userSleepQualityInput = document.querySelector(
  ".user-input-sleep-quality"
);
const userOuncesInput = document.querySelector(".user-input-ounces");
const userNumberStepsInput = document.querySelector(".user-input-steps");
const userMinutesActiveInput = document.querySelector(
  ".user-input-minutes-active"
);
const userFlightsOfStairsInput = document.querySelector(".user-input-flights");
const sleepInputButton = document.querySelector(".sleep-button");
const hydrationInputButton = document.querySelector(".hydration-button");
const activityInputButton = document.querySelector(".activity-button");
const submitButton = document.getElementsByClassName("submit");

let userHoursSlept;
let userSleepQuality;
let userOunces;
let userNumberOfSteps;
let userMinutesActive;
let userFlightsOfStairs;

userHoursSleptInput.addEventListener("input", userInputHandler);
userSleepQualityInput.addEventListener("input", userInputHandler);
userOuncesInput.addEventListener("input", userInputHandler);
userNumberStepsInput.addEventListener("input", userInputHandler);
userMinutesActiveInput.addEventListener("input", userInputHandler);
userFlightsOfStairsInput.addEventListener("input", userInputHandler);
sleepInputButton.addEventListener("click", createInstance);
hydrationInputButton.addEventListener("click", createInstance);
activityInputButton.addEventListener("click", createInstance);

function createInstance(event) {
  if (event.target.classList[0] === "sleep-button") {
    createSleepInstance();
  } else if (event.target.classList[0] === "hydration-button") {
    createHydrationInstance();
  } else if (event.target.classList[0] === "activity-button") {
    createActivityInstance(event);
  }
}

function createSleepInstance() {
  let verifiedNumber1 = verifyNumberInput(userHoursSlept, 0, 24);
  let verifiedNumber2 = verifyNumberInput(userSleepQuality, 0, 5);
  if (verifiedNumber1 === true && verifiedNumber2 === true) {
    const newSleep = {
      userID: user.id,
      date: currentDate,
      hoursSlept: userHoursSlept,
      sleepQuality: userSleepQuality,
    };
    const newSleepInstance = new Sleep(newSleep, userRepository);
  }
}

function createHydrationInstance() {
  let verifiedNumber = verifyNumberInput(userOunces, 0, 200);
  if (verifiedNumber === true) {
    const newHydration = {
      userID: user.id,
      date: currentDate,
      numOunces: userOunces,
    };
    const newHydrationInstance = new Hydration(newHydration, userRepository);
  }
}

function createActivityInstance() {
  let verifiedNumber1 = verifyNumberInput(userNumberOfSteps, 0, 25000);
  let verifiedNumber2 = verifyNumberInput(userMinutesActive, 0, 480);
  let verifiedNumber3 = verifyNumberInput(userFlightsOfStairs, 0, 500);
  if (
    verifiedNumber1 === true &&
    verifiedNumber2 === true &&
    verifiedNumber3 === true
  ) {
    const newActivity = {
      userID: user.id,
      date: currentDate,
      numSteps: userNumberOfSteps,
      minutesActive: userMinutesActive,
      flightsOfStairs: userFlightsOfStairs,
    };
    const newActivityInstance = new Activity(newActivity, userRepository);
  }
}

function userInputHandler(event) {
  if (event.target.classList[0] === "user-input-hours-slept") {
    userHoursSlept = Number.parseFloat(event.target.value);
  } else if (event.target.classList[0] === "user-input-sleep-quality") {
    userSleepQuality = Number.parseFloat(event.target.value);
  } else if (event.target.classList[0] === "user-input-ounces") {
    userOunces = Number.parseInt(event.target.value, 10);
  } else if (event.target.classList[0] === "user-input-steps") {
    userNumberOfSteps = Number.parseInt(event.target.value, 10);
  } else if (event.target.classList[0] === "user-input-minutes-active") {
    userMinutesActive = Number.parseInt(event.target.value, 10);
  } else if (event.target.classList[0] === "user-input-flights") {
    userFlightsOfStairs = Number.parseInt(event.target.value, 10);
  }
}

function verifyNumberInput(amount, min, max) {
  if (amount < min || amount >= max) {
    alert(`Please enter a number between ${min} - ${max}`);
    submitButton.disabled = true;
    return false;
  } else {
    return true;
  }
}