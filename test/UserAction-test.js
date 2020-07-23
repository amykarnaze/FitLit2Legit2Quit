import { expect } from 'chai';
import UserAction from '../src/UserAction';
import User from '../src/User';
import UserRepository from '../src/UserRepository';

describe('UserActions', function() {
  let user1;
  let user2;
  let userRepository;
  let userAction1;
  beforeEach(() => {
    user1 = new User({
      'id': 1,
      'name': 'Luisa Hane',
      'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      'email': 'Diana.Hayes1@hotmail.com',
      'strideLength': 4.3,
      'dailyStepGoal': 10000,
      'friends': [
        16,
        4,
        8
      ]
    });
    user2 = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 2000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    })
    userRepository = new UserRepository();
    userRepository.users.push(user1, user2);
    userAction1 = new UserAction({
        "userID": 1,
        "date": "2019/06/15",
      })
  });

  it('should be a function', function() {
    expect(UserAction).to.be.a('function');
  });
  it('should be an instance of hydrate', function() {
    expect(userAction1).to.be.an.instanceof(UserAction);
  });
  it('should have an id', function() {
    expect(userAction1.userId).to.equal(1);
  });
  it('should have a date', function() {
    expect(userAction1.date).to.equal('2019/06/15');
  });
})
