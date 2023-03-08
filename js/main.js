//player1 click handler
document.getElementById("player-1-btn").addEventListener("click", () => {
  const alreadySelected = selectedQuantity();
  if (alreadySelected >= 5) {
    alert("You can Add maximum 5 players");
  } else {
    addSelectedPlayers("player-1-name");
    document.getElementById("player-1-btn").disabled = true;
  }
});

//player2 click handler
document.getElementById("player-2-btn").addEventListener("click", () => {
  const alreadySelected = selectedQuantity();
  if (alreadySelected >= 5) {
    alert("You can Add maximum 5 players");
  } else {
    addSelectedPlayers("player-2-name");
    document.getElementById("player-2-btn").disabled = true;
  }
});

//player3 click handler
document.getElementById("player-3-btn").addEventListener("click", () => {
  const alreadySelected = selectedQuantity();
  if (alreadySelected >= 5) {
    alert("You can Add maximum 5 players");
  } else {
    addSelectedPlayers("player-3-name");
    document.getElementById("player-3-btn").disabled = true;
  }
});

//player4 click handler
document.getElementById("player-4-btn").addEventListener("click", () => {
  const alreadySelected = selectedQuantity();
  if (alreadySelected >= 5) {
    alert("You can Add maximum 5 players");
  } else {
    addSelectedPlayers("player-4-name");
    document.getElementById("player-4-btn").disabled = true;
  }
});

//player5 click handler
document.getElementById("player-5-btn").addEventListener("click", () => {
  const alreadySelected = selectedQuantity();
  if (alreadySelected >= 5) {
    alert("You can Add maximum 5 players");
  } else {
    addSelectedPlayers("player-5-name");
    document.getElementById("player-5-btn").disabled = true;
  }
});

//player6 click handler
document.getElementById("player-6-btn").addEventListener("click", () => {
  const alreadySelected = selectedQuantity();
  if (alreadySelected >= 5) {
    alert("You can Add maximum 5 players");
  } else {
    addSelectedPlayers("player-6-name");
    document.getElementById("player-6-btn").disabled = true;
  }
});

//player7 click handler
document.getElementById("player-7-btn").addEventListener("click", () => {
  const alreadySelected = selectedQuantity();
  if (alreadySelected >= 5) {
    alert("You can Add maximum 5 players");
  } else {
    addSelectedPlayers("player-7-name");
    document.getElementById("player-7-btn").disabled = true;
  }
});

//player8 click handler
document.getElementById("player-8-btn").addEventListener("click", () => {
  const alreadySelected = selectedQuantity();
  if (alreadySelected >= 5) {
    alert("You can Add maximum 5 players");
  } else {
    addSelectedPlayers("player-8-name");
    document.getElementById("player-8-btn").disabled = true;
  }
});

//player9 click handler
document.getElementById("player-9-btn").addEventListener("click", () => {
  const alreadySelected = selectedQuantity();
  if (alreadySelected >= 5) {
    alert("You can Add maximum 5 players");
  } else {
    addSelectedPlayers("player-9-name");
    document.getElementById("player-9-btn").disabled = true;
  }
});

// Calculate player expenses click handler
document.getElementById("calculate-expense-btn").addEventListener("click", () => {
  const isValid = isValidInput("per-player-input");
  if (isValid) {
    calcPlayerExpense();
  } else {
    alert("Please Enter valid amount");
  }
});

// Calculate total expense click handler
document.getElementById("calculate-total-btn").addEventListener("click", () => {
  const isValidManager = isValidInput("manager-cost-input");
  const isValidCoach = isValidInput("coach-cost-input");
  if (isValidManager && isValidCoach) {
    calcTotalExpense();
  } else {
    alert("Please Enter valid amount");
  }
});
