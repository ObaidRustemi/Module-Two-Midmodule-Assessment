let diceArray = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];

const numOfDiceInput = document.querySelector("#numOfDiceInput");
const rollDiceButton = document.querySelector("#rollDiceButton");
const diceInputForm = document.querySelector("#diceInputForm");
const diceP = document.querySelector("#dice-para");
const sumP = document.querySelector("#sum-para")
const historyUL = document.querySelector("#historyUL")

diceInputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numOfRolls = numOfDiceInput.value;
  
  let diceString = "";
  let currentDie = "";
  let diceSum = 0;

  for (let i = 0; i < numOfRolls; i++) {
    currentDie = diceArray[Math.floor(Math.random() * diceArray.length)];

    if (currentDie === "&#9856") {
      diceSum += 1;
    } else if (currentDie === "&#9857") {
      diceSum += 2;
    } else if (currentDie === "&#9858") {
      diceSum += 3;
    } else if (currentDie === "&#9859") {
      diceSum += 4;
    } else if (currentDie === "&#9860") {
      diceSum += 5;
    } else if (currentDie === "&#9861") {
      diceSum += 6;
    }
    diceString+=currentDie;
  }
  
  let sumTemp = diceSum;
  diceP.innerHTML = `${diceString}`;
  sumP.innerHTML = ` Sum = ${diceSum}`

  const newRollEntry = document.createElement("li")
 
  newRollEntry.innerHTML = `${diceP.innerHTML} = ${sumTemp}`
  historyUL.appendChild(newRollEntry);

});
