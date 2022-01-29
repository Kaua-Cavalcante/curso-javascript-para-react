import "./style.css";
import PlayerTurn from "../../components/PlayerTurn";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import PlayerVersus from "../../components/PlayerVersus";

function ScoreBoard() {
  return `
  ${PlayerTurn()}
        <header class="score-board">  
        
            <div class="score-container">
                ${PlayerName("Player1")} ${PlayerScore(1)}
            </div>
            ${PlayerVersus()}
            <div class="score-container -score-container-player2">
                ${PlayerName("Player2")} ${PlayerScore(2)}
            </div>
        </header>
    `;
}

export default ScoreBoard;
