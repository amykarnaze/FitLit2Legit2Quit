import UserAction from '../src/UserAction';

class Hydration extends UserAction {
  constructor(data, userRepository) {
    super(data);
    this.ounces = data.numOunces;
    this.drink(userRepository);
  }

  drink(userRepo) {
    super.matchUserToAction(userRepo).updateHydration(this);
  }
}

export default Hydration;
