import "./style.css";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import PlayerVersus from "../../components/PlayerVersus";

function ScoreBoard() {
  return `
        <header class="score-board">  
            <div class="score-container">
                ${PlayerName("Player1")} ${PlayerScore()}
            </div>
            ${PlayerVersus()}
            <div class="score-container -score-container-player2">
                ${PlayerName("Player2")} ${PlayerScore()}
            </div>
        </header>
    `;
}

export default ScoreBoard;
