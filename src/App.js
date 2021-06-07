
import React, { Component } from 'react';
/*import ReactDOM from 'react-dom';*/
import './App.css';
import { Route, Router } from 'react-router';

/*import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';*/

/* Conectar Redux */

import { connect } from 'react-redux';

//COMPONENTS
import MetaTags from 'react-meta-tags';

//VIEWS
import Home from './views/Home';
import Contacto from './views/Contacto';
import Status from './views/Status';
import Login from './views/Login';
import Registro from './views/Registro';
import ConfirmaDatos from './views/ConfirmaDatos';
import Thankyoupage from './views/Thankyoupage';
import Preguntas from './views/Preguntas';
import MiCuenta from './views/Micuenta';
import ResetPassword from './views/ResetPassword';
import AvisodePrivacidad from './views/AvisodePrivacidad';
import TerminosyCondiciones from './views/Terminosycondiciones';
import Contrato from './views/Contrato';
import NotFound from './views/NotFound';
import Payment from './views/Payment';

import Cat from './views/Cat';
import Une from './views/une';

class App extends Component {

  constructor(props) {
    super(props); 
  }



  render() {
    return (
      <Router history={ this.props.history }>

        <MetaTags>
            <title>Prestto</title>
            {   
                this.props.history.location.pathname === '/' ? 
                  <meta name="description" content="Prestto, prestamos en línea inmediatos. Obtenlo de una forma fácil, segura y rápida. ¡Sin salir de casa!"/> :
                this.props.history.location.pathname === "/prestamo-en-linea-registro" ? 
                  <meta name="description" content="Regístrate para ser parte de la comunidad Prestto y obtén prestamos en línea inmediatos. El proceso es rápido, fácil y confiable. "/> :
                this.props.history.location.pathname === "/prestamo-en-linea-contacto" ? 
                  <meta name="description" content="¿Tienes dudas sobre tu préstamo en línea? Deja tus datos y te contactaremos lo antes posible. Obtén tu préstamo inmediato ahora."/> : 
                this.props.history.location.pathname === "/prestamo-en-linea-preguntas" ? 
                  <meta name="description" content="Preguntas frecuentes sobre tu préstamo en línea. Resuelve tus dudas sobre el otorgamiento de tu préstamo personal. "/> : 
                this.props.history.location.pathname === "/prestamo-en-linea-login" ? 
                  <meta name="description" content="Accede a tu cuenta Prestto. Encuentra toda la información sobre tu préstamo en línea. ¡Paga tu préstamo personal y obtén nuevos préstamos! "/> : ''
            }
            {   
                this.props.history.location.pathname === '/' ? 
                  <title> Prestto: préstamos en línea, confiables y al instante. </title> :
                this.props.history.location.pathname === "/prestamo-en-linea-registro" ? 
                  <title> Regístrate en Prestto para obtener tu préstamo en línea de inmediato </title> :
                this.props.history.location.pathname === "/prestamo-en-linea-contacto" ? 
                  <title>¿Tienes dudas sobre tu préstamo en línea? Contáctanos </title> : 
                this.props.history.location.pathname === "/prestamo-en-linea-preguntas" ? 
                  <title>Preguntas frecuentes sobre tu préstamo en línea </title> : 
                this.props.history.location.pathname === "/prestamo-en-linea-login" ? 
                  <title>Accede a tu cuenta Prestto. Información sobre tu préstamo en línea</title>: ''
            }
            {/* <meta property="og:image" content="path/to/image.jpg" />*/}
        </MetaTags>
        <div className= {this.props.history.location.pathname === '/home' ? "bgdegradado" : "bggray" }>
            <Route exact path="/" component={ Home } />
            <Route path="/prestamo-en-linea-contacto" component={ Contacto } />
            <Route path="/status" component={ Status } />
            <Route path="/prestamo-en-linea-login" component={ Login } />
            <Route path="/prestamo-en-linea-registro" component={ Registro } />
            <Route path="/confirmatusdatos" component={ ConfirmaDatos } />
            <Route path="/prestamo-en-linea-preguntas" component={ Preguntas } />
            <Route path="/graciasporturegistro" component={ Thankyoupage } />
            <Route path="/micuenta" component={ MiCuenta } />
            <Route path="/resetpassword" component={ ResetPassword } />
            <Route path="/avisodeprivacidad" component={ AvisodePrivacidad } />
            <Route path="/terminosycondiciones" component={ TerminosyCondiciones } />
            <Route path="/cat" component={ Cat } />
            <Route path="/une" component={ Une } />
            <Route path="/payment/:nombre/:email/:id/:barcode/:monto/:vigencia" component={ Payment } />
            <Route path="/contrato" component={ Contrato } />
        </div>
      </Router>
    )
  }
}
function select(state) {
  return {
     visibleTodos: state.todos
  }
}
export default connect(select)(App);

