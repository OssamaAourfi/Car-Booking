import React from "react";
import Mask from "../../assets/Mask.png";
import "./changeback.css";
import Car from "../../assets/car.png";
import { FaCarSide, FaMotorcycle, FaTruck, FaTractor } from "react-icons/fa";
import { MdAgriculture } from "react-icons/md";
import { TbForklift } from "react-icons/tb";
function ChangeBack() {
  return (
    <div>
      <img src={Mask} alt="" className="mask" />
      <img src={Car} alt="" className="car" />
      <div className="trafics">
        <div className="cars">
          <button className="car1">
            <FaCarSide className="icon" />
            Voiture
          </button>
          <button className="car1">
            <FaMotorcycle className="icon" />
            Motor
          </button>

          <button className="car1">
            <MdAgriculture className="icon" />
            Agricole
          </button>
        </div>
        <div className="cars">
          <button className="car2">
            <FaTruck className="icon" />
            Camion
          </button>
          <button className="car2">
            <TbForklift className="icon" />
            Industriel
          </button>

          <button className="car2">
            <FaTractor className="icon" />
            Travaux
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeBack;
