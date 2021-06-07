import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/login.css'

import cohetepuf from '../assets/img/cohete.png';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

/* Images */
import cohetelado from '../assets/img/icons/icon1.png';
import marciano from '../assets/img/icons/icon2.png';
import planeta from '../assets/img/icons/icon3.png';

//CONECTAR COMPONENTE CON REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveUserLogin } from '../redux/actions';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:'',
            issLogged:false,
            errorMessage:false,
            errorMessageTwo: false,
            resetPassowrd:false,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {  
        event.preventDefault();

        let data = {
            username: this.state.username,
            password: this.state.password,
        }

        //Validate email in BD
        axios.get(`https://prestto.mx/api/loginPres.php?email=${data.username}`)
        .then(res => {
        let idexists = res.data;
        if (idexists.length > 0) {
            let id=res.data[0].id;
            let contrasena=res.data[0].contrasena;
            if (contrasena === this.state.password) {
                //Send to Redux
                this.props.saveUserLogin(res);
                this.props.history.push(`/micuenta/`);
            }
            else {
                this.setState({ resetPassowrd:true});
            }
        }
        else {
            this.setState({ errorMessage:true});
        }
        })
        .catch (error => console.log(error))
            this.setState({ errorMessage:true });
    }


    render() {
        return (
        <div>
            <NavBar location={this.props.history} />
                <div className="container-fluid container-main container-inside">
                    <section id="login">
                        <div className="container">
                        <div className="row">
                            <div className="col-sm padding-loggin">
                            <h1 className="title-bold-h">Accede a tu cuenta Prestto.</h1>
                            <p className="parrafo-semibild">Información sobre tu préstamo en línea </p>
                            <div className="container-parrafo-completo">
                                <p className="parrafo"><span className="img_bullet"><img src={ cohetelado } alt="prestto-prestamos-en-linea-13" className="icon_bullet"/></span><span className="texto_bullet"> Solución fácil y rápida para conseguir dinero.</span></p>
                                <p className="parrafo"><span className="img_bullet"><img src={ marciano } alt="prestto-prestamos-en-linea-14" className="icon_bullet"/></span><span className="texto_bullet"> Recibe el dinero en pocos minutos.</span></p>
                                <p className="parrafo"><span className="img_bullet"><img src={ planeta } alt="prestto-prestamos-en-linea-15" className="icon_bullet"/></span><span className="texto_bullet"> Sin necesidad de ir a un banco y hacer largas filas.</span></p>
                            </div>
                            </div>
                            <div className="col-sm padding-loggin-b">
                            <h3 className="title-bold-h text-center padding-5">Inicia Sesión</h3>
                                <form onSubmit={ this.handleSubmit }>
                                    <div className="form-group">
                                        <label for="email">Usuario</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="name@example.com"
                                            value= { this.state.username }
                                            onChange= { (e) => { this.setState({ username: e.target.value })}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="*******************"
                                            value= { this.state.password }
                                            onChange= { (e) => { this.setState({ password: e.target.value })}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <p className="warning-msg">Si no recuerdas tu contraseña da <Link to="/resetpassword" className="link-to">clic aquí</Link></p>
                                    </div> 
                                    { this.state.errorMessage === true ?
                                    <div className="form-group">
                                        <p className="error-msg">Usuario o Password inválido</p>
                                    </div> : ''
                                    }
                                    { this.state.errorMessageTwo === true ?
                                    <div className="form-group">
                                        <p className="error-msg">El email no está registrado, debes registar tu préstamos <Link to="/prestamo-en-linea-registro" className="link-to-to">aquí</Link></p>
                                    </div> : ''
                                    }
                                    <div className="form-group">
                                        <input type="submit" value="INGRESAR"  className="send_button" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                </section>
                </div>
          <Footer location={this.props.history} />
          </div>
        );
      }
  }

  /*Propiedades que envia*/
  const mapDispatchToProps = dispatch => {
    return {
        saveUserLogin : (data) => dispatch({
        type: 'LOGIN_USER',
        payload: data
    })
    }
  };
  export default connect(null,mapDispatchToProps)(Login);
