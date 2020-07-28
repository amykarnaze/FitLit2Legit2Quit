class UserRepository {
  constructor() {
    this.users = [];
  }

  getUser(id) {
    return this.users.find(user => {
      return user.id === id;
    })
  }

  calculateAverageStepGoal() {
    const goals = this.users.map(user => {
      return user.dailyStepGoal;
    });
    const total = goals.reduce((sum, goal) => {
      sum += goal;
      return sum;
    }, 0);
    return total / this.users.length;
  }

  calculateAverageSleepQuality() {
    const totalSleepQuality = this.users.reduce((sum, user) => {
      sum += user.sleepQualityAverage;
      return sum;
    }, 0);
    return totalSleepQuality / this.users.length;
  }

  calculateAverageSteps(date) {
    const allUsersStepsCount = this.users.map(user => {
      return user.activityRecord.filter(activity => {
        return activity.date === date;
      });
    })
    const sumOfSteps = allUsersStepsCount.reduce((stepsSum, activityCollection) => {
      activityCollection.forEach(activity => {
        stepsSum += activity.steps
      })
      return stepsSum;
    }, 0);
    return Math.round(sumOfSteps / allUsersStepsCount.length);
  }

  calculateAverageStairs(date) {
    const allUsersStairsCount = this.users.map(user => {
      return user.activityRecord.filter(activity => {
        return activity.date === date;
      });
    })
    const sumOfStairs = allUsersStairsCount.reduce((stairsSum, activityCollection) => {
      activityCollection.forEach(activity => {
        stairsSum += activity.flightsOfStairs
      })
      return stairsSum;
    }, 0);
    return Math.round(sumOfStairs / allUsersStairsCount.length);
  }

  calculateAverageMinutesActive(date) {
    const allUsersMinutesActiveCount = this.users.map(user => {
      return user.activityRecord.filter(activity => {
        return activity.date === date;
      });
    })
    const sumOfMinutesActive = allUsersMinutesActiveCount.reduce((minutesActiveSum, activityCollection) => {
      activityCollection.forEach(activity => {
        minutesActiveSum += activity.minutesActive
      })
      return minutesActiveSum;
    }, 0);
    return Math.round(sumOfMinutesActive / allUsersMinutesActiveCount.length);
  }

  calculateAverageDailyWater(date) {
    const todaysDrinkers = this.users.filter(user => {
      return user.addDailyOunces(date) > 0;
    });
    const sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
      return sum += drinker.addDailyOunces(date);
    }, 0)
    return Math.floor(sumDrankOnDate / todaysDrinkers.length);
  }

  findBestSleepers(date, detail, record) {
    return this.users.filter(user => {
      return user.calculateWeeklyAverage(date, detail, record) > 3;
    })
  }

  getLongestSleepers(sleepData, date) {
    return sleepData.filter(sleep => {
      return sleep.date === date;
    }).sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    })[0].userId;
  }

  getWorstSleepers(sleepData, date) {
    return sleepData.filter(sleep => {
      return sleep.date === date;
    }).sort((a, b) => {
      return a.hoursSlept - b.hoursSlept;
    })[0].userId;
  }
}

export default UserRepository;
