import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="Baden"/>
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://comfy-crepe-8a992d.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Esther Della Cagna
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/estherdellacagna/new-react-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced.
            </a>{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}
