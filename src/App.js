import React from 'react';
import Card from "./card"
import "./css/bootstrap.min.css";
import "./css/style.css";
import {Desktopheader} from './images';

function App() {
  return (
    <div>
      <header>
        <img src={Desktopheader} alt="" className="img-fluid" />
      </header>
      
      <Card  />
    </div>
  );
}

export default App;
