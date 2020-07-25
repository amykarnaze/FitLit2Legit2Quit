import './css/base.scss';
import './css/styles.scss';
const moment = require('moment');

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

const userRepository = new UserRepository();

userData.forEach(user => {
  user = new User(user);
  userRepository.users.push(user)
});

activityData.forEach(activity => {
  activity = new Activity(activity, userRepository);
});

hydrationData.forEach(hydration => {
  hydration = new Hydration(hydration, userRepository);
});

sleepData.forEach(sleep => {
  sleep = new Sleep(sleep, userRepository);
});

const user = userRepository.users[0];
let todayDate = "2019/09/22";
let currentDate = moment().format("YYYY/MM/DD");
user.findFriendsNames(userRepository.users);

const dailyOz = document.querySelectorAll('.daily-oz');
const dropdownEmail = document.querySelector('#dropdown-email');
const dropdownFriendsStepsContainer = document.querySelector('#dropdown-friends-steps-container');
const dropdownGoal = document.querySelector('#dropdown-goal');
const dropdownName = document.querySelector('#dropdown-name');
const headerName = document.querySelector('#header-name');
const hydrationCalendarCard = document.querySelector('#hydration-calendar-card');
const hydrationAllUsersOuncesToday = document.querySelector('#hydration-all-users-ounces-today');
const hydrationAllUsersCard = document.querySelector('#hydration-all-users-card');
const hydrationInfoCard = document.querySelector('#hydration-info-card');
const hydrationInfoGlassesToday = document.querySelector('#hydration-info-glasses-today');
const hydrationMainCard = document.querySelector('#hydration-main-card');
const hydrationUserOuncesToday = document.querySelector('#hydration-user-ounces-today');
const mainPage = document.querySelector('main');
const profileButton = document.querySelector('#profile-button');
const sleepCalendarCard = document.querySelector('#sleep-calendar-card');
const sleepCalendarHoursAverageWeekly = document.querySelector('#sleep-calendar-hours-average-weekly');
const sleepCalendarQualityAverageWeekly = document.querySelector('#sleep-calendar-quality-average-weekly');
const sleepAllUsersLongestSleeper = document.querySelector('#sleep-all-users-longest-sleeper');
const sleepAllUsersCard = document.querySelector('#sleep-all-users-card');
const sleepAllUsersWorstSleeper = document.querySelector('#sleep-all-users-worst-sleeper');
const sleepInfoCard = document.querySelector('#sleep-info-card');
const sleepInfoHoursAverageAlltime = document.querySelector('#sleep-info-hours-average-alltime');
const sleepInfoQualityAverageAlltime = document.querySelector('#sleep-info-quality-average-alltime');
const sleepInfoQualityToday = document.querySelector('#sleep-info-quality-today');
const sleepMainCard = document.querySelector('#sleep-main-card');
const sleepUserHoursToday = document.querySelector('#sleep-user-hours-today');
const sortedHydrationDataByDate = user.ouncesRecord.sort((a, b) => {
  if (Object.keys(a)[0] > Object.keys(b)[0]) {
    return -1;
  }
  if (Object.keys(a)[0] < Object.keys(b)[0]) {
    return 1;
  }
  return 0;
});
const stairsCalendarCard = document.querySelector('#stairs-calendar-card');
const stairsCalendarFlightsAverageWeekly = document.querySelector('#stairs-calendar-flights-average-weekly');
const stairsCalendarStairsAverageWeekly = document.querySelector('#stairs-calendar-stairs-average-weekly');
const stepsMainCard = document.querySelector('#steps-main-card');
const stepsInfoCard = document.querySelector('#steps-info-card');
const stepsAllUsersCard = document.querySelector('#steps-all-users-card');
const stepsTrendingCard = document.querySelector('#steps-trending-card');
const stepsCalendarCard = document.querySelector('#steps-calendar-card');
const stairsAllUsersFlightsAverageToday = document.querySelector('#stairs-all-users-flights-average-today');
const stairsAllUsersCard = document.querySelector('#stairs-all-users-card');
const stairsInfoCard = document.querySelector('#stairs-info-card');
const stairsInfoFlightsToday = document.querySelector('#stairs-info-flights-today');
const stairsMainCard = document.querySelector('#stairs-main-card');
const stairsTrendingButton = document.querySelector('.stairs-trending-button');
const stairsTrendingCard = document.querySelector('#stairs-trending-card');
const stairsUserStairsToday = document.querySelector('#stairs-user-stairs-today');
const stepsCalendarTotalActiveMinutesWeekly = document.querySelector('#steps-calendar-total-active-minutes-weekly');
const stepsCalendarTotalStepsWeekly = document.querySelector('#steps-calendar-total-steps-weekly');
const stepsAllUsersAverageStepGoal = document.querySelector('#steps-all-users-average-step-goal');
const stepsInfoActiveMinutesToday = document.querySelector('#steps-info-active-minutes-today');
const caloriesBurnedToday = document.querySelector('#calories-burned-today')
const stepsInfoMilesWalkedToday = document.querySelector('#steps-info-miles-walked-today');
const stepsAllUsersActiveMinutesAverageToday = document.querySelector('#steps-all-users-active-minutes-average-today');
const stepsAllUsersStepsAverageToday = document.querySelector('#steps-all-users-steps-average-today');
const stepsTrendingButton = document.querySelector('.steps-trending-button');
const stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
const trendingStepsPhraseContainer = document.querySelector('.trending-steps-phrase-container');
const trendingStairsPhraseContainer = document.querySelector('.trending-stairs-phrase-container');
const userInfoDropdown = document.querySelector('#user-info-dropdown');
const addButton = document.getElementById('add-instance-button');
const newInstances = document.getElementById('add-instances-dropdown');
const modalWindow = document.getElementById('mpopupBox');
const sleepModal = document.querySelector('.mpopup-sleep');
const hydrationModal = document.querySelector(".mpopup-hydration");
const activityModal = document.querySelector(".mpopup-activity");
const closeModal = document.querySelector('.close');
const userActionTitle = document.querySelector('.action-title');
const userHoursSleptInput = document.querySelector('.user-input-hours-slept');
const userSleepQualityInput = document.querySelector('.user-input-sleep-quality');
const userOuncesInput = document.querySelector('.user-input-ounces');
const userNumberStepsInput = document.querySelector('.user-input-steps');
const userMinutesActiveInput = document.querySelector('.user-input-minutes-active');
const userFlightsOfStairsInput = document.querySelector('.user-input-flights');

