const {playRound, computerPlay, capitalize} = require("../Rock-Paper-Scissorsclea");

describe("capitalize", () => {
    test("capitalises first letter of a word", () => {
    expect(capitalize('rock')).toBe('Rock');
    expect(capitalize('paper')).toBe('Paper');
    expect(capitalize('scissors')).toBe('Scissors');
    });
});

describe('computerPlay()', () => {
    test('returns a valid choice', () => {

      const result = computerPlay();

      const choices = ['rock', 'paper', 'scissors'];

      expect(choices).toContain(result);
    });
  });