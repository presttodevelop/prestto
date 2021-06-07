import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Slider from '@material-ui/core/Slider';
import Popup from 'reactjs-popup';
import ReactToPdf from "react-to-pdf";

import PopUpCustom from '../components/PopUpCustom';
import 'reactjs-popup/dist/index.css';

/* Imagenes */
import icono4 from '../assets/img/iconosformulario/Icon_04.png';
import cohetelado from '../assets/img/upload.png';
import axios from 'axios';
import logo from '../assets/img/logo.png'

/* Componentes Formulario */
import BarraFormulario from '../components/BarraFormulario';
import ImageUploader from 'react-images-upload';
import Contrato from '../components/Contrato';

//CONECTAR COMPONENTE CON REDUX
import { connect } from 'react-redux';
import validateForm from '../redux/actions';
import saveCalculadora from '../redux/actions';
import { getRegister } from '../redux/actions';
import { bindActionCreators } from 'redux'

const minOffset = 0;
const maxOffset = 60;   
const clabe = require('clabe-validator');

const ref = React.createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [4,2]
};

var identifiers = [
    {name:'VISA', pattern:/^4\d{12}(\d{3})?$/},
    {name:'MasterCard', pattern:/^(5[1-5]\d{4}|677189)\d{10}$/},
    {name:'Discover', pattern:/^6(?:011\d\d|5\d{4}|4[4-9]\d{3}|22(?:1(?:2[6-9]|[3-9]\d)|[2-8]\d\d|9(?:[01]\d|2[0-5])))\d{10}$/},
    {name:'Amex', pattern:/^3[47]\d{13}$/},
    {name:'Diners', pattern:/^3(0[0-5]|[68]\d)\d{11}$/},
    {name:'JCB', pattern:/^35(28|29|[3-8]\d)\d{12}$/},
    {name:'Switch', pattern:/^6759\d{12}(\d{2,3})?$/},
    {name:'Solo', pattern:/^6767\d{12}(\d{2,3})?$/},
    {name:'Dankort', pattern:/^5019\d{12}$/},
    {name:'Maestro', pattern:/^(5[06-8]|6\d)\d{10,17}$/},
    {name:'Forbrugsforeningen', pattern:/^600722\d{10}$/},
    {name:'Laser', pattern:/^(6304|6706|6771|6709)\d{8}(\d{4}|\d{6,7})?$/},
    {name:'Unknown', pattern:/.*/}
]


class Registro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timer:'',
      nombre: '',
      apellidopaterno:'',
      apellidomaterno:'',
      celular:'',
      email:'',
      genero:'masculino',
      curp:'',
      rfc:'',
      estado:'Selecciona un estado',
      municipio:'Selecciona un municipio',
      ciudad:'Selecciona una ciudad',
      colonia:'Selecciona una colonia',
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
      detalleocupacion:'',
      pictures1name:'',
      pictures2name:'',
      deudas:'',
      frecuenciadepago:'',
      clabe:'',
      flagcontrato:false,
      idcontrato:'',
      registrocounter:'',
      bancotarjeta:'',
      banco:'', 
      prestamo:'',
      tiempoprestamo:'',
      fechadepago:'',
      totalapagar:'',
      aceptoterminoscondiciones:'',
      aceptoterminoscondicionescontrato:false,
      aceptoterminoscondicionescontratomsg:false,
      uploadFile1:'',
      uploadFile2:'',
      aceptoterminoscondicionescel:false,
      historialcrediticio:false,
      conocimientodelcliente:true,
      stateView:'datospersonales',
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
      setDias:7,
      valueDias:'',
      interes:2,
      approve:false,
      approvetc:false,
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
      msgcreditinput:'',
      responsetipodetarjeta:'',
      viewpop:false,
      pictures: [],
      nombremsg:false,
      celularmsg:false,
      msgcodigoverifica:false, 
      msgeneral : '',
      aceptocontrato: false,
      value: 20,
      interes:41.064,
      tasadiaria:41.064 / 30,
      interesDiario:'',
      cpmsg:false, coloniamsg:false,ciudadmsg:false, municipiomsg:false, 
      estadomsg:false,callemsg:false, numeroexteriormsg:false, parentescomsg:false,
      referenciapellidomsg:false,telfijoreferenciamsg:false,
      ocupaciones : [],
      curpmsgdos:false,
      rfcmsgdos:false,
      actualTime: 0,
      btnPlayPause: "Play",
      idSMS:''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEstado = this.handleChangeEstado.bind(this);
    this.handleChangeCP = this.handleChangeCP.bind(this);
    this.handleChangeMunicipio = this.handleChangeMunicipio.bind(this);
    this.handleChangeColonia = this.handleChangeColonia.bind(this);
    this.validarClabe = this.validarClabe.bind(this);
    this.whatsapp = this.whatsapp.bind(this);
    this.sendErrorMsg = this.sendErrorMsg.bind(this);
    this.validarTarjeta = this.validarTarjeta.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDropB = this.onDropB.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleSliderChangeDias = this.handleSliderChangeDias.bind(this);
    this.setSelectedOption = this.setSelectedOption.bind(this)
    this.sendDatos = this.sendDatos.bind(this);
    /* Timer */
    this.counter = null;
    this.initTimer = this.initTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
}

  initTimer() {
    if (this.counter) {
      this.pauseTimer();
      this.setState({ btnPlayPause: "Play" });
    } else {
      this.counter = setInterval(() => {
        this.setState({ actualTime: this.state.actualTime + 0.1 });
      }, 100);
      this.setState({ btnPlayPause: "Pause" });
    }
  }

  pauseTimer() {
    clearInterval(this.counter);
    this.counter = null;
  }

  clearTimer() {
    this.setState({ actualTime: 0 });
    clearInterval(this.counter);
    this.counter = null;
    this.setState({ btnPlayPause: "Play" });
  }

  componentDidMount() {
    let { saveCalculadora } = this.props;
    let recibiras =  !saveCalculadora ? 0 : saveCalculadora.recibiras;
    let duracion =  !saveCalculadora ? 7 : saveCalculadora.duracion;
    this.setState({ setValue:recibiras });
    this.setState({ setDias:duracion });
    this.initTimer()
  }


  handleSliderChange = (event, newValue) => {
    this.setState({ setValue:newValue });
  };

  handleSliderChangeDias = (event, newValue) => {
    this.setState({ setDias: newValue });
  }


  onDrop = (imageList) => {  
    if (imageList.length > 0 ) {
      this.state.pictures1 = imageList[0];
        const fd = new FormData();
        let name =  this.state.pictures1.name;
        fd.append('image', this.state.pictures1, name);
        axios.post('http://prestto.mx/api/reactimageupload.php',fd)
        .then(res => {
          console.log("postimage",res.data)
          this.state.pictures1name = res.data;
        })
        .catch (error => console.log(error))
    }
    else {
      console.log("esta vacio")
    }
  }

  onDropB = (imageList) => {  
    if (imageList.length > 0 ) {
      this.state.pictures2 = imageList[0];
        const fd = new FormData();
        let name =  this.state.pictures2.name;
        fd.append('image', this.state.pictures2, name);
        axios.post('http://prestto.mx/api/reactimageupload.php',fd)
        .then(res => {
          console.log("postimage",res.data)
          this.state.pictures2name = res.data;
        })
        .catch (error => console.log(error))
    }
    else {
      console.log("esta vacio")
    }
  }

  handleSubmit(event) {  
    event.preventDefault();
    /*this.props.history.push('/confirmatusdatos')*/
  }

  handleChange(e){
    let name = e.target.name;
    if(name === 'genero') {
      this.setState({genero: e.target.value})
    }
    if (name === 'nivelestudios') {
      this.setState({nivelestudios: e.target.value})
    }
    if (name === 'parentesco') {
      this.setState({parentesco: e.target.value})
    }
    if (name === 'detalleocupacion') {
      this.setState({detalleocupacion: e.target.value})
    }
    if(name === 'frecuenciadepago'){
      this.setState({frecuenciadepago: e.target.value})
    }
    
  }

  handleChangeColonia(event) {
    this.setState ({ colonia: event.target.value})
  }


