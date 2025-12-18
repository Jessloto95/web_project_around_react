import { useState } from "react";

export default function NewCard({onAddPlaceSubmit}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlaceSubmit({name, link});// envia los datos a App
    setName("");//limpia los campos
    setLink("");
  }

  return (
    <form className="popup__content popup__form-add" id="submit_card" onSubmit={handleSubmit} noValidate>
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
          value={name}
          onChange={handleNameChange}
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
          value={link}
          onChange={handleLinkChange}
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
