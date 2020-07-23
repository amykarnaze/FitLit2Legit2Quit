import UserAction from '../src/UserAction';

class Activity extends UserAction {
  constructor(data, userRepository) {
    super(data);
    this.steps = data.numSteps;
    this.minutesActive = data.minutesActive;
    this.flightsOfStairs = data.flightsOfStairs;
    this.milesWalked = 0;
    this.reachedStepGoal = null;
    this.doActivity(userRepository);
  }

  doActivity(userRepo) {
    const activity = this;
    userRepo.users.find(user => {
      return user.id === activity.userId;
    }).updateActivities(this);
  }
// if user's id matches userID property of activity, use activity's properties to update user.activity.record and user.dailyStepGoal
  calculateMiles(userRepository) {
    const walkingUser = userRepository.users.find(user => {
      return user.id === this.userId;
    });
    return Math.round(this.steps * walkingUser.strideLength / 5280).toFixed(1);
  }

  compareStepGoal(userRepository) {
    const userStepGoal = userRepository.users.find(user => {
      return user.id === this.userId;
    }).dailyStepGoal;
    this.reachedStepGoal = this.steps >= userStepGoal;
  }
}

export default Activity;
