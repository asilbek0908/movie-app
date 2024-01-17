import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__nav">
          <a href="#!" className="logo">
            Creative Movie App
          </a>
          <ul>
            <li>
              <a href="#!">Movies</a>
            </li>
            <li>
              <a href="#!">Serials</a>
            </li>
            <li>
              <a href="#!">Logout</a>
            </li>
          </ul>
        </div>

        <div className="main__head">
          <a href="https://youtu.be/coOKvrsmQiI?t=14">
            <img
              src="https://www.freeiconspng.com/thumbs/play-button-icon-png/play-button-icon-png-0.png"
              alt=""
            ></img>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
