class Hydration {
  constructor(data, userRepository) {
    this.userId = data.userID;
    this.date = data.date;
    this.ounces = data.numOunces;
    this.drink(userRepository);
  }
  drink(userRepo) {
    const hydrate = this;
    userRepo.users.find(user => {
      return user.id === hydrate.userId;
    }).updateHydration(this.date, this.ounces);
  }
}

export default Hydration;
