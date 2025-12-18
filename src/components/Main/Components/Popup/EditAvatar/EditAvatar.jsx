import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const {handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef(); //Crea la referencia

const handleSubmit = (e) => {
  e.preventDefault();

  //optener el valor directamente del DOM
   handleUpdateAvatar({
      avatar: avatarRef.current.value
    });
}

  return (
    <form className="popup__content" id="formEditAvatar" onSubmit={handleSubmit}>
      <fieldset className="popup__form">
        <input
        ref={avatarRef}
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
        <button className="popup__button popup__button_save" type="submit" >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
