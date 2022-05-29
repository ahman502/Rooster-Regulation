const assert = require('assert');       //importing the assert module
const Rooster = require('../index');          //importing the Rooster module

//testing Rooster object's methods
describe('Rooster', () => {
  
  //testing the rooster announceDawn function
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      
      //using the 4 phases of a test (teardown optional)
      //setup: define your expected result
      const expected = 'cock-a-doodle-doo!';
      
      //exercise: call the function under test
      const actual = Rooster.announceDawn();

      //verify: use an assert function to compare the expected and actual values
      assert.equal(actual, expected);
    });
  });
  
  //testing the rooster timeAtDawn function
  describe('.timeAtDawn', () => {
    //testing if the value is a valid value between 0 and 23
    it('returns its argument as a string', () => {
      const passedValue1 = Rooster.timeAtDawn(5);          //passing the value of 5 as an argument          
      assert.strictEqual(passedValue1, '5');              //comparing the passed value with the value of String 5 using assert
    });
    
    //if value is less than 0
    it('throws an error if passed a number less than 0', () => {
      assert.throws(() => {                       //the assert function throws a Range Error if value passed to timeAtDawn is -ive
        Rooster.timeAtDawn(-5);
        }, RangeError);
    });
    
    //if value is over 23
    it('throws an error if passed a number greater than 23', () => {
      assert.throws(() => {                    //the assert function throws a Range Error if value passed to timeAtDawn is over 23
        Rooster.timeAtDawn(27);
        }, RangeError);
    })
    
  });
      
});


