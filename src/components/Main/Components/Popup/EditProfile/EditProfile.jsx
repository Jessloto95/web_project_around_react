import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  //Estados para cada campo de formulario
  const [name, setName] = useState(currentUser?.name);
  const [description, serDescription] = useState(currentUser?.about);

  //Controladores para actualizar el estado
  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
     console.log("hola")
    serDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    handleUpdateUser({ name, about: description }); // Actualiza la información del usuario
  }

  return (
    <form className="popup__content" id="formEdit" novalidate onSubmit={handleSubmit}>
      <fieldset className="popup__form">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
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
        <button className="popup__button popup__button_save"  type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
