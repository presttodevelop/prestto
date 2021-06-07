import React, { Component } from 'react';

import CodigoVerificacion from './CodigoVerificacion'

class DatosdeContacto extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      apellidopaterno:'',
      apellidomaterno:'',
      email:'',
      genero:'',
      curp:'',
      rfc:'',
      estado:'Selecciona un estado',
      municipio:['Selecciona un municipio'],
      ciudad:'Selecciona una ciudad',
      colonia:'Selecciona una ciudad',
      calle:'',
      cp:'',
      numeroexterior:'',
      numerointerior:'',
      telefonofijo:'',
      parentesco:'',
      referenciapellido:'',
      telfijoreferencia:'',
      nivelestudios:'',
      salarioneto:'',
      ocupacion:'',
      deudas:'',
      frecuenciadepago:'',
      clabe:'',
      banco:'', 
      prestamo:'',
      tiempoprestamo:'',
      fechadepago:'',
      totalapagar:'',
      codigodepromocion:'',
      aceptoterminoscondiciones:'',
      uploadFile1:'',
      uploadFile2:'',
      aceptoterminosuno:'',
      consultamihistorial:'',
      conocimientodelcliente:'',
      cable:'',
      errorMessage:false,
      dia: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      mes:['Enero','Febrero','Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      tateView:'datospersonales',
      messageToUser:'',
      datoscasa:0,
      historial:0,
      datosEmpleo:0,
      datospersonales:1,
      felicidades:0,
      registro:0,
      tarjetadebito:1,
      confirmacondiciones:'',
      obtenerprestamo:'',
      whatsMessage:'',
      datosbancarios:0,
      value: 20,
      setValue: 1000,
      setDias:20,
      interes:2,
      todoslosestados:[
        "Ciudad de México",
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Coahuila de Zaragoza",
        "Colima",
        "Chiapas",
        "Chihuahua",
        "Durango",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "México",
        "Michoacán de Ocampo",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz de Ignacio de la Llave",
        "Yucatán",
        "Zacatecas"],
      todoslosmunicipios:[],
      todaslasciudades:[],
      todosloscodigos:[],
      todaslascolonias:[],
      error:false,
      msginput:'',
    };

    this.handleClick = this.handleClick.bind(this);
    this.sendErrorMsg = this.sendErrorMsg.bind(this)
}


  sendErrorMsg(value) {
    switch(value) {
      case 'clabelength':
         this.setState({error:true})
         this.setState({msginput: 'La CLABE debe ser 18 dígitos.' })
        break;
      case 'clabe':
        this.setState({error:true})
        this.setState({msginput: 'Clabe Invalida.' })
        break;
      default:
        this.setState({error:false})
    }
  }



  handleClick(event) {
 if (event === 'datospersonales') {
this.setState({ stateView:'datoscasa'});
      /*if (this.state.name === null || this.state.name === '' || this.state.apellidomaterno === null || this.state.apellidopaterno === ''
          || this.state.apellidomaterno === null || this.state.apellidomaterno === '' || this.state.cel === null || this.state.email === null 
          || this.state.cel === '' ||this.state.email === '' ) {
            this.setState({ errorMessage:true, messageToUser:'Debes llenar todos los campos'})
            setTimeout(()=>{
              this.setState({ errorMessage:false,messageToUser:''})
            }, 3000);
              
      }
      else {
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
          this.setState({ stateView:'datoscasa'})
         }
         else {
          this.setState({ errorMessage:true, messageToUser:'Email invalido'})
          setTimeout(()=>{
            this.setState({ errorMessage:false,messageToUser:''})
            }, 3000);
         }
         this.whatsapp();
         this.setState({ stateView:'datoscasa'})
         
      }*/
      /*this.whatsapp();*/
    }
}
/* Vista 1*/
render() {
  console.log("datospersonales",this.state.nombre)
  return (
    <div id="datospersonales" className="container-form">
      <h4 className="title-form">Datos de contacto</h4>
    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label>Nombre*</label>
              <input 
                  type="text" 
                  id="nombre"
                  className="form-control" 
                  placeholder="Juan Pablo"
                  value= { this.state.nombre }
                  onChange= { (e) => { this.setState({ nombre: e.target.value })}}
                  required
              />
            </div>
          </div>

        <div className="col-sm">
          <div className="form-group">
            <label>Apellido Paterno*</label>
            <input 
                type="text" 
                id="apellidopaterno"
                className="form-control" 
                placeholder="García"
                value= { this.state.apellidopaterno }
                onChange= { (e) => { this.setState({ apellidopaterno: e.target.value })}}
                required
            />
          </div>
        </div>

      </div>
    </div>
    {/* Segunda ROW */}
      <div className="container">
        <div className="row">
          <div className="col-sm">
          <div className="form-group">
            <label>Apellido Materno*</label>
            <input 
                type="text" 
                id="apellidomaterno"
                className="form-control" 
                placeholder="Pérez"
                value= { this.state.apellidomaterno }
                onChange= { (e) => { this.setState({ apellidomaterno: e.target.value })}}
                required
            />
          </div>
        </div> 
        <div className="col-sm">
          <div className="form-group">
            <label>Teléfono Celular</label>
            <input 
                type="tel" 
                id="celular"
                className="form-control" 
                placeholder="(55) 55435555"
                value= { this.state.celular }
                maxLength="10"
                onChange= { (e) => { this.setState({ celular: e.target.value })}}
                required
            />
          </div>
        </div>
        </div>
      </div>
      {/* Tercer ROW */}
      <div className="container">
        <div className="row">

        <div className="col-sm">
          <div className="form-group">
            <label>Correo electrónico*</label>
            <input 
                type="email" 
                id="email"
                className="form-control" 
                placeholder="Correo electrónico"
                name="email"
                pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                required
                value= { this.state.email }
                onChange= { (e) => { this.setState({ email: e.target.value })}}
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="form-group">
            <div className="pointer button_next" onClick={() => this.handleClick('datospersonales')}> Siguiente </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
}

export default DatosdeContacto;
