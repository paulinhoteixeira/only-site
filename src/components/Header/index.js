import React, { useState } from "react";
import iconSet from "../../assets/fonts/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import HeaderData from '../../Data/HeaderData';

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
            {
              HeaderData.map((item) =>{
                return(
                  <li>
                    <a href={`#${item.value.toLowerCase()}`}>{item.value}</a>
                  </li>
                )
              })
            }   
          </ul>
        </div>
      </nav>

      <div onClick={menuVisibility} className="icon-menu">
        {menu ? (
          <IcomoonReact
            color="#F2F2F2"
            size="2rem"
            iconSet={iconSet}
            icon="close"
          />
        ) : (
          <IcomoonReact
            color="#F2F2F2"
            size="2rem"
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
              size="2rem"
              iconSet={iconSet}
              icon="close"
            />
          </div>

              
          
        <nav>
           
          <div className="menu-mobile">
          
            <ul className="grid">
                {
                  HeaderData.map((item) =>{
                    // FUNÇÃO PARA REMOVER OS ACENTOS DO ID 
                    let id = item.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    return(
                      <li>
                        <a onClick={menuVisibility} href={`#${id.toLowerCase()}`}>{item.value}</a>
                      </li>
                    )
                  })
                }              
            </ul>
          </div>
        </nav>
        </>
      )}
    </header>
  );
};

export default Header;
