import React from 'react';
import iconSet from '../../assets/fonts/selection.json';
import IcomoonReact, { iconList } from "icomoon-react";
import terraPlana from '../../assets/images/terraPlana.png';

import './style.css'

function Single(){
    return(
        <div className="single container">
            <h1>A terra da Terra plana</h1>
            <img src={terraPlana} alt="" />
            <h2>Ouça agora o nosso novo single</h2>
            <ul className="links-single">
                <li><a href="#"> <IcomoonReact color="#F2F2F2" size="4rem" iconSet={iconSet} icon="spotify" />  </a> </li>
                <li><a href="#"> <IcomoonReact color="#F2F2F2" size="4rem" iconSet={iconSet} icon="deezer" />  </a></li>
                <li><a href="#"> <IcomoonReact color="#F2F2F2" size="4rem" iconSet={iconSet} icon="youtube" />  </a></li>
            </ul>
        </div>
    );
    
}

export default Single;