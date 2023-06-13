import React from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";
import cosmicCall from "./assets/cosmicCall.png";
import wikiPage from "./assets/wikiPage.png";
import testImg from "./assets/test.jpg";
import Title from "./components/Title";
import { Slideshow, SlideshowItem } from "./components/Slideshow";

export default function App() {
  return (
    <div>
      <ParticlesBackground/>
      <div id="container">
        <Title/>
      </div>
      <div id="beondFirstFrame">
        
        <Slideshow width={100} height={100}>
          <SlideshowItem>
            <div id="item">
              <div>              
                <h2>Cosmic Call</h2>
                <div>
                  <p>A game I made with some friends at school for a competition</p>
                  <p>Made In: HTML,CSS and JS</p>
                </div>
              </div>
              <div id="item-image">
                <img src={cosmicCall}></img>
              </div>
            </div>
          </SlideshowItem>
          <SlideshowItem>
            <div id="item">
              <div>              
                <h2>Wiki Page</h2>
                <div>
                  <p>A wikipage created with a PHP backend for a school project</p>
                  <p>Made In: HTML,CSS,React Native and PHP</p>
                </div>
              </div>
              <div id="item-image">
                <img src={wikiPage}></img>
              </div>
            </div>
          </SlideshowItem>
          <SlideshowItem>
            <div id="item">
              <div id="item-image">
                <img src={testImg}></img>
              </div>
              <div id="subject">              
                <h2>Wiki Page</h2>
                <div>
                  <p>A wikipage created with a PHP backend for a school project</p>
                  <p>Made In: HTML,CSS,React Native and PHP</p>
                </div>
              </div>
              
              
            </div>
          </SlideshowItem>
        </Slideshow>
      </div>
    </div>
    
  );
}

