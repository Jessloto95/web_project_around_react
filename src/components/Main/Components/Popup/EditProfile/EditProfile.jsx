export default function EditProfile() {
  return (
    <form className="popup__content" id="formEdit" novalidate>
      <fieldset className="popup__form">
        <input
          type="text"
          className="popup__input popup__input_name popup__input_type_error"
          placeholder="Nombre"
          minlength="2"
          maxlength="40"
          id="name"
          name="name"
          required
        />
        <span
          id="name-error"
          className="popup__input-error popup__error_visible"
        ></span>
        <input
          type="text"
          className="popup__input popup__input_hobbie popup__input_type_error"
          placeholder="Acerca de mi"
          minlength="2"
          maxlength="200"
          name="about"
          id="about"
          required
        />
        <span
          id="about-error"
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
