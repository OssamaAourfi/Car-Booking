import React from 'react'
import data from "./data";
import "./Card.css";
function Card() {
  return (
    <div>
      <div className="container portfolio-container">
        {data.map(({ id, img, name, modele,ville,carburant,km,prix }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-img">
                <img className="img" src={img} alt="" />
                <p>modele {modele}</p>
              </div>

                  <div className="portflio-item-cta">
                      <div><span>{name}</span>|<span>Automatic</span>|<span>{ville}</span></div>
            
                      <span>{prix}</span>|<span>{km}</span>|
                <span>{carburant}</span>
             </div>
                  <button className='portfolio-btn'>Contacter</button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Card