import React from "react";
import "./App.css";
import PictureList from "./Components/Main";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <div>
        <PictureList />
      </div>
    </div>
  );
}

export default App;
