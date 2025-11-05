export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const {title, children} = props;
  return (
    <div className="popup">
        <div className="popup__content">
            <button className="popup__close" type="button">
            &#x1F7A9;
            </button>
            <h2 className="popup__title">{title}</h2>
            {children}
        </div>
      </div>
  )
}