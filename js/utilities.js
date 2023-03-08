// function getValue
const getValue = (id, isInputField) => {
  const element = document.getElementById(id);
  if (isInputField) {
    const value = parseInt(element.value);
    return value;
  } else {
    const value = element.innerText;
    return value;
  }
};

// function set value
const setValue = (id, value) => {
  const element = document.getElementById(id);
  element.innerText = value;
};

// function add players to selected five
const addSelectedPlayers = (playerNameID) => {
  const selectedPlayersOl = document.getElementById("selected-players");
  const playerName = getValue(playerNameID, false);

  // create a li
  const selectedPlayerli = document.createElement("li");
  selectedPlayerli.classList.add("ps-lg-2");
  selectedPlayerli.classList.add("mb-3");
  selectedPlayerli.classList.add("selected-player");
  selectedPlayerli.innerText = playerName;
  //   add player li to Ol
  selectedPlayersOl.appendChild(selectedPlayerli);
};

// function to check how many players selected
const selectedQuantity = () => {
  const selectedPlayers = document.querySelectorAll(".selected-player");
  return selectedPlayers.length;
};

// function to calculate player expenses
const calcPlayerExpense = () => {
  const playerQuantity = selectedQuantity();
  const perPlayerCost = getValue("per-player-input", true);
  const totalPlayerExpense = playerQuantity * perPlayerCost;
  setValue("player-expenses", totalPlayerExpense);
};

// function to calculate Total Expenses
const calcTotalExpense = () => {
  const playerExpenses = getValue("player-expenses", false);
  const managerCost = getValue("manager-cost-input", true);
  const coachCost = getValue("coach-cost-input", true);

  const totalExpenses = parseInt(playerExpenses) + managerCost + coachCost;
  setValue("total-expenses", totalExpenses);
};

// function to check invalid input
const isValidInput = (inputFieldID) => {
  const inputField = document.getElementById(inputFieldID);
  if (inputField.value == "") {
    return false;
  } else if (inputField.value <= 0) {
    return false;
  } else {
    return true;
  }
};