handleChangeEstado(event) {
    this.setState ({todoslosmunicipios: []})
    this.setState ({colonia: []})
    this.setState ({todaslascolonias: []})
    this.setState ({ciudad: []})
    this.setState ({cp: ''})
    let value = event.target ? event.target.value : '';
    this.setState({ estado: value });
      axios.get(`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${value}`)
      .then(res => {
        this.setState ({ todoslosmunicipios:  this.state.todoslosmunicipios.concat(res.data.response.municipios ) })
        this.setState ({ municipio:  res.data.response.municipios[0] })
        this.handleChangeCP(this.state.municipio)
      })
      .catch (error => console.log(error))
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

  validarTarjeta(e) {
    var revealCard = require('credit-card-reveal')
    let valor = revealCard(this.state.numerotarjeta)
    this.setState({approvetc: true});
    this.setState({responsetipodetarjeta: valor});
  }

  validarClabe() {
    if ( this.state.clabe.length === 18 ) {
      let clabes = clabe.validate(this.state.clabe)
        if (clabes.formatOk) {
            this.setState({ banco: clabes.tag })
            this.setState({ approve: true })
        }
        else {
          this.sendErrorMsg('clabe');
        }
    }
    else {
      this.sendErrorMsg('clabelength');
    }
  }

  handleChangeMunicipio(event){
    let value = event.target ? event.target.value : '';
    this.setState({ municipio: value });
  }

  handleChangeCP(event) {
    let value = event.target ? event.target.value : '';
      axios.get(`https://api-sepomex.hckdrk.mx/query/get_cp_por_municipio/${event}`)
      .then(res => {
        this.setState ({ todosloscodigos: this.state.todosloscodigos.concat(res.data.response.cp)})
        this.setState ({ cp:  res.data.response.cp[0] })
        this.handleClick('codigopostalnuevo')
      })
     .catch (error => console.log(error))
  }

  setSelectedOption(e){
    this.setState({ocupacion:e})

    if (e === 'Soyduenodenegocio') {
      this.setState({ocupaciones : ['No aplica']})
    }
    if (e === 'Gobierno') {
      this.setState({ocupaciones : ['Seguridad Pública','Fuerzas Armadas','Federal ','Estatal','Municipal','Otros']})
    }
    if (e === 'SaludyBelleza') {
      this.setState({ocupaciones:['Farmacéutica','Médica','Nutrición','Cuidado personal','Belleza','Otros']})
    }
    if (e === 'Manufactura') {
      this.setState({ ocupaciones : ['Farmacéutica','Médica','Nutrición','Cuidado personal','Belleza','Otros']})
    }
    if (e === 'Educacion') {
      this.setState({ ocupaciones : ['Automotriz','Electrónica','Metal mecánica','Textil','Otros']})
    }
    if (e === 'Transporteyautomotriz') {
      this.setState({ ocupaciones : ['Taxi y aplicaciones','Público y privado','Mensajería','Reparación y Mantenimientos','Otros']})
    }
    if (e === 'Serviciosprofesionales') {
      this.setState({ ocupaciones : ['Consultoría','Contabilidad','Investigación y Desarrollo','Financieros','Legales','Publicidad y Mercadotecnia','Seguros','Otros']})
    }
    if (e === 'Serviciosycomercio') {
      this.setState({ ocupaciones : ['Supermercado y abarrotes','Alimentos','Departamental y Moda','Bienes raíces','Construcción','Limpieza','Seguridad Privada','Gasolinera y gas','Electricidad y agua','Otros']})
    }
    if (e === 'Campoeindustrial') {
      this.setState({ ocupaciones : ['Agricultura, ganadería y pesca','Minería','Petrolera','Otros']})
    }
    if (e === 'Hospitalidadyturismo') {
      this.setState({ ocupaciones : ['Hotelería', 'Viajes','Turismo','Otros']})
    }
    if (e === 'Restaurantes') {
      this.setState({ ocupaciones : ['Restaurante', 'Bar','Cafetería','Fonda','Otros']})
    }
    if (e === 'Culturayrecreacion') {
      this.setState({ ocupaciones : ['Arte y Cultura', 'Entretenimiento','Otros']})
    }
    if (e === 'Tecnologiaycomunicacion') {
      this.setState({ ocupaciones : ['Medios de Comunicación', 'Desarrollo de software','Reparación y Soporte','Imprenta','Call Center','Telefonía e Internet','Editorial','Otros']})
    }
  }

  sendDatos() {
    let r = Math.random().toString(36).substring(7);
    let password = this.state.apellidopaterno + r;

    let data = {
          nombre: this.state.nombre,
          apellidopaterno:this.state.apellidopaterno,
          apellidomaterno:this.state.apellidomaterno,
          celular:this.state.celular,
          email:this.state.email,
          idsms:this.state.idSMS,
          aceptoterminoscondicionescel:this.state.aceptoterminoscondicionescel,
          historialcrediticio:this.state.historialcrediticio,
          conocimientodelcliente:this.state.conocimientodelcliente,
          genero:this.state.genero,
          curp:this.state.curp,
          rfc:this.state.rfc,
          cp:this.state.cp,
          estado:this.state.estado,
          municipio:this.state.municipio,
          ciudad:this.state.ciudad,
          colonia:this.state.colonia,
          calle:this.state.calle,
          numeroexterior:this.state.numeroexterior,
          numerointerior:this.state.numerointerior,
          telefonofijo:this.state.telefonofijo,
          parentesco:this.state.parentesco,
          referenciapellido:this.state.referenciapellido,
          telfijoreferencia:this.state.telfijoreferencia,
          nivelestudios:this.state.nivelestudios,
          salarioneto:this.state.salarioneto,
          ocupacion:this.state.ocupacion,
          detalleocupacion:this.state.detalleocupacion,
          deudas:this.state.deudas,
          frecuenciadepago:this.state.frecuenciadepago,
          clabe:this.state.clabe,
          banco:this.state.banco,
          titulartarjeta:!this.state.titulartarjeta ? 'NA' : this.state.titulartarjeta,
          fechadevencimiento:!this.state.fechadevencimiento ? 'NA': this.state.fechadevencimiento,
          numerotarjeta:!this.state.numerotarjeta ? 'NA' : this.state.numerotarjeta,
          bancotarjeta:this.state.bancotarjeta,
          dineroquenecesita: this.state.setValue,
          fechadepagoen: this.state.fechadepagoen,
          totalaprestar: this.state.totalaprestar,
          aceptoterminoscondicionescontrato: true,
          pictures1:this.state.pictures1name,
          pictures2:this.state.pictures2name,
          idcontrato: this.state.idcontrato,
          aceptocontrato:true,
          password: password,
          contrato: this.state.contrato,
          timer: this.state.actualTime
      }
      axios.post(`http://prestto.mx/api/sendinformation.php?nombre=${data.nombre}&apellidopaterno=${data.apellidopaterno}&apellidomaterno=${data.apellidomaterno}&celular=${data.celular}&email=${data.email}&idsms=${data.idsms}&aceptoterminoscondicionescel=${data.aceptoterminoscondicionescel}&historialcrediticio=${data.historialcrediticio}&conocimientodelcliente=${data.conocimientodelcliente}&genero=${data.genero}&curp=${data.curp}&rfc=${data.rfc}&cp=${data.cp}&estado=${data.estado}&municipio=${data.municipio}&ciudad=${data.ciudad}&colonia=${data.colonia}&calle=${data.calle}&numeroexterior=${data.numeroexterior}&numerointerior=${data.numerointerior}&telefonofijo=${data.telefonofijo}&parentesco=${data.parentesco}&referenciapellido=${data.referenciapellido}&telfijoreferencia=${data.telfijoreferencia}&nivelestudios=${data.nivelestudios}&salarioneto=${data.salarioneto}&ocupacion=${data.ocupacion}&detalleocupacion=${data.detalleocupacion}&deudas=${data.deudas}&frecuenciadepago=${data.frecuenciadepago}&clabe=${data.clabe}&bancoclabe=${data.banco}&titulartarjeta=${data.titulartarjeta}&fechadevencimiento=${data.fechadevencimiento}&numerotarjeta=${data.numerotarjeta}&bancotarjeta=${data.bancotarjeta}&dineroquenecesita=${data.dineroquenecesita}&fechadepagoen=${data.fechadepagoen}&totalaprestar=${data.totalaprestar}&aceptoterminoscondicionescontrato=${data.aceptoterminoscondicionescontrato}&pictures1=${data.pictures1}&pictures2=${data.pictures2}&aceptocontrato=${data.aceptocontrato}&password=${data.password}&idcontrato=${data.idcontrato}&contrato=${data.contrato}&timer=${data.timer.toFixed(2)}`)
      .then(res => {
        console.log("res",res)
      })
      .catch (error => console.log(error))
  }

  downloadFile(event) {

    console.log("donwload contrato")
  }

  handleClick(event) {
      if (event === 'codigopostal') {
        this.setState({colonia:''})
        axios.get(`https://api-sepomex.hckdrk.mx/query/info_cp/${ this.state.cp }`)
          .then(res => {
            const datadir = res.data;
            datadir.map( valor => {
              this.setState({ciudad: valor.response.ciudad});
              this.setState({todaslascolonias: this.state.todaslascolonias.concat(valor.response.asentamiento) });
              this.setState({municipio: valor.response.municipio});
              this.setState({estado: valor.response.estado});
            })
         
          })
      }
      if (event === 'codigopostalnuevo') {
        axios.get(`https://api-sepomex.hckdrk.mx/query/info_cp/${ this.state.cp }`)
          .then(res => {
            const datadir = res.data;
            datadir.map( valor => {
              this.setState({ciudad: valor.response.ciudad});
              this.setState({todaslascolonias: this.state.todaslascolonias.concat(valor.response.asentamiento) });
            })
          })
      }
      else if (event === 'datospersonales') {
            let session_url = 'https://sms-pp.sapmobileservices.com/cmn/bluemessag59306/bluemessag59306.sms';
            let username = 'bluemessag59306';
            let password = 'FIsg5NEf';
            const token = new Buffer(username + ":" + password).toString("base64");
            /*const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')*/
            /*SMS PROCESO*/
            /*axios.post(session_url, { 
                List: +525532453689,
                Text: 'Hola23',
                Binary:0,
                Length:6,
                OriginatorPort:1581,
                DestinationPort:'0B84',
                DCS:'UTF8',
                MobileNotification:'YES'
              }, {
              headers: { 'Authorization': `Basic ${token}`}
            }).then(function(response) {
              console.log('Authenticated');
            }).catch(function(error) {
              console.log(error);
            });*/
            this.setState({ idSMS: '123' })

            if(this.state.nombre === null || this.state.nombre === '' ) {
              this.setState({ nombremsg:true})
                setTimeout(()=>{
                  this.setState({ nombremsg:false})
                }, 5000);
            }
            if(this.state.apellidopaterno === null || this.state.apellidopaterno === '') {
              this.setState({ apellidopaternomsg:true})
                setTimeout(()=>{
                  this.setState({ apellidopaternomsg:false})
                }, 5000);
            }
            if(this.state.apellidomaterno === null || this.state.apellidomaterno === '') {
              this.setState({ apellidomaternomsg:true})
                setTimeout(()=>{
                  this.setState({ apellidomaternomsg:false})
                }, 5000);
            }
            if(this.state.email === null || this.state.email === '') {
              this.setState({ emailmsg:true, msgemail: 'Debes llenar el campo'})
                setTimeout(()=>{
                  this.setState({ emailmsg:false, msgemail: ''})
                }, 5000);
            }
            if(this.state.celular === null || this.state.celular === '') {
              this.setState({ celularmsg:true})
              setTimeout(()=>{
                this.setState({ celularmsg:false })
              }, 5000);
            }
            if (this.state.email) {
              if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
                  /*this.whatsapp();*/
                  this.setState({ stateView:'datoscasa'})
              }
              else {
                this.setState({ emailmsg:true, msgemail: 'Correo invalido'})
                setTimeout(()=>{
                  this.setState({ emailmsg:false, msgemail : ''})
                }, 5000);
              }
            }
            else {
              /*this.setState({ stateView:'datoscasa'})*/
              }
            //Send Information to Prospect
              let prospect = {
                  nombre: this.state.nombre,
                  apellidopaterno:this.state.apellidopaterno,
                  apellidomaterno:this.state.apellidomaterno,
                  celular:this.state.celular,
                  email:this.state.email,
              }

              axios.post(`https://prestto.mx/api/sendProspect.php?nombre=${prospect.nombre}&apellidopaterno=${prospect.apellidopaterno}&apellidomaterno=${prospect.apellidomaterno}&celular=${prospect.celular}&email=${prospect.email}`)
              .then(res => {
              })
              .catch (error => console.log(error))

            //Validate email in BD
              axios.get(`https://prestto.mx/api/validateEmail.php?email=${prospect.email}`)
              .then(res => {
                let idexists = res.data;
                if (idexists.length > 0) {
                  this.popCustom();
                }
              })
              .catch (error => console.log(error))
            }
      else if (event === 'datoscasa') {
        this.setState({ stateView:'datoscasa', datoscasa:1})
      }
      else if (event === 'datoshistorial') {
        if ( !this.state.aceptoterminoscondicionescel ) {
              this.setState({ msgcodigoverifica:true, msgeneral: 'Debes aceptar términos y condiciones'})
              setTimeout(()=>{
                this.setState({ msgcodigoverifica:false, msgeneral : ''})
              }, 5000);
        }
        else {
          this.setState({ stateView:'historial', historial:1})
        }
      }
      else if (event === 'datosEmpleo') {

      if(this.state.rfc === null || this.state.rfc === '' ) {
          this.setState({ rfcmsg:true, cpmsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ rfcmsg:false, rfcmsg: ''})
            }, 5000);
        }
      if(this.state.curp === null || this.state.curp === '' ) {
          this.setState({ curpmsg:true, curpmsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ curpmsg:false, curpmsg: ''})
            }, 5000);
        }
      if(this.state.cp === null || this.state.cp === '') {
          this.setState({ cpmsg:true, cpmsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ cpmsg:false, cpmsg: ''})
            }, 5000);
        } 
      if(this.state.colonia === null || this.state.colonia === 'Selecciona una colonia') {
          this.setState({ coloniamsg:true, coloniamsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ coloniamsg:false, coloniamsg: ''})
            }, 5000);
        }
      if(this.state.ciudad === null || this.state.ciudad === 'Selecciona una ciudad') {
          this.setState({ ciudadmsg:true, ciudadmsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ ciudadmsg:false, ciudadmsg: ''})
            }, 5000);
        } 
      if(this.state.municipio === 'Selecciona un municipio') {
          this.setState({ municipiomsg:true, municipiomsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ municipiomsg:false, municipiomsg: ''})
            }, 5000);
        }
      if(this.state.estado === 'Selecciona un estado') {
          this.setState({ estadomsg:true, estadomsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ estadomsg:false, estadomsg: ''})
            }, 5000);
        }
      if(this.state.calle === null || this.state.calle === '') {
          this.setState({ callemsg:true, callemsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ callemsg:false, callemsg: ''})
            }, 5000);
        }
      if(this.state.numeroexterior === null || this.state.numeroexterior === '') {
          this.setState({ numeroexteriormsg:true, numeroexteriormsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ numeroexteriormsg:false, numeroexteriormsg: ''})
            }, 5000);
        }
      if(this.state.parentesco === null || this.state.parentesco === '') {
          this.setState({ parentescomsg:true, parentescomsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ parentescomsg:false, parentescomsg: ''})
            }, 5000);
        }
      if(this.state.referenciapellido === null || this.state.referenciapellido === '') {
          this.setState({ referenciapellidomsg:true, referenciapellidomsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ referenciapellidomsg:false, referenciapellidomsg: ''})
            }, 5000);
        }
      if(this.state.telfijoreferencia === null || this.state.telfijoreferencia === '') {
          this.setState({ telfijoreferenciamsg:true, telfijoreferenciamsg: 'Debes llenar el campo'})
            setTimeout(()=>{
              this.setState({ telfijoreferenciamsg:false, telfijoreferenciamsg: ''})
            }, 5000);
        }
        if(this.state.curp.length < 18 ){
          this.setState({ curpmsgdos:true, curpmsgdos: 'Debes llenar el campo'})
          setTimeout(()=>{
            this.setState({ curpmsgdos:false, curpmsgdos: ''})
          }, 5000);
        }
        if(this.state.rfc.length < 13 ){
          this.setState({ rfcmsgdos:true, rfcmsgdos: 'Debes llenar el campo'})
          setTimeout(()=>{
            this.setState({ rfcmsgdos:false, rfcmsgdos: ''})
          }, 5000);
        }
        else {
            this.setState({ stateView:'datosempleo', datosEmpleo:1})
        }
      }
      else if (event === 'datosbancarios') {
        this.setState({ stateView:'datosbancarios', datosbancarios:1})
      }
      else if (event === 'tarjetadebito') {
        this.setState({ stateView:'tarjetadebito', tarjetadebito:1})
      }
      else if (event === 'confirmacondiciones') {
        this.setState({ stateView:'confirmacondiciones', confirmacondiciones:1})
      }
      else if (event === 'felicidades'){
        if (!this.state.aceptoterminoscondicionescontrato) {
          this.setState({ aceptoterminoscondicionescontratomsg:true, aceptoterminoscondicionescontratomsg: 'Debes llenar el campo'})
          setTimeout(()=>{
            this.setState({ aceptoterminoscondicionescontratomsg:false, aceptoterminoscondicionescontratomsg: ''})
          }, 5000);
        }
          else {
            this.setState({ stateView:'felicidades', felicidades:1})
          /*this.props.validateForm(data)*/
        }
      }
  }


  whatsapp() {
    let ua = navigator.userAgent.toLowerCase();
    let isMobile = ua.indexOf("mobile") > -1;
    if (isMobile) {
        window.location.href = "whatsapp://send?text=your_message&phone=123456789";
    } else {
        console.log('Send')
    }
  }



