let homeScoreEl = document.querySelector(".home");
let guestScoreEl = document.querySelector(".guest");

function add1PointToHome() {
  homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + 1;
}
function add2PointsToHome() {
  homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + 2;
}
function add3PointsToHome() {
  homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + 3;
}
function add1PointToGuest() {
  guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + 1;
}
function add2PointsToGuest() {
  guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + 2;
}
function add3PointsToGuest() {
  guestScoreEl.textContent = parseInt(guestScoreEl.textContent) + 3;
}
