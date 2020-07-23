import UserAction from '../src/UserAction';

class Sleep extends UserAction { // instance for the user's sleep each day
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
}

export default Sleep;
