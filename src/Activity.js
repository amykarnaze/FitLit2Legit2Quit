import UserAction from '../src/UserAction';

class Activity extends UserAction {
  constructor(data, userRepository) {
    super(data, userRepository);
    this.steps = data.numSteps;
    this.minutesActive = data.minutesActive;
    this.flightsOfStairs = data.flightsOfStairs;
    this.milesWalked = 0;
    this.reachedStepGoal = null;
    this.doActivity(userRepository)
  }

  doActivity(userRepo) {
    super.matchUserToAction(userRepo).updateActivities(this);
  }

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
