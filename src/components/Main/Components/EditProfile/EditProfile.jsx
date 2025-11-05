export default function EditProfile(){
    return(
        <form class="popup__content" id="formEdit" novalidate>
            <h2 class="popup__title">Editar perfil</h2>
            <fieldset class="popup__form">
              <input
                type="text"
                class="popup__input popup__input_name popup__input_type_error"
                placeholder="Nombre"
                minlength="2"
                maxlength="40"
                id="name"
                name="name"
                required
              />
              <span
                id="name-error"
                class="popup__input-error popup__error_visible"
              ></span>
              <input
                type="text"
                class="popup__input popup__input_hobbie popup__input_type_error"
                placeholder="Acerca de mi"
                minlength="2"
                maxlength="200"
                name="about"
                id="about"
                required
              />
              <span
                id="about-error"
                class="popup__input-error popup__error_visible"
              ></span>
            </fieldset>
            <fieldset class="popup__form">
              <button class="popup__button popup__button_save" disabled>
                Guardar
              </button>
            </fieldset>
          </form>
    )
}