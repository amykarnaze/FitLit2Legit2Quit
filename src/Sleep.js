import UserAction from '../src/UserAction';

class Sleep extends UserAction {
  constructor(data, userRepository) {
    super(data);
    this.hoursSlept = data.hoursSlept;
    this.sleepQuality = data.sleepQuality;
    this.sleep(userRepository);
  }

  sleep(userRepo) {
    userRepo.users
      .find(user => {
      return user.id === this.userId;
      })
      .updateSleep(this.date, this.hoursSlept, this.sleepQuality);
  }

  // if user id in repo matches userId property of sleep object, use values from this object to update sleep stats of that user
}

export default Sleep;
