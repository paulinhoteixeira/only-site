import React from 'react';
import iconSet from '../../assets/fonts/selection.json';
import IcomoonReact, { iconList } from "icomoon-react";
import fotoHome from '../../assets/images/fotoHome.jpg';
import logo from '../../assets/images/logoOnly.png'

const Home = () => (
    <div className="home container" id="home">
        <img src={ logo } alt="Logo da banda Only" />
        <div className="image">
            <img src={fotoHome} alt="Foto da banda Only com o público pós show" />
        </div>
        <div className="social">
        <ul className="links-single">
                <li><a href="#"> <IcomoonReact color="#F2F2F2" size="4rem" iconSet={iconSet} icon="facebook" />  </a></li>
                <li><a href="#"> <IcomoonReact color="#F2F2F2" size="4rem" iconSet={iconSet} icon="spotify" />  </a> </li>
                <li><a href="#"> <IcomoonReact color="#F2F2F2" size="4rem" iconSet={iconSet} icon="youtube" />  </a></li>
                <li><a href="#"> <IcomoonReact color="#F2F2F2" size="4rem" iconSet={iconSet} icon="instagram" />  </a></li>
                <li><a href="#"> <IcomoonReact color="#F2F2F2" size="4rem" iconSet={iconSet} icon="deezer" />  </a></li>
            </ul>

        </div>

    </div>
)

export default Home;