const chai = require('chai')
const expect = chai.expect
const spies = require('chai-spies');
import '../src/singleDomFunction';
import domTestTest from '../src/singleDomFunction';
chai.use(spies);

describe('domTestTest', function() {
  beforeEach(() => {
    global.document = {};
    chai.spy.on(document, ['querySelector'], () => {
      return { innerText: ''};
    })
  })
  it('should change inner text of stepsTrendingButton', () => {
    let domTest = new domTestTest();

    domTest.domTestTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with('.steps-trending-button');
  })
  it("should change inner text of dropdownEmail", () => {
    let domTest = new domTestTest();

    domTest.dropdownEmailTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#dropdown-email");
  });
  it("should change inner text of dropdownFriendsStepContainer", () => {
    let domTest = new domTestTest();

    domTest.friendsStepContainerTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#dropdown-friends-steps-container");
  });
  it("should change inner text of dropdownGoal", () => {
    let domTest = new domTestTest();

    domTest.dropdownGoalTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#dropdown-goal");
  });
  it("should change inner text of dropdownName", () => {
    let domTest = new domTestTest();

    domTest.dropdownNameTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#dropdown-name");
  });
  it("should change inner text of headerName", () => {
    let domTest = new domTestTest();

    domTest.headerNameTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#header-name");
  });
  it("should change inner text of hydrationCalendarCard", () => {
    let domTest = new domTestTest();

    domTest.hydrationCalendarCardTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#hydration-calendar-card");
  });
  it("should change inner text of hydrationCalendarCard", () => {
    let domTest = new domTestTest();

    domTest.hydrationAllUsersOuncesTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with(
      "#hydration-all-users-ounces-today");
  });
  it("should change inner text of hydrationAllUsersCard", () => {
    let domTest = new domTestTest();

    domTest.hydrationAllUsersCardTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with(
      "#hydration-all-users-card");
  });
});

// describe('loadDropdown', () => {
//   beforeEach(() => {
//     global.document = {};
//     const windowRef = global.window;
//     global.window = {document: {querySelector: () => null}};
//     chai.spy.on(document, ['querySelector'],
//     () => {
//       return { innerText: '' }
//     });
//   })
//   it('should be able to work', () => {
//     expect(true).to.equal(true);
//     })
// })


// const chai = require('chai')
// const spies = require('chai-spies');
// chai.use(spies);
//
//
// describe('hiding and showing a card', ()=> {
//   beforeEach(() => {
//     global.document = {};
//     const windowRef = global.window;
//     global.window = {document: {querySelector: () => null}};
//     const flipCard = require('../src/scripts')
//     chai.spy.on(document, ['querySelector', 'flipCard'], () => {innerText: ''})
//     // chai.spy.on(flipCard);
//     global.window = windowRef;
//   });
//   it('can hide and show a card', () => {
//     expect(true).to.equal(true);
//   })
// });
