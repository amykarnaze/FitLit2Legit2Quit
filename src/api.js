const userData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData')
  .then(response => response.json())
  .then(data => data.userData)
  .catch(error => console.log(error));

const sleepData = fetch('https: //fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData')
  .then(response => response.json())
  .then(data => data.sleepData)
  .catch(error => console.log(error));

const activityData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData')
  .then(response => response.json())
  .then(data => data.activityData)
  .catch(error => console.log(error));

fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData')
  .then(response => response.json())
  .then(data => data.hydrationData)
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

//hydration data
fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userID": integer,
      "date": string,
      "numOunces": integer
    }),
  })
  .then(response => response.json())
  .then(json => )
  .catch(err => );
// resolve promise

// when doing a fetch call
// a promise is unresolved result of an async action
// calling a method in .then, waiting for result of promise. takes time
// fetch takes time the rest doesnt
// trying to update new data. make sure post can finish first
// have input that puttin gin a name to a name that already exists
// make post call then wait before it can update
