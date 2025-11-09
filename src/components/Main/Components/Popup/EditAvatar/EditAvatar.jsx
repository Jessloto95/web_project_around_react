export default function EditAvatar() {
  return (
    <form className="popup__content" id="formEditAvatar" novalidate>
      <fieldset className="popup__form">
        <input
          type="url"
          className="popup__input popup__input_hobbie popup__input_type_error"
          placeholder="Enlace a la nueva imagen"
          id="avatarLink"
          name="avatar"
          required
        />
        <span
          id="avatarLink-error"
          className="popup__input-error popup__error_visible"
        ></span>
      </fieldset>
      <fieldset className="popup__form">
        <button className="popup__button popup__button_save" disabled>
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
