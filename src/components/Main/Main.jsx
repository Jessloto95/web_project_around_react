import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import profileImage from "../../images/Jacques-Cousteau.jpg";
import buttonEdit from "../../images/button_edit.png";
import buttonAdd from "../../images/button_add.png";
import Popup from "./Components/Popup/Popup";
import NewCard from "./Components/Popup/NewCard/NewCard";
import EditProfile from "./Components/Popup/EditProfile/EditProfile";
import EditAvatar from "./Components/Popup/EditAvatar/EditAvatar";
import Card from "./Components/Card/Card";
import ImagePopup from "./Components/Popup/ImagePopup/ImagePopup";
import api from "../../utils/api";
import RemoveCard from "./Components/Popup/RemoveCard/RemoveCard.jsx";

export default function Main({popup, handleClosePopup, handleOpenPopup, cards, onCardLike, onCardDelete}) {
  const { currentUser, handleAddPlaceSubmit } = useContext(CurrentUserContext);
  
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard  onAddPlaceSubmit={handleAddPlaceSubmit} /> };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__person-conteiner"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            className="profile__person"
            src={currentUser?.avatar}
            alt="profile-image"
          />
        </div>
        <div className="profile__content">
          <div className="profile__paragraph">
            <p className="profile__name">{currentUser?.name}</p>
            <p className="profile__hobbie">{currentUser?.about}</p>
          </div>
          <button
            className="profile__edit-button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          >
            <img
              className="profile__edit-button-img"
              src={buttonEdit}
              alt="Boton para editar perfil"
            />
          </button>
        </div>
        <button
          className="profile__add-button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            className="profile__add-button-img"
            src={buttonAdd}
            alt="Boton para agregar nueva imagen"
          />
        </button>
      </section>
      <section className="card">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onOpenPopup={handleOpenPopup}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
