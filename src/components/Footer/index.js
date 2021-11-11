import iconSet from "../../assets/fonts/selection.json";
import IcomoonReact from "icomoon-react";
import logo from "../../assets/images/logoOnly.png";

import "./style.css";

const Footer = () => (
  <footer className="section">
    <div className="container grid">
      <div className="brand">
        <a href="#">
          <img src={logo} alt="Logo da banda Only" />
        </a>
        <p>©2021 ONLY</p>
        <p>Todos os direitos reservados.</p>
      </div>
      <div className="social grid">
        <a
          href="https://www.instagram.com/bandaonly/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IcomoonReact
            color="#F2F2F2"
            size="3.75rem"
            iconSet={iconSet}
            icon="instagram"
          />
        </a>
        <a
          href="https://open.spotify.com/artist/56ENOEcCGio5GqQmt7j14x?si=ED5t-LfVSzKHG6nCBCVngg"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IcomoonReact
            color="#F2F2F2"
            size="3.75rem"
            iconSet={iconSet}
            icon="spotify"
          />
        </a>
        <a
          href="https://www.youtube.com/user/bandaonly"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IcomoonReact
            color="#F2F2F2"
            size="3.75rem"
            iconSet={iconSet}
            icon="youtube"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
