// setTimeout(function () {
//   const userInput = prompt(
//     "Welcome to Space Battle! - open the console on this page to play the game."
//   );
// }, 1000);

// console.log(`Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger,
//   on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them
//   with your lasers. There are six alien ships. The aliens' weakness is that they are too logical
//   and attack one at a time: they will wait to see the outcome of a battle before deploying another
//   alien ship. Your strength is that you have the initiative and get to attack first. However, you
//   do not have targeting lasers and can only attack the aliens in order. After you have destroyed a
//   ship, you have the option to make a hasty retreat.`);

// Give the User Instructions on how to play the game.
const genHull = () => Math.floor(Math.random() * 4) + 3;
const genFirePower = () => Math.floor(Math.random() * 3) + 2;
const genAccuracy = () => (Math.floor(Math.random() * 3) + 6) / 10;

class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  attack(enemy) {
    console.log(enemy);
    if (this.accuracy < enemy.accuracy) {
      this.hull -= enemy.firepower;
      console.log(`You missed!!!!`, this.hull);
    } else if (this.accuracy === enemy.accuracy) {
      console.log("try Again", this.hull);
    } else {
      enemy.hull -= this.firepower;
      console.log("Hit", this.hull);
    }
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



firepower - between 2 and 4 

accuracy - between .6 and .8
*/

const generateEnemies = (numEnemies) => {
  let alienShipArray = [];
  for (i = 1; i <= numEnemies; i++) {
    alienShipArray.push(
      new Ship("Alien Ship #" + i, genHull(), genFirePower(), genAccuracy())
    );
  }
  return alienShipArray;
};

const selectRandomEnemy = (enemies) => {
  return enemies[Math.floor(Math.random() * enemies.length)];
};

let randomEnemy = {};

// Call a random Alien Ship to Battle

//   Player 1 Attributes

//   Player 2 Attributes

const displayPlayer = (player) => {
  document.querySelector("#nameBox1").innerHTML = player.name;
  document.querySelector("#p1Hull").innerHTML = player.hull;
  document.querySelector("#p1FirePower").innerHTML = player.firepower;
  document.querySelector("#p1Accuracy").innerHTML = player.accuracy;
};

const displayEnemy = (enemy = {}) => {
  document.querySelector("#nameBox2").innerHTML =
    enemy.name || "Enemy Approaches";
  document.querySelector("#p2Hull").innerHTML = enemy.hull || 0;
  document.querySelector("#p2FirePower").innerHTML = enemy.firepower || 0;
  document.querySelector("#p2Accuracy").innerHTML = enemy.accuracy || 0;
};

let gameOver = false;

displayPlayer(ussSchwarzenegger);
// displayEnemy();
setTimeout(function () {
  while (!gameOver) {
    const enemies = generateEnemies(6);

    let randomEnemy = selectRandomEnemy(enemies);
    displayEnemy(randomEnemy);

    const userInput = prompt("Would you like to attack, or retreat?");

    if ("retreat" === userInput) {
      gameOver = true;
      alert("Game Over!");
    } else if (userInput === "attack") {
      ussSchwarzenegger.attack(randomEnemy);
    }
  }
}, 3000);

// if (ussSchwarzenegger.accuracy < alienArray.accuracy) {
//   console.log("You have been hit!");
// }

// const battle = () => {};
