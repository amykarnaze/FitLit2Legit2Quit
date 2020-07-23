import UserAction from '../src/UserAction';

class Hydration extends UserAction {
  constructor(data, userRepository) {
    super(data);
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
