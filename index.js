// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.shift(name)
}

function destructivelyRemoveFirstDriver() {
  drivers = drivers.shift;
  // return drivers;
}

function appendDriver(name) {
  
}