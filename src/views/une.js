
import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/login.css";


class Une extends Component {
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
                 <h3 className="title-bold-big">Unidad Especializada de Atención a Usuarios (UNE)</h3>
                 <div className="container-parrafo-completo">
                    <p className="color-gray-tex"><b>AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R.</b></p>
                    <p className="color-gray-tex">En caso de alguna consulta, reclamación o aclaración podrá presentarla en la UNE. Unidad Especializada de Atención a Usuarios, la cual dará respuesta en un plazo no mayor a 30 días hábiles.</p><br></br>
                    <p className="color-gray-tex">Titular: Álvaro Rodrigo Enríquez Zamora </p>
                    <p className="color-gray-tex">Domicilio: Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Cuidad de México </p>
                    <p className="color-gray-tex">Teléfono: +52 1 55 8038 7757</p>
                    <p className="color-gray-tex">Correo electrónico: clientes@prestiy.mx </p><br></br>
                    <p className="color-gray-tex"><b>AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R.</b> únicamente cuenta con oficinas de atención al cliente en Ciudad de México  y no cuenta con sucursales. </p><br></br>
                    <p className="color-gray-tex">Horario de atención: Lunes a viernes 9:30 a 15:00 y 17:00 a 19:00</p>
                    <p className="color-gray-tex">Usted también podrá acudir a la CONDUSEF, con domicilio en Avenida Fray Antonio Alcalde #500, 5to. piso, Colonia Centro Barranquitas C.P. 44280. Correos electrónicos: asesoria@condusef.gob.mx o jalcond@condusef.gob.mx. Teléfonos: 01 (33) 3615 4287, 3615 5397, 3615 5796, 3615 8727 o lada sin costo 01 800 999 8080. Página web: <a href="https://www.gob.mx/condusef" target="_blank">www.gob.mx/condusef</a></p><br></br>
                    <p className="color-gray-tex"><b>Procuraduría Federal del Consumidor (PROFECO)</b></p>
                    <p className="color-gray-tex">Para cualquier duda, aclaración podrá dirigirse al teléfono 800 468 8722 o a la página de internet <a href="https://www.gob.mx/profeco" target="_blank">www.profeco.gob.mx</a></p>
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

export default Une;
