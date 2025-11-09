import { useState } from "react";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";

export default function Card({ card, onOpenPopup }) {
  const [isLiked, setIsLiked] = useState(false);
  function handleLikeClick() {
    setIsLiked(!isLiked);
  }
  console.log("Card data:", card);

  const imageComponent = { title: "", children: <ImagePopup card={card} /> };

  return (
    <div className="card__content">
      <img
        className="card__photo"
        id="imagePopup"
        src={card.link}
        alt={card.name}
        onClick={() => onOpenPopup(imageComponent)}
      />
      <button className="card__button-delete" id="deleteCard"></button>
      <div className="card__info">
        <p className="card__photo-name">{card.name}</p>
        <button
          className={`card__button-like ${
            isLiked ? "card__button-like_active" : ""
          }`}
          onClick={handleLikeClick}
        >
          <img
            className="card__button-like-image"
            src="./images/button_like.png"
            alt="Boton de like"
          />
        </button>
      </div>
    </div>
  );
}
