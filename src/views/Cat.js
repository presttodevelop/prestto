
import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/login.css";


class Cat extends Component {
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
              <div className="col-sm padding-preguntas">
                 <h3 className="title-bold">CAT PROMEDIO</h3>
                 <div className="container-parrafo-completo">
                    <p className="color-gray-tex">CAT (Costo Anual Total) expresado en términos porcentuales anuales es de 639.8%. Calculado sobre un préstamo de $2,000 pesos a 30 días. </p>
                    <p className="color-gray-tex">Fecha de cálculo: 24/02/2021</p>
                    <p className="color-gray-tex">Para fines informativos y de comparación exclusivamente. Préstamo sujeto a aprobación.</p>
                    <p className="color-gray-tex"><b>AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R.</b></p>
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

export default Cat;
