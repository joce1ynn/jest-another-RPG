const Potion = require("../lib/Potion.js");

test("creates a health potion object", () => {
  const potion = new Potion("health");
  //new -- create a new object is a constructor function
  // not use arrow functions as constructor functions.
  // Arrow functions change the meaning of the keyword this,
  // which is a core piece of constructor functions.
  expect(potion.name).toBe("health");
  expect(potion.value).toEqual(expect.any(Number));
});

test("creates a random potion object", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
