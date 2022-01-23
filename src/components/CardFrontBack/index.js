import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  window.cardFrontBack = {};
  window.cardFrontBack.isActive = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest(".card-front-back");

    $cardFrontBack.classList.toggle("-active");
  };

  return `
        <article class="card-front-back" onclick="cardFrontBack.isActive(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("javascript", "Logo do Javascript")}
            </div>
        </article>
    `;
}

export default CardFrontBack;
