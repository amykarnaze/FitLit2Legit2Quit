import UserAction from '../src/UserAction';

class Hydration extends UserAction {
  constructor(data, userRepository) {
    super(data);
    this.ounces = data.numOunces;
    this.drink(userRepository);
  }

  // drink(userRepo) {
  //   const hydrate = this;
  //   userRepo.users.find(user => {
  //     return user.id === hydrate.userId;
  //   }).updateHydration(this.date, this.ounces);
  // }

  drink(userRepo) {
    super.matchUserToAction(userRepo).updateHydration(this);
  }
  //if user id in repo matches userId property of hydration object, use values from this object to update hydration stats of that user
}

export default Hydration;
