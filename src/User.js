 class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.totalStepsThisWeek = 0;
    this.friends = userData.friends;
    this.ouncesAverage = 0;
    this.ouncesRecord = [];
    this.hoursSleptAverage = 0;
    this.sleepQualityAverage = 0;
    this.sleepHoursRecord = [];
    this.sleepQualityRecord = [];
    this.activityRecord = [];
    this.accomplishedDays = [];
    this.trendingStepDays = [];
    this.trendingStairsDays = [];
    this.friendsNames = [];
    this.friendsActivityRecords = []
  }

  getFirstName() {
    let names = this.name.split(' ');
    return names[0].toUpperCase();
  }

  addDailyOunces(date) {
    return this.ouncesRecord.reduce((sum, record) => {
      let amount = record[date];
      if (amount) {
        sum += amount
      }
      return sum
    }, 0)
  }

  updateAccomplishedDays() {
    let newSteps = this.activityRecord[0].numSteps
    let newDate = this.activityRecord[0].date
    if (newSteps >= this.dailyStepGoal) {
      this.accomplishedDays.unshift(newDate);
    }
  }

  calculateAverage(newLog, recordList, average) {
    return ((newLog + (average * (recordList.length - 1))) / recordList.length)
  }

  updateAverage(newLog, recordList, average, attributeName, decimal) {
    if (recordList.length > 1) {
      this[attributeName] = this.calculateAverage(newLog, recordList, average).toFixed(1);
    } else {
      this[attributeName] = newLog;
    }
  }

  updateActivities(action) {
    this.activityRecord.unshift(action);
    this.updateAccomplishedDays();
  }

  updateHydration(action) {
    this.ouncesRecord.unshift({[action.date]: action.ounces});
    let newHydration = Object.values(this.ouncesRecord[0])[0]
    this.updateAverage(newHydration, this.ouncesRecord, this.ouncesAverage, 'ouncesAverage')
    this.ouncesAverage = parseInt(this.ouncesAverage)
  }

  updateSleep(action) {
    this.sleepHoursRecord.unshift({
      'date': action.date,
      'hours': action.hoursSlept
    });
    this.sleepQualityRecord.unshift({
      'date': action.date,
      'quality': action.sleepQuality
    });
    this.updateAverage(this.sleepQualityRecord[0].quality, this.sleepQualityRecord, this.sleepQualityAverage, 'sleepQualityAverage')
    this.updateAverage(this.sleepHoursRecord[0].hours, this.sleepHoursRecord, this.hoursSleptAverage, 'hoursSleptAverage')
  }

  //average this week methods are all similar (5x -- possibly calculateTotalStepsThisWeek for 6th -- difference = / 7 at the end)
  // ****REMEMBER TO CHECK SCRIPTS FOR METHOD USE****

  calculateTotalStepsThisWeek(todayDate) {
    this.totalStepsThisWeek = (this.activityRecord.reduce((sum, activity) => {
      let index = this.activityRecord.indexOf(this.activityRecord.find(activity => activity.date === todayDate));
      if (index <= this.activityRecord.indexOf(activity) && this.activityRecord.indexOf(activity) <= (index + 6)) {
        sum += activity.steps;
      }
      return sum;
    }, 0));
  }

  calculateIndexToday(todayDate, record) {
    return this[record].indexOf(this[record].find(action => action.date === todayDate));
  }

  calculateWeeklyAverage(todayDate, actionDetail, record) {
    return (this[record].reduce((sum, action) => {
      let indexToday = this.calculateIndexToday(todayDate, record)
      let indexAction = this[record].indexOf(action)
      if (indexToday <= indexAction && indexAction <= (indexToday + 6)) {
        sum += action[actionDetail];
      }
      return sum;
    }, 0) / 7).toFixed(1);
  }

  // calculateAverageQualityThisWeek(todayDate) {
  //   return (this.sleepQualityRecord.reduce((sum, sleepAct) => {
  //     let index = this.sleepQualityRecord.indexOf(this.sleepQualityRecord.find(sleep => sleep.date === todayDate));
  //     if (index <= this.sleepQualityRecord.indexOf(sleepAct) && this.sleepQualityRecord.indexOf(sleepAct) <= (index + 6)) {
  //       sum += sleepAct.quality;
  //     }
  //     return sum;
  //   }, 0) / 7).toFixed(1);
  // }

  calculateAverageMinutesActiveThisWeek(todayDate) {
    return (this.activityRecord.reduce((sum, activity) => {
      let index = this.activityRecord.indexOf(this.activityRecord.find(activity => activity.date === todayDate));
      if (index <= this.activityRecord.indexOf(activity) && this.activityRecord.indexOf(activity) <= (index + 6)) {
        sum += activity.minutesActive;
      }
      return sum;
    }, 0) / 7).toFixed(0);
  }

  calculateAverageStepsThisWeek(todayDate) {
    return (this.activityRecord.reduce((sum, activity) => {
      let index = this.activityRecord.indexOf(this.activityRecord.find(activity => activity.date === todayDate));
      if (index <= this.activityRecord.indexOf(activity) && this.activityRecord.indexOf(activity) <= (index + 6)) {
        sum += activity.steps;
      }
      return sum;
    }, 0) / 7).toFixed(0);
  }

  calculateAverageFlightsThisWeek(todayDate) {
    return (this.activityRecord.reduce((sum, activity) => {
      let index = this.activityRecord.indexOf(this.activityRecord.find(activity => activity.date === todayDate));
      if (index <= this.activityRecord.indexOf(activity) && this.activityRecord.indexOf(activity) <= (index + 6)) {
        sum += activity.flightsOfStairs;
      }
      return sum;
    }, 0) / 7).toFixed(1);
  }

  findClimbingRecord() {
    return this.activityRecord.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    })[0].flightsOfStairs;
  }

  calculateDailyCalories(date) {
    let totalMinutes = this.activityRecord.filter(activity => {
      return activity.date === date
    }).reduce((sumMinutes, activity) => {
      return sumMinutes += activity.minutesActive
    }, 0);
    return Math.round(totalMinutes * 7.6);
  }

  //trending functions 2x similar

  findTrendingStepDays() {
    let positiveDays = [];
    this.activityRecord.forEach((activity, index) => {
      if (this.activityRecord[index + 1] && activity.steps > this.activityRecord[index + 1].steps) {
        positiveDays.unshift(activity.date);
      } else if (positiveDays.length > 2) {
        this.trendingStepDays.push(`Your most recent positive step streak was ${positiveDays[0]} - ${positiveDays[positiveDays.length - 1]}!`);
        positiveDays = [];
      }
    })
    // for (let i = 0; i < this.activityRecord.length; i++) {
    //   if (this.activityRecord[i + 1] && this.activityRecord[i].steps > this.activityRecord[i + 1].steps) {
    //     positiveDays.unshift(this.activityRecord[i].date);
    //   } else if (positiveDays.length > 2) {
    //     this.trendingStepDays.push(`Your most recent positive step streak was ${positiveDays[0]} - ${positiveDays[positiveDays.length - 1]}!`);
    //     positiveDays = [];
    //   }
    // }
  }

  findTrendingStairsDays() {
    let positiveDays = [];
    this.activityRecord.forEach((activity, index) => {
      if (this.activityRecord[index + 1] && activity.flightsOfStairs > this.activityRecord[index + 1].flightsOfStairs) {
        positiveDays.unshift(activity.date);
      } else if (positiveDays.length > 2) {
        this.trendingStairsDays.push(`Your most recent positive climbing streak was ${positiveDays[0]} - ${positiveDays[positiveDays.length - 1]}!`);
        positiveDays = [];
      }
    })
  }
    // for (let i = 0; i < this.activityRecord.length; i++) {
    //   if (this.activityRecord[i + 1] && this.activityRecord[i].flightsOfStairs > this.activityRecord[i + 1].flightsOfStairs) {
    //     positiveDays.unshift(this.activityRecord[i].date);
    //   } else if (positiveDays.length > 2) {
    //     this.trendingStairsDays.push(`Your most recent positive climbing streak was ${positiveDays[0]} - ${positiveDays[positiveDays.length - 1]}!`);
    //     positiveDays = [];
    //   }
    // }

  findFriendsNames(users) {
    this.friends.forEach(friend => {
      this.friendsNames.push(users.find(user => user.id === friend).getFirstName());
    })
  }

  findFriendsTotalStepsForWeek(users, date) {
    this.friends.map(friend => {
      let matchedFriend = users.find(user => user.id === friend);
      matchedFriend.calculateTotalStepsThisWeek(date);
      this.friendsActivityRecords.push(
        {
          'id': matchedFriend.id,
          'firstName': matchedFriend.name.toUpperCase().split(' ')[0],
          'totalWeeklySteps': matchedFriend.totalStepsThisWeek
        })
    })
    this.calculateTotalStepsThisWeek(date);
    this.friendsActivityRecords.push({
      'id': this.id,
      'firstName': 'YOU',
      'totalWeeklySteps': this.totalStepsThisWeek
    });
    this.friendsActivityRecords = this.friendsActivityRecords.sort((a, b) => b.totalWeeklySteps - a.totalWeeklySteps);
  }
}

export default User;
