import { useState } from "react";
import profileImage from "../../images/Jacques-Cousteau.jpg";
import buttonEdit from "../../images/button_edit.png";
import buttonAdd from "../../images/button_add.png";
import Popup from "./Components/Popup/Popup";
import NewCard from "./Components/Popup/NewCard/NewCard";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };

  function handleOpenPopup(popup) {
    console.log("Prueba", popup);
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person-conteiner">
          <img class="profile__person" src={profileImage} alt="profile-image" />
        </div>
        <div class="profile__content">
          <div class="profile__paragraph">
            <p class="profile__name">Jacques Cousteau</p>
            <p class="profile__hobbie">Explorador</p>
          </div>
          <button
            class="profile__edit-button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img
              class="profile__edit-button-img"
              src={buttonEdit}
              alt="Boton para editar perfil"
            />
          </button>
        </div>
        <button class="profile__add-button">
          <img
            class="profile__add-button-img"
            src={buttonAdd}
            alt="Boton para agregar nueva imagen"
          />
        </button>
      </section>
      <section class="card"></section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
