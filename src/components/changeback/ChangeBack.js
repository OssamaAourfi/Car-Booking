import React, { useState } from "react";
import Mask from "../../assets/Mask.png";
import "./changeback.css";
import Car from "../../assets/car.png";
import { FaCarSide, FaMotorcycle, FaTruck, FaTractor } from "react-icons/fa";
import { MdAgriculture } from "react-icons/md";
import { TbForklift } from "react-icons/tb";
import imgAgricole from "../../assets/agricole-removebg-preview.png";
import imgCamion from "../../assets/camion-removebg-preview.png";
import imgIndistruel from "../../assets/indistruel-removebg-preview.png";
import imgMotor from "../../assets/motor.png";
import imgTractor from "../../assets/tractor-removebg-preview.png";
function ChangeBack() {
  const trafics = [
    "Voiture",
    "Motor",
    "Agricole",
    "Camion",
    "Indistruel",
    "Travaux",
  ];
  const [myTrafics, setMyTrafics] = useState("");
  const TraficImage = ({ src }) => {
    return (
      <img
        src={src}
        alt=""
        className="car"
        //  style={{ width: "46rem", height: "26rem" }}
      />
    );
  };
  return (
    <div>
      <img src={Mask} alt="" className="mask" />

      <div className="trafics">
        <div className="cars">
          <button className="car1" onClick={() => setMyTrafics(trafics[0])}>
            <FaCarSide className="icon" />
            {trafics[0]}
          </button>
          <button className="car1" onClick={() => setMyTrafics(trafics[1])}>
            <FaMotorcycle className="icon" />
            {trafics[1]}
          </button>

          <button className="car1" onClick={() => setMyTrafics(trafics[2])}>
            <MdAgriculture className="icon" />
            {trafics[2]}
          </button>
        </div>
        <div className="cars">
          <button className="car2" onClick={() => setMyTrafics(trafics[3])}>
            <FaTruck className="icon" />
            {trafics[3]}
          </button>
          <button className="car2" onClick={() => setMyTrafics(trafics[4])}>
            <TbForklift className="icon" />
            {trafics[4]}
          </button>

          <button className="car2" onClick={() => setMyTrafics(trafics[5])}>
            <FaTractor className="icon" />
            {trafics[5]}
          </button>
          <div>
            <p>{myTrafics === "Voiture" && <TraficImage src={Car} />}</p>
            <p>{myTrafics === "Camion" && <TraficImage src={imgCamion} />}</p>
            <p>
              {myTrafics === "Agricole" && <TraficImage src={imgAgricole} />}
            </p>
            <p>
              {myTrafics === "Indistruel" && (
                <TraficImage src={imgIndistruel} />
              )}
            </p>
            <p>{myTrafics === "Motor" && <TraficImage src={imgMotor} />}</p>
            <p>{myTrafics === "Travaux" && <TraficImage src={imgTractor} />}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeBack;
