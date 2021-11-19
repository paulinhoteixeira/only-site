import React from "react";
import iconSet from "../../assets/fonts/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import terraPlanaTitulo from "../../assets/images/terraPlanaTitulo.png";
import terraPlana from "../../assets/images/terraPlana.png";

import "./style.css";

function Single() {
  return (
    <div className="section" id="single">
      <div className="container grid">
        <div className="single-title">
          <img src={terraPlanaTitulo} alt="" />
        </div>
        <div className="single-image">
          <img src={terraPlana} alt="" />
        </div>
        <h2>Ouça agora o nosso novo single</h2>
        <ul className="links-single">
          <li>
            <a href="#">
              {" "}
              <IcomoonReact
                color="#F2F2F2"
                size="4rem"
                iconSet={iconSet}
                icon="spotify"
              />{" "}
            </a>{" "}
          </li>
          <li>
            <a href="#">
              {" "}
              <IcomoonReact
                color="#F2F2F2"
                size="4rem"
                iconSet={iconSet}
                icon="deezer"
              />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <IcomoonReact
                color="#F2F2F2"
                size="4rem"
                iconSet={iconSet}
                icon="youtube"
              />{" "}
            </a>
          </li>
        </ul>
        <h3>Ir para o site</h3>
      </div>
    </div>
  );
}

export default Single;
