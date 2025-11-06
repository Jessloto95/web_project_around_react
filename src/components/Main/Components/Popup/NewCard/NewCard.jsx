export default function NewCard() {
  return (
    <form className="popup__content popup__form-add" id="submit_card">
      <fieldset className="popup__form">
        <input
          type="text"
          className="popup__input popup__input_name popup__input_type_error"
          id="inputNamePlace"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
          name="title"
        />
        <span
          id="inputNamePlace-error"
          className="popup__input-error popup__error_visible"
        ></span>
        <input
          type="url"
          className="popup__input popup__input_hobbie popup__input_type_error"
          id="inputImagePlace"
          placeholder="Enlace a la imagen"
          required
          name="url"
        />
        <span
          id="inputImagePlace-error"
          className="popup__input-error popup__error_visible"
        ></span>
      </fieldset>
      <fieldset className="popup__form">
        <button
          type="submit"
          className="popup__button popup__button_save popup__button_disabled"
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
