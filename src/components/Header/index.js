import React, { useState } from "react";
import iconSet from "../../assets/fonts/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import "./style.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  function menuVisibility() {
    menu ? setMenu(false) : setMenu(true);
  }

  return (
    <header className="header">
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

      <div onClick={menuVisibility} className="icon-menu">
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
          <>
          <div className="close">
          <IcomoonReact
              onClick={menuVisibility}
              className="icon-close"
              color="#E4E4E4"
              size="1.5rem"
              iconSet={iconSet}
              icon="close"
            />
          </div>

              
          
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
        </>
      )}
    </header>
  );
};

export default Header;
