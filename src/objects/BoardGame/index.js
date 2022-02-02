import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js";

function BoardGame(amountCards) {
    const hideCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove('-active'));
    }

    const swapPlayer = () => {
        const $playerTurn = document.querySelector('.player-turn');
        const currentPlayer = $playerTurn.getAttribute('data-currentplayer');
        $playerTurn.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
    }
  window.boardGame = {};
  window.boardGame.handleClick = () => {
      const $boardGame = document.querySelector('.board-game');
      const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');

      if ($cardsActive.length === 2) {
          setTimeout(() => {
            hideCards($cardsActive)
            swapPlayer()
          }, 1000);

      }
  }
  const CardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
  const $htmlCards = CardsList.join('');

  return `
        <section class="board-game" onClick="boardGame.handleClick()">
            ${$htmlCards}
        </section>
    `;
}

export default BoardGame;
