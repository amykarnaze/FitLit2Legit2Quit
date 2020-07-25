class UserAction {
  constructor(data, userRepository) {
    this.userId = data.userID;
    this.date = data.date;
    // this.action(userRepo);
  }

  matchUserToAction(userRepo) {
    const action = this;
    return userRepo.users.find(user => {
      return user.id === action.userId
    })
  }

}

//hydration, sleep, activity (steps/stairs) will be sub-classes of UserAction
//properties shared: this.userId, this.date
//methods shared: drink/sleep/doActivity are all very similar
// takes in user method updateHydration/updateSleep/updateActivities -- refactor these to one within User class too

export default UserAction;
