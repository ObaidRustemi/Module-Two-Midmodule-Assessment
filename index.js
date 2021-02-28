let diceArray = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];

const numOfDiceInput = document.querySelector("#numOfDiceInput");
const rollDiceButton = document.querySelector("#rollDiceButton");
const diceInputForm = document.querySelector("#diceInputForm");
const diceP = document.querySelector("#dice_para");

diceInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  

  const numOfRolls = numOfDiceInput.value;
  let diceString = "";

  for (let i = 0; i < numOfRolls; i++) {
    diceString += diceArray[Math.floor(Math.random() * diceArray.length)];
  }
  debugger;
  diceP.innerHTML = `${diceString}`;
});
