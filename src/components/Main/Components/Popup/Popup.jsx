export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children } = props;
  return (
    <div className="popup">
      <div
        className={`popup__conteiner ${!title ? "popup__conteiner_image" : ""}`}
      >
        <button
          className="popup__button popup__button_close"
          type="button"
          onClick={onClose}
        >
          &#x1F7A9;
        </button>
        {title ? (
          <div className="popup__content">
            {title && <h2 className="popup__title">{title}</h2>}
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