/* Vista 7*/
felicidades = () => {
  let now =  new Date();
  //Año
  let year = now.getFullYear();
  //Mes
  let month = now.getMonth() + 1;
  //Día
  let day = now.getDate();

  let nombresubstring = this.state.nombre;
  let apellidosubstring = this.state.apellidopaterno;
  let valantes = '00';

  let idcontrato = 'PR' + nombresubstring.substring(0,2) + apellidosubstring.substring(0,2) + valantes  ;
  
  this.state.idcontrato = idcontrato.toUpperCase();

  return (
    <div id="datosverificar" className="container-form">
    <h4 className="text-left title-form">¡Felicidades!</h4>
    <p className="subtitle-big">Estás a un paso de finalizar tu préstamo.</p>
    <p className="subtitle-big">Tu solicitud ha sido pre aprobada, para completar el proceso es necesario que nos proporciones tu <b>INE</b>.</p>
    <p className="subtitle-big"><b>Adjunta tus documentos.</b></p>
    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
            <div className="input-group">
              <div className="custom-file">
              <img src={cohetelado} alt="prestify" className="subir-icono"/>
                <ImageUploader
                  withIcon={false}
                  label = 'Tamaño máximo 5MB formato: jpg, pdf, png'
                  buttonText='Subir archivo'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.png', '.pdf']}
                  maxFileSize={10242880}
                  withPreview={true}
                />
              </div>
            </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="form-group">
            <div className="input-group">
              <div className="custom-file">
              <img src={cohetelado} alt="prestify" className="subir-icono"/>
                <ImageUploader
                    withIcon={false}
                    label = 'Tamaño máximo 5MB formato: jpg, pdf, png'
                    buttonText='Subir archivo'
                    onChange={this.onDropB}
                    imgExtension={['.jpg', '.png', '.pdf']}
                    maxFileSize={10242880}
                    withPreview={true}
                  />
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
    {/* BUTTON */}
    <div className="container container_button">
    <div className="row">
      <div className="col-sm">
        {/*<div className="pointerb" type="submit" value="Submit"> Obtener préstamo </div>*/}
        <Popup
          trigger={<div className="button pointerb" type="button" onClick={this.state.flagcontrato = false }> Obtener préstamo </div>}
          modal
          nested
        >
        { close => (
          <>
            <div className={this.state.flagcontrato ? 'hide': "contrato-container"}>
                <img src={logo} alt="prestify" className="logo-contrato"/>
            </div>
            <div className="row date-contrato">
              <div className="col text-left font-weight-bold">
                  FECHA DE CONTRATO: { day + "/" + month + "/" + year }
              </div>
              <div className="col text-right font-weight-bold">
                NÚMERO DE CRÉDITO: { idcontrato.toUpperCase() }
              </div>
            </div>
            <div className="text-contrato">
              <Contrato nombre= { this.state.nombre }  apellidopaterno= { this.state.apellidopaterno } apellidomaterno={ this.state.apellidomaterno } rfc = { this.state.rfc } curp= { this.state.curp } email={ this.state.email }/>
            </div>
            <div className="row date-contrato">
              <p>He leído y acepto los términos y condiciones de la oferta expresada en el presente contrato. Cualquier duda o comentario por favor comunicate (55)25052455.</p>
              <div className="col text-left font-weight-bold">
                <Link to="/graciasporturegistro"><button className="btn btn-outline-secondary buscar-btn" type="button" onClick={ this.sendDatos }>ACEPTO</button></Link>
              </div>
              <div className="col text-center font-weight-bold">
                <button className="btn btn-outline-secondary buscar-btn" type="button" onClick={() => this.downloadFile()}>DESCARGAR</button>
              </div>
              <div className="col text-right font-weight-bold">
                <button className="btn btn-outline-secondary buscar-btn" type="button" onClick={this.state.flagcontrato = true }>CANCELAR</button>
              </div>
            </div>
          </>
        )}
      </Popup>
      </div>
    </div>
    </div>
    </div>
  )
}


