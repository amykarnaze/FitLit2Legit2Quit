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
  // if there is a .error then return saying an error and where it is so will know why there is an error
}

function fetchedHydrationData() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData')
  .then(response => response.json())
  .then(data => data.hydrationData)
  // .then(data => put data into hydration function so you can manipulate it hydration(data))
  .catch(error => console.log(error));

}

// const combineAllData = () => {
//   // promise all on the 4 fetch requests
//   // 4 resolved promises
//   // call then on the promises after promise All resolved
//   // (creating a 5th promise w promise.ALL)
//   // array of promises and turn it into an array of data with map
//   // reduce into the object we want to return

// }



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
  // returning promise.all
  // have asyn func that depends on the funcitonality somewere else
  // promise.all.then on 48. we could chain what on script on left w getApiData
  // need to return promise from apiData
  // then we can call .then on it in scripts
  // code is not run top to bottom
  // after bchunch of work finishes, then do the thing (left side)


// sleep data
// export function postSleepData(sleepInputInstance) {
//   let sleepPostData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData', {
//   method: 'POST',
//   headers: {
//     'content-Type': 'application/json'
//   },
//   body: JSON.stringify(sleepInputInstance)
//   })
//   .then(response => response.json())
//   // .then(json => )
//   .catch(error => console.log(error));
// // resolve promise
// }
// // //activity data
// export function postActivityData(activityInputInstance) {
//   let activityPostData = fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData', {
//       method: 'POST',
//       headers: {
//         'content-Type': 'application/json'
//       },
//       body: JSON.stringify(activityInputInstance),
//     })
//     .then(response => response.json())
//     // .then(json => )
//     .catch(error => console.log(error));
//   // // resolve promise
// }

// export function postHydrationData(hydrationInputInstance) {
//   console.log('postme')
//   fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData', {
//       method: 'POST',
//       headers: {
//         'content-Type': 'application/json'
//       },
//       body: JSON.stringify(hydrationInputInstance),
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// // //resolve promise
// }
// // when doing a fetch call
// // a promise is unresolved result of an async action
// // calling a method in .then, waiting for result of promise. takes time
// // fetch takes time the rest doesnt
// // trying to update new data. make sure post can finish first
// // have input that puttin gin a name to a name that already exists
// // make post call then wait before it can update

// module.exports = {getApiData: };
export default getApiData;
