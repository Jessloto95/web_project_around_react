export default function EditAvatar(){
    return(
        <form class="popup__content" id="formEditAvatar" novalidate>
              <h2 class="popup__title">Cambiar foto de perfil</h2>
              <fieldset class="popup__form">
                <input
                type="url"
                class="popup__input popup__input_hobbie popup__input_type_error"
                placeholder="Enlace a la nueva imagen"
                id="avatarLink"
                name="avatar"
                required 
                />
                <span
                id="avatarLink-error"
                class="popup__input-error popup__error_visible">
              </span>
              </fieldset>
              <fieldset class="popup__form">
                <button class="popup__button popup__button_save" disabled>Guardar</button>
              </fieldset>
            </form>
    )
}