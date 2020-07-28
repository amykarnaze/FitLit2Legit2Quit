const chai = require('chai')
const expect = chai.expect
const spies = require('chai-spies');
import '../src/singleDomFunction';
import DomTestTest from '../src/singleDomFunction';
chai.use(spies);

describe('DomTestTest', function() {
  beforeEach(() => {
    global.document = {};
    chai.spy.on(document, ['querySelector', 'querySelectorAll'], () => {
      return { innerText: ''};
    })
  })
  it('should change inner text of stepsTrendingButton', () => {
    let domTest = new DomTestTest();

    domTest.domTestTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with('.steps-trending-button');
  })
  it("should change inner text of dropdownEmail", () => {
    let domTest = new DomTestTest();

    domTest.dropdownEmailTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#dropdown-email");
  });
  it("should change inner text of dropdownFriendsStepContainer", () => {
    let domTest = new DomTestTest();

    domTest.friendsStepContainerTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#dropdown-friends-steps-container");
  });
  it("should change inner text of dropdownGoal", () => {
    let domTest = new DomTestTest();

    domTest.dropdownGoalTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#dropdown-goal");
  });
  it("should change inner text of dropdownName", () => {
    let domTest = new DomTestTest();

    domTest.dropdownNameTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#dropdown-name");
  });
  it("should change inner text of headerName", () => {
    let domTest = new DomTestTest();

    domTest.headerNameTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#header-name");
  });
  it("should change inner text of hydrationCalendarCard", () => {
    let domTest = new DomTestTest();

    domTest.hydrationCalendarCardTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with("#hydration-calendar-card");
  });
  it("should change inner text of hydrationCalendarCard", () => {
    let domTest = new DomTestTest();

    domTest.hydrationAllUsersOuncesTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with(
      "#hydration-all-users-ounces-today");
  });
  it("should change inner text of hydrationAllUsersCard", () => {
    let domTest = new DomTestTest();

    domTest.hydrationAllUsersCardTest();

    expect(document.querySelector).to.have.been.called(1);
    expect(document.querySelector).to.have.been.called.with(
      "#hydration-all-users-card");
  });

  it("should change the inner text of all elements in the nodelist for dailyOz", () => {
    let domTest = new DomTestTest();

    domTest.dailyOzCreaterTest();

    expect(document.querySelectorAll).to.have.been.called(1);
    expect(document.querySelectorAll).to.have.been.called.with('.daily-oz');
  });

  it("should change the inner text of all elements in the nodelist for friendsStepsParagraphs", () => {
    let domTest = new DomTestTest();

    domTest.displayFriendsStepsColorTest();

    expect(document.querySelectorAll).to.have.been.called(1);
    expect(document.querySelectorAll).to.have.been.called.with('.friends-steps');
  });
});
