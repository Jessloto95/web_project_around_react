export default function Card(props) {
  const { name, link, isLiked } = props.card;
  return (
    <div className="card__content">
      <img
        className="card__photo"
        id="imagePopup"
        src={link}
        alt="valle-yosemite"
      />
      <button className="card__button-delete" id="deleteCard"></button>
      <div className="card__info">
        <p className="card__photo-name">{name}</p>
        <button className="card__button-like">
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
