import React, { Component } from "react";
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Desenvolvido por <b>Fábio Augusto Mazuchi</b></p>
        <div className="links">
          <div>
            <a rel="noreferrer" target="_blank" href="https://github.com/FabioMazuchi">
              <img alt="Github" src={github}/>
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/fabio-augusto-mazuchi/">
              <img alt="Linkedin" src={linkedin}/>
            </a>
          </div>
          <h4>mazuchi.augusto@hotmail.com</h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
