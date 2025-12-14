import { useState, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";

export default function Card({ card, onOpenPopup }) {
  console.log("Card object:", card);
  const currentUser = useContext(CurrentUserContext);

  const isLiked = card.likes
    ? card.likes.some((user) => user._id === currentUser._id)
    : false;

  const cardLikeButtonClassName = `card__button-like ${
    isLiked ? "card__button-like_active" : ""
  }`;

  const handleLikeClick = () => {
    console.log("Like toggled for card:", card._id);
  };

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
        <button className={cardLikeButtonClassName} onClick={handleLikeClick}>
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
