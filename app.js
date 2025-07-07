import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = { /* Your config from Firebase */ };
const app = initializeApp(firebaseConfig);
const db = getDatabase();

function createGame() {
  const gameCode = Math.random().toString(36).substring(2, 6).toUpperCase(); // Generates "A1B2"
  set(ref(db, `games/${gameCode}`), { players: [], isStarted: false });
  sessionStorage.setItem("gameCode", gameCode); // Save code for later
  window.location.href = "lobby.html"; // Go to lobby
}

function joinGame() {
  const gameCode = document.getElementById("gameCode").value.toUpperCase();
  onValue(ref(db, `games/${gameCode}`), (snapshot) => {
    if (snapshot.exists()) window.location.href = "lobby.html";
    else alert("Invalid code!");
  });
}
