import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import api from "./utils/api";
import CurrentUserContext from "./contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});


  useEffect (() => {
    (async () => {
      await api.getUser().then((data) => {
        
        setCurrentUser(data)
      });
    })();
  }, []);

  
  const handleUpdateUser = (data) => {
    api.getUser(data).then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    })
    .catch((error) => console.error(error));
  };

  return (
    <>
      <CurrentUserContext.Provider value={{currentUser, handleUpdateUser}}>
        <div className="page">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
