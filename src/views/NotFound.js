
import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/login.css";


class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar location={this.props.history} />
        <section id="preguntas">
          <div className="container">
            <div className="row">
              <div className="col-sm padding-preguntas text-center">
                 <div className="container-parrafo-completo">
                 <h1 className="for_b">404</h1>
                </div>
              </div>
            </div>
          </div>
         </section>
        <Footer location={this.props.history} />
      </div>
    );
  }
}

export default NotFound;
