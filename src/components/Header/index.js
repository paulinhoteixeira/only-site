import React from "react";
import iconSet from "../../assets/fonts/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  function menuVisibility() {
    menu ? setMenu(false) : setMenu(true);
  }

  return (
    <header className="header container">
      <nav>
        <div className="menu">
          <ul className="grid">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Músicas</a>
            </li>
            <li>
              <a href="">Merch</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
            <li>
              <a href="">Fotos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </div>
      </nav>

      <div onClick={menuVisibility} className="toggle icon-menu">
        {menu ? (
          <IcomoonReact
            color="#F2F2F2"
            size="4rem"
            iconSet={iconSet}
            icon="close"
          />
        ) : (
          <IcomoonReact
            color="#F2F2F2"
            size="4rem"
            iconSet={iconSet}
            icon="menu"
          />
        )}        
      </div>
      {menu && (
          <nav>
            <div className="menu-mobile">
              <ul className="grid">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Músicas</a>
                </li>
                <li>
                  <a href="">Merch</a>
                </li>
                <li>
                  <a href="">Vídeos</a>
                </li>
                <li>
                  <a href="">Fotos</a>
                </li>
                <li>
                  <a href="">Contato</a>
                </li>
              </ul>
            </div>
          </nav>
        )}
    </header>
  );
};

export default Header;
