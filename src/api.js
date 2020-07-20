const userData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData')
  .then(response => response.json())
  .catch(error => console.log(error));

const sleepData = fetch('https: //fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData')
  .then(response => response.json())
  .catch(error => console.log(error));

const activityData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData')
  .then(response => response.json())
  .catch(error => console.log(error));

fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData')
  .then(response => response.json())
  // .then(data => put data into hydration function so you can manipulate it hydration(data))
  .catch(error => console.log(error));

//sleep data
fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userID": integer,
      "date": string,
      "hoursSlept": integer,
      "sleepQuality": integer
    }),
  })
  .then(response => response.json())
  .then(json => )
  .catch(err => );
// resolve promise

//activity data
fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userID": integer,
      "date": string,
      "numSteps": integer,
      "minutesActive": integer,
      "flightsOfStairs": integer
    }),
  })
  .then(response => response.json())
  .then(json => )
  .catch(err => );
// resolve promise

