import Store from "./Components/State/Store";
import React from "react";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  if (!window.localStorage.getItem("cards")) {
    const cards = ["A faire", "En développement", "Fini"];
    window.localStorage.setItem("cards", JSON.stringify(cards));
  }
  return (
    <Store>
      <div className="App">
        <NavbarComponent />
      </div>
    </Store>
  );
}

export default App;
