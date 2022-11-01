import React from "react";
import img from "../../assets/annc.png";
import logo from "../../assets/logo.png";
import "./footer.css";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import {BsTelephone} from "react-icons/bs"
function Footer() {
  return (
    <div>
      <div>
        <img src={img} alt="" className="img1" />
      </div>
      <div className="footer1">
        <div className="logo">
          <img src={logo} alt="" />
          <p className="ex1">
            lorem20hfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhuuuu
            uuuuuuuuuuuuuuuwwwwwwwwwwwwwwyyyyyyyyyyyyfffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffjjjj
            jjjjjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkk
          </p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <div className="contact-us">
            <div className="ico">
              <BsTelephone className="ico-tel" />
            </div>

            <p>212 537 66 11 38/ +212 537 76 59 48</p>
          </div>
          <div className="contact-us">
            <div className="ico">
              <FaRegEnvelope className="ico-tel" />
            </div>
            <p>service@carbooking.com</p>
          </div>
          <div className="contact-us">
            <div className="ico">
              <MdLocationPin className="ico-tel" />
            </div>

            <p>Rue Soussa Imm 2 Appt 5 Hassan Rabat</p>
          </div>
        </div>
        <div className="quik">
          <h3>Quik Links</h3>
          <ul>
            <li>Legal Notice</li>
            <li>Terms of Sales</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