/* Vista 2*/
historial = () => {
  const estados = this.state.todoslosestados.map(elem => (
    <option key={elem} value={elem}>{elem}</option>
  ));

  const municipios = this.state.todoslosmunicipios.map(elemd => (
    <option key={elemd } value={elemd}>{elemd}</option>
  ));
  
  const colonias = this.state.todaslascolonias.map(elemd => (
    <option key={elemd } value={elemd}> {elemd}</option>
  ));


  return (
    <div id="datospersonales">
    <div className="containershadow">
    <h4 className="text-left title-form">Registro</h4>
      {/* PRIMER ROW */}
      <div className="container">
          <div className="row">
          <div className="col-sm">
            <div className="form-group radio-options" onChange={this.handleChange} >
                <p className="text-left">Género</p>
                <label className="radio-inline option-form"><input type="radio" name="genero" value="masculino" checked={ this.state.genero === 'masculino'}/> Masculino</label>
                <label className="radio-inline option-form"><input type="radio" name="genero"  value="femenino" checked={ this.state.genero === 'femenino'} /> Femenino</label>
            </div>
          </div>

          <div className="col-sm">
            <div className="form-group-dos">
              <label>CURP*</label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder="18 Caracteres"
                  value= { this.state.curp }
                  maxLength="18"
                  onChange= { (e) => { this.setState({ curp: e.target.value })}}
              />
              <div className="form-check-dos">
                <p className="info">Puedes encontrar en tu INE/IFE ejemplo COBG851026HDFRLR05 o puedes consultarla en  <a href="https://www.gob.mx/curp/" target="_blank" className="minilink">https://www.gob.mx/curp</a></p> 
              </div>
              <p className={ this.state.curpmsg ? "show error-msg" :'hide'}> Debes llenar el campo </p>
              <p className={ this.state.curpmsgdos ? "show error-msg" :'hide'}> El valor del CURP debe ser de 18 dígitos </p>
            </div>
          </div>


          <div className="col-sm">
            <div className="form-group-dos">
                  <label>RFC*</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      placeholder="13 Caracteres"
                      value= { this.state.rfc }
                      maxLength="13"
                      onChange= { (e) => { this.setState({ rfc: e.target.value })}}
                  />
                  <div className="form-check-dos">
                    <p className="info">13 caracteres: los 10 primeros caracteres de tu CURP y la 3 homoclave.   Ej_ GOVM800705ABC</p>
                  </div>
                  <p className={ this.state.rfcmsg ? "show error-msg" :'hide'}> Debes llenar el campo </p>
                  <p className={ this.state.rfcmsgdos ? "show error-msg" :'hide'}> El valor del RFC debe ser de 13 dígitos </p>
              </div>
          </div>
        </div>
      </div>
    </div>

    <h4 className="text-left title-form">Dirección</h4>
      {/* PRIMER ROW */}
      <div className="container">
          <div className="row">
          <div className="col-sm">
            <div className="form-group-dos">
              <div className="form-group">
                <p>Código Postal*</p>       
                <div className="input-group mb-3">
                    <input 
                      type="num" 
                      className="form-control" 
                      placeholder="Código Postal"
                      maxLength="5"
                      value= { this.state.cp }
                      onChange= { (e) => { this.setState({ cp: e.target.value })}}
                      /*onKeyPress = { this.handleChange('cp')} */
                    />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary buscar-btn" type="button" onClick={() => this.handleClick('codigopostal')}>Buscar</button>
                  </div>
                </div>
                <p className={ this.state.cpmsg ? "show error-msg" :'hide'}> Debes llenar el campo </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group-dos">
            <div className="form-group">
              <p>Estado*</p>
                <select value={ this.state.estado } onChange={this.handleChangeEstado} multiple={false} className="form-control">
                  <option value={ this.state.estado } >{ this.state.estado } </option>
                  { estados }
                </select>
                <p className={ this.state.estadomsg ? "show error-msg" :'hide'}> Debes llenar el campo </p>
            </div>
            </div>
          </div>
        </div>
      </div>

     {/* SECOND ROW */}
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="form-group-dos">
                <div className="form-group">
                  <p>Municipio*</p>
                    <select value={ this.state.municipio } onChange={this.handleChangeMunicipio} multiple={false} className="form-control">
                        <option key={this.state.municipio } value={ this.state.municipio } >{ this.state.municipio } </option>
                        {municipios}
                    </select>
                    <p className={ this.state.municipiomsg ? "show error-msg" :'hide'}> Debes llenar el campo </p>
                </div>
              </div>
            </div>
          <div className="col-sm">
            <div className="form-group-dos">
              <div className="form-group">
                <p>Ciudad*</p>
                  <select value={ this.state.ciudad }  onChange={() => this.handleChangeCiudad } className="form-control">
                    <option value={this.state.ciudad}>{this.state.ciudad}</option>
                  </select>
                  <p className={ this.state.ciudadmsg ? "show error-msg" :'hide'}> Debes llenar el campo </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TERCER ROW */}
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group-dos">
              <div className="form-group">
                <p>Colonia*</p>
                  <select value={ this.state.colonia } onChange={this.handleChangeColonia} multiple={false}  className="form-control">
                    <option value={ this.state.colonia }>{ this.state.colonia }</option>
                      { colonias }
                  </select>
                  <p className={ this.state.coloniamsg ? "show error-msg" :'hide'}> Debes llenar el campo </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group-dos">
              <div className="form-group">
                <p>Calle*</p>
                  <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Calle"
                      value= { this.state.calle }
                      onChange= { (e) => { this.setState({ calle: e.target.value })}}
                    />
              <p className={ this.state.callemsg ? "show error-msg" :'hide'}> Debes llenar el campo </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cuarta ROW */}
      <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <div className="row">
                  <div className="col-sm">
                      <div className="form-group-both">
                        <p>Número exterior*</p>
                          <input 
                            type="num" 
                            className="form-control" 
                            placeholder="Número exterior*"
                            value= { this.state.numeroexterior }
                            onChange= { (e) => { this.setState({ numeroexterior: e.target.value })}}
                          />
                      </div>
                      <span className={ this.state.numeroexteriormsg ? "show error-msg" :'hide'}> Debes llenar el campo </span>
                  </div>
                  <div className="col-sm">
                    <div className="form-group-both">
                      <p>Número interior</p>
                        <input 
                          type="num" 
                          className="form-control" 
                          placeholder="Número interior"
                          value= { this.state.numerointerior }
                          onChange= { (e) => { this.setState({ numerointerior: e.target.value })}}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="col-sm">
            <div className="form-group-dos">
              <div className="form-group">
                <p>Teléfono fijo (opcional)</p>
                  <input 
                    type="tel" 
                    maxLength="10"
                    className="form-control" 
                    placeholder="+52"
                    value= { this.state.telefonofijo }
                    onChange= { (e) => { this.setState({ telefonofijo: e.target.value })}}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* QUINTA ROW */}
     <div className="containershadow">
    <h4 className="text-left title-form">Referencia</h4>
      {/* PRIMER ROW */}
      <div className="container">
          <div className="row">
          <div className="col-sm">
            <div className="form-group-dos">
              <p>Parentesco*</p>
                  <select value={ this.parentesco } name="parentesco" onChange={this.handleChange} className="form-control">
                    <option value="">Seleccionar</option>
                    <option value="Madre">Madre</option>
                    <option value="Padre">Padre</option>
                    <option value="Hermano">Hermano</option>
                    <option value="Amigo">Amigo</option>
                    <option value="Conyuge">Cónyuge</option>
                    <option value="Otro">Otro</option>
                  </select>
            </div>
            <span className={ this.state.parentescomsg ? "show error-msg" :'hide'}> Debes llenar el campo </span>
          </div>
          <div className="col-sm">
            <div className="form-group-dos">
              <p>Nombre y apellido*</p>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="nombre y apellido"
                  value= { this.state.referenciapellido }
                  onChange= { (e) => { this.setState({ referenciapellido: e.target.value })}}
                />
            </div>
            <span className={ this.state.referenciapellidomsg ? "show error-msg" :'hide'}> Debes llenar el campo </span>
          </div>
          <div className="col-sm">
            <div className="form-group-dos">
                <p>Teléfono fijo o celular*</p>
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="+52"
                    maxLength="10"
                    value= { this.state.telfijoreferencia }
                    onChange= { (e) => { this.setState({ telfijoreferencia: e.target.value })}}
                  />
            </div>
            <span className={ this.state.telfijoreferenciamsg ? "show error-msg" :'hide'}> Debes llenar el campo </span>
          </div>
        </div>
      </div>
      {/* BOTÓN*/}
      <div className="container">
          <div className="row">
          <div className="col-sm mobile-col">
            <div className="form-group-dos">
              <div className="pointer_atras extra-margin-left" onClick={() => this.setState({stateView : 'datoscasa'})}> Atras </div>
            </div>
          </div>
          <div className="col-sm no-display">
            <div className="form-group-dos">
            
            </div>
          </div>
          <div className="col-sm mobile-col">
            <div className="form-group-dos">
              <div className="pointer extra-margin-right" onClick={() => this.handleClick('datosEmpleo')}> Siguiente </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

