// setTimeout(function () {
//   prompt(
//     "Welcome to Space Battle! - open the console on this page to play the game."
//   );
// }, 1000);

// Give the User Instructions on how to play the game.

class Ship {
  constructor(name, hull, firepower) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
}

/*
The USS Schwarzenegger should have the following properties:
hull - 20

firepower - 5

accuracy - .7
*/

const ussSchwarzenegger = new Ship("ussSchwarzenegger", 20, 5, 0.7);

/*
The alien ships should each have the following ranged properties determined randomly: 

hull - between 3 and 6

firepower - between 2 and 4 

accuracy - between .6 and .8
*/
class AlienShip {
  constructor(name) {
    this.name = name;
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
}
// You could be battling six alien ships each with unique values.
const Alien1 = new AlienShip("Alien Ship #1");
const Alien2 = new AlienShip("Alien Ship #2");
const Alien3 = new AlienShip("Alien Ship #3");
const Alien4 = new AlienShip("Alien Ship #4");
const Alien5 = new AlienShip("Alien Ship #5");
const Alien6 = new AlienShip("Alien Ship #6");

// Call a random Alien Ship to Battle

let alienShipArray = [Alien1, Alien2, Alien3, Alien4, Alien5, Alien6];
let randomAlienShip =
  alienShipArray[Math.floor(Math.random() * alienShipArray.length)];

//   Player 1 Attributes

const player1 = (document.getElementById("nameBox1").innerHTML =
  ussSchwarzenegger.name);

const p1Hull = (document.getElementById("p1Hull").innerHTML =
  ussSchwarzenegger.hull);

const p1FirePower = (document.getElementById("p1FirePower").innerHTML =
  ussSchwarzenegger.firepower);

const p1Accuracy = (document.getElementById("p1Accuracy").innerHTML =
  ussSchwarzenegger.accuracy);

//   Player 2 Attributes

const player2 = (document.getElementById("nameBox2").innerHTML =
  randomAlienShip.name);

const p2Hull = (document.getElementById("p2Hull").innerHTML =
  randomAlienShip.hull);

const p2FirePower = (document.getElementById("p2FirePower").innerHTML =
  randomAlienShip.firepower);

const p2Accuracy = (document.getElementById("p2Accuracy").innerHTML =
  randomAlienShip.accuracy);

console.log(randomAlienShip);

console.log(ussSchwarzenegger);
