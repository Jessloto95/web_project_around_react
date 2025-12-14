import { useState, useEffect } from "react";
import profileImage from "../../images/Jacques-Cousteau.jpg";
import buttonEdit from "../../images/button_edit.png";
import buttonAdd from "../../images/button_add.png";
import Popup from "./Components/Popup/Popup";
import NewCard from "./Components/Popup/NewCard/NewCard";
import EditProfile from "./Components/Popup/EditProfile/EditProfile";
import EditAvatar from "./Components/Popup/EditAvatar/EditAvatar";
import Card from "./Components/Card/Card";
import ImagePopup from "./Components/Popup/ImagePopup/ImagePopup";
import api from "../../utils/api"

/* const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards); */

export default function Main() {
  const [cards, setCards]= useState([]);

  useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(data);
    })
    .catch((error) => {
        console.error("Error al cargar las tarjetas:", error);  
      });
  }, []); 
  
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

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
        <div
          className="profile__person-conteiner"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            className="profile__person"
            src={profileImage}
            alt="profile-image"
          />
        </div>
        <div className="profile__content">
          <div className="profile__paragraph">
            <p className="profile__name">Jacques Cousteau</p>
            <p className="profile__hobbie">Explorador</p>
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
          <Card key={card._id} card={card} onOpenPopup={handleOpenPopup} />
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
