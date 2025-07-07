function startGame() {
  const gameCode = sessionStorage.getItem("gameCode");
  const players = ["Player1", "Player2", "Player3"]; // Replace with real players
  const impostorCount = Math.floor(players.length / 3); // 1 impostor per 3 players
  
  // Shuffle and assign roles
  const shuffled = [...players].sort(() => 0.5 - Math.random());
  const roles = {};
  shuffled.forEach((player, i) => {
    roles[player] = i < impostorCount ? "IMPOSTOR" : "CREWMATE";
  });
  
  // Save roles to Firebase
  set(ref(db, `games/${gameCode}/roles`), roles);
  set(ref(db, `games/${gameCode}/isStarted`), true);
}
