// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name) {
  var arrayappendDriver = [];
  for (var i = 0; i < drivers.length; i++) {
    arrayappendDriver.push(drivers[i]);
  }
  console.log(arrayappendDriver.push(name));
}

function prependDriver(name) {
  var arrayappendDriver = [name];
  for (var i = 0; i < drivers.length; i++) {
    arrayappendDriver.push(drivers[i]);
  }
  return arrayappendDriver;
}

function removeLastDriver() {
  var arrayappendDriver = [];
  for (var i = 0; i < (drivers.length - 1); i++) {
    arrayappendDriver.push(drivers[i]);
  }
  return arrayappendDriver;
}

function removeFirstDriver() {
  var arrayappendDriver = [];
  for (var i = 1; i < drivers.length; i++) {
    arrayappendDriver.push(drivers[i]);
  }
  return arrayappendDriver;
}