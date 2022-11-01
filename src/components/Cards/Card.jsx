import React from "react";
import data from "./data";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaRegHeart,
} from "react-icons/fa";
import "./Card.css";
function Card() {
  return (
    <div>
      <div className="container portfolio-container">
        {data.map(({ id, img, name, modele, ville, carburant, km, prix }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-img">
                <img className="img" src={img} alt="" />
                <div className="heart-div">
                  <a href="#wishlist">
                    <FaRegHeart className="heart" />
                  </a>
                </div>

                <p>Modele {modele}</p>
              </div>

              <div className="portflio-item-cta">
                <div>
                  <span className="name">{name}</span>
                  <span>Automatic</span>|<span>{ville}</span>
                </div>
                <span>{prix} DH</span>|<span>{km} KM</span>|
                <span>{carburant}</span>
              </div>
              <button className="portfolio-btn">Contacter</button>
            </article>
          );
        })}
      </div>
      <div className="card-social">
        <p className="card-social-p">Follow us on</p>
        <div className="card-social-a">
          <a href="https://www.instagram.com/ossamaaf/?hl=fr">
            <FaInstagram className="ic" />
          </a>
          <a href="https://www.instagram.com/ossamaaf/?hl=fr">
            <FaFacebookF className="ic" />
          </a>
          <a href="https://www.instagram.com/ossamaaf/?hl=fr">
            <FaTwitter className="ic" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
