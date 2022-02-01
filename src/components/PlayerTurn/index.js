import './style.css';

function PlayerTurn(currentPlayer = 1) {
    return `
            <img class="player-turn" data-currentPlayer="${currentPlayer}" src="images/arrow-down.svg" alt="Seta para baixo">
    `;
}

export default PlayerTurn;