import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="main-foot">
          <a href="https://youtu.be/TcMBFSGVi1c">
            <img
              src="https://www.freeiconspng.com/thumbs/play-button-icon-png/play-button-icon-png-0.png"
              alt=""
            ></img>
          </a>
        </div>
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
              <h3>&copy; {new Date().getFullYear()} CopyRight Reserved</h3>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
