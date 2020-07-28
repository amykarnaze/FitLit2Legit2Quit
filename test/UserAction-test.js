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
  // describe('action', function () {
  //   it('should update SOMETHING over all time', function() {
  //     expect(user1.ouncesAverage).to.equal(83);
  //   })
  //   // it('should add the date and amount to the object record', function() {
  //   //   expect(user1.ouncesRecord).to.deep.equal([{"2019/06/15": 37}])
  //   //   expect(user2.ouncesRecord.length).to.equal(2)
  //   // })
  // });
})
