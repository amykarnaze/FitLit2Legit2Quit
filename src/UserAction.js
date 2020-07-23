class UserAction {
  constructor(data) {
    this.userId = data.userID;
    this.date = data.date;
    this.action(userRepo);
  }

  action(userRepo, updateUserMethod) {
    const action = userRepo.users.find(user => {
      return user.id === this.userId
    }).updateUserMethod(parameters)
  }

}

//hydration, sleep, activity (steps/stairs) will be sub-classes of UserAction
//properties shared: this.userId, this.date
//methods shared: drink/sleep/doActivity are all very similar
// takes in user method updateHydration/updateSleep/updateActivities -- refactor these to one within User class too?

export default UserAction;
