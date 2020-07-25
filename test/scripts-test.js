const chai = require('chai')
const expect = chai.expect
const spies = require('chai-spies');
import '../src/singleDomFunction';
chai.use(spies);

describe('domTestTest', function() {
  beforeEach(() => {
    global.document = {};
    chai.spy.on(document, ['querySelector'], () => {
      return { innerText: ''};
    })
  })
  it('should run the stupid test', () => {
    expect(true).to.equal(true);
  })
})
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
