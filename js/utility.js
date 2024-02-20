function addHiddenClass(elementId) {
  const home = document.getElementById(elementId);
  home.classList.add("hidden");
}

function removeHiddenClass(elementId) {
  const playGames = document.getElementById(elementId);
  playGames.classList.remove("hidden");
}

function addBackgroundColor(elementId) {
  const keyboard = document.getElementById(elementId);
  keyboard.classList.add("bg-orange-400");
}

function removeBackgroundColor(elementId) {
  const keyboard = document.getElementById(elementId);
  keyboard.classList.remove("bg-orange-400");
}

function getParsInValueById(elementId) {
  const elementValue = document.getElementById(elementId);
  const elementText = elementValue.innerText;
  const finalInValue = parseInt(elementText);
  return finalInValue;
}

function getValuById(elementId) {
  const elementValue = document.getElementById(elementId);
  const elementText = elementValue.innerText;
  return elementText;
}
function setValueById(elementId, value) {
  const elementValue = document.getElementById(elementId);
  elementValue.innerText = value;
}
