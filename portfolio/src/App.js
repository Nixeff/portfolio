import React from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";
import Title from "./components/Title";

export default function App() {
  return (
    <div>
      <ParticlesBackground/>
      <div id="container">
        <Title/>
      </div>
      <div id="beondFirstFrame">
        hi
      </div>
    </div>
    
  );
}
