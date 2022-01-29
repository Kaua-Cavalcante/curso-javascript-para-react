import  './style.css';

function PlayerScore(points = 0) {
    return `
        <ol data-points="${points}" class="player-score">
            <li class="score"></li>
            <li class="score"></li>
            <li class="score"></li>
        </ol>
    `;
}

export default PlayerScore;