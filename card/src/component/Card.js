import React from "react";
import image from "../image-product-mobile.jpg";
import "../App.css";

function Card() {
    return (
      <div className="card">
        <img
          src={image}
          className="im-mobile"
          alt="im-mobile"
        />
        <div className="text">
        <p className="paragraphe">Perfum</p>
  
        <h1 className="titre">Gabrielle Essence Eau De Parfum</h1>
  
        <p className="paragraphe2">
          A floral, solar and voluptuous <br/>
          interpretation composed by Olivier<br/>
           Polge, Perfumer-Creator for the House of CHANEL.<br/>
        </p>
  
        <h2 className="prix">$149.99 <span className="prixB"><strike>$169.99</strike></span></h2>
        
  
        <button className="button">🛒 Add to Cart</button>
        </div>
      </div>
    );
  }
  
  export default Card;