/* Vista 3 */
datosEmpleo = () => {
  return (
    <div id="datosdeempleo" className="container-form">
    <h4 className="text-left title-form">Información de Empleo</h4>
    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label>Nivel de Estudios</label>
              <select value={ this.nivelestudios } name="nivelestudios" onChange={this.handleChange} className="form-control">
                  <option value="">Seleccionar</option>
                  <option value="Secundaria">Secundaria</option>
                  <option value="Bachillerato">Bachillerato</option>
                  <option value="Universitario">Universitario</option>
                  <option value="Posgrado">Posgrado</option>
                </select>
            </div>
          </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
            <div className="form-group">
                <label>Ocupación</label>
                  <select value={ this.ocupacion } name="ocupacion" onChange={(e) => this.setSelectedOption(e.target.value) } className="form-control">
                    <option value="">Seleccionar</option>
                    <option value="Soyduenodenegocio">Soy dueño de negocio</option>
                    <option value="Trabajopormicuenta">Trabajo por mi cuenta</option>
                    <option value="Empleado">Empleado </option>
                    <option value="Amadecasa">Ama de casa</option>
                    <option value="Jubiladopensionado">Jubilado pensionado</option>
                    <option value="Estudiante">Estudiante</option>
                    <option value="Desempleado">Desempleado</option>
                    <option value="Gobierno">Gobierno</option>
                    <option value="SaludyBelleza">Salud y Belleza</option>
                    <option value="Manufactura">Manufactura </option>
                    <option value="Educacion">Educación</option>
                    <option value="Transporteyautomotriz">Transporte y automotriz</option>
                    <option value="Serviciosprofesionales">Servicios Profesionales</option>
                    <option value="Serviciosycomercio">Servicios y Comercio </option>
                    <option value="Campoeindustrial">Campo e industrial</option>
                    <option value="Hospitalidadyturismo">Hospitalidad y Turismo</option>
                    <option value="Restaurantes">Restaurantes</option>
                    <option value="Culturayrecreacion">Cultura y Recreación</option>
                    <option value="Tecnologiaycomunicacion">Tecnología y Comunicación</option>
                  </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                  <label>Detalle Ocupación</label>
                    <select value={ this.detalleocupacion } name="detalleocupacion"  onChange={this.handleChange} className="form-control">
                    {this.state.ocupaciones.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                    </select>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Second ROW */}
      <div className="container">
      <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label>Gasto promedio en deudas</label>
              <input 
                    type="num" 
                    className="form-control" 
                    placeholder="Gasto promedio en deudas"
                    value= { this.state.deudas }
                    onChange= { (e) => { this.setState({ deudas: e.target.value })}}
                />
            </div>
          </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label>Frecuencia de pago</label>
                  <select value={ this.frecuenciadepago } name="frecuenciadepago" onChange={this.handleChange} className="form-control">
                    <option value="">Seleccionar</option>
                    <option value="Semanal">Semanal</option>
                    <option value="Quincenal">Quincenal</option>
                    <option value="Mensual">Mensual</option>
                  </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
            <div className="form-group">
              <label>Salario neto mensual</label>
                <input 
                    type="num" 
                    className="form-control" 
                    placeholder="Salario neto mensual"
                    value= { this.state.salarioneto }
                    onChange= { (e) => { this.setState({ salarioneto: e.target.value })}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    {/* BUTTON */}
    <div className="container container_button">
    <div className="row">
      <div className="col-sm mobile-col">
        <div className="pointer_atras" onClick={() => this.setState({stateView : 'historial'})}> Atras </div>
      </div>
      <div className="col-sm mobile-col">
        <div className="pointer" onClick={() => this.handleClick('datosbancarios')}> Siguiente </div>
      </div>
    </div>
</div>
    </div>
  )
}

/* Vista 4 */
datosbancarios = () => {
  return (
    <div id="datosdeempleo" className="container-form">
    <h4 className="text-left title-form">Información Bancaria</h4>
    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
                  <p><span className="circle-button active-button"></span><span className="font-weight-bold"> &nbsp; CLABE Interbancaria</span></p>
                  <p><span className="circle-button" onClick={() => this.handleClick('tarjetadebito')}></span><span className="disable-button">  &nbsp; Tarjeta de Débito</span></p>
            </div>
          </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group-dos">
                <label>CLABE Interbancaria</label>
                <div className="input-group mb-3">
                  <input 
                        type="num" 
                        className="form-control" 
                        placeholder="18 dígitos"
                        maxLength="18"
                        value= { this.state.clabe }
                        onChange= { (e) => { this.setState({ clabe: e.target.value })}}
                    />
                  <div className="input-group-append">
                      <button className="btn btn-outline-secondary buscar-btn" type="button" onClick={() => this.validarClabe()}>Buscar</button>
                  </div>
              </div>
              <p className={ this.state.approve ? "show success-msg" :'hide'}> Clabe Aprobada </p>
              <p className={ this.state.error ? "show error-msg" :'hide'}> {this.props.msginput} </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Second ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
    
            </div>
          </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group-dos">
                <label>Banco</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder=""
                    value={ this.state.banco } 
                    /*onChange= { (e) => { this.setState({ banco: e.target.value })}}*/
                  />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* BUTTON */}
    <div className="container container_button">
    <div className="row">
      <div className="col-sm mobile-col">
        <div className="pointer_atras" onClick={() => this.setState({stateView : 'historial'})}> Atras </div>
      </div>
      <div className="col-sm mobile-col">
        <div className="pointer" onClick={() => this.handleClick('confirmacondiciones') }> Siguiente </div>
      </div>
    </div>
</div>
    </div>
  )
}

