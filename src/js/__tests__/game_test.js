import Game from '../Game';

test('testing  new instance of class Game creation', () => {
  const expected = {
    goblin: 'goblin.png',
    areaSize: 4,
  };

  const result = new Game('goblin.png', 4);
  expect(result).toEqual(expected);
});

