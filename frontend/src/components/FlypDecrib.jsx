import React from "react";
import { Link } from "react-router-dom";
import "../css/flydescrib.css";

export default function FlypDecrib() {
  return (
    <div className="bgfrank">
      <div className="container-desc ">
        <header className="frankhead ">
          <div className="boutondiv">
            <Link to="/wallet">
              <button
                type="button"
                className="btn bg-transparent hover:bg-red-300 text-red-200 font-semibold hover:text-white py-2 px-4 border border-red-200 hover:border-transparent rounded-xl"
              >
                Return
              </button>
            </Link>
          </div>
          <h3 className="desc-flyp">LOREM IPSUM</h3>
          <h1 className="titre-desc-flyp">LOREM</h1>
        </header>
        <div>vues : 13265</div>
        <hr />
        <div>
          <h3> Lorem ipsum </h3>
          <h2>Lorem</h2>
          <h4>
            ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            consequuntur neque nihil, eius optio, architecto, eaque odit a iste
          </h4>

          <h3>5 TITRES</h3>
          <h4>Lorem ipsum </h4>

          <h4>Dolor sit</h4>
          <h4>Consectetur adipisicing elit</h4>
          <h4> Dolor nihil dolore corporis</h4>
          <h4>Tempora officiis placeat</h4>
        </div>
      </div>
    </div>
  );
}
