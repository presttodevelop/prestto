import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
/* Images */
import cohetelado from '../assets/img/icons/icon1.png';

const mapStyles = {
  width: '100%',
  height: '100%'
};



class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          email:'',
          message:'',
          issLogged:false,
          errorMessage:false,
          center: {
            lat: 59.95,
            lng: 30.33
          },
          zoom: 11
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {  
      console.log("contacto", this.state)
      event.preventDefault();
      let data = {
        nombre: this.state.username,
        email:this.state.email,
        message:this.state.message
      }

      axios.post(`https://prestto.mx/api/sendContacto.php?nombre=${data.nombre}&email=${data.email}&mensaje=${data.message}`)
      .then(res => {
        this.props.history.push('/graciasporturegistro/#contacto');
      })
      .catch (error => console.log(error) )
      
    }
  

    render(){
      
        return (
          <div>
           <NavBar location={this.props.history} />
            <div class="container-fluid container-main container-inside">
              <h1 className="text-center title-bold-h">¿Tienes dudas sobre tu préstamo en línea?</h1>
              <p className="text-center subtitle-two">Contáctanos</p>
            <div class="row">
              <div class="col-sm  cotainer-contacto">
                <form onSubmit={ this.handleSubmit }>
                  <div className="form-group">
                      <label for="nombre">Nombre Completo</label>
                      <input 
                          type="nombre" 
                          className="form-control" 
                          placeholder="Juan Lopez"
                          value= { this.state.username }
                          onChange= { (e) => { this.setState({ username: e.target.value })}}
                      />
                  </div>
                  <div className="form-group">
                      <label for="email">Email</label>
                      <input 
                          type="email" 
                          className="form-control" 
                          placeholder="nombre@gmail.com"
                          value= { this.state.email }
                          onChange= { (e) => { this.setState({ email: e.target.value })}}
                      />
                  </div>
                  <div className="form-group">
                      <label for="email">Mensaje</label>
                      <textarea 
                          type="text-area" 
                          rows="4" cols="50"
                          className="form-control" 
                          placeholder="Mensaje"
                          value= { this.state.message }
                          onChange= { (e) => { this.setState({ message: e.target.value })}}
                      />
                  </div>
                  <div className="form-group">
                    <input type="submit" value="ENVIAR"  className="send_button" />
                  </div>
                </form>
              </div>
              <div class="col-sm  container-text-contacto">
                  <p className="parrafo"><span className="texto_bullet_contacto"> Nuestro horario de atención:</span></p>
                  <p className="contacto-text-dos">Lunes a Viernes de 8:00 a 20:00</p>
                  <p className="contacto-text-dos">y Sábados de 8:00 a 14:00</p>
                  <hr></hr>
                  <p className="parrafo"><span className="texto_bullet_contacto"> Envia un email:</span></p>
                  <p className="contacto-text-dos">contacto@prestto.mx</p>
                  <hr></hr>
                  <p className="parrafo"><span className="texto_bullet_contacto"> Nuestra dirección:</span></p>
                  <p className="contacto-text-dos">Av. Nuevo León #213 - 602</p>
                  <p className="contacto-text-dos">Col. Condesa</p>
                  <p className="contacto-text-dos">Cuautémoc CDMX</p>
              </div>
            </div>


            <div className="map-contacto">
            <div className="google-map-code">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.1782379063593!2d-99.17395214923272!3d19.40470338683596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6bb5b7b7b9%3A0x628ee79947da26c3!2sAv%20Nuevo%20Le%C3%B3n%20213%2C%20Hip%C3%B3dromo%2C%20Cuauht%C3%A9moc%2C%2006100%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1603669739111!5m2!1sen!2sus" width="100%" height="300px" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            </div>
          </div>
          <Footer location={this.props.history} />
          </div>
        );
      }
  }

export default Contacto;
