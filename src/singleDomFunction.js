class DomTestTest {
  constructor() {
  }
  domTestTest() {
    let stepsTrendingButton = document.querySelector(".steps-trending-button");
    stepsTrendingButton.innerText = 'Soulja Boi';
  }

  dropdownEmailTest() {
    let dropdownEmail = document.querySelector('#dropdown-email');
    dropdownEmail.innerText = "email";
  }

  friendsStepContainerTest() {
    let dropdownFriendsStepsContainer = document.querySelector(
      "#dropdown-friends-steps-container");
    dropdownFriendsStepsContainer.innerText = "numbers";
  }

  dropdownGoalTest() {
    let dropdownGoal = document.querySelector("#dropdown-goal");
    dropdownGoal.innerText = "goals";
  }

  dropdownNameTest() {
    let dropdownName = document.querySelector("#dropdown-name");
    dropdownName.innerText = 'name';
  }

  headerNameTest() {
    let headerName = document.querySelector("#header-name");
    headerName.innerText = 'NAME';
  }

  hydrationCalendarCardTest() {
    let hydrationCalendarCard = document.querySelector(
      "#hydration-calendar-card");
    hydrationCalendarCard.innerText = 'calendar';
  }
  hydrationAllUsersOuncesTest() {
    let hydrationAllUsersOuncesToday = document.querySelector(
      "#hydration-all-users-ounces-today");
    hydrationAllUsersOuncesToday.innerText = 'all the water';
  }
  hydrationAllUsersCardTest() {
    let hydrationAllUsersCard = document.querySelector(
      "#hydration-all-users-card");
    hydrationAllUsersCard.innerText = 'people should drink water';
  }
  dailyOzCreaterTest() {
    let dailyOz = document.querySelectorAll('.daily-oz');
    Array.from(dailyOz).forEach((drinkSlot, index) => {
      drinkSlot[index].innerText = "##";
    })
  }
  displayFriendsStepsColorTest() {
    let friendsStepsParagraphs = document.querySelectorAll('.friends-steps');
    Array.from(friendsStepsParagraphs).forEach(paragraph => {
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
}

module.exports = DomTestTest;
