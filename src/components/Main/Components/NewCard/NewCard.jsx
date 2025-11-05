export default function NewCard() {
    return(
        <form class="popup__content popup__form-add" id="submit_card">
            <h2 class="popup__title">Nuevo Lugar</h2>
            <fieldset class="popup__form">
              <input
                type="text"
                class="popup__input popup__input_name popup__input_type_error"
                id="inputNamePlace"
                placeholder="Título"
                minlength="2"
                maxlength="30"
                required
                name="title"
              />
              <span
                id="inputNamePlace-error"
                class="popup__input-error popup__error_visible"
              ></span>
              <input
                type="url"
                class="popup__input popup__input_hobbie popup__input_type_error"
                id="inputImagePlace"
                placeholder="Enlace a la imagen"
                required
                name="url"
              />
              <span
                id="inputImagePlace-error"
                class="popup__input-error popup__error_visible"
              ></span>
            </fieldset>
            <fieldset class="popup__form">
              <button
                type="submit"
                class="popup__button popup__button_save popup__button_disabled"
              >
                Guardar
              </button>
            </fieldset>
          </form>
    );
}