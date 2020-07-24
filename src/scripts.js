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



let userRepository = new UserRepository();

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

let user = userRepository.users[0];
let todayDate = moment().format("YYYY/MM/DD");
user.findFriendsNames(userRepository.users);

let dailyOz = document.querySelectorAll('.daily-oz');
let dropdownEmail = document.querySelector('#dropdown-email');
let dropdownFriendsStepsContainer = document.querySelector('#dropdown-friends-steps-container');
let dropdownGoal = document.querySelector('#dropdown-goal');
let dropdownName = document.querySelector('#dropdown-name');
let headerName = document.querySelector('#header-name');
let hydrationCalendarCard = document.querySelector('#hydration-calendar-card');
let hydrationAllUsersOuncesToday = document.querySelector('#hydration-all-users-ounces-today');
let hydrationAllUsersCard = document.querySelector('#hydration-all-users-card');
let hydrationInfoCard = document.querySelector('#hydration-info-card');
let hydrationInfoGlassesToday = document.querySelector('#hydration-info-glasses-today');
let hydrationMainCard = document.querySelector('#hydration-main-card');
let hydrationUserOuncesToday = document.querySelector('#hydration-user-ounces-today');
let mainPage = document.querySelector('main');
let profileButton = document.querySelector('#profile-button');
let sleepCalendarCard = document.querySelector('#sleep-calendar-card');
let sleepCalendarHoursAverageWeekly = document.querySelector('#sleep-calendar-hours-average-weekly');
let sleepCalendarQualityAverageWeekly = document.querySelector('#sleep-calendar-quality-average-weekly');
let sleepAllUsersLongestSleeper = document.querySelector('#sleep-all-users-longest-sleeper');
let sleepAllUsersCard = document.querySelector('#sleep-all-users-card');
let sleepAllUsersWorstSleeper = document.querySelector('#sleep-all-users-worst-sleeper');
let sleepInfoCard = document.querySelector('#sleep-info-card');
let sleepInfoHoursAverageAlltime = document.querySelector('#sleep-info-hours-average-alltime');
let sleepInfoQualityAverageAlltime = document.querySelector('#sleep-info-quality-average-alltime');
let sleepInfoQualityToday = document.querySelector('#sleep-info-quality-today');
let sleepMainCard = document.querySelector('#sleep-main-card');
let sleepUserHoursToday = document.querySelector('#sleep-user-hours-today');
let sortedHydrationDataByDate = user.ouncesRecord.sort((a, b) => {
  if (Object.keys(a)[0] > Object.keys(b)[0]) {
    return -1;
  }
  if (Object.keys(a)[0] < Object.keys(b)[0]) {
    return 1;
  }
  return 0;
});
let stairsCalendarCard = document.querySelector('#stairs-calendar-card');
let stairsCalendarFlightsAverageWeekly = document.querySelector('#stairs-calendar-flights-average-weekly');
let stairsCalendarStairsAverageWeekly = document.querySelector('#stairs-calendar-stairs-average-weekly');
let stepsMainCard = document.querySelector('#steps-main-card');
let stepsInfoCard = document.querySelector('#steps-info-card');
let stepsAllUsersCard = document.querySelector('#steps-all-users-card');
let stepsTrendingCard = document.querySelector('#steps-trending-card');
let stepsCalendarCard = document.querySelector('#steps-calendar-card');
let stairsAllUsersFlightsAverageToday = document.querySelector('#stairs-all-users-flights-average-today');
let stairsAllUsersCard = document.querySelector('#stairs-all-users-card');
let stairsInfoCard = document.querySelector('#stairs-info-card');
let stairsInfoFlightsToday = document.querySelector('#stairs-info-flights-today');
let stairsMainCard = document.querySelector('#stairs-main-card');
let stairsTrendingButton = document.querySelector('.stairs-trending-button');
let stairsTrendingCard = document.querySelector('#stairs-trending-card');
let stairsUserStairsToday = document.querySelector('#stairs-user-stairs-today');
let stepsCalendarTotalActiveMinutesWeekly = document.querySelector('#steps-calendar-total-active-minutes-weekly');
let stepsCalendarTotalStepsWeekly = document.querySelector('#steps-calendar-total-steps-weekly');
let stepsAllUsersAverageStepGoal = document.querySelector('#steps-all-users-average-step-goal');
let stepsInfoActiveMinutesToday = document.querySelector('#steps-info-active-minutes-today');
let caloriesBurnedToday = document.querySelector('#calories-burned-today')
let stepsInfoMilesWalkedToday = document.querySelector('#steps-info-miles-walked-today');
let stepsAllUsersActiveMinutesAverageToday = document.querySelector('#steps-all-users-active-minutes-average-today');
let stepsAllUsersStepsAverageToday = document.querySelector('#steps-all-users-steps-average-today');
let stepsTrendingButton = document.querySelector('.steps-trending-button');
let stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
let trendingStepsPhraseContainer = document.querySelector('.trending-steps-phrase-container');
let trendingStairsPhraseContainer = document.querySelector('.trending-stairs-phrase-container');
let userInfoDropdown = document.querySelector('#user-info-dropdown');
let addButton = document.querySelector('#add-instance-button');
let newInstances = document.querySelector('#add-instances-dropdown');
let modalWindow = document.getElementById('mpopupBox');
let sleepInput = document.querySelector('.mpopup-sleep');
let hydrationInput = document.querySelector(".mpopup-hydration");
let activityInput = document.querySelector(".mpopup-activity");
let closeModal = document.querySelector('.close');

window.addEventListener('click', closeModalWindow);
mainPage.addEventListener('click', showInfo);
profileButton.addEventListener('click', showDropdown);
addButton.addEventListener("click", showInstanceDropdown);
newInstances.addEventListener('click', displayModal);
closeModal.addEventListener('click', closeWindow);
stairsTrendingButton.addEventListener('click', updateTrendingStairsDays());
stepsTrendingButton.addEventListener('click', updateTrendingStepDays());

function displayModal(event) {
  modalWindow.style.display = 'none';
  if (event.target.text === 'Add Sleep') {
    modalWindow.style.display = "block";
    sleepInput.classList.remove("hide");
    activityInput.classList.add("hide");
    hydrationInput.classList.add("hide");
  } else if (event.target.text === 'Add Activity') {
    modalWindow.style.display = "block";
    sleepInput.classList.add("hide");
    activityInput.classList.remove("hide");
    hydrationInput.classList.add("hide");
  } else if (event.target.text === 'Add Hydration') {
    modalWindow.style.display = "block";
    sleepInput.classList.add("hide");
    activityInput.classList.add("hide");
    hydrationInput.classList.remove("hide");
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

for (let i = 0; i < dailyOz.length; i++) {
  console.log(todayDate);
  dailyOz[i].innerText = user.addDailyOunces(Object.keys(sortedHydrationDataByDate[i])[0])
}

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
let createdDate;

const monthInput = document.querySelector('.month');
const dayInput = document.querySelector('.day');
const yearInput = document.querySelector('.year');

monthInput.addEventListener('input', createDate);
// dayInput.addEventListener('input', createDate);
// yearInput.addEventListener('input', createDate);

function keepMonth(event) {
  console.log(event);
  return event.data;
}

// function keepDay(event) {
//   let userDayInput = event.data;
// }

// // if day/month below 9, add 0 in front of # 


// function keepYear(event) {
//   let userYearInput = event.data;
// }

function createDate(event) {
  let month;
  if (event.target.classList[0] === 'month') {
    let userMonthInput = keepMonth(event);
    month = userMonthInput;
  }
  console.log(month);
  // return `${year}/${month}/${date}`
}

