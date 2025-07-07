let emergencyCalled = false;

function callEmergency() {
  emergencyCalled = true;
  // Show voting screen
  document.getElementById("votingScreen").style.display = "block";
}

function vote(player) {
  // Send vote to Firebase
  set(ref(db, `games/${gameCode}/votes/${player}`), "votedOut");
}
