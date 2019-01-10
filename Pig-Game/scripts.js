// declare global vars
var scores, roundScores, activePlayer, gamePlaying, lastDice;
// call intialised function
init();
// on click of btn roll
document.querySelector(".btn-roll").addEventListener("click", function() {
  // if game playing is true
  if (gamePlaying) {
    // 1. random number
    var dice = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);

    //2. Display the dice img based on random number
    var diceDOM = document.querySelector(".dice");
    var diceDOM2 = document.querySelector(".dice2");

    diceDOM.style.display = "block";
    diceDOM2.style.display = "block";

    diceDOM.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-" +
      dice +
      ".png";
    diceDOM2.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-" +
      dice2 +
      ".png";

    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1 && dice2 !== 1) {
      // get the round score from dice rolls
      roundScore += dice + dice2;
      // update the current players score with round score, based on active player
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
      // check if last dice roll is equal to current dice roll
    } else {
      // call next player function
      nextPlayer();
    }
    // set last dice roll to dice roll
    lastDice = dice;
  }
});
