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
    var ele = drivers[i];
    arrayappendDriver.push(ele);
  }
  return arrayappendDriver.push(name);
  
}

// function prependDriver(name) {
//   return drivers.unshift(name)
// }

// function removeLastDriver() {
//   return drivers.pop()
// }

// function removeFirstDriver() {
//   return drivers.shift()
// }