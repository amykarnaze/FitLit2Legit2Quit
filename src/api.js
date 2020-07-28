// function fetchData() {
function userFetchedData() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData')
    .then(response => response.json())
    .then(data => data.userData)
    .catch(error => console.log(error));
}

function fetchedSleepData() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData')
    .then(response => response.json())
    .then(data => data.sleepData)
    .catch(error => console.log(error));
}

function fetchedActivityData() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData')
    .then(response => response.json())
    .then(data => data.activityData)
    .catch(error => console.log(error));
}

function fetchedHydrationData() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData')
    .then(response => response.json())
    .then(data => data.hydrationData)
    .catch(error => console.log(error));
}

const getApiData = () => {
  return Promise.all([userFetchedData(), fetchedSleepData(), fetchedActivityData(), fetchedHydrationData()])
    .then(response => {
      let newFetchData = {};
      newFetchData.userData = response[0];
      newFetchData.sleepData = response[1];
      newFetchData.activityData = response[2]
      newFetchData.hydrationData = response[3];
      return newFetchData;
    })
    .catch(error => console.log(error))
}

export default getApiData;
