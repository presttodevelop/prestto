import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
/* Images */
import cohetelado from '../assets/img/icons/icon1.png';
import '../styles/login.css'



class Thankyoupage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password:'',
          issLogged:false,
          errorMessage:false,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {  
        event.preventDefault();
        if ( this.state.username === "admin@gmail.com" && this.state.password === "admin123") {
            this.setState({ username:'' , password: '', issLogged: true });
        } else {
            this.setState({ username:'' , password: '', issLogged: false, errorMessage:true });
        }

    }

    renderMessage(){
        return (
            <div className="alert alert-danger mx-auto mt-03" role="alert">
                Usuario o contraseña incorrecta!
            </div>
        )
    }


    render() {
        let location = !this.props.location ? this.props.location : this.props.location.hash;
        return (
        <div>
            <NavBar location={this.props.history} />
          <div className="container-fluid container-main container-inside">
              <div className="row">
                <div className="col container_thank">
                    <h3 className="text-center titles-gracias"> { location === '#contacto' ? `¡GRACIAS POR TUS COMENTARIOS!` : `¡GRACIAS POR SOLICITAR TU PRÉSTAMO!` }</h3>
                    <img src={cohetelado} alt="prestto-prestamos-en-linea-30" className="img-thankyou"/>
                    <p className="text-center">Revisa la bandeja de tu correo electrónico <br></br> con la confirmación y status de tu registro.</p>
                    
                </div>
            </div>
          </div>
            <Footer location={this.props.history} />
        </div>
        );
      }
  }

export default Thankyoupage;
