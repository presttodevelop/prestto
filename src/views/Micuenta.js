import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contrato from "../components/Contrato";
import Slider from '@material-ui/core/Slider';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import NumberFormat from 'react-number-format';
import Barcode from "react-hooks-barcode";

import Payment from "../views/Payment";

/* Imagenes */
import icono4 from '../assets/img/iconosformulario/Icon_04.png';
import whatsapp from '../assets/img/Whatsapp.png';
import approved from '../assets/img/approved.png';
import remove from '../assets/img/remove.png';
import marciano from '../assets/img/icons/icon2.png';
import banco from '../assets/img/banco.png';
import cashpng from '../assets/img/cashpng.png';
import transfer from '../assets/img/Transfer.png';

import "../styles/login.css";

//CONECTAR COMPONENTE CON REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Micuenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateView:'misPrestamos',
      value: 20,
      setValue: 1000,
      setDias:7,
      interes:41.064,
      tasadiaria:41.064 / 30,
      meses:'3 meses',
      montoapagar:0,
      aceptoterminoscondicionescontratomsg:false,
      nombre:'',
      due_date:null,
      nuevacontrasena:'',
      nuevacontrasenab:'',
      errorMixContrasenas: false,
      successfullpassword: false,
      fillPasswords:false,
      lengthPassword:false,
      validatePasswordNumomayuscula:false,
      data:[],
      kindpayment:null,
      passa: false,
      passb: false,
      celular:'',
      email:'',
      barcode:null,
      idpago:null,
      loading:false,
      info:false,
      montoapagarpayment:null,
      barcode_img:null,
    }
    this.misPrestamos = this.misPrestamos.bind(this)
    this.miPerfil = this.miPerfil.bind(this)
    this.contrasena = this.contrasena.bind(this)
    this.realizarPago = this.realizarPago.bind(this)
    this.handleSliderChange = this.handleSliderChange.bind(this)
    this.handleSliderChangeDias = this.handleSliderChangeDias.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.kindpayment = this.kindpayment.bind(this)
    this.edit = this.edit.bind(this)
    this.close = this.close.bind(this)
  }



  componentDidMount(){
    /*sessionStorage.removeItem("id");*/
    let user = this.props.user['payload'];
    let id = 0;
    if ( user ) {
      let data =  this.props.user['payload'].data[0];
      id = data.id;
         //Validate email in BD
      axios.get(`https://prestto.mx/api/loginPres.php?id=${id}`)
        .then(res => {
          this.setState({data: res.data[0]});
          let { id } = this.state.data
          /*sessionStorage.setItem("id", id);*/
        })
        .catch (error => console.log(error))
    }
    else {
      /*this.props.history.push(`/login/`);*/
    }
  }

  /*componentWillMount(){
    let idStorage = sessionStorage.getItem("id") ? sessionStorage.getItem("id") : 0;
    if(idStorage  === 0) {}
    else
      {
        //Validate email in BD
        axios.get(`https://prestto.mx/api/loginPres.php?id=${idStorage}`)
        .then(res => {
          this.setState({data: res.data[0]});
          //let { id } = this.state.data
          //sessionStorage.setItem("id", id);
        })
        .catch (error => console.log(error))
      }
  }*/

  close(){
      this.props.history.push('/')
  }
  changePassword(){
    let { nuevacontrasena, nuevacontrasenab } = this.state;
    let { email, id  } = this.state.data
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    //Se muestra un texto válido/inválido a modo de ejemplo
    if (regex.test(nuevacontrasena)) {
        //console.log('valido', nuevacontrasena)
                 //Validate email in BD
        axios.get(`https://prestto.mx/api/resetPassword.php?id=${id}&email=${email}&nuevopassword=${nuevacontrasena}`)
        .then(res => {
          //console.log("UPDATE",res)
        })
        .catch (error => console.log(error))
    } else {
        this.setState({validatePasswordNumomayuscula:true})
        setTimeout(()=>{
          this.setState({ validatePasswordNumomayuscula:false})
        }, 5000);
    }

    if(nuevacontrasena === ''  || nuevacontrasenab === '') {
      this.setState({fillPasswords:true})
      setTimeout(()=>{
        this.setState({ fillPasswords:false})
      }, 5000);
    }
    if (nuevacontrasena.length < 8) {

        this.setState({lengthPassword:true})
        setTimeout(()=>{
          this.setState({ lengthPassword:false})
        }, 5000);
      }
    
    if (nuevacontrasena === nuevacontrasenab )
      {
          this.setState({successfullpassword:true})
          setTimeout(()=>{
            this.setState({ successfullpassword:false})
          }, 5000);
      }
      else {
          this.setState({errorMixContrasenas:true})
          setTimeout(()=>{
            this.setState({ errorMixContrasenas:false})
          }, 5000);
      }
  }

  handleSliderChange = (event, newValue) => {
    this.setState({ setValue:newValue });
  };
  handleSliderChangeDias = (event, newValue) => {
    this.setState({ setDias: newValue, idpago:'', barcode:'' });
  }
  
  edit(event){
    let val = event.target.id;
    if( val === 'info') {
      this.setState({info: true })
    }
  }

  handleClick() {
    /*let res = '{"id":"8284959","barcode":"BANWIRE20210228105833","barcode_img":"iVBORw0KGgoAAAANSUhEUgAAAZAAAAAeAQMAAAA4vNqTAAAABlBMVEX\/\/\/8AAABVwtN+AAAAAXRSTlMAQObYZgAAAEZJREFUOI3ty7EJwDAMBEDDtwKvEnD7oNUf1Aa0ikGtiswR0PW3ygCa7rlslZTwh8qs2OlGshmBnTjQ66HONWXKlClT\/lw+TcTri0F6h3QAAAAASUVORK5CYII=","due_date":"2021-03-03"}1'
    var dfds = res.split("}");
    console.log("res", dfds[0])*/
    let {totalaprestar} = this.state.data;
    let { id, nombre, apellidopaterno, apellidomaterno,celular,email,idcontrato} = this.state.data
    let completename = nombre + apellidopaterno + apellidomaterno;
    this.setState({loading:true})
    axios.post(`https://prestto.mx/api/sendPayment.php?iduser=${idcontrato}&nombre=${completename}&amount=${totalaprestar}&email=${email}&cel=${celular}`) 
    .then(res => {
    let dataresponse = res.data.split("}");
    let  json= dataresponse[0]+'}';
    let jsonObject = JSON.parse(json);
    this.state.idpago = jsonObject['id'];
    this.state.barcode = jsonObject['barcode'];
    this.state.barcode_img = jsonObject['barcode_img'];
    this.state.due_date = jsonObject['due_date'];
    setTimeout(() => {
      /*this.setState({ kindpayment: 'banwiresponse' })*/
      const win = window.open(`/payment/${completename}/${email}/${    this.state.idpago}/${this.state.barcode}/${totalaprestar}/${this.state.due_date}`, "_blank");
      win.focus();
      
    }, 3000);

    let data = {  
      user_id:id,
      nombre:nombre,
      apellidopaterno:apellidopaterno,
      apellidomaterno:apellidomaterno,
      email:email,
      idpayment:jsonObject['id'],
      paymentreference:jsonObject['barcode'],
      monto:totalaprestar
    }
  
  let idprestamo = idcontrato + '_' + 1;
  axios.post(`https://prestto.mx/api/paymentReference.php?id=${data.user_id}&nombre=${data.nombre}&apellidopaterno=${data.apellidopaterno}&apellidomaterno=${data.apellidomaterno}}&idcontrato=${nombre}}&idprestamo=${idprestamo}&email=${data.email}&idpayment=${data.idpayment}&paymentreference=${data.paymentreference}&monto=${data.monto}`)
  .then(res => {
    console.log("miapires",res)
  })
  .catch (error => console.log(error))
  }).finally(() => {
    this.setState({loading:false})
    })
  }


  miPerfil() {
    let { nombre, apellidopaterno, apellidomaterno, statuscliente, email, celular, pictures1, pictures2,
      genero, curp, rfc, estado, municipio, ciudad, colonia, calle, numeroexterior, parentesco, frecuenciadepago, numerointerior,telfijoreferencia, referenciapellido, nivelestudios, ocupacion, salarioneto, idcontrato } = this.state.data
    return(
      <div className="container-form">
        {/* INFORMACIÓN */}
          <h4 className="title-form-micuenta">Ajustes de Perfil</h4>
          <div class="row micuenta">
            <div class="col container-row">
              <p className="contacto-subtitle">Información de contacto</p>
              <p id="info" className="text-right edit-micuenta" onClick={this.edit}>editar</p>
              <div className="container">
                <div className="row">
                  <div className="col-sm text-left">
                    <p className="tab_historial">Correo electrónico</p>
                    { this.state.info ?

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
                    :
                      <p className="tab_historial text-micuento">{ email }</p>
                    }
                  </div>
                  <div className="col-sm text-left">
                    <p className="tab_historial">Teléfono Celular</p>
                    { this.state.info ?

                      <input 
                      type="tel" 
                      id="celular"
                      className="form-control" 
                      placeholder="+52 (55) 55435555"
                      value= { this.state.celular }
                      maxLength="10"
                      onChange= { (e) => { this.setState({ celular: e.target.value })}}
                      required
                      />

                    :
                      <p className="tab_historial text-micuento">{ celular }</p>
                    }
                  </div>
                </div>
              </div>
            </div>
           {/* REFERENCIAS PERSONALES */}
            <div class="col container-row">
              <p className="contacto-subtitle">Referencias</p>
              <div className="container inside-micuenta">
                <div className="row">
                  <div className="col-sm text-left">
                    <p className="tab_historial">Relación con la referencia</p>
                    <p className="tab_historial text-micuento">{ parentesco }</p>
                  </div>
                  <div className="col-sm text-left">
                    <p className="tab_historial">Referencias</p>
                    <p className="tab_historial"></p>
                    <p className="tab_historial text-micuento">{ referenciapellido }</p>
                  </div>
                  <div className="col-sm text-left">
                    <p className="tab_historial">Teléfono Fijo</p>
                    <p className="tab_historial"></p>
                    <p className="tab_historial text-micuento">{ referenciapellido }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        {/* DOCUMENTOS */}
        <div class="row container-up">
            <div class="col container-row especial-row">
              <p className="contacto-subtitle">INE/IFE documentos</p>
              <div className="container inside-micuenta">
                <div className="row">
                  <div className="col-sm text-center">
                    <p className="tab_historial">INE/IFE Parte Frontal</p>
                    <p className="tab_historial text-center">{ pictures1 ? <img className="imginfo" src={ approved } alt="prestto-prestamos-en-linea-16"/> : <img className="imginfo" src={ remove }  alt="Prestto" /> }</p>
                  </div>
                  <div className="col-sm text-center">
                    <p className="tab_historial">INE/IFE Parte Posterior</p>
                    <p className="tab_historial text-center">{ pictures2 ? <img className="imginfo" src={ approved }  alt="prestto-prestamos-en-linea-17"/> : <img className="imginfo" src={ remove }  alt="Prestto" /> }</p>
                  </div>
                </div>
              </div>
            </div>
           {/* REFERENCIAS PERSONALES */}
            <div class="col container-row">
              <p className="contacto-subtitle-c">Información de Empleo</p>
              <div className="container inside-micuenta">
                <div className="row">
                  <div  className="row inside-row alineacion-col">
                    <div className="col-sm-esp text-left">
                      <p className="tab_historial">Nivel de estudios</p>
                      <p className="tab_historial response text-micuento">{ nivelestudios }</p>
                    </div>
                    <div className="col-sm-esp text-left">
                      <p className="tab_historial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ocupación</p>
                      <p className="tab_historia response text-micuento">&nbsp;&nbsp;&nbsp;{ ocupacion }</p>
                    </div>
                  </div>
                  <div  className="row inside-row">
                    <div className="col-sm text-left">
                      <p className="tab_historial">Gasto promedio mensual en deudas, Mx pesos</p>
                      <p className="tab_historial response text-micuento">{ referenciapellido }</p>
                    </div>
                    <div className="col-sm text-left">
                      <p className="tab_historial">Salario neto mensual</p><br></br>
                      <p className="tab_historial response text-micuento">{ parentesco }</p>
                    </div>
                  </div>
                  <div  className="row inside-row">
                    <div className="col-sm text-left">
                      <p className="tab_historial">Frecuencia de Pago</p>
                      <p className="tab_historial response text-micuento">{ frecuenciadepago }</p>
                    </div>
                    <div className="col-sm text-left">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* DATOS PERSONALES */}
        <div class="row container-up">
            <div class="col container-row up-card">
              <p className="contacto-subtitle-b">Datos Personales</p>
              <div className="container inside-micuenta">
                <div className="row">
                  <div className="col-sm text-left">
                    <p className="tab_historial">Nombre Completo</p>
                    <p className="tab_historial text-micuento">{ nombre + ' ' + apellidopaterno + ' ' + apellidomaterno}</p>
                  </div>
                  <div className="col-sm text-left">
                    <p className="tab_historial">Género</p>
                    <p className="tab_historial text-micuento">{ genero }</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm text-left">
                    <p className="tab_historial">CURP</p>
                    <p className="tab_historial text-micuento">{ curp }</p>
                  </div>
                  <div className="col-sm text-left">
                    <p className="tab_historial">RFC</p>
                    <p className="tab_historial text-micuento">{ rfc }</p>
                  </div>
                </div>
                <h5 className="title-dire">Dirección</h5>
                <div className="row">
                  <div className="col-sm text-left">
                    <p className="tab_historial">Estado</p>
                    <p className="tab_historial text-micuento">{ estado }</p>
                  </div>
                  <div className="col-sm text-left">
                    <p className="tab_historial">Municipio</p>
                    <p className="tab_historial text-micuento">{ municipio }</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm text-left">
                    <p className="tab_historial">Ciudad</p>
                    <p className="tab_historial text-micuento">{ ciudad }</p>
                  </div>
                  <div className="col-sm text-left">
                    <p className="tab_historial">Colonia</p>
                    <p className="tab_historial text-micuento">{ colonia }</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm text-left">
                    <p className="tab_historial">Calle</p>
                    <p className="tab_historial text-micuento">{ calle }</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm text-left">
                    <p className="tab_historial">Número Exterior</p>
                    <p className="tab_historial text-micuento">{ numeroexterior }</p>
                  </div>
                  <div className="col-sm text-left">
                    <p className="tab_historial">Número Interior</p>
                    <p className="tab_historial text-micuento">{ numerointerior }</p>
                  </div>
                </div>
              </div>
              <div className="row">
                  <div className="col-sm text-left">
                    <p className="tab_historial">Teléfono Fijo</p>
                    <p className="tab_historial text-micuento">{ celular }</p>
                  </div>
              </div>
            </div>
            <div class="col">
  
            </div>
          </div>
      </div>
    )
  }


  historialPrestamos() {
    let { nombre, apellidopaterno, totalaprestar, fecha, fechadepagoen } = this.state.data
    return(
      <div className="container-form">
          <h4 className="title-form-micuenta">Historial de tus Préstamos</h4>
          <div className="container-tabs-historial">
              <div className="container">
                <div className="row">
                  <div className="col-sm text-center col-sm-mobile">
                    <p className="tab_historial">No. de préstamo</p>
                  </div>
                  <div className="col-sm text-center col-sm-mobile">
                    <p className="tab_historial">Monto del préstamo</p>
                  </div>
                  <div className="col-sm text-center col-sm-mobile">
                    <p className="tab_historial">Fecha de desembolso</p>
                  </div>
                  <div className="col-sm text-center col-sm-mobile">
                    <p className="tab_historial">Fecha de pago</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="container-tabs-historial-medio shadow">
              <div className="container">
                <div className="row">
                  <div className="col-sm text-center col-sm-mobile">
                    <p className="tab_historial">1</p>
                  </div>
                  <div className="col-sm text-center col-sm-mobile">
                    <p className="tab_historial">$ { totalaprestar }</p>
                  </div>
                  <div className="col-sm text-center col-sm-mobile">
                    <p className="tab_historial">{ fecha }</p>
                  </div>
                  <div className="col-sm text-center col-sm-mobile">
                    <p className="tab_historial">{ fechadepagoen }</p>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  }

  contrasena(){
    return(
        <div className="container-form">
            <h4 className="title-form-micuenta">Modifica tu contraseña</h4>
            <div className="row contrasena-container">
              <div className="col text-left">
                <p>Nueva Contraseña</p>
                  <input 
                        type={ this.state.passa ? "text" : "password" }
                        className="form-control" 
                        placeholder="**************"
                        value= { this.state.nuevacontrasena }
                        maxLength="12"
                        onChange= { (e) => { this.setState({ nuevacontrasena: e.target.value })}}
                        required
                    />
              </div>
              <div className="col text-left"></div>
          </div>  
          <div className="row contrasena-container">
          <div className="col text-left">
                <p>Repite Contraseña</p>
                  <input 
                        type={ this.state.passa ? "text" : "password" }
                        className="form-control" 
                        placeholder="**************"
                        value= { this.state.nuevacontrasenab }
                        maxLength="12"
                        onChange= { (e) => { this.setState({ nuevacontrasenab: e.target.value })}}
                        required
                    />
                    <p className="pass-div"><input type="checkbox" onClick={(e) => { this.setState({ passa: !this.state.passa })}} /><span className="pass-mo"> Mostrar Contraseña</span></p>
            </div>
              <div className="col text-left"></div>
          </div>  
          <div className="row">
              <div className="form-group-dos">
                <div className="pointer_atras_confirma_b btn-sendpassword" onClick={() => this.changePassword()}>Enviar </div>
              </div>
          { this.state.lengthPassword === true ?
            <div className="container-msg">
                <p className="error-msg">La contraseña ser mayor a 8 dígitos.</p>
            </div> : ''
            }
          { this.state.validatePasswordNumomayuscula === true ?
            <div className="container-msg">
                <p className="error-msg">La contraseña debe contener una mayúscula y un número o carácter.</p>
            </div> : ''
            }
          { this.state.errorMixContrasenas === true ?
            <div className="container-msg">
                <p className="error-msg">No son iguales las contraseñas</p>
            </div> : ''
            }
          { this.state.successfullpassword === true ?
            <div  className="container-msg">
                <p className="error-msg">Tu contraseña ha sido modificada satisfactoriamente.</p>
            </div> : ''
            }
            { this.state.fillPasswords === true ?
            <div  className="container-msg">
                <p className="error-msg">Debes llenar los dos campos.</p>
            </div> : ''
            }
          </div>  
        </div>
    )
  }

  kindpayment(event){
    this.setState({ kindpayment: event.target.id })
  }

  deposito(){
    let{ id, idcontrato, fecha, totalaprestar, fechadepagoen, statuscliente, nombre, apellidopaterno, apellidomaterno,}= this.state.data
    return(
      <div className="container-payments">
        <div className="row">
          <div className="col">
            <>
              <tr>
                <td className="td-pay">Banco:</td>
                <td className="td-pay-val">BANORTE</td>
              </tr>
              <tr>
                <td className="td-pay">Cuenta:</td>
                <td className="td-pay-val">0300226122</td>
              </tr>
              <tr>
                <td className="td-pay">Cuenta Clabe:</td>
                <td className="td-pay-val"> 072180003002261226</td>
              </tr>
              <tr>
                <td className="td-pay">A nombre:</td>
                <td className="td-pay-val">AREZ FINANCIERA SA DE CV SOFOM ENR</td>
              </tr>
              <tr>
                <td className="td-pay">Referencia:</td>
                <td className="td-pay-val">{id}</td>
              </tr>
              <tr>
                <td className="td-pay">Monto a pagar:</td>
                <td className="td-pay-val">{totalaprestar}</td>
              </tr>
            </>
          </div>
        </div>
      </div>
    )
  }

  banwireResponse(){
    let { idpago, barcode, barcode_img, due_date} = this.state;
    return(
        <Payment idpago={idpago} barcode={barcode} barcode_img={barcode_img} due_date={due_date}></Payment>
      )
    /*let { idpago, barcode, barcode_img, due_date} = this.state;
    const config = {
      background: "#f5f5f5",
      marginTop: "20px",
      marginBottom: "20px",
      fontOptions: "italic",
      width: 2
    };
    return(
      <div className="container-payments">
      <div className="form-group-dos center_div">
        <h5 className="text-center title-payment">Formato de Pago</h5>
        <p className="text-center mx-auto">Número de identificación de tu pago :</p>
        <p className="payment-reference mx-auto">
              { idpago }
        </p>
        <p className="text-center mx-auto">Referencia</p>
        <p className="payment-reference mx-auto">
              { barcode }
        </p>
        <p className="payment-referencen mx-auto">
            <Barcode value= { barcode } {...config} />
        </p>
        <p className="text-center mx-auto">Fecha límite de pago</p>
        <p className="payment-reference mx-auto">
              { due_date }
        </p>
        <p className="payment-reference-b mx-auto">
          <p className="text-left">Este cupón es válido únicamente para realizar el pago correspondiente y dentro de la fecha de vigencia establecida. La acreditación del mismo es aproximadamente alos 30 minutos hasta entonces el pago podrá ser corroborado por el vendedor.<br>
          </br>Cualquier aclaración sobre la compra, favor de comunicarse con el vendedor. Banwire no se hace responsable por cualquier reclamo ó aclaración, es responsabilidad del vendedor resolver cualquier situación relacionada con la compra del producto o servicio adquirido.<br></br>
          *Imprime el cupón de manera clara y legible, usa de preferncia impresora láser, conservalo en buen estado sin tachar ó doblar la parte del código de barras. En caso de no ser legible, la tienda puede rechazar elpago correspondiente.a1<br></br>
          **Las tiendas siguientes: Walmart, Bodega Aurrera, Bodega, Aurrera Express, Mi Bodega Aurrera, Sam´s Club, Superema, Medimart Farmacia, Calimax, Tiendas Extra y Círculo K cobrarán una comisión de $ 8.00 MXN por concepto de pago.<br></br>
          **La tienda 7 Eleven cobrarán una comisión de $10.00 MXN por concepto de pago. <br></br>
          **Las tiendas siguientes: Telecomm, Soriana y Comercial Mexicana no cobrarán ninguna comisión por concepto de pago.</p>
        </p>
        <h5 className="text-center title-payment">¡Tu pago se verá reflejado en máximo 30 mins!</h5>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <button className="btn btn-outline-secondary pointer" type="button">Imprime comprobante</button>;

          }}
          content={() => window.print()}
        />
      </div>
      </div>
    )*/
  }
  

  pagocontarjeta(){
    let { totalaprestar } = this.state.data;
    return(
          <div className="container-payments">
            <div className="form-group-dos">
            <label>Monto total a pagar</label>
              {/*<input 
                  type="number" 
                  className="form-control" 
                  value= { this.state.montoapagarpayment }
                  maxLength="18"
                  onChange= { (e) => { this.setState({ montoapagarpayment: e.target.value })}}
                  placeholder={totalaprestar}
              />*/}
             <p className="contratocolor"><b> $ { totalaprestar }</b></p>
            </div>
            <div className="payment-leyend">
              <p className="mini-monto">Monto total a pagar incluyendo la comisión del proveedor es de: $10.00 MXN</p>
              <p className="monto-apagar"> <NumberFormat value={this.state.totalaprestar} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
              {/*<div className="row">
                <p><img src={ mastercard } className="paymentmethod rounded mx-auto d-block" alt="prestto-prestamos-en-linea-18"/></p>
                <p><img src={ visa } className="paymentmethod rounded mx-auto d-blocks" alt="prestto-prestamos-en-linea-19"/></p>
              </div>*/}
            </div>
          <p id="banwiresponse" className="btn btn-prestify-main btn-lg text-center rounded mx-auto d-block margin-especia" onClick={ this.handleClick }>  Generar formato de pago  </p>
          <p className="legend-pay"> Consulta las tiendas disponibles para realizar tu pago en tu formato de pago. Descarga el formato de pago para que lo puedas imprimir y proporcionar en tu tienda de preferencia. <br></br>La transacción se realiza a través de Banwire, líder de medio de pagos electrónico. Este proceso es completamente seguro, no almacenamos tus datos.</p>
        </div>
    )
  }

  realizarPago(){
    return(
      <div className="container-form">
        <h4 className="title-form-micuenta">Elige el método de Pago </h4>
          <div className="container payments">
            <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-sm mx-auto">
                      {/*<p className="text-center">Pago con tarjeta</p>*/}
                      <img src={banco} className="iconopagar rounded mx-auto d-block" alt="prestto-prestamos-en-linea-19"></img>
                      <p id="deposito" class="btn btn-payment-main btn-lg text-center rounded mx-auto d-block" onClick={ this.kindpayment }>Realizar Pago en Banco </p>
                </div>
                <div className="col-sm mx-auto">
                      {/*<p className="text-center">Pago con tarjeta</p>*/}
                      <img src={cashpng} className="iconopagar rounded mx-auto d-block" alt="prestto-prestamos-en-linea-20"></img>
                      <p id="tarjeta" class="btn btn-payment-main btn-lg text-center rounded mx-auto d-block" onClick={ this.kindpayment }> Realizar Pago en Efectivo </p>
                </div>
                <div className="col-sm mx-auto">
                    {/*<p className="text-center"> Depósito </p>*/}
                    <img src={ transfer }  className="iconopagar rounded mx-auto d-block" alt="prestto-prestamos-en-linea-21"></img>
                    <p id="deposito" class="btn btn-payment-main btn-lg text-center rounded mx-auto d-block"  onClick={ this.kindpayment }>  Realizar <br/> Transferencia </p>
                </div>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col">
            <p className="tasa-texto">Tasa de interés diaria promedio, desde 1.18%</p>
            </div>
          </div>

      </div>
            { 
              this.state.kindpayment === 'tarjeta' ? this.pagocontarjeta() :  this.state.kindpayment === 'deposito' ? this.deposito() : this.state.kindpayment === 'banwiresponse' ? this.banwireResponse():''
            }
      </div>
    )
  }

  misPrestamos(){
    let{ idcontrato, fecha, totalaprestar, fechadepagoen, statuscliente}= this.state.data
    return(
      <div className="container-form">
        <div className="container payments">
          <div className="row">
          <div className="col-sm-3">
            <div className="container-tasa"> </div>
          </div>
          <div className="col-sm-8">
            <div className="row container-payment-mn">
              <table>
                <tr className="row-tr">
                  <td>Número de Crédito</td>
                  <td>..............................................</td>
                  <td>{idcontrato}<span className="contratocolor" onClick={() => this.setState({stateView : 'Contrato'})}>| Contrato</span></td>
                </tr>
                <tr className="row-tr">
                  <td>Solicitud Aceptada</td>
                  <td>..............................................</td>
                  <td> {fecha} </td>
                </tr>
                <tr className="row-tr">
                  <td>Fecha de Desembolso de Crédito</td>
                  <td>..............................................</td>
                  <td> { fecha } </td>
                </tr>
                <tr className="row-tr">
                  <td>Monto de Crédito, en Mx Pesos</td>
                  <td>..............................................</td>
                  <td> $ {totalaprestar}</td>
                </tr>
                <tr className="row-tr">
                  <td> <span className="contratocolor" onClick={() => this.setState({stateView : 'Realizarpago'})}> Cantidad a pagar, en Mx Pesos {">"}</span></td>
                  <td>..............................................</td>
                  <td> $ {totalaprestar}</td>
                </tr>
                <tr className="row-tr">
                  <td>Duración del Crédito</td>
                  <td>..............................................</td>
                  <td>{fechadepagoen}</td>
                </tr>
                <tr className="row-tr">
                  <td>Cantidad pagada, en Pesos</td>
                  <td>..............................................</td>
                  <td>0</td>
                </tr>
                <tr className="row-tr">
                  <td>Estatus</td>
                  <td>..............................................</td>
                  <td>{statuscliente}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>   
    </div>
          { 
            this.state.kindpayment === 'tarjeta' ? this.pagocontarjeta() :  this.state.kindpayment === 'deposito' ? this.deposito() : this.state.kindpayment === 'banwiresponse' ? this.banwireResponse():''
          }
    </div>
    )

  }

  contrato(){
    return(
      <div className="contrato-containerb">
        <Contrato />
      </div>
    )
  }

  nuevoPrestamo(){
    let totalapagar = 0;
    let interesTotal = 0;
    let ivainteres = 0;
    let interesDiario = 0;
    
    interesDiario = this.state.setValue/100 * this.state.tasadiaria;
    interesTotal = interesDiario * this.state.setDias;
    ivainteres = interesTotal * 0.16;
  

    totalapagar =  this.state.setValue +  interesTotal + ivainteres;

    let { nombre, apellidopaterno, totalaprestar, fecha, fechadepagoen } = this.state.data
  
    return (
      <div id="datospersonales" className="container-form">
        <h4 className="title-form-micuenta">Bienvenido { nombre + ' ' + apellidopaterno } </h4>
        <p className="subtitle-form-micuenta">¡Solicita tu próximo préstamo!</p>
        <p className={ this.state.aceptoterminoscondicionescontratomsg ? "show error-msg text-center" :'hide'}> Debes aceptar Términos y Condiciones del contrato </p>
      {/* PRIMER ROW */}
      <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="form-group slider-group">
                <p className="text-left parrafomini">¿Cuánto dinero necesitas?</p>
                    <Slider
                      defaultValue={1000}
                      getAriaValueText={this.valuetext}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      step={100}
                      marks
                      min={1000}
                      max={5000}
                      onChange={this.handleSliderChange}
                    />
                <span className="text-left-monto-a">$1,000 </span>
                <span className="text-left-monto-b">$5,000 </span>
              </div>
            </div>
  
          <div className="col-sm">
            <div className="form-group slider-group">
              <label>¿Cuándo lo deseas pagar?</label>
                <Slider
                  defaultValue={10}
                  aria-labelledby="discrete-slider"
                  getAriaValueText={this.valueLabelFormatDias}
                  step={1}
                  valueLabelDisplay="auto"
                  marks
                  min={7}
                  max={30}
                  onChange={this.handleSliderChangeDias}
                />
                <span className="text-left-monto-a">7 días </span>
                <span className="text-left-monto-b">30 días </span>
            </div>
          </div>
        </div>
      </div>
      
        {/* Tercer ROW */}
        <div className="container container-confirma">
          <div className="row">
            <div className="col-sm">
              <div className="form-group-dos text-center center-data">
                <div className="d-flex flex-row bd-highlight mb-3">
                  <p className="p-2 bd-highlight circulo-icono-confirma"><img src={icono4} alt="prestto-prestamos-en-linea-21"></img></p><p className="p-2 bd-highlight mini-text text-center">Recibiras está cantidad <br></br><span className="font-more-big">$ {this.state.setValue} mxn</span></p>
                  </div>  
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group-dos text-center center-data">
                <div className="d-flex flex-row bd-highlight mb-3"><p className="p-2 bd-highlight circulo-icono-confirma"><img src={icono4} alt="prestto-prestamos-en-linea-22"></img></p><p className="p-2 bd-highlight mini-text text-center">Fecha de pago <br></br><span className="font-more-big">{  this.state.setDias } días </span></p>
              </div>  
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group-dos text-center center-data">
                <div className="d-flex flex-row bd-highlight mb-3"><p className="p-2 bd-highlight circulo-icono-confirma"><img src={icono4} alt="prestto-prestamos-en-linea-23"></img></p><p className="p-2 bd-highlight mini-text text-center">Total a pagar <br></br><span className="font-more-big">$ {  totalapagar.toFixed(2) } mxn</span></p>
              </div>  
            </div>
          </div>
          </div>
          </div>
  
        {/* Cuarta Row */}
        <div className="container container-confirma">
          <div className="row">
            <div className="col-sm">
              <div className="form-group-dos text-center">
                  <p>Costo anual total $3,629</p>
                  <p>Sin IVA, para fines informativos y de comparación exclusivamente</p>
              </div>
            </div>
            </div>
            <div className="row">
            <div className="col-sm">
              <div className="form-check-dos">
                <input 
                      type="checkbox" 
                      className="form-check-input" 
                      value= { this.state.aceptoterminoscondicionescontrato }
                      onChange= { (e) => { this.setState({ aceptoterminoscondicionescontrato: !this.state.aceptoterminoscondicionescontrato})}}
                  />
                  <label className="form-check-label">
                    He leído y aceptado las condiciones expresadas en el presente <a href="" target="_blank" className="colorlink">contrato</a>.
                  </label>
              </div>
            </div>
            </div>
          </div>
  
        <div className="container">
          <div className="row">
          <div className="col-sm">
            <div className="form-group text-center">
              <div className="pointer_atras_confirma button_next" onClick={() => this.handleClick('felicidades')}> Confirmar </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }


  render() {
    let session = document.cookie;
    let { stateView } = this.state
    return (
      <div>
          <NavBar location={ this.props.history } />
            <div className="container-fluid container-main container-inside bggray">
              <div className="row">
                    <div className="col-sm text-center titles-prestify-medium">
                      <p></p>
                    </div>
                    <div className="col-sm text-center titles-prestify-medium">
                      <p>Mi Cuenta</p>
                    </div>
                    <div className="col-sm text-center titles-prestify-medium">
                      <p><a href="https://api.whatsapp.com/send?phone=+525580387757&text=Hola! En un minuto, platicarás con nuestro agente especializado de Prestto. 
                       Para no perder la comunicación, por favor déjanos tu nombre y tu correo electrónico. 
                      ¡Recuerda que pedir tu préstamo no te llevará más de 10 minutos!" target="_blank" className="pass-mo">
                        <img src={whatsapp} className="whats-app" alt="prestto-prestamos-en-linea-24"></img>55 8038 7757</a></p>
                    </div>
                    <div className="col-sm text-center titles-prestify-medium">
                      <p className="header-mini-cuenta">Horario de atención: Lun a Vie de</p>
                      <p className="header-mini-cuenta">9:30 a 15:00 horas y de 17:00 a 19:00</p>
                    </div>
                </div>
              <div className="container-form-shadow">
              <div className="container-tabs-micuenta">
                <div className="container">
                  <div className="row">
                    <div className="col-sm text-center titles-prestify-medium tab-mobile-me">
                      <p className={stateView === 'misPrestamos' ? "tab_micuenta tab_micuenta_active" : "tab_micuenta" } onClick={() => this.setState({stateView : 'misPrestamos'})}>Mis préstamos</p>
                    </div>
                    <div className="col-sm text-center titles-prestify-medium tab-mobile-me">
                      <p className={stateView === 'Historial' ? "tab_micuenta tab_micuenta_active" : "tab_micuenta" } onClick={() => this.setState({stateView : 'Historial'})}>Historial de préstamos</p>
                    </div>
                    <div className="col-sm text-center titles-prestify-medium tab-mobile-me">
                      <p className={stateView === 'Realizarpago' ? "tab_micuenta tab_micuenta_active" : "tab_micuenta" } onClick={() => this.setState({stateView : 'Realizarpago'})}>Realizar Pago</p>
                    </div>
                    <div className="col-sm text-center titles-prestify-medium tab-mobile-me">
                      <p className={stateView === 'Miperfil' ? "tab_micuenta tab_micuenta_active" : "tab_micuenta" } onClick={() => this.setState({stateView : 'Miperfil'})}>Mi perfil</p>
                    </div>
                    <div className="col-sm text-center titles-prestify-medium tab-mobile-me">
                      <p className={stateView === 'Contrasena' ? "tab_micuenta tab_micuenta_active" : "tab_micuenta" } onClick={() => this.setState({stateView : 'Contrasena'})}>Contraseña</p>
                    </div>
                    <div className="col-sm text-center titles-prestify-medium tab-mobile-me">
                      <p className={stateView === 'Contrasena' ? "tab_micuenta tab_micuenta_active" : "tab_micuenta" } onClick={this.close}>Cerrar Sesión</p>
                    </div>
                  </div>
              </div>  
              </div>
                  <div id="formualario_main" className="form-container-main">
                    {this.state.loading  ? <div className="mx-auto"><img src={marciano} className="pulse sizeloading" alt="prestto-prestamos-en-linea-25"></img></div>: ''}
                    <form onSubmit={ this.handleSubmit }>
                      
                        { 
                          this.state.stateView === 'misPrestamos'  ? this.misPrestamos() : 
                          this.state.stateView === 'nuevoPrestamo'  ? this.nuevoPrestamo() : 
                          this.state.stateView === 'Historial'  ? this.historialPrestamos() : 
                          this.state.stateView === 'Miperfil'  ? this.miPerfil() :
                          this.state.stateView === 'Realizarpago'  ? this.realizarPago() :  
                          this.state.stateView === 'Contrasena'  ? this.contrasena() : 
                          this.state.stateView === 'Contrato' ? this.contrato() :
                          this.misPrestamos() 
                        }

                    </form>
                  </div>
                </div>
        </div>
        <Footer location={this.props.history} />
      </div>
    )
  }
}

//Propiedades que recibe
const mapStateToProps = (state, action) => {
  const { saveUser } = state
  return { 
    user: saveUser.array,
  };
  
};

export default connect(mapStateToProps,null)(Micuenta);
