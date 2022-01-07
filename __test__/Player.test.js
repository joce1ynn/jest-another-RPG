const Player = require("../lib/Player");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");
console.log(new Potion());

//们希望玩家能够有一个name和三个号码属性：health，strength，和agility。让我们编写一个测试来检查这四件事是否存在。
test("creates a player object", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

// add getStats()
test("gets player's stats as an object", () => {
  const player = new Player("Dave");

  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
});

// gets inventory
test("gets inventory from player or returns false", () => {
  const player = new Player("Dave");

  expect(player.getInventory()).toEqual(expect.any(Array));

  //simulate an empty array yourself by setting player.inventory = [] before the next expect() runs.
  player.inventory = [];

  // the case of an empty inventory needing to return false
  expect(player.getInventory()).toEqual(false);
});
