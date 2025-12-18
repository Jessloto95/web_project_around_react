import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import api from "./utils/api";
import CurrentUserContext from "./contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);


  useEffect (() => {
    (async () => {
      await api.getUser().then((data) => {
        
        setCurrentUser(data)
      });
    })();
  }, []);

  useEffect(() => {
      api
        .getInitialCards()
        .then((data) => {
          console.log("Datos iniciales de cards:", data);
          setCards(data);
        })
        .catch((error) => {
          console.error("Error al cargar las tarjetas:", error);
        });
    }, []);

  
  const handleUpdateUser = (data) => {
    api.userEdit(data.name, data.about).then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    })
    .catch((error) => console.error(error));
  };

  const handleUpdateAvatar = (data) => {
    api.editAvatar(data.avatar)
    .then((newUserData) => {
      setCurrentUser(newUserData);
      handleClosePopup();
    })
    .catch((error) => console.error(error));
  };

async function handleCardLike(card) {
    const isLiked = card.isLiked;

    try {
      let newCard;
      if (isLiked) {
        newCard = await api.removeLikeCard(card._id);
      } else {
        newCard = await api.likeCard(card._id);
      }

      // Actualizar estado: reemplazar la tarjeta modificada
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    } catch (error) {
      console.error("Error al cambiar like:", error);
    }
  };

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id)
      );
    } catch (error) {
      console.error("Error al eliminar tarjeta:", error);
    }
  };

  const handleAddPlaceSubmit = (cardData) => {
    api.createCard(cardData.name, cardData.link)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      handleClosePopup();
    })
    .catch((error) => console.error("Error al agregar tarjeta:", error));
  };


  const handleOpenPopup = (popupData) => {
    setPopup(popupData);
  }

  const handleClosePopup = () =>{
    setPopup(null);
  };

  return (
    <>
      <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}>
        <div className="page">
          <Header></Header>
          <Main
          popup={popup}
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          />
          <Footer></Footer>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
