export default function ImagePopup({ card }) {
  return (
    <div className="popup__conteiner popup__conteiner_image">
      <img className="popup__image" src={card.link} alt={card.link} />
      <h3 className="popup__image-title">{card.name}</h3>
    </div>
  );
}
