/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/
function startGame() {
    var playerName = "Audery";
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game';
}
function logPlayer(name) {
    console.log("New Game Starting for Player: " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdWx0aW1hdGgvLi9hcHAvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBUyxTQUFTO0lBRWQsSUFBTSxVQUFVLEdBQVcsUUFBUSxDQUFDO0lBQ3BDLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFFckIsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RCxlQUFnQixDQUFDLFNBQVMsR0FBRyx5Q0FBeUMsQ0FBQztBQUMzRSxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBSTtJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFpQyxJQUFNLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBQ0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuXG4gICAgY29uc3QgcGxheWVyTmFtZTogU3RyaW5nID0gXCJBdWRlcnlcIjtcbiAgICBsb2dQbGF5ZXIocGxheWVyTmFtZSlcblxuICAgIGNvbnN0IG1lc3NhZ2VzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlcycpO1xuICAgIG1lc3NhZ2VzRWxlbWVudCEuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8gTXVsdGlNYXRoISBTdGFydGluZyBuZXcgZ2FtZSc7IFxufVxuXG5mdW5jdGlvbiBsb2dQbGF5ZXIobmFtZSl7XG4gICAgY29uc29sZS5sb2coYE5ldyBHYW1lIFN0YXJ0aW5nIGZvciBQbGF5ZXI6ICR7bmFtZX1gKTtcbn1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEdhbWUnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==