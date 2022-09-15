import React from "react";
import './header.css'
const Header=()=>{
    return(
      <header>
        <div className="container">
          <div className="col-md-6">
                <h1>Good food choices 
                    are good 
                    investments.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam et purus a odio finibus bibendum amet leo.</p>
                <button> Oreder now <span className="fa fa-shopping-basket"></span></button>
                <button> learn more</button>
          </div>
          <div className="col-md-6">

          </div>
        </div>
      </header>
    );
}
export default Header