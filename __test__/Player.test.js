const Player = require("../lib/Player");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");
console.log(new Potion());

//1.希望玩家能够有一个name和三个号码属性：health，strength，和agility。让我们编写一个测试来检查这四件事是否存在。
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

//2. add getStats()
test("gets player's stats as an object", () => {
  const player = new Player("Dave");
  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
});

//3. gets inventory
test("gets inventory from player or returns false", () => {
  const player = new Player("Dave");
  expect(player.getInventory()).toEqual(expect.any(Array));
  //simulate an empty array yourself by setting player.inventory = [] before the next expect() runs.
  player.inventory = [];
  // the case of an empty inventory needing to return false
  expect(player.getInventory()).toEqual(false);
});

//4. gets player's health
test("gets player's health value", () => {
  const player = new Player("Dave");

  expect(player.getHealth()).toEqual(
    expect.stringContaining(player.health.toString())
  );
});

//5. if player is alive
test("checks if player is alive or not", () => {
  const player = new Player("Dave");
  expect(player.isAlive()).toBeTruthy();
  player.health = 0;
  expect(player.isAlive()).toBeFalsy();
});

//6. subtracts from player's health
test("subtracts from player's health", () => {
  const player = new Player("Dave");
  const oldHealth = player.health;
  player.reduceHealth(5);
  expect(player.health).toBe(oldHealth - 5);
  player.reduceHealth(99999);
  expect(player.health).toBe(0);
});

//7.gets player's attack value
test("gets player's attack value", () => {
  const player = new Player("Dave");
  player.strength = 10;
  expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

//8.adds a potion to the inventory
test("adds a potion to the inventory", () => {
  const player = new Player("Dave");
  const oldCount = player.inventory.length;
  player.addPotion(new Potion());
  expect(player.inventory.length).toBeGreaterThan(oldCount);
});

//9.
test("uses a potion from inventory", () => {
  const player = new Player("Dave");
  player.inventory = [new Potion(), new Potion(), new Potion()];
  const oldCount = player.inventory.length;
  player.usePotion(1);
  expect(player.inventory.length).toBeLessThan(oldCount);
});
