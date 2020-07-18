class Sleep { // instance for the user's sleep each day
  constructor(data, userRepository) {
    this.userId = data.userID;
    this.date = data.date;
    this.hoursSlept = data.hoursSlept;
    this.sleepQuality = data.sleepQuality;
    this.sleep(userRepository);
  }

  sleep(userRepo) {
    const sleep = this;
    userRepo.users.find(user => {
      return user.id === sleep.userId;
    }).updateSleep(this.date, this.hoursSlept, this.sleepQuality);
  }
}

export default Sleep;
