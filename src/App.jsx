import logo from "../images/Vector.png";
import profileImage from "../images/Jacques-Cousteau.jpg";

function App() {
  return (
    <>
      <div class="page">
        <header class="header">
          <img src={logo} alt="logo-around" class="header__image" />
        </header>
        <main class="content">
          <section class="profile">
            <div class="profile__person-conteiner">
              <img
                class="profile__person"
                src={profileImage}
                alt="profile-image"
              />
            </div>
            <div class="profile__content">
              <div class="profile__paragraph">
                <p class="profile__name">Jacques Cousteau</p>
                <p class="profile__hobbie">Explorador</p>
              </div>
              <button class="profile__edit-button">
                <img
                  class="profile__edit-button-img"
                  src="../images/button_edit.png"
                  alt="Boton para editar perfil"
                />
              </button>
            </div>
            <button class="profile__add-button">
              <img
                class="profile__add-button-img"
                src="../images/button_add.png"
                alt="Boton para agregar nueva imagen"
              />
            </button>
          </section>
          <section class="card"></section>
        </main>
        <footer class="footer">
          <p class="footer__copyright">© 2024 Around The U.S.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
