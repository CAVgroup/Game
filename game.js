let health = 100;
let hunger = 50;
let inventory = {
  food: 0,
  wood: 0,
  stone: 0,
  water: 0,
  medkits: 0
};

let language = 'en';
let dataSaverEnabled = false;

const translations = {
  en: {
    health: "Health",
    hunger: "Hunger",
    food: "Food",
    wood: "Wood",
    stone: "Stone",
    water: "Water",
    medkits: "Medkits",
    actions: {
      findFood: "Find Food 🍞",
      eatFood: "Eat Food 🍽️",
      mine: "Mine ⛏️",
      chopWood: "Chop Wood 🌲",
      explore: "Explore 🧭",
      drinkWater: "Drink Water 💧",
      rest: "Rest 🛏️"
    },
    settings: {
      language: "Language",
      dataSaver: "Data Saver"
    },
    crafting: "Craft Medkit 💊",
    noFood: "You have no food in your inventory!",
    fullHunger: "You are already full!",
    craftedMedkit: "You crafted a Medkit!",
    noMaterials: "You don't have enough materials to craft a Medkit."
  },
  es: {
    health: "Salud",
    hunger: "Hambre",
    food: "Comida",
    wood: "Madera",
    stone: "Piedra",
    water: "Agua",
    medkits: "Botiquines",
    actions: {
      findFood: "Encontrar Comida 🍞",
      eatFood: "Comer Comida 🍽️",
      mine: "Minar ⛏️",
      chopWood: "Cortar Madera 🌲",
      explore: "Explorar 🧭",
      drinkWater: "Beber Agua 💧",
      rest: "Descansar 🛏️"
    },
    settings: {
      language: "Idioma",
      dataSaver: "Ahorro de Datos"
    },
    crafting: "Fabricar Botiquín 💊",
    noFood: "¡No tienes comida en tu inventario!",
    fullHunger: "¡Ya estás lleno!",
    craftedMedkit: "¡Has fabricado un botiquín!",
    noMaterials: "No tienes suficientes materiales para fabricar un botiquín."
  },
  fr: {
    health: "Santé",
    hunger: "Faim",
    food: "Nourriture",
    wood: "Bois",
    stone: "Pierre",
    water: "Eau",
    medkits: "Trousse de premiers secours",
    actions: {
      findFood: "Trouver de la nourriture 🍞",
      eatFood: "Manger 🍽️",
      mine: "Miner ⛏️",
      chopWood: "Couper du bois 🌲",
      explore: "Explorer 🧭",
      drinkWater: "Boire de l'eau 💧",
      rest: "Se reposer 🛏️"
    },
    settings: {
      language: "Langue",
      dataSaver: "Économie de données"
    },
    crafting: "Fabriquer une trousse de premiers secours 💊",
    noFood: "Vous n'avez pas de nourriture dans votre inventaire!",
    fullHunger: "Vous êtes déjà plein!",
    craftedMedkit: "Vous avez fabriqué une trousse de premiers secours!",
    noMaterials: "Vous n'avez pas assez de matériaux pour fabriquer une trousse de premiers secours."
  }
};

function updateStatus() {
  document.getElementById('health').innerText = health;
  document.getElementById('hunger').innerText = hunger;
  document.getElementById('foodCount').innerText = `Food: ${inventory.food}`;
  document.getElementById('woodCount').innerText = `Wood: ${inventory.wood}`;
  document.getElementById('stoneCount').innerText = `Stone: ${inventory.stone}`;
  document.getElementById('waterCount').innerText = `Water: ${inventory.water}`;
  document.getElementById('medkitsCount').innerText = `Medkits: ${inventory.medkits}`;
}

function changeLanguage() {
  language = document.getElementById('language').value;
  applyTranslations();
}

function toggleSettings() {
  const settings = document.getElementById('settings');
  settings.style.display = settings.style.display === 'none' ? 'block' : 'none';
}

function applyTranslations() {
  document.getElementById('healthLabel').innerText = translations[language].health;
  document.getElementById('hungerLabel').innerText = translations[language].hunger;
  document.getElementById('actions').querySelectorAll('button')[0].innerText = translations[language].actions.findFood;
  document.getElementById('actions').querySelectorAll('button')[1].innerText = translations[language].actions.eatFood;
  document.getElementById('actions').querySelectorAll('button')[2].innerText = translations[language].actions.mine;
  document.getElementById('actions').querySelectorAll('button')[3].innerText = translations[language].actions.chopWood;
  document.getElementById('actions').querySelectorAll('button')[4].innerText = translations[language].actions.explore;
  document.getElementById('actions').querySelectorAll('button')[5].innerText = translations[language].actions.drinkWater;
  document.getElementById('actions').querySelectorAll('button')[6].innerText = translations[language].actions.rest;
  document.getElementById('crafting').querySelector('button').innerText = translations[language].crafting;
  document.getElementById('settings').querySelector('label').innerText = translations[language].settings.language;
  document.getElementById('settings').querySelectorAll('label')[1].innerText = translations[language].settings.dataSaver;
}

function toggleDataSaver() {
  dataSaverEnabled = document.getElementById('dataSaver').checked;
  if (dataSaverEnabled) {
    document.getElementById('output').style.display = 'none';
  } else {
    document.getElementById('output').style.display = 'block';
  }
}

function findFood() {
  inventory.food += 1;
  updateStatus();
  alert(translations[language].actions.findFood);
}

function eatFood() {
  if (inventory.food > 0) {
    inventory.food -= 1;
    hunger = Math.min(hunger + 20, 100);
    health = Math.min(health + 10, 100);  // Regenerate health when eating
    updateStatus();
    alert(translations[language].actions.eatFood);
  } else {
    alert(translations[language].noFood);
  }
}

function mine() {
  inventory.wood += 1;
  inventory.stone += 1;
  updateStatus();
  alert(translations[language].actions.mine);
}

function chopWood() {
  inventory.wood += 1;
  updateStatus();
  alert(translations[language].actions.chopWood);
}

function explore() {
  inventory.stone += 1;
  inventory.wood += 1;
  updateStatus();
  alert(translations[language].actions.explore);
}

function drinkWater() {
  if (inventory.water > 0) {
    inventory.water -= 1;
    health = Math.min(health + 5, 100);
    updateStatus();
    alert(translations[language].actions.drinkWater);
  } else {
    alert("No water in your inventory! 💧");
  }
}

function rest() {
  hunger = Math.max(hunger - 10, 0);
  updateStatus();
  alert(translations[language].actions.rest);
}

function craftItem() {
  if (inventory.wood >= 2 && inventory.stone >= 2) {
    inventory.wood -= 2;
    inventory.stone -= 2;
    inventory.medkits += 1;
    updateStatus();
    alert(translations[language].craftedMedkit);
  } else {
    alert(translations[language].noMaterials);
  }
}

applyTranslations();  // Initialize the game with default language
updateStatus();  // Initialize game stats
