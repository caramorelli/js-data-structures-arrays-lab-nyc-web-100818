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
  var new_array = [];
  for (var i = 0; i < array.length; i++) {
    var ele = drivers[i];
    new_array.push(ele);
  }
  return new_array.push(element);
  
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