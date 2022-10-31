import React from "react";
import "./form.css";    

function From() {
  return (
    <div className="div-form">
      <form>
        <div className="select1">
          <select>
            <option>Marque</option>
            <option>Dacia</option>
            <option>Ford</option>
            <option>Seat</option>
            <option>Mercedes</option>
            <option>Nissan</option>
            <option>Mazda</option>
            <option>BMW</option>
            <option>Hyundai</option>
            <option>Cheverolet</option>
          </select>
          <select>
            <option>Modele</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
          <select>
            <option>Carburant</option>
            <option>Diesel</option>
            <option>Essence</option>
          </select>
        </div>
        <div className="select2">
          <select className="ville">
            <option>Rabat</option>
            <option>Salé</option>
            <option>CasaBlanca</option>
            <option>Marrakech</option>
            <option>Agadir</option>
            <option>Tangier</option>
          </select>
          <select className="min">
            <option>Prix min</option>
            <option>30 000 Dh</option>
          </select>
          <select className="max">
            <option>Prix max</option>
            <option>500 000 Dh</option>
          </select>
          <button className="recherche">Recherche</button>
        </div>
      </form>
    </div>
  );
}

export default From;
