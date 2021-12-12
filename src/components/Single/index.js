import React from "react";
import { Link } from "react-router-dom";
import iconSet from "../../assets/fonts/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import terraPlanaTitulo from "../../assets/images/terraPlanaTitulo.png";
import terraPlana from "../../assets/images/terraPlana.png";

import "./style.css";

function Single() {
  return (
    <div id="single">
      <div className="container grid">
        <div className="single-title">
          <img src={terraPlanaTitulo} alt="" />
        </div>

        <div className="single-image">
          <img src={terraPlana} alt="" />
        </div>

        <div className="single-listen-to">
          <h2>Faça a pre-save do nosso novo single</h2>
          <ul className="links-single">
            <li>
              <a
                href="https://accounts.spotify.com/en/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fclient_id%3D66d3cdb448074a0d88e9b08baaf2f3d7%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fapi.ffm.to%252Fwebhook%252Fspotify%252Fauthorize%26scope%3Duser-read-private%2520user-read-birthdate%2520user-read-email%2520user-library-modify%2520user-library-read%2520user-read-recently-played%2520user-follow-read%2520user-follow-modify%2520user-top-read%2520playlist-modify-public%2520playlist-read-private%2520playlist-modify-private%26state%3DeyJkYkxpbmtJZCI6IjYxYTYyNzQ2MjkwMDAwMGYwMDBmY2QzYSIsImFjdGlvblR5cGUiOm51bGwsImN0YSI6IlByZS1TYXZlIiwidXNlckNvdW50cnkiOiJCUiIsInNob3J0SWQiOiJhdGVycmFkYXRlcnJhcGxhbmEiLCJkb21haW4iOiJodHRwczovL29uZXJwbS5saW5rIiwic2VydmljZU5hbWUiOiJzcG90aWZ5IiwicHJvZHVjdCI6InNtYXJ0bGluayIsInJlZGlyZWN0VXJpIjoiaHR0cHM6Ly9vbmVycG0ubGluay9hdGVycmFkYXRlcnJhcGxhbmEvcHJlc2F2ZWNhbGxiYWNrIiwiZmFsbGJhY2tVcmwiOm51bGwsImlzUHJlUmVsZWFzZSI6dHJ1ZSwiaXNGdXR1cmVSZWxlYXNlIjp0cnVlLCJhcnRpc3RJZCI6IjVlZWMyYzczMjYwMDAwNDM3YTVlZjk2NSIsImFydGlzdE93bmVyIjoiNWI5YjFkZjAxMjAwMDAwMzhlNTIxY2UyIiwiYWN0aW9uSWQiOm51bGwsImlzRnJvbUVVIjpmYWxzZSwibGlua1R5cGUiOm51bGwsInVzZXJJUCI6IjE3Ny40NS4yMDguMTk0IiwicmV3YXJkSWQiOm51bGwsInJlZmVycmFsSWQiOm51bGwsImVuZm9yY2VVc2VyUHJpdmFjeSI6ZmFsc2UsIm9yaWdpbiI6bnVsbCwiZm9sbG93cyI6bnVsbCwidXNlckVtYWlsSW5wdXQiOm51bGwsIm9yZGVySWQiOm51bGwsImNvbnRhaW5lciI6bnVsbCwibmV3UGxheWxpc3QiOm51bGx9"
                target="_blank"
                rel="noreferrer noopener"
              >
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
              <a
                href="https://api.ffm.to/sl/e/ps/aterradaterraplana?cd=eyJ1YSI6eyJ1YSI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85Ni4wLjQ2NjQuOTMgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXIiOnsibmFtZSI6IkNocm9tZSIsInZlcnNpb24iOiI5Ni4wLjQ2NjQuOTMiLCJtYWpvciI6Ijk2In0sImVuZ2luZSI6eyJuYW1lIjoiQmxpbmsiLCJ2ZXJzaW9uIjoiOTYuMC40NjY0LjkzIn0sIm9zIjp7Im5hbWUiOiJXaW5kb3dzIiwidmVyc2lvbiI6IjEwIn0sImRldmljZSI6e30sImNwdSI6eyJhcmNoaXRlY3R1cmUiOiJhbWQ2NCJ9fSwiY2xpZW50Ijp7InJpZCI6ImUzZWYzNmZhLWI3ZGMtNDFiZC05Yzc3LTI1NTEyZTM3NGM3YiIsInNpZCI6IjBjNjdiZmI4LTBmYWMtNDhkNS04YjViLWZkYjc0MTg4MGM5NyIsImlwIjoiMTc3LjQ1LjIwOC4xOTQiLCJyZWYiOiIiLCJob3N0Ijoib25lcnBtLmxpbmsiLCJsYW5nIjoicHQtQlIiLCJpcENvdW50cnkiOiJCUiJ9LCJpc0Zyb21FVSI6ZmFsc2UsImNvdW50cnlDb2RlIjoiQlIiLCJpZCI6IjYxYTYyNzQ2MjkwMDAwMGYwMDBmY2QzYSIsInR6byI6bnVsbCwiY2giOm51bGwsImFuIjpudWxsLCJkZXN0VXJsIjoiaHR0cHM6Ly9jb25uZWN0LmRlZXplci5jb20vb2F1dGgvYXV0aC5waHA_YXBwX2lkPTE5MDMyMiZyZWRpcmVjdF91cmk9aHR0cHMlM0ElMkYlMkZhcGkuZmZtLnRvJTJGd2ViaG9vayUyRmRlZXplciUyRmF1dGhvcml6ZSZwZXJtcz1lbWFpbCUyQ2Jhc2ljX2FjY2VzcyUyQ29mZmxpbmVfYWNjZXNzJTJDbWFuYWdlX2xpYnJhcnklMkNtYW5hZ2VfY29tbXVuaXR5JTJDbGlzdGVuaW5nX2hpc3Rvcnkmc3RhdGU9ZXlKa1lreHBibXRKWkNJNklqWXhZVFl5TnpRMk1qa3dNREF3TUdZd01EQm1ZMlF6WVNJc0ltRmpkR2x2YmxSNWNHVWlPbTUxYkd3c0ltTjBZU0k2SWxCeVpTMVRZWFpsSWl3aWRYTmxja052ZFc1MGNua2lPaUpDVWlJc0luTm9iM0owU1dRaU9pSmhkR1Z5Y21Ga1lYUmxjbkpoY0d4aGJtRWlMQ0prYjIxaGFXNGlPaUpvZEhSd2N6b3ZMMjl1WlhKd2JTNXNhVzVySWl3aWMyVnlkbWxqWlU1aGJXVWlPaUprWldWNlpYSWlMQ0p3Y205a2RXTjBJam9pYzIxaGNuUnNhVzVySWl3aWNtVmthWEpsWTNSVmNta2lPaUpvZEhSd2N6b3ZMMjl1WlhKd2JTNXNhVzVyTDJGMFpYSnlZV1JoZEdWeWNtRndiR0Z1WVM5d2NtVnpZWFpsWTJGc2JHSmhZMnNpTENKbVlXeHNZbUZqYTFWeWJDSTZiblZzYkN3aWFYTlFjbVZTWld4bFlYTmxJanAwY25WbExDSnBjMFoxZEhWeVpWSmxiR1ZoYzJVaU9uUnlkV1VzSW1GeWRHbHpkRWxrSWpvaU5XVmxZekpqTnpNeU5qQXdNREEwTXpkaE5XVm1PVFkxSWl3aVlYSjBhWE4wVDNkdVpYSWlPaUkxWWpsaU1XUm1NREV5TURBd01EQXpPR1UxTWpGalpUSWlMQ0poWTNScGIyNUpaQ0k2Ym5Wc2JDd2lhWE5HY205dFJWVWlPbVpoYkhObExDSnNhVzVyVkhsd1pTSTZiblZzYkN3aWRYTmxja2xRSWpvaU1UYzNMalExTGpJd09DNHhPVFFpTENKeVpYZGhjbVJKWkNJNmJuVnNiQ3dpY21WbVpYSnlZV3hKWkNJNmJuVnNiSDA9IiwidmlkIjoiZWI2ZmY0MGYtNWUxZS00MmFiLTlmMmMtMDJkYzBkZmVmMWVlIiwic3J2YyI6ImRlZXplciIsInByb2R1Y3QiOiJzbWFydGxpbmsiLCJzaG9ydElkIjoiYXRlcnJhZGF0ZXJyYXBsYW5hIiwiaXNBdXRob3JpemF0aW9uUmVxdWlyZWQiOnRydWUsIm93bmVyIjoiNWI5YjFkZjAxMjAwMDAwMzhlNTIxY2UyIiwiYXIiOiI1ZWVjMmM3MzI2MDAwMDQzN2E1ZWY5NjUiLCJpc1Nob3J0TGluayI6ZmFsc2V9"
                target="_blank"
                rel="noreferrer noopener"
              >
                {" "}
                <IcomoonReact
                  color="#F2F2F2"
                  size="4rem"
                  iconSet={iconSet}
                  icon="deezer"
                />{" "}
              </a>
            </li>
            {/* <li>
              <a href="#">
                {" "}
                <IcomoonReact
                  color="#F2F2F2"
                  size="4rem"
                  iconSet={iconSet}
                  icon="youtube"
                />{" "}
              </a>
            </li> */}
          </ul>
        </div>
        <Link to="/home">
          <h3>Ir para o site</h3>
        </Link>
      </div>
    </div>
  );
}

export default Single;
