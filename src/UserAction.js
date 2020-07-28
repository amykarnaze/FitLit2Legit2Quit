class UserAction {
  constructor(data, userRepository) {
    this.userId = data.userID;
    this.date = data.date;
  }

  matchUserToAction(userRepo) {
    const action = this;
    return userRepo.users.find(user => {
      return user.id === action.userId
    })
  }

}

export default UserAction;