/* Vista 5 */
confirmacondiciones = () => {
  let totalapagar = 0;
  let interesDiario = this.state.setValue/100 * this.state.tasadiaria;
  let interesTotal = interesDiario * this.state.setDias;
  let ivainteres = interesTotal * 0.16;
  totalapagar =  this.state.setValue +  interesTotal + ivainteres;
  this.state.totalapagar = totalapagar.toFixed(2);
  this.state.totalaprestar = totalapagar.toFixed(2);
  this.state.fechadepagoen = this.state.setDias;

  
  return (
    <div id="datospersonales" className="container-form">
      <h4 className="title-form">Confirma las condiciones</h4>
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
                    step={500}
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
                <p className="p-2 bd-highlight circulo-icono-confirma"><img src={icono4} alt="prestify"></img></p><p className="p-2 bd-highlight mini-text text-center">Recibirás está cantidad <br></br><span className="font-more-big">$ {this.state.setValue} mxn</span></p>
                </div>  
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group-dos text-center center-data">
              <div className="d-flex flex-row bd-highlight mb-3"><p className="p-2 bd-highlight circulo-icono-confirma"><img src={icono4} alt="prestify"></img></p><p className="p-2 bd-highlight mini-text text-center">Fecha de pago <br></br><span className="font-more-big">{  this.state.setDias } días </span></p>
            </div>  
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group-dos text-center center-data">
              <div className="d-flex flex-row bd-highlight mb-3"><p className="p-2 bd-highlight circulo-icono-confirma"><img src={icono4} alt="prestify"></img></p><p className="p-2 bd-highlight mini-text text-center">Total a pagar <br></br><span className="font-more-big">$ {  totalapagar.toFixed(2) } mxn</span></p>
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
                  He leído y aceptado las condiciones expresadas en el presente contrato.
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



/* código de verificación whatsapp */
datosCasa = () => {
  return (
    <div id="datosverificar" className="container-form">
    <h4 className="text-left title-form">Código de Verificación</h4>
    <p className={ this.state.msgcodigoverifica ? "show error-msg text-center" :'hide'}> {this.state.msgeneral} </p>
    <p className="subtitle-big">Para continuar la solicitud, ingresa el código recibido por SMS</p>
    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label>Código SMS</label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder=""
                  value= { this.state.calle }
                  onChange= { (e) => { this.setState({ calle: e.target.value })}}
              />
            </div>
          </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <div className="pointer_reenviar"> Reenviar código </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Tercer ROW */}
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-check">
              <input 
                  id="aceptoterminoscondiciones"
                  type="checkbox" 
                  className="form-check-input" 
                  placeholder="+52"
                  value= { this.state.aceptoterminoscondicionescel }
                  onChange= { (e) => { this.setState({ aceptoterminoscondicionescel: !this.state.aceptoterminoscondicionescel })}}
                />
                <label className="form-check-label">
                  He leído y acepto los términos y condiciones
                </label>
            </div>

            {/*<div className="form-check">
              <input 
                  id="aceptoterminoscondiciones"
                  type="checkbox" 
                  className="form-check-input" 
                  value= { this.state.historialcrediticio }
                  onChange= { (e) => { this.setState({ historialcrediticio: !this.state.historialcrediticio })}}
                />
              <label className="form-check-label">
                Acepto la consulta de mi <a className="colorlinkblanco" href="" target="_blank">historial créditicio</a>
              </label>
            </div>*/}

            {/*<div className="form-check">
              <input 
                  id="aceptoterminoscondiciones"
                  type="checkbox" 
                  className="form-check-input" 
                  value= { this.state.conocimientodelcliente }
                  onChange= { (e) => { this.setState({ conocimientodelcliente: !this.state.conocimientodelcliente })}}
                />
              <label className="form-check-label"> <a className="colorlinkblanco" href="" target="_blank">Conocimiento del cliente</a>
              </label>
          </div>*/}


          </div>
      </div>
    </div>
    {/* BUTTON */}
    <div className="container container_button">
      <div className="row">
        <div className="col-sm mobile-col">
          <div className="pointer_atras" onClick={() => this.setState({stateView : 'datoscaso'})}> Atras </div>
        </div>
        <div className="col-sm mobile-col">
          <div className="pointer pointer_mg" onClick={() => this.handleClick('datoshistorial')}> Siguiente </div>
        </div>
      </div>
    </div>
  </div>
  )
}
tarjetadebito = () => {
  return (
    <div id="datosdeempleo" className="container-form">
    <h4 className="text-left title-form">Información Bancaria</h4>

    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
          <div className="form-group">
              <label>Nombre del titular (como aparece en la tarjeta)</label>
              <input 
                    type="num" 
                    className="form-control" 
                    placeholder="Juan Pablo García Galindo"
                    value= { this.state.titulartarjeta }
                    onChange= { (e) => { this.setState({ titulartarjeta: e.target.value })}}
                />
              </div>
          </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label>Fecha de vencimiento</label>
                <input 
                      type="tel" pattern="\d*" maxlength="7" 
                      className="form-control" 
                      placeholder="MM / YY"
                      value= { this.state.fechadevencimiento }
                      onChange= { (e) => { this.setState({ fechadevencimiento: e.target.value })}}
                  />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
      {/* Second ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label>Número de tarjeta (16 digitos)</label>
              <div className="input-group mb-3">
                <input 
                      type="num" 
                      className="form-control" 
                      placeholder="16 dígitos"
                      maxLength="16"
                      value= { this.state.numerotarjeta }
                      onChange= { (e) => { this.setState({ numerotarjeta: e.target.value })}}
                  />
                  <div className="input-group-append">
                      <button className="btn btn-outline-secondary buscar-btn" type="button" onClick={() => this.validarTarjeta()}>Buscar</button>
                  </div>
              </div>
                  <p className={ this.state.approvetc ? "show success-msg" :'hide'}> Tarjeta Aprobada tipo {this.state.responsetipodetarjeta} </p>
                  <p className={ this.state.error ? "show error-msg" :'hide'}> {this.state.msgcreditinput} </p>
      
            </div>
          </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label>Banco</label>
                  <input 
                        type="num" 
                        className="form-control" 
                        placeholder=""
                        value= { this.state.bancotarjeta }
                        onChange= { (e) => { this.setState({ bancotarjeta: e.target.value })}}
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* BUTTON */}
      <div className="container container_button">
        <div className="row">
          <div className="col-sm mobile-col">
            <div className="pointer_atras" onClick={() => this.setState({stateView : 'datosempleo'})}> Atras </div>
          </div>
          <div className="col-sm mobile-col">
            <div className="pointer" onClick={ () => this.handleClick('confirmacondiciones') }> Siguiente </div>
          </div>
        </div>
      </div>
    </div>
  )
}

popCustom = () => {
  return (
    <div className="container-popupcustom">
        <p>Tu email ya está registrado</p>
        <p>Inicia sesión <a href="" target="_self">aquí</a></p>
    </div>
  );
}

/* Vista 1*/
datosPersonales = () => {
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
              <span className={ this.state.nombremsg ? "show error-msg" :'hide'}> Debes llenar el campo </span>
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
            <span className={ this.state.apellidopaternomsg ? "show error-msg" :'hide'}> Debes llenar el campo </span>
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
            <span className={ this.state.apellidomaternomsg ? "show error-msg" :'hide'}> Debes llenar el campo </span>
          </div>
        </div> 
        <div className="col-sm">
          <div className="form-group">
            <label>Teléfono Celular*</label>
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
            <span className={ this.state.celularmsg ? "show error-msg" :'hide'}> Debes llenar el campo </span>
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
            <span className={ this.state.emailmsg ? "show error-msg" :'hide'}> { this.state.msgemail } </span>
          </div>
        </div>
        <div className="col-sm ">
          <div className="form-group">
            <div className="pointer button_next" onClick={() => this.handleClick('datospersonales')}> Siguiente </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

  render() {
    
    const data = {
      nombre: this.state.nombre,
      apellidopaterno: this.state.apellidopaterno,
      apellidomaterno: this.state.apellidomaterno,
      celular: this.state.celular,
      email: this.state.email,
      aceptoterminoscondicionescel: this.state.aceptoterminoscondicionescel,
      historialcrediticio: this.state.historialcrediticio,
      conocimientodelcliente: this.state.conocimientodelcliente
    }
    return (
      <div>
          <NavBar location={ this.props.history } />
            <div className="container-fluid container-main container-inside bggray">
              <h2 className="cronometro">{this.state.actualTime.toFixed(2)}</h2>
              <div className="container-form-shadow">
                <BarraFormulario stateView={  this.state.stateView } datospersonales = { this.state.datospersonales }/>
                  <div id="formualario_main" className="form-container-main">
                    <form onSubmit={ this.handleSubmit }>
                      
                        { 
                          this.state.stateView === 'datospersonales' ? this.datosPersonales() :  
                          this.state.stateView === 'datoscasa'  ? this.datosCasa() : 
                          this.state.stateView === 'historial'  ? this.historial() : 
                          this.state.stateView === 'datosempleo'  ? this.datosEmpleo() : 
                          this.state.stateView === 'datosbancarios'  ? this.datosbancarios() : 
                          this.state.stateView === 'tarjetadebito'  ? this.tarjetadebito() : 
                          this.state.stateView === 'confirmacondiciones'  ? this.confirmacondiciones() : 
                          this.state.stateView === 'felicidades' ? this.felicidades():
                          this.state.stateView === 'popCustom' ? this.popCustom():
                          this.datosPersonales() 
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
const mapStateToProps = (state) => {
  const { saveCalculadora, getRegister } = state
  return { 
    saveCalculadora: saveCalculadora.data,
    getRegister: state.getRegister.data,
  };
  
};

//Propiedades que envia
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getRegister,
    validateForm: (data) => dispatch(validateForm(data)),
  }, dispatch )
}
export default connect(mapStateToProps,mapDispatchToProps)(Registro);
