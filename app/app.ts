function startGame() {

    const playerName: String = "Audery";
    logPlayer(playerName)

    const messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game'; 
}

function logPlayer(name){
    console.log(`New Game Starting for Player: ${name}`);
}
document.getElementById('startGame')!.addEventListener('click', startGame);