let userHoursSlept;
let userSleepQuality;
let userOunces;
let userNumberOfSteps;
let userMinutesActive;
let userFlightsOfStairs;

window.addEventListener('click', closeModalWindow);
mainPage.addEventListener('click', showInfo);
profileButton.addEventListener('click', showDropdown);
addButton.addEventListener("click", showInstanceDropdown);
newInstances.addEventListener('click', displayModal);
closeModal.addEventListener('click', closeWindow);
stairsTrendingButton.addEventListener('click', updateTrendingStairsDays());
stepsTrendingButton.addEventListener('click', updateTrendingStepDays());
userHoursSleptInput.addEventListener('input', userInputHandler);
userSleepQualityInput.addEventListener("input", userInputHandler);
userOuncesInput.addEventListener("input", userInputHandler);
userNumberStepsInput.addEventListener("input", userInputHandler);
userMinutesActiveInput.addEventListener("input", userInputHandler);
userFlightsOfStairsInput.addEventListener("input", userInputHandler);

function userInputHandler(event) {
  if (event.target.classList[0] === 'user-input-hours-slept') {
    userHoursSlept = event.target.value;
    console.log(userHoursSlept);
  } else if(event.target.classList[0] === 'user-input-sleep-quality') {
    userSleepQuality = event.target.value;
    console.log(userSleepQuality);
  } else if (event.target.classList[0] === 'user-input-ounces') {
    userOunces = event.target.value;
    console.log(userOunces);
  } else if (event.target.classList[0] === 'user-input-steps') {
    userNumberOfSteps = event.target.value;
    console.log(userNumberOfSteps);
  } else if (event.target.classList[0] === 'user-input-minutes-active') {
    userMinutesActive = event.target.value;
    console.log(userMinutesActive);
  } else if (event.target.classList[0] === 'user-input-flights') {
    userFlightsOfStairs = event.target.value;
    console.log(userFlightsOfStairs);
  }
}

function displayModal(event) {
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
  userInfoDropdown.classList.toggle('hide');
}

