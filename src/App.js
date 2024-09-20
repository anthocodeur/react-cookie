import "./App.css";
import { useCookies } from "react-cookie";
import Bandeau from "./components/Bandeau";

function App() {
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);

  const handleClickAddCookie = () => {
    // On va faire un fetch de login et récupérer data
    // fetch(url, {options})
    setCookie(
      "user",
      {
        name: "John",
        surname: "Antho",
        age: 25,
      }, // Ici on place les data en lieu et place de l'objet de démo
      { path: "/", maxAge: 604800 }
    );
  };

  return (
    <div className="App">
      {cookie.user ? <>Mon app</> : <h1>Pas de cookies</h1>}
      <div>
        <button onClick={handleClickAddCookie}>Ajouter le cookie</button>
        <button
          onClick={() => {
            removeCookie("user");
          }}
        >
          Supprimer le cookie
        </button>
      </div>

      {!cookie["user"] && <Bandeau />}
    </div>
  );
}

export default App;
