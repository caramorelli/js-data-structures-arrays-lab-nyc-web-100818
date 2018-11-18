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
  return arrayappendDriver.push(name);
}

function prependDriver(name) {
  return drivers.unshift(name)
}

function removeLastDriver() {
   var arrayappendDriver = [];
  for (var i = 0; i < drivers.length; i++) {
    arrayappendDriver.push(drivers[i]);
  }
  return arrayappendDriver.push(name);
}

function removeFirstDriver() {
  var arrayappendDriver = [];
  for (var i = 1; i < drivers.length; i++) {
    arrayappendDriver.push(drivers[i]);
  }
  return arrayappendDriver.push(name);
}