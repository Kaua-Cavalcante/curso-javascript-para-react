import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js";

function BoardGame(amountCards) {
  const CardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
  const $htmlCards = CardsList.join('');

  return `
        <section class="board-game">
            ${$htmlCards}
        </section>
    `;
}

export default BoardGame;
