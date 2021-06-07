import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import axios from 'axios';

/* Images */
import cohetelado from '../assets/img/icons/icon1.png';
import '../styles/login.css'




class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {  
        event.preventDefault();
        let email = this.state.email;
        //Validate email in BD
        axios.get(`https://prestto.mx/api/resetPassword.php?email=${email}`)
        .then(res => {
            console.log("email", email)
            this.props.history.push('/')
        })
        .catch (error => console.log(error))
    }

    renderMessage(){
        return (
            <div className="alert alert-danger mx-auto mt-03" role="alert">
                Usuario o contraseña incorrecta!
            </div>
        )
    }


    render() {

        return (
        <div>
            <NavBar location={this.props.history} />
                <div className="container-fluid container-main container-inside">
                    <div className="row">
                        <div className="col container_thank">
                            <h3 className="text-center titles-gracias">¡Recupera tu contraseña!</h3>
                            <p className="text-center">Revisa la bandeja de tu correo electrónico <br></br> para restablecer tu contraseña.</p>
                            <div className="container col-md-reset"> 
                                    <form onSubmit={ this.handleSubmit }>
                                        <div className="form-group">
                                            <label for="email">Correo electrónico</label>
                                            <input 
                                                type="email" 
                                                className="color-form-contacto" 
                                                placeholder="name@example.com"
                                                value= { this.state.email }
                                                onChange= { (e) => { this.setState({ email: e.target.value })}}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="ENVIAR"  className="send_button" />
                                        </div>
                                    </form>
                            </div> 
                        </div>
                    </div>
                </div>
            <Footer location={this.props.history} />
        </div>
        );
      }
  }

export default ResetPassword;
