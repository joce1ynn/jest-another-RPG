module.exports = function () {
  this.name = "health";
  this.value = 20;
};

// if a player creates a potion, how do we isolate the test?
// That's where mocks come into play.
// Mocks allow us to fake assumed data, which allows the test at hand to focus only on the logic it cares about.
