let health = 100;
let hunger = 50;
let inventory = {
  food: 0,
  wood: 0,
  stone: 0,
  medkits: 0
};

function updateStatus() {
  document.getElementById('health').innerText = health;
  document.getElementById('hunger').innerText = hunger;
  document.getElementById('foodCount').innerText = `Food: ${inventory.food}`;
  document.getElementById('woodCount').innerText = `Wood: ${inventory.wood}`;
  document.getElementById('stoneCount').innerText = `Stone: ${inventory.stone}`;
  document.getElementById('medkitsCount').innerText = `Medkits: ${inventory.medkits}`;
}

function findFood() {
  inventory.food += 1;
  updateStatus();
  alert("You found some food! 🍞");
}

function eatFood() {
  if (inventory.food > 0 && hunger < 100) {
    inventory.food -= 1;
    hunger = Math.min(hunger + 20, 100);
    updateStatus();
    alert("You ate some food! 🍽️");
  } else if (inventory.food === 0) {
    alert("You have no food in your inventory! 🍽️");
  } else {
    alert("You are already full! 😋");
  }
}

function mine() {
  inventory.wood += 1;
  inventory.stone += 1;
  updateStatus();
  alert("You mined some resources! ⛏️");
}

function heal() {
  if (inventory.medkits > 0 && health < 100) {
    inventory.medkits -= 1;
    health = 100;
    updateStatus();
    alert("You used a medkit and healed to full health! ❤️");
  } else if (inventory.medkits === 0) {
    alert("You have no medkits to heal with! 💊");
  } else {
    alert("You are already at full health! ❤️");
  }
}

function craftItem() {
  if (inventory.wood >= 2 && inventory.stone >= 2) {
    inventory.wood -= 2;
    inventory.stone -= 2;
    inventory.medkits += 1;
    updateStatus();
    document.getElementById('craftingMessage').innerText = "You crafted a Medkit! 💊";
  } else {
    document.getElementById('craftingMessage').innerText = "You don't have enough materials to craft a Medkit. 🛠️";
  }
}

updateStatus();