function showInstanceDropdown() {
  newInstances.classList.toggle("hide");
}

function showInfo() {
  if (event.target.classList.contains('steps-info-button')) {
    flipCard(stepsMainCard, stepsInfoCard);
  }
  if (event.target.classList.contains('steps-all-users-button')) {
    flipCard(stepsMainCard, stepsAllUsersCard);
  }
  if (event.target.classList.contains('steps-trending-button')) {
    flipCard(stepsMainCard, stepsTrendingCard);
  }
  if (event.target.classList.contains('steps-calendar-button')) {
    flipCard(stepsMainCard, stepsCalendarCard);
  }
  if (event.target.classList.contains('hydration-info-button')) {
    flipCard(hydrationMainCard, hydrationInfoCard);
  }
  if (event.target.classList.contains('hydration-all-users-button')) {
    flipCard(hydrationMainCard, hydrationAllUsersCard);
  }
  if (event.target.classList.contains('hydration-calendar-button')) {
    flipCard(hydrationMainCard, hydrationCalendarCard);
  }
  if (event.target.classList.contains('stairs-info-button')) {
    flipCard(stairsMainCard, stairsInfoCard);
  }
  if (event.target.classList.contains('stairs-all-users-button')) {
    flipCard(stairsMainCard, stairsAllUsersCard);
  }
  if (event.target.classList.contains('stairs-trending-button')) {
    flipCard(stairsMainCard, stairsTrendingCard);
  }
  if (event.target.classList.contains('stairs-calendar-button')) {
    flipCard(stairsMainCard, stairsCalendarCard);
  }
  if (event.target.classList.contains('sleep-info-button')) {
    flipCard(sleepMainCard, sleepInfoCard);
  }
  if (event.target.classList.contains('sleep-all-users-button')) {
    flipCard(sleepMainCard, sleepAllUsersCard);
  }
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
  user.findTrendingStairsDays();
  trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
}

function updateTrendingStepDays() {
  user.findTrendingStepDays();
  trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
}

const dailyOzArray = Array.from(dailyOz);

dailyOzArray.forEach((drinkSlot, index) => {
  drinkSlot.innerText = user.addDailyOunces(Object.keys(sortedHydrationDataByDate[index + 1])[0]);
})

dropdownGoal.innerText = `DAILY STEP GOAL | ${user.dailyStepGoal}`;

dropdownEmail.innerText = `EMAIL | ${user.email}`;

dropdownName.innerText = user.name.toUpperCase();

headerName.innerText = `${user.getFirstName()}'S `;

hydrationUserOuncesToday.innerText = hydrationData.find(hydration => {
  return hydration.userID === user.id && hydration.date === todayDate;
}).numOunces;

hydrationAllUsersOuncesToday.innerText = userRepository.calculateAverageDailyWater(todayDate);

hydrationInfoGlassesToday.innerText = hydrationData.find(hydration => {
  return hydration.userID === user.id && hydration.date === todayDate;
}).numOunces / 8;

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

stairsTrendingButton.addEventListener('click', function() {
  user.findTrendingStairsDays();
  trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
});

stepsCalendarTotalActiveMinutesWeekly.innerText = user.calculateAverageMinutesActiveThisWeek(todayDate);

stepsCalendarTotalStepsWeekly.innerText = user.calculateAverageStepsThisWeek(todayDate);

stepsTrendingButton.addEventListener('click', function() {
  user.findTrendingStepDays();
  trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
});

stepsAllUsersActiveMinutesAverageToday.innerText = userRepository.calculateAverageMinutesActive(todayDate);

stepsAllUsersAverageStepGoal.innerText = `${userRepository.calculateAverageStepGoal()}`;

stepsAllUsersStepsAverageToday.innerText = userRepository.calculateAverageSteps(todayDate);

stepsInfoActiveMinutesToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).minutesActive;

caloriesBurnedToday.innerText = user.calculateDailyCalories(todayDate);

stepsUserStepsToday.innerText = activityData.find(activity => {
  return activity.userID === user.id && activity.date === todayDate;
}).numSteps;

user.findFriendsTotalStepsForWeek(userRepository.users, todayDate);

user.friendsActivityRecords.forEach(friend => {
  dropdownFriendsStepsContainer.innerHTML += `
  <p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>
  `;
});

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


