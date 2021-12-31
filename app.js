setTimeout(function () {
  prompt(
    "Welcome to Space Battle! - open the console on this page to play the game."
  );
}, 2000);

// Give the User Instructions on how to play the game.

class Ship {
  constructor(hull, firepower, accuracy) {
    this._hull = hull;
    this._firepower = firepower;
    this._accuracy = accuracy;
  }
}

/*
The USS Schwarzenegger should have the following properties:
hull - 20

firepower - 5

accuracy - .7
*/

const ussSchwarzenegger = new Ship(20, 5, 0.7);

/*
The alien ships should each have the following ranged properties determined randomly: 

hull - between 3 and 6

firepower - between 2 and 4 

accuracy - between .6 and .8
*/

class RandomAlienShip {
  constructor() {
    this._hull = Math.floor(Math.random() * 6) + 3;
    this._firepower = Math.floor(Math.random() * 4) + 2;
    this._accuracy = Math.random() * 0.8;
  }
}

const Alien1 = new RandomAlienShip();
const Alien2 = new RandomAlienShip();
const Alien3 = new RandomAlienShip();
const Alien4 = new RandomAlienShip();
const Alien5 = new RandomAlienShip();
const Alien6 = new RandomAlienShip();

/*

You could be battling six alien ships each with unique values.

Example use of accuracy to determine a hit: example=>


 if (Math.random() < alien[0].accuracy) {
   console.log("You have been hit!");
 } 

*/
