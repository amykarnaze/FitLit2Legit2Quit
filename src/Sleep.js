import UserAction from '../src/UserAction';

class Sleep extends UserAction {
  constructor(data, userRepository) {
    super(data);
    this.hoursSlept = data.hoursSlept;
    this.sleepQuality = data.sleepQuality;
    this.sleep(userRepository);
  }

  sleep(userRepo) {
    const sleep = this;
    userRepo.users.find(user => {
      return user.id === sleep.userId;
      })
      .updateSleep(this.date, this.hoursSlept, this.sleepQuality);
      console.log(this)
  }

  // sleep(userRepo) {
  //   const sleep = this;
  //   let activeUser = userRepo.users.find(user => {
  //     return user.id === sleep.userId;
  //   })
  //   activeUser.updateSleep(this);
  // }

  // if user id in repo matches userId property of sleep object, use values from this object to update sleep stats of that user
}

export default Sleep;
