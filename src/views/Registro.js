import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Slider from '@material-ui/core/Slider';
import Popup from 'reactjs-popup';
import moment from 'moment';
import $ from 'jquery';

import 'reactjs-popup/dist/index.css';

/* Imagenes */
import icono4 from '../assets/img/iconosformulario/Icon_04.png';
import CalendarIcon from '../assets/img/iconosformulario/CalendarIcon.png';
import MoneyIcon from '../assets/img/iconosformulario/MoneyIcon.png';
import PayIcon from '../assets/img/iconosformulario/PayIcon.png';
import cohetelado from '../assets/img/upload.png';
import axios from 'axios';
import logo from '../assets/img/logo.png'
import logomorado from '../assets/img/logo_morado.png';

/* Componentes Formulario */
import BarraFormulario from '../components/BarraFormulario';
import ImageUploader from 'react-images-upload';
import Contrato from '../components/Contrato';

//COMPONENTE CONTRATO
import jsPDF from "jspdf";
import SignatureCanvas from "react-signature-canvas";
import html2canvas from 'html2canvas';
import html2PDF from 'jspdf-html2canvas';

//CONECTAR COMPONENTE CON REDUX
import { connect } from 'react-redux';
import validateForm from '../redux/actions';
import { getRegister, saveCalculadora, updateContract } from '../redux/actions';
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
      genero:'Masculino',
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
      iduserDB:'',
      tiempoprestamo:'',
      fechadepago:'',
      totalapagar:'',
      aceptoterminoscondiciones:'',
      aceptoterminoscondicionescontrato:true,
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
      smsuser: '',
      tokenSEPOMEX:'a3342d51-a45a-4897-aa97-847fd648e5b0',
      datosbancarios:0,
      value: 20,
      setValue: 1000,
      setDias:7,
      valueDias:'',
      interes:2,
      approve:false,
      approvetc:false,
      todoslosestados:[
        "Ciudad de M??xico",
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
        "M??xico",
        "Michoac??n de Ocampo",
        "Morelos",
        "Nayarit",
        "Nuevo Le??n",
        "Oaxaca",
        "Puebla",
        "Quer??taro",
        "Quintana Roo",
        "San Luis Potos??",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz de Ignacio de la Llave",
        "Yucat??n",
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
      msgcodigoverificados:false,
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
      idSMS:'',
      existemail:false,
      sendServer:false
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
    this.sendSMS = this.sendSMS.bind(this);
    /* Timer */
    this.counter = null;
    this.initTimer = this.initTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.ContratoShow = this.ContratoShow.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
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
    let recibiras =  !saveCalculadora ? 1000 : saveCalculadora.recibiras;
    let duracion =  !saveCalculadora ? 7 : saveCalculadora.duracion;
    this.setState({ setValue:recibiras });
    this.setState({ setDias:duracion });
    this.initTimer()
  }
  componentWillMount(){
    this.props.getRegister();
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
        axios.post(`https://prestto.mx/api/reactimageupload.php?nom=${this.state.idcontrato}&num=1`,fd)
        .then(res => {
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
        axios.post(`https://prestto.mx/api/reactimageupload.php?nom=${this.state.idcontrato}&num=2`,fd)
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

  toCurrency(number) {
    /*const { target: { name, value } } = e
    this.setState({ [name]: value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
    return formatter.format(number)*/
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
    this.setState??({ colonia: event.target.value})
  }


handleChangeEstado(event) {
    this.setState ({todoslosmunicipios: []})
    this.setState ({colonia: []})
    this.setState ({todaslascolonias: []})
    this.setState ({ciudad: []})
    this.setState ({cp: ''})
    let value = event.target ? event.target.value : '';
    this.setState({ estado: value });
      axios.get(`https://api.copomex.com/query/get_municipio_por_estado/${value}?token=${this.state.tokenSEPOMEX}`)
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
          this.setState({msginput: 'La CLABE debe ser 18 d??gitos.' })
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
      axios.get(`https://api.copomex.com/query/get_cp_por_municipio/${event}`)
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
      this.setState({ocupaciones : ['Seguridad P??blica','Fuerzas Armadas','Federal ','Estatal','Municipal','Otros']})
    }
    if (e === 'SaludyBelleza') {
      this.setState({ocupaciones:['Farmac??utica','M??dica','Nutrici??n','Cuidado personal','Belleza','Otros']})
    }
    if (e === 'Manufactura') {
      this.setState({ ocupaciones : ['Farmac??utica','M??dica','Nutrici??n','Cuidado personal','Belleza','Otros']})
    }
    if (e === 'Educacion') {
      this.setState({ ocupaciones : ['Automotriz','Electr??nica','Metal mec??nica','Textil','Otros']})
    }
    if (e === 'Transporteyautomotriz') {
      this.setState({ ocupaciones : ['Taxi y aplicaciones','P??blico y privado','Mensajer??a','Reparaci??n y Mantenimientos','Otros']})
    }
    if (e === 'Serviciosprofesionales') {
      this.setState({ ocupaciones : ['Consultor??a','Contabilidad','Investigaci??n y Desarrollo','Financieros','Legales','Publicidad y Mercadotecnia','Seguros','Otros']})
    }
    if (e === 'Serviciosycomercio') {
      this.setState({ ocupaciones : ['Supermercado y abarrotes','Alimentos','Departamental y Moda','Bienes ra??ces','Construcci??n','Limpieza','Seguridad Privada','Gasolinera y gas','Electricidad y agua','Otros']})
    }
    if (e === 'Campoeindustrial') {
      this.setState({ ocupaciones : ['Agricultura, ganader??a y pesca','Miner??a','Petrolera','Otros']})
    }
    if (e === 'Hospitalidadyturismo') {
      this.setState({ ocupaciones : ['Hoteler??a', 'Viajes','Turismo','Otros']})
    }
    if (e === 'Restaurantes') {
      this.setState({ ocupaciones : ['Restaurante', 'Bar','Cafeter??a','Fonda','Otros']})
    }
    if (e === 'Culturayrecreacion') {
      this.setState({ ocupaciones : ['Arte y Cultura', 'Entretenimiento','Otros']})
    }
    if (e === 'Tecnologiaycomunicacion') {
      this.setState({ ocupaciones : ['Medios de Comunicaci??n', 'Desarrollo de software','Reparaci??n y Soporte','Imprenta','Call Center','Telefon??a e Internet','Editorial','Otros']})
    }
  }

  sendDatos() {
    let r = Math.random().toString(36).substring(7);
    let password = this.state.apellidopaterno + r;
    password = password.replace(/ /g, "");
    this.props.updateContract(true);
    this.setState({sendServer:true})
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
          contrato: this.state.idcontrato,
          timer: this.state.actualTime
      }
      axios.post(`https://prestto.mx/api/sendinformation.php?nombre=${data.nombre}&apellidopaterno=${data.apellidopaterno}&apellidomaterno=${data.apellidomaterno}&celular=${data.celular}&email=${data.email}&idsms=${data.idsms}&aceptoterminoscondicionescel=${data.aceptoterminoscondicionescel}&historialcrediticio=${data.historialcrediticio}&conocimientodelcliente=${data.conocimientodelcliente}&genero=${data.genero}&curp=${data.curp}&rfc=${data.rfc}&cp=${data.cp}&estado=${data.estado}&municipio=${data.municipio}&ciudad=${data.ciudad}&colonia=${data.colonia}&calle=${data.calle}&numeroexterior=${data.numeroexterior}&numerointerior=${data.numerointerior}&telefonofijo=${data.telefonofijo}&parentesco=${data.parentesco}&referenciapellido=${data.referenciapellido}&telfijoreferencia=${data.telfijoreferencia}&nivelestudios=${data.nivelestudios}&salarioneto=${data.salarioneto}&ocupacion=${data.ocupacion}&detalleocupacion=${data.detalleocupacion}&deudas=${data.deudas}&frecuenciadepago=${data.frecuenciadepago}&clabe=${data.clabe}&bancoclabe=${data.banco}&titulartarjeta=${data.titulartarjeta}&fechadevencimiento=${data.fechadevencimiento}&numerotarjeta=${data.numerotarjeta}&bancotarjeta=${data.bancotarjeta}&dineroquenecesita=${data.dineroquenecesita}&fechadepagoen=${data.fechadepagoen}&totalaprestar=${data.totalaprestar}&aceptoterminoscondicionescontrato=${data.aceptoterminoscondicionescontrato}&pictures1=${data.pictures1}&pictures2=${data.pictures2}&aceptocontrato=${data.aceptocontrato}&password=${data.password}&idcontrato=${data.idcontrato}&contrato=${data.contrato}&timer=${data.timer.toFixed(2)}`)
      .then(res => {
        axios.post(`https://prestto.mx/api/sendDocument.php?nombre=${data.nombre}&apellidopaterno=${data.apellidopaterno}&apellidomaterno=${data.apellidomaterno}&celular=${data.celular}&email=${data.email}&idsms=${data.idsms}&aceptoterminoscondicionescel=${data.aceptoterminoscondicionescel}&historialcrediticio=${data.historialcrediticio}&conocimientodelcliente=${data.conocimientodelcliente}&genero=${data.genero}&curp=${data.curp}&rfc=${data.rfc}&cp=${data.cp}&estado=${data.estado}&municipio=${data.municipio}&ciudad=${data.ciudad}&colonia=${data.colonia}&calle=${data.calle}&numeroexterior=${data.numeroexterior}&numerointerior=${data.numerointerior}&telefonofijo=${data.telefonofijo}&parentesco=${data.parentesco}&referenciapellido=${data.referenciapellido}&telfijoreferencia=${data.telfijoreferencia}&nivelestudios=${data.nivelestudios}&salarioneto=${data.salarioneto}&ocupacion=${data.ocupacion}&detalleocupacion=${data.detalleocupacion}&deudas=${data.deudas}&frecuenciadepago=${data.frecuenciadepago}&clabe=${data.clabe}&bancoclabe=${data.banco}&titulartarjeta=${data.titulartarjeta}&fechadevencimiento=${data.fechadevencimiento}&numerotarjeta=${data.numerotarjeta}&bancotarjeta=${data.bancotarjeta}&dineroquenecesita=${data.dineroquenecesita}&fechadepagoen=${data.fechadepagoen}&totalaprestar=${data.totalaprestar}&aceptoterminoscondicionescontrato=${data.aceptoterminoscondicionescontrato}&pictures1=${data.pictures1}&pictures2=${data.pictures2}&aceptocontrato=${data.aceptocontrato}&password=${data.password}&idcontrato=${data.idcontrato}&contrato=${data.contrato}&timer=${data.timer.toFixed(2)}`)
        .then(resdos =>{
            console.log("Contrato enviado")
        })
      })
      .catch (error => console.log(error))
      window.open(`https://prestto.mx/api/openDocument.php?nombre=${data.nombre}&apellidopaterno=${data.apellidopaterno}&apellidomaterno=${data.apellidomaterno}&celular=${data.celular}&email=${data.email}&idsms=${data.idsms}&aceptoterminoscondicionescel=${data.aceptoterminoscondicionescel}&historialcrediticio=${data.historialcrediticio}&conocimientodelcliente=${data.conocimientodelcliente}&genero=${data.genero}&curp=${data.curp}&rfc=${data.rfc}&cp=${data.cp}&estado=${data.estado}&municipio=${data.municipio}&ciudad=${data.ciudad}&colonia=${data.colonia}&calle=${data.calle}&numeroexterior=${data.numeroexterior}&numerointerior=${data.numerointerior}&telefonofijo=${data.telefonofijo}&parentesco=${data.parentesco}&referenciapellido=${data.referenciapellido}&telfijoreferencia=${data.telfijoreferencia}&nivelestudios=${data.nivelestudios}&salarioneto=${data.salarioneto}&ocupacion=${data.ocupacion}&detalleocupacion=${data.detalleocupacion}&deudas=${data.deudas}&frecuenciadepago=${data.frecuenciadepago}&clabe=${data.clabe}&bancoclabe=${data.banco}&titulartarjeta=${data.titulartarjeta}&fechadevencimiento=${data.fechadevencimiento}&numerotarjeta=${data.numerotarjeta}&bancotarjeta=${data.bancotarjeta}&dineroquenecesita=${data.dineroquenecesita}&fechadepagoen=${data.fechadepagoen}&totalaprestar=${data.totalaprestar}&aceptoterminoscondicionescontrato=${data.aceptoterminoscondicionescontrato}&pictures1=${data.pictures1}&pictures2=${data.pictures2}&aceptocontrato=${data.aceptocontrato}&password=${data.password}&idcontrato=${data.idcontrato}&contrato=${data.contrato}&timer=${data.timer.toFixed(2)}`, '_blank').focus();
      let nom = this.state.idcontrato + '.pdf';
        html2canvas(document.querySelector("#dvContainer")).then(canvas => {
        /*document.body.appendChild(canvas)*/
          let imgData = canvas.toDataURL('image/jpeg');
          let imgWidth = 210;
          let pageHeight = 295;
          let imgHeight = canvas.height * imgWidth / canvas.width;
          let heightLeft = imgHeight;
          let doc = new jsPDF("p", "mm", "a4");
          let position = 0;

          doc.addImage(imgData, 'JPEG', 0,position, imgWidth-20, imgHeight-20);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'JPEG', 0, position, imgWidth-20, imgHeight-20);
            heightLeft -= pageHeight;
        }
        /*doc.save('re.pdf');*/
          //doc.save(nom);
          let pdf = doc.output('blob');
         /* window.open(doc.output('bloburl'))*/
          var data = new FormData();
          /*data.append("data" , pdf);*/
          /* Upload Data*/
          /*axios.post(`https://prestto.mx/api/uploadContract.php?nom=${this.state.idcontrato}`,data)
          .then(res => {
            console.log("pdfresponse",res)
          })
          .catch (error => console.log(error))*/

              // POST request using fetch inside useEffect React hook
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'Contrato' })
              };
              fetch(`https://prestto.mx/api/uploadContract.php?nom=${this.state.idcontrato}`,data)
                .then(response => response.json())
          });

  }

  sendSMS(){
    let session_url = 'https://sms-pp.sapmobileservices.com/cmn/bluemessag24572/bluemessag24572.sms';
    let username = 'bluemessag59306';
    let password = 'FIsg5NEf';
    const token = new Buffer(username + ":" + password).toString("base64");


    let code = Math.floor((Math.random() * 900) + 100);
    let number = '+52' + this.state.celular;

    //Send SMS
    axios.post(`https://prestto.mx/api/sendSMS.php?phone=${number}&code=${code}`)
    .then(res => {
        console.log("SMS", res)
    })

      //initialize
    this.setState({ idSMS: code })

  }

  handleClick(event) {
      if (event === 'codigopostal') {
        this.setState({colonia:''})
        axios.get(`https://api.copomex.com/query/info_cp/${ this.state.cp }?token=${this.state.tokenSEPOMEX}`)
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
        axios.get(`https://api.copomex.com/query/info_cp/${ this.state.cp }?token=${this.state.tokenSEPOMEX}`)
          .then(res => {
            const datadir = res.data;
            datadir.map( valor => {
              this.setState({ciudad: valor.response.ciudad});
              this.setState({todaslascolonias: this.state.todaslascolonias.concat(valor.response.asentamiento) });
            })
          })
      }
      else if (event === 'datospersonales') {
            let session_url = 'https://sms-pp.sapmobileservices.com/cmn/bluemessag24572/bluemessag24572.sms';
            let username = 'bluemessag59306';
            let password = 'FIsg5NEf';
            const token = new Buffer(username + ":" + password).toString("base64");


            let code = Math.floor((Math.random() * 900) + 100);
            let number = '+52' + this.state.celular;

            //Send SMS
            axios.post(`https://prestto.mx/api/sendSMS.php?phone=${number}&code=${code}`)
            .then(res => {
                console.log("SMS", res)
            })

              //initialize
            this.setState({ idSMS: code })

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
                  this.setState({existemail:true})
                }
                else {
                  /*this.setState({ stateView:'datoscasa', datoscasa:1})*/
                }
              })
              .catch (error => console.log(error))
              //quitar de aqui
                if(this.state.celular) {
                  if(this.state.apellidomaterno) {
                    this.setState({ stateView:'datoscasa', datoscasa:1})
                  }
                }
              }
              else {
                this.setState({ emailmsg:true, msgemail: 'Correo invalido'})
                setTimeout(()=>{
                  this.setState({ emailmsg:false, msgemail : ''})
                }, 5000);
              }
            }
          }
          else if (event === 'datoscasa') {
            /*this.setState({ stateView:'datoscasa', datoscasa:1})*/
          }
      else if (event === 'datoshistorial') {
        if ( !this.state.aceptoterminoscondicionescel ) {
              this.setState({ msgcodigoverifica:true, msgeneral: 'Debes aceptar t??rminos y condiciones'})
              setTimeout(()=>{
                this.setState({ msgcodigoverifica:false, msgeneral : ''})
              }, 5000);
        }
        if( this.state.smsuser != this.state.idSMS) {
          this.setState({ msgcodigoverificados:true, msgeneral: 'C??digo incorrecto, introd??celo correctamente o presiona el bot??n reenviar c??digo para obtener uno nuevo'})
          setTimeout(()=>{
            this.setState({ msgcodigoverificados:false, msgeneral : ''})
          }, 5000);
        }
        else {
          this.setState({ stateView:'historial', historial:1})
        }
      }
      else if (event === 'datosEmpleo') {

      if(this.state.rfc === null || this.state.rfc === '' ) {
          this.setState({ rfcmsg:true, cpmsg: 'Debes llenar el campo'})
        }
      if(this.state.curp === null || this.state.curp === '' ) {
          this.setState({ curpmsg:true, curpmsg: 'Debes llenar el campo'})
        }
      if(this.state.cp === null || this.state.cp === '') {
          this.setState({ cpmsg:true, cpmsg: 'Debes llenar el campo'})
        } 
      if(this.state.colonia === null || this.state.colonia === 'Selecciona una colonia') {
          this.setState({ coloniamsg:true, coloniamsg: 'Debes llenar el campo'})
        }
      if(this.state.ciudad === null || this.state.ciudad === 'Selecciona una ciudad') {
          this.setState({ ciudadmsg:true, ciudadmsg: 'Debes llenar el campo'})
        } 
      if(this.state.municipio === 'Selecciona un municipio') {
          this.setState({ municipiomsg:true, municipiomsg: 'Debes llenar el campo'})
        }
      if(this.state.estado === 'Selecciona un estado') {
          this.setState({ estadomsg:true, estadomsg: 'Debes llenar el campo'})
        }
      if(this.state.calle === null || this.state.calle === '') {
          this.setState({ callemsg:true, callemsg: 'Debes llenar el campo'})
        }
      if(this.state.numeroexterior === null || this.state.numeroexterior === '') {
          this.setState({ numeroexteriormsg:true, numeroexteriormsg: 'Debes llenar el campo'})
        }
      if(this.state.parentesco === null || this.state.parentesco === '') {
          this.setState({ parentescomsg:true, parentescomsg: 'Debes llenar el campo'})
        }
      if(this.state.referenciapellido === null || this.state.referenciapellido === '') {
          this.setState({ referenciapellidomsg:true, referenciapellidomsg: 'Debes llenar el campo'})
        }
      if(this.state.telfijoreferencia === null || this.state.telfijoreferencia === '') {
          this.setState({ telfijoreferenciamsg:true, telfijoreferenciamsg: 'Debes llenar el campo'})
        }
      if(this.state.curp.length < 18 ){
          this.setState({ curpmsgdos:true, curpmsgdos: 'Debes llenar el campo'})
        }
      if(this.state.rfc.length < 13 ){
          this.setState({ rfcmsgdos:true, rfcmsgdos: 'Debes llenar el campo'})
        }
        else {
          if (this.state.rfc && this.state.cp && this.state.colonia && this.state.ciudad && this.state.municipio && this.state.estado && this.state.calle && this.state.numeroexterior && this.state.parentesco && this.state.referenciapellido && this.state.telfijoreferencia ){
            this.setState({ stateView:'datosempleo', datosEmpleo:1}) 
          } 
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
  //A??o
  let year = now.getFullYear();
  //Mes
  let month = now.getMonth() + 1;
  //D??a
  let day = now.getDate();

  let nombresubstring = this.state.nombre;
  let apellidosubstring = this.state.apellidopaterno;
  let valantes = '00';

  let idcontrato = 'PR' + nombresubstring.substring(0,2) + apellidosubstring.substring(0,2) + valantes +  (this.props.lastregistro + 1);
  
  this.state.idcontrato = idcontrato.toUpperCase();

  return (
    <div id="datosverificar" className="container-form">
    <h4 className="text-left title-form">??Felicidades!</h4>
    <p className="subtitle-big">Est??s a un paso de finalizar tu pr??stamo.</p>
    <p className="subtitle-big">Tu solicitud ha sido pre aprobada, para completar el proceso es necesario que nos proporciones tu <b>INE</b>.</p>
    <p className="subtitle-big"><b>Adjunta tus documentos.</b></p>
    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
            <div className="input-group">
              <div className="custom-file">
              <img src={cohetelado} alt="prestto-prestamos-en-linea-26" className="subir-icono"/>
                <ImageUploader
                  withIcon={false}
                  label = 'Tama??o m??ximo 5MB formato: jpg, pdf, png'
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
              <img src={cohetelado} alt="prestto-prestamos-en-linea-27" className="subir-icono"/>
                <ImageUploader
                    withIcon={false}
                    label = 'Tama??o m??ximo 5MB formato: jpg, pdf, png'
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
        {/*<div className="pointerb" type="submit" value="Submit"> Obtener pr??stamo </div>*/}
        <Popup
          trigger={<div className="button pointerb" type="button" onClick={this.state.flagcontrato = false }> Obtener pr??stamo </div>}
          modal
          nested
        >
        { close => (
          <>
          <div className="contrato-container">
            <div className="text-contrato">
              {this.ContratoShow()}
              {/* <Contrato 
                fecha= { day + "/" + month + "/" + year }
                numerocontrato = { idcontrato.toUpperCase() }
                nombre= { this.state.nombre }  
                apellidopaterno= { this.state.apellidopaterno } 
                apellidomaterno={ this.state.apellidomaterno } 
                rfc = { this.state.rfc } 
                curp= { this.state.curp } 
                email={ this.state.email }  
                totalapagar={ this.state.totalapagar } 
                totalaprestar={ this.state.totalaprestar } 
                clabe={this.state.clabe} 
                sendServer = {this.state.sendServer}
              />*/}
            </div>
            <div className="row date-contrato">
              <p>He le??do y acepto los t??rminos y condiciones de la oferta expresada en el presente contrato. Cualquier duda o comentario por favor comunicate al (55)25052455.</p>
              <div className="col text-left font-weight-bold">
                <Link to="/graciasporturegistro"><button className="btn btn-outline-secondary buscar-btn" type="button" onClick={ this.sendDatos }>ACEPTO</button></Link>
              </div>
              <div className="col text-right font-weight-bold">
              <Link to="/prestamo-en-linea-registro"><button className="btn btn-outline-secondary buscar-btn" type="button" onClick={this.state.flagcontrato = true }>CANCELAR</button></Link>
              </div>
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
                <p className="text-left">G??nero</p>
                <label className="radio-inline option-form"><input type="radio" name="genero" value="masculino" checked={ this.state.genero === 'masculino'}  checked="checked"/> Masculino</label>
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
              <p className={ this.state.curpmsgdos ? "show error-msg" :'hide'}> El valor del CURP debe ser de 18 d??gitos </p>
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
                  <p className={ this.state.rfcmsgdos ? "show error-msg" :'hide'}> El valor del RFC debe ser de 13 d??gitos </p>
              </div>
          </div>
        </div>
      </div>
    </div>

    <h4 className="text-left title-form">Direcci??n</h4>
      {/* PRIMER ROW */}
      <div className="container">
          <div className="row">
          <div className="col-sm">
            <div className="form-group-dos">
              <div className="form-group">
                <p>C??digo Postal*</p>       
                <div className="input-group mb-3">
                    <input 
                      type="num" 
                      className="form-control" 
                      placeholder="C??digo Postal"
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
                        <p>N??mero exterior*</p>
                          <input 
                            type="number" 
                            className="form-control" 
                            placeholder="N??mero exterior*"
                            value= { this.state.numeroexterior }
                            onChange= { (e) => { this.setState({ numeroexterior: e.target.value })}}
                          />
                      </div>
                      <span className={ this.state.numeroexteriormsg ? "show error-msg" :'hide'}> Debes llenar el campo </span>
                  </div>
                  <div className="col-sm">
                    <div className="form-group-both">
                      <p>N??mero interior</p>
                        <input 
                          type="number" 
                          className="form-control" 
                          placeholder="N??mero interior"
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
                <p>Tel??fono fijo (opcional)</p>
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
                    <option value="Conyuge">C??nyuge</option>
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
                <p>Tel??fono fijo o celular*</p>
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
      {/* BOT??N*/}
      <div className="container">
          <div className="row">
          <div className="col-sm mobile-col">
            <div className="form-group-dos">
              <div className="pointer_atras extra-margin-left" onClick={() => this.setState({stateView : 'datoscasa'})}> Atr??s </div>
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
    <h4 className="text-left title-form">Informaci??n de Empleo</h4>
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
                <label>Ocupaci??n</label>
                  <select value={ this.ocupacion } name="ocupacion" onChange={(e) => this.setSelectedOption(e.target.value) } className="form-control">
                    <option value="">Seleccionar</option>
                    <option value="Soyduenodenegocio">Soy due??o de negocio</option>
                    <option value="Trabajopormicuenta">Trabajo por mi cuenta</option>
                    <option value="Empleado">Empleado </option>
                    <option value="Amadecasa">Ama de casa</option>
                    <option value="Jubiladopensionado">Jubilado pensionado</option>
                    <option value="Estudiante">Estudiante</option>
                    <option value="Desempleado">Desempleado</option>
                    <option value="Gobierno">Gobierno</option>
                    <option value="SaludyBelleza">Salud y Belleza</option>
                    <option value="Manufactura">Manufactura </option>
                    <option value="Educacion">Educaci??n</option>
                    <option value="Transporteyautomotriz">Transporte y automotriz</option>
                    <option value="Serviciosprofesionales">Servicios Profesionales</option>
                    <option value="Serviciosycomercio">Servicios y Comercio </option>
                    <option value="Campoeindustrial">Campo e industrial</option>
                    <option value="Hospitalidadyturismo">Hospitalidad y Turismo</option>
                    <option value="Restaurantes">Restaurantes</option>
                    <option value="Culturayrecreacion">Cultura y Recreaci??n</option>
                    <option value="Tecnologiaycomunicacion">Tecnolog??a y Comunicaci??n</option>
                  </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                  <label>Detalle Ocupaci??n</label>
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
                    type="text" 
                    className="form-control" 
                    pattern="/^(?:(?=.{1,10}$)\d{1,3}(?:,\d{3})+|(?=.{1,8}$)\d+)$/gm"
                    placeholder="Gasto promedio en deudas"
                    value= {this.state.deudas ? parseInt(this.state.deudas.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')).toLocaleString(): ''}
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
                    pattern="([0-9]{1,3}).([0-9]{1,3})"
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
        <div className="pointer_atras" onClick={() => this.setState({stateView : 'historial'})}> Atr??s </div>
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
    <h4 className="text-left title-form">Informaci??n Bancaria</h4>
    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
                  <p><span className="circle-button active-button"></span><span className="font-weight-bold"> &nbsp; CLABE Interbancaria</span></p>
                  <p><span className="circle-button" onClick={() => this.handleClick('tarjetadebito')}></span><span className="disable-button">  &nbsp; Tarjeta de D??bito</span></p>
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
                        placeholder="18 d??gitos"
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
        <div className="pointer_atras" onClick={() => this.setState({stateView : 'datosempleo'})}> Atr??s </div>
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
  const cattotal = (( totalapagar - this.state.setValue)/ this.state.setValue * 12)*100 ;
  

  let days =  this.state.setDias;
  let newDate = new Date(Date.now()+days*24*60*60*1000);
  let dateformat = moment(newDate).format('ll'); 

  this.state.totalapagar = totalapagar.toFixed(2);
  this.state.totalaprestar = totalapagar.toFixed(2);
  this.state.fechadepagoen = dateformat;

  return (
    <div id="datospersonales" className="container-form">
      <h4 className="title-form">Confirma las condiciones,</h4>
      <p className="up-title">Para continuar con tu solicitud.</p>
      <p className={ this.state.aceptoterminoscondicionescontratomsg ? "show error-msg text-center" :'hide'}> Debes aceptar T??rminos y Condiciones del contrato </p>
    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group slider-group">
              <p className="text-left parrafomini">??Cu??nto dinero necesitas?</p>
                  <Slider
                    defaultValue={1000}
                    getAriaValueText={this.setValue}
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
            <label>??En cu??nto tiempo lo quieres pagar?</label>
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
              <span className="text-left-monto-a">7 d??as </span>
              <span className="text-left-monto-b">30 d??as </span>
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
                <p className="p-2 bd-highlight circulo-icono-confirmav"><img src={MoneyIcon} alt="prestto-prestamos-en-linea-28"></img></p><p className="p-2 bd-highlight mini-text text-center">Recibiras est?? cantidad <br></br><span className="font-more-big">$ {this.state.setValue.toString() } mxn</span></p>
                </div>  
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group-dos text-center center-data">
              <div className="d-flex flex-row bd-highlight mb-3"><p className="p-2 bd-highlight circulo-icono-confirmav"><img src={CalendarIcon} alt="prestto-prestamos-en-linea-29"></img></p><p className="p-2 bd-highlight mini-text text-center">Fecha de pago <br></br><span className="font-more-big">{  dateformat }  </span></p>
            </div>  
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group-dos text-center center-data">
              <div className="d-flex flex-row bd-highlight mb-3"><p className="p-2 bd-highlight circulo-icono-confirmav"><img src={PayIcon} alt="prestto-prestamos-en-linea-30"></img></p><p className="p-2 bd-highlight mini-text text-center">Total a pagar <br></br><span className="font-more-big">$ { totalapagar.toFixed(2).toString()} mxn</span></p>
            </div>  
          </div>
        </div>
        </div>
        </div>

      {/* Cuarta Row */}
      <div className="container container-confirma">
        <div className="row">
          <div className="col-sm">
            <div className="form-group-dos text-left">
                <p>Costo anual total {cattotal === 'NaN' ? '' : cattotal.toFixed(2)}%</p>
                <p className="esp-text">Sin IVA, para fines informativos y de comparaci??n exclusivamente</p>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group text-right">
              <div className="pointer_atras_confirma button_next btn-right" onClick={() => this.handleClick('felicidades')}> Confirmar </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}



/* c??digo de verificaci??n whatsapp */
datosCasa = () => {
  return (
    <div id="datosverificar" className="container-form">
    <h4 className="text-left title-form">C??digo de Verificaci??n</h4>
    <p className={ this.state.msgcodigoverifica ? "show error-msg text-center" :'hide'}> {this.state.msgeneral} </p>
    <p className={ this.state.msgcodigoverificados ? "show error-msg text-center" :'hide'}> {this.state.msgeneral} </p>
    <p className="subtitle-big">Para continuar la solicitud, ingresa el c??digo recibido por SMS</p>
    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label>C??digo SMS</label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder=""
                  value= { this.state.smsuser }
                  onChange= { (e) => { this.setState({ smsuser: e.target.value })}}
              />
            </div>
          </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <div className="pointer_reenviar" onClick={this.sendSMS}> Reenviar c??digo </div>
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
                  He le??do y acepto los <a href="/terminosycondiciones" target="_blank">t??rminos y condiciones</a>
                </label>
            </div>
          </div>
      </div>
    </div>
    {/* BUTTON */}
    <div className="container container_button">
      <div className="row">
        <div className="col-sm mobile-col">
          <div className="pointer_atras" onClick={() => this.setState({stateView : 'datoscaso'})}> Atr??s </div>
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
    <h4 className="text-left title-form">Informaci??n Bancaria</h4>

    {/* PRIMER ROW */}
    <div className="container">
        <div className="row">
          <div className="col-sm">
          <div className="form-group">
              <label>Nombre del titular (como aparece en la tarjeta)</label>
              <input 
                    type="num" 
                    className="form-control" 
                    placeholder="Juan Pablo Garc??a Galindo"
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
                      type="text" pattern="\d*" maxlength="7" 
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
              <label>N??mero de tarjeta (16 digitos)</label>
              <div className="input-group mb-3">
                <input 
                      type="num" 
                      className="form-control" 
                      placeholder="16 d??gitos"
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
            <div className="pointer_atras" onClick={() => this.setState({stateView : 'datosempleo'})}> Atr??s </div>
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
        <p>Tu email ya est?? registrado</p>
        <p>Inicia sesi??n <a href="" target="_self">aqu??</a></p>
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
                placeholder="Garc??a"
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
                placeholder="P??rez"
                value= { this.state.apellidomaterno }
                onChange= { (e) => { this.setState({ apellidomaterno: e.target.value })}}
                required
            />
            <span className={ this.state.apellidomaternomsg ? "show error-msg" :'hide'}> Debes llenar el campo </span>
          </div>
        </div> 
        <div className="col-sm">
          <div className="form-group">
            <label>Tel??fono Celular*</label>
            <input 
                type="num" 
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
            <label>Correo electr??nico*</label>
            <input 
                type="email" 
                id="email"
                className="form-control" 
                placeholder="Correo electr??nico"
                name="email"
                pattern="/^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                required
                value= { this.state.email }
                onChange= { (e) => { this.setState({ email: e.target.value })}}
            />
            <span className={`warning-msg ${this.state.existemail ? "show error-msg" :'hide'}`}>El correo ya existe dir??gete a <a href="/prestamo-en-linea-login"><span className="link-to">Mi cuenta</span></a></span>
            <span className={ this.state.emailmsg ? "show error-msg" :'hide'}> { this.state.msgemail } </span>
          </div>
        </div>
        <div className="col-sm ">
          <div className="form-group">
            {
              this.state.existemail ? <div className="pointer button_next" onClick={() => this.handleClick('datospersonales')}> Siguiente </div> :  <div className="pointer button_next" onClick={() => this.handleClick('datospersonales')}> Siguiente </div>
            }
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

ContratoShow() {
  let { nombre, apellidopaterno, apellidomaterno, rfc, curp, email, totalaprestar, totalapagar, clabe, 
    fecha, idcontrato, calle, numerointerior, colonia, ciudad , municipio, estado, cp, dineroquenecesita,
    fechadepagoen, setValue, tarjetadebito,bancotarjeta} = this.state
    const cattotal = (( totalapagar - this.state.setValue)/ this.state.setValue * 12)*100 ;
    let contrato = $('#dvContainer').html();
    return (
              <div>
                <div id="image-out"></div>
                   {/*<!-- <button className="btn btn-outline-secondary pointer btn_download" type="button" onClick={() => this.downloadFile()}>DESCARGAR</button> -->*/}
                    <div id="dvContainer">
                    <img src={logomorado} className="logo_contrato"></img>
                    <table className="contrato-table">
                      <tr className="row-contrato morado_bg">
                        <td className="colr col-fecha"><b>Fecha: { fecha }</b></td>
                        <td className="colr text-right"><b>N??MERO DE CONTRATO:{idcontrato}</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                      <td>CAR??TULA DEL CONTRATO DE CRE??DITO que forma parte integrante del contrato de cre??dito simple, que celebran por una parte AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R., ???PRESTTO??? con domicilio en Av. Nuevo Le??n #213 - 602 Col. Condesa, Cuauht??moc, C.P. 06100, Ciudad de M??xico, RFC: AFI090129MZ2, y por la otra  { nombre + ' ' + apellidopaterno + ' ' + apellidomaterno} ???EL CLIENTE???, con domicilio en {calle + ' ' +  numerointerior + ' ' + colonia + ' ' + ciudad  + ' ' + municipio + ' ' + estado + ' ' + cp}</td>
                      </tr>
                    </table>
                    <br></br>
                    <table className="contrato-table">
                      <tr className="row-contrato morado_bg">
                        <td className="colr col-fecha text-center"><b>NOMBRE DEL PRODUCTO: PRODUCT_NIVEL 1 <br></br>TIPO DE PRE??STAMO: CRE??DITO SIMPLE </b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td className="td-ex text-center"><b>CAT sin IVA (COSTO ANUAL TOTAL)</b></td>
                        <td className="td-ex text-center"><b>TASA DE INTER??S ANUAL ORDINARIA </b></td>
                        <td className="td-ex text-center"><b>TASA DE INTERE??S ANUAL MORATORIA</b></td>
                        <td className="td-ex text-center"><b>MONTO DEL CR??DITO</b></td>
                        <td className="td-ex text-center"><b>MONTO TOTAL A PAGAR</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td className="td-ex text-center"><b>{ cattotal ? cattotal.toFixed(2) : cattotal }</b> <br></br>(Para fines informativos y de comparacio??n exclusivamente) </td>
                        <td className="td-ex text-center"><b>493%</b></td>
                        <td className="td-ex text-center"><b>986%</b></td>
                        <td className="td-ex text-center"><b> $ {setValue}</b></td>
                        <td className="td-ex text-center"><b>$ {totalapagar}</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td className="td-ex text-center"><b>COMISIONES</b> <br></br>`EXTENSI??N Fija seg??n el plazo, m??s IVA Cl??usula: D??cima COBRANZA $ 600.00 (Seiscientos pesos MN 00/100) m??s IVA Cl??usula: D??cima</td>
                        <td className="td-ex text-center"><b>PLAZO DEL CR??DITO APROBADO <br></br>{ fechadepagoen }</b></td>
                        <td className="td-ex-b"><b>FECHAS DEL PAGO <br></br>{ fechadepagoen }</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td className="td-ex text-center"><b>EXTENSIO??N Fija</b></td>
                        <td className="td-ex text-center"><b>00 d??as</b></td>
                        <td className="td-ex-b"><b>Fecha l??mite de pago: {fechadepagoen}<br></br>Fecha al corte: {fechadepagoen}</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td><b>Ca??lculo de Intere??s Moratorio:</b> Los Intereses Moratorios se calculara??n sobre saldos insolutos diarios durante la totalidad del plazo comprendido entre la Fecha de Pago aplicable a un cre??dito y la fecha en que efectivamente se realice el pago total de las obligaciones del el Cliente conforme al contrato.</td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato morado_bg">
                        <td className="colr col-fecha text-center"><b>COMISIONES RELEVANTES </b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td className="td-ex"><b>APERTURA: N/A</b></td>
                        <td className="td-ex"><b>ANUALIDAD: N/A</b></td>
                      </tr>
                      <tr className="row-contrato-m">
                        <td className="td-ex"><b>PREPAGO: N/A</b></td>
                        <td className="td-ex"><b>RECLAMACI??N IMPROCEDENTE: N/A</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td><b>Medios Electro??nicos:</b> ???EL Cliente???, sabe, reconoce y acepta que la presente cara??tula, asi?? como el Contrato de Cre??dito se celebra por medios electro??nicos, da??ndole plena validez en te??rminos de los arti??culos 1803 fraccio??n I del Co??digo Civil Federal, 80, 89 y 89 Bis Co??digo de Comercio y la NOM-151-SCFI-2002, acordando ambas partes que para la comprobacio??n fehaciente de este acto juri??dico bastara?? un correo electro??nico o la aceptacio??n del deudor de las condiciones generales del instrumento a trave??s de la pa??gina web de donde lo obtuvo.</td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                        <tr className="row-contrato morado_bg">
                          <td className="colr col-fecha text-center"><b>COMISIONES RELEVANTES </b></td>
                        </tr>
                      </table>
                      <table className="contrato-table">
                        <tr className="row-contrato-ma">
                          <td><b>Aclaraciones y/o Reclamaciones:</b></td>
                        </tr>
                        <tr className="row-contrato-ma">
                          <td><b>Unidad Especializada para Atencio??n a Usuarios PRESTTO (UNE PRESTTO)</b></td>
                        </tr>
                        <tr className="row-contrato-ma">
                          <td><b>Domicilio:</b>Av. Nuevo Le??n #213 - 602 Col. Condesa, Cuauht??moc, C.P. 06100, Ciudad de M??xico</td>
                        </tr>
                        <tr className="row-contrato-ma">
                          <td><b>Tele??fono: </b>A+52 1 55 8038 7757 <b> &nbps;Correo electro??nico:</b> clientes@PRESTTO.mx Pa??gina de Internet: https://prestto.mx/</td>
                        </tr>
                        <tr className="row-contrato-ma">
                          <td><b>PROFECO:</b> Tele??fono. 800 468 8722. &nbps;<b>Pa??gina de Internet: </b> https://www.gob.mx/profeco</td>
                        </tr>
                    </table>
                        {/* PIE 
                          <hr className="line_contra"></hr>
                          <p className="footer_pie">Av. Nuevo Le??n 213-602 Col.Condesa, CDMX</p>
                          <p className="footer_pie">clientes@prestto.mx</p>
                          <p className="footer_pie">www.prestto.mx</p>
                        PIE */}
                      <br></br>
                      <table className="contrato-table">
                      <tr className="row-contrato morado_bg">
                        <td className="colr col-fecha text-center"><b>ADVERTENCIA:</b></td>
                      </tr>
                    </table>
                      <table className="contrato-table">
                      <tr className="row-contrato-ma">
                          <td className="contrafir">
                            ???INCUMPLIR CON LAS OBLIGACIONES AQUI?? PACTADAS PUEDE GENERAR COMISIONES E INTERESES MORATORIOS??? <br></br>
                            ???CONTRATAR PRE??STAMOS Y/O CRE??DITOS POR ARRIBA DE TU CAPACIDAD DE PAGO PUEDE AFECTAR TU HISTORIAL CREDITICIO??? 
                          </td>
                      </tr>
                      <tr className="row-contrato-ma">
                          <td className="contrafir">
                            <b>EL Cliente</b>, expresamente declara que <b>PRESTTO</b>  le ha explicado el contenido y alcance de las condiciones generales de este cre??dito conforme con el contenido del cuadro informativo arriba descrito, las cuales acepta de conformidad, en la Ciudad de Me??xico, en la fecha arriba mencionada.
                          </td>
                      </tr>
                      <tr className="row-contrato-ma">
                          <td className="contrafir">
                          <SignatureCanvas canvasProps={{width: 500, height: 100 }} />
                          </td>
                      </tr>
                      <tr className="row-contrato-ma">
                          <td className="contrafir">
                            <b> { nombre + ' ' + apellidopaterno + ' ' + apellidomaterno}</b>
                          </td>
                      </tr>
                    </table>
                    <br></br>
                    <br></br>
                    <div className="container-contrato">
                          <table className="font-contrato">
                            CONTRATO DE ADHESIO??N DE CRE??DITO SIMPLE QUE CELEBRAN, POR UNA PARTE A, AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R.,, A QUIEN EN LO SUCESIVO Y PARA EFECTOS DEL PRESENTE CONTRATO SERA?? DENOMINADA ???PRESTTO??? Y POR LA OTRA PARTE Y POR SU PROPIO DERECHO { nombre + ' ' + apellidopaterno + ' ' + apellidomaterno} A QUIEN EN LO SUCESIVO Y PARA EFECTOS DEL PRESENTE CONTRATO SE LE DENOMINARA?? ???EL CLIENTE??? Y CONJUNTAMENTE CON PRESTTO ???LAS PARTES??? AL TENOR DE LOS SIGUIENTES ANTECEDENTES, DECLARACIONES Y CLA??USULAS:
                            <br></br><br></br>
                            ANTECEDENTES
                            PRIMERO. EL CLIENTE formulo?? a trave??s de la pa??gina de internet https://prestto.mx/ una solicitud (en adelante, la Solicitud), a trave??s de la cual requirio?? a PRESTTO, el otorgamiento de un cre??dito simple, en moneda nacional (en adelante, el Cre??dito). <br></br>
                            SEGUNDO. PRESTTO, revisara?? y analizara?? la Solicitud, asi?? como de la informacio??n y documentacio??n que le fue proporcionada por el CLIENTE, para autorizar en definitiva dicha Solicitud.
                            <br></br><br></br>
                            DECLARACIONES
                            <br></br>
                            I. Declara PRESTTO, que:<br></br>
                            a) Es una  Sociedad Financiera de Objeto M??ltiple No Regulada (SOFOM E.N.R.). Conforme a las leyes de los Estados Unidos Mexicanos, mediante escritura pu??blica nu??mero 24,595 de fecha 16 de julio de 2014, otorgada ante la fe del Licenciado Carlos Francisco Castro Su??rez, Notario Pu??blico nu??mero 110 del Estado de Me??xico.<br></br>
                            
                            b) Que se encuentra inscrito ante el registro federal de contribuyentes (RFC) con clave: AFI090129MZ2<br></br>
                            
                            c) Sen??ala como su domicilio, para los efectos relacionados con el presente contrato, el ubicado en Av. Nuevo Le??n #213 - 602 Col. Condesa, Cuauht??moc, C.P. 06100, Ciudad de M??xico.<br></br>
                            
                            d) Su pa??gina de Internet se encuentra ubicada en la direccio??n: https://prestto.mx/<br></br>
                                      
                            e) Que da estricto cumplimiento a lo establecido en la Ley Federal de Proteccio??n de Datos Personales en posesio??n de Particulares, y su Reglamento, respecto de la informacio??n personal proporcionada por sus clientes, asegurando la confidencialidad de la misma y estableciendo que solamente la utilizara?? con la finalidad de corroborar la informacio??n proporcionada por El CLIENTE, respecto de su capacidad juri??dica y financiera a efectos de contratar los productos y servicios establecidos en el presente Contrato; asi?? como para rendir informes tanto a autoridades administrativas como judiciales que debidamente justificadas en disposiciones legales, asi?? lo solicitaren.
                            <br></br>
                            f) Que se encuentra a disposicio??n del CLIENTE en las oficinas de PRESTTO, el Anexo que contiene  las disposiciones legales referidas expresamente en el presente Contrato, mismas que tambie??n podra??n ser consultadas en la pa??gina web https://prestto.mx/<br></br>
                            Es su intencio??n otorgar al CLIENTE el Cre??dito solicitado, conforme a lo estipulado en el presente Contrato. <br></br>
                            II. Declara el CLIENTE, que:<br></br>
                            a) Es una persona fi??sica, mayor de edad, con capacidad legal y facultades suficientes para celebrar el presente Contrato, asi?? como para asumir y dar cumplimiento a las obligaciones que en el mismo se establecen. <br></br>
                            b) Que su Registro Federal de Contribuyentes (RFC) es:<b> { rfc }</b>, y su Clave U??nica de Registro de Poblacio??n es: <b>{curp}</b> .<br></br>
                            c) Sen??ala como su domicilio, para los efectos relacionados con el Contrato, el indicado en la Solicitud, mencionada en el Antecedente Primero del presente instrumento.<br></br>
                            d) PRESTTO, con anterioridad a la fecha de celebracio??n del Contrato, ha hecho de su conocimiento el contenido del presente contrato y de todas las caracteri??sticas aplicables al Cre??dito.<br></br>
                            e) Reconoce que detra??s de esta operacio??n no existe un Propietario Real, conforme a lo que estable la Ley Federal para la Prevencio??n e Identificacio??n de Operaciones con Recursos de Procedencia Ili??cita, siendo el CLIENTE, el u??nico y exclusivo beneficiario del cre??dito solicitado.<br></br>
                            f) Es su intencio??n que PRESTTO le otorgue el Cre??dito, conforme a lo estipulado en el presente Contrato.<br></br>
                            g) Declara bajo protesta de decir verdad que toda la informacio??n y documentacio??n que presento?? y proporciono?? a PRESTTO a la fecha de firma del presente contrato es actual, verdadera y carece de error, vicios del consentimiento o mala fe.<br></br>
                            h) Cuenta con los recursos econo??micos suficientes para dar cumplimiento a las obligaciones que, en te??rminos del Contrato, contrae a su cargo, mismos que provienen y provendra??n de fuentes li??citas. <br></br>
                            i) Que recibio?? a su entera satisfaccio??n, comprendiendo el alcance de la misma, la siguiente informacio??n por parte de PRESTTO: I.-La cantidad total a pagar, asi?? como la forma y condiciones para su liquidacio??n; II.- Los intereses generados y dema??s cargas financieras; III.- Los montos accesorios; IV.- La descripcio??n detallada del monto y cargos vinculados al cre??dito amparado por el presente contrato; V.- La cantidad total a pagar, su fecha exacta de vencimiento, el nu??mero y monto de pagos individuales, intereses, comisiones, penalidades convencionales y cargos respectivos, incluidos los fijados por pagos anticipados o cancelacio??n; VI. El derecho y las condiciones para la liquidacio??n prematura del cre??dito y sus accesorios; VII. Los intereses ordinarios causados, forma de calcularlos y el tipo de tasa aplicable; VIII. Los intereses moratorios en los que podri??a incurrir, la forma de calcularlos y el tipo de tasa aplicable.<br></br>
                            j) Que con anterioridad a la celebracio??n del presente contrato, PRESTTO hizo de su conocimiento, a su entera comprensio??n, el contenido del presente instrumento y de los dema??s documentos a suscribir, asi?? como tambie??n los cargos o gastos a generarse en relaci??n con el mismo, incluyendo m??s no limita??ndose al (CAT) ???Costo Anual Total de financiamiento expresado en te??rminos porcentuales anuales que, para fines informativos y de comparacio??n, incorpora la totalidad de los costos y gastos inherentes a los Cre??ditos??? (sin incluir el impuesto al valor agregado (IVA), correspondiente al presente cre??dito).<br></br>
                            k) Que no desempen??a actualmente o ha desempen??ado en los u??ltimos dos an??os anteriores a la fecha de la firma del presente contrato, actividades que lo categoricen como persona poli??ticamente expuesta, incluyendo m??s no limita??ndose a funciones pu??blicas destacadas en un pai??s extranjero o en territorio nacional, considerando entre otros, a los jefes de estado o de gobierno, li??deres poli??ticos, funcionarios gubernamentales, judiciales o militares de alta jerarqui??a, altos ejecutivos de empresas estatales o funcionarios o miembros importantes de partidos poli??ticos. <br></br>
                            l) Que a su leal saber y entender ninguna de las personas con las cuales guarda parentesco por consanguineidad o afinidad hasta en segundo grado, su co??nyuge, concubina, concubinario y/o persona moral alguna con la cual mantenga vi??nculos patrimoniales realizan o han realizado las actividades descritas en el inciso k bajo los mismos te??rminos. <br></br>
                            Para efectos del Contrato, las PARTES asignan a los te??rminos sen??alados a continuacio??n, el significado que en cada caso se les atribuye, a menos que el contexto en que se utilicen, implique un concepto diferente y asi?? se indique, independientemente de su utilizacio??n en singular o en plural. <br></br>
                            a) Cara??tula del Contrato de Cre??dito. Documento que forma parte integrante del presente Contrato, que suscribe el Cliente por cada operacio??n, cre??dito o servicio que contrate, en el cual se establecen las caracteri??sticas aplicables al cre??dito otorgado por PRESTTO.<br></br>
                            b) CAT: Costo Anual Total de Financiamiento expresado en te??rminos anuales porcentuales que, para fines informativos y de comparacio??n, incorpora la totalidad de los costos y gastos inherentes a los cre??ditos, pre??stamos o financiamientos que otorgan las entidades financieras, de conformidad con las disposiciones que al efecto emita el Banco de Me??xico.<br></br>
                            c) Comisio??n por Extensio??n. Significa la comisio??n que el CLIENTE podra?? pagar antes o hasta en la Fecha de Pago para obtener una pro??rroga para el pago total del cre??dito en ese momento vigente. Esta comisio??n podra?? ser variable por cada pre??stamo efectuado al CLIENTE.<br></br>
                            d) Comisio??n por Gastos de Cobranza. Significa la comisio??n que el CLIENTE debera?? pagar en caso de retrasarse en el pago de cualesquiera cantidades a su cargo bajo este Contrato conforme al importe indicado en la Cara??tula del Contrato de Cre??dito.<br></br>
                            e) Cre??dito. Es la operacio??n financiera objeto del presente contrato, que consiste en el otorgamiento que hace PRESTTO al CLIENTE de una cantidad determinada de dinero, oblig??ndose e??ste u??ltimo a devolver la cantidad solicitada en los te??rminos y condiciones estipulados en el Contrato.<br></br>
                                      
                            f) Di??a Ha??bil. Es cualquier di??a de la semana, excluyendo los di??as sa??bado y domingo, asi?? como los di??as en que, conforme a las disposiciones aplicables, las instituciones de cre??dito deban cerrar sus puertas, suspender operaciones y la prestacio??n de servicios al pu??blico.<br></br>
                            
                            g) Documentos de Identificacio??n. Se refiere a los documentos de identificacio??n que, conforme a la legislacio??n vigente, se requieren para el otorgamiento de un cre??dito. Y son, comprobante de domicilio, y cualquier identificacio??n oficial; que puede ser cualquiera de los siguientes documentos: Credencial para Votar (INE).<br></br>
                            i) Extensio??n. Significa el derecho que el CLIENTE adquiere mediante el pago de una Comisio??n por Extensio??n para diferir la Fecha Li??mite de Pago del Cre??dito entonces vigente, en los te??rminos establecidos en este Contrato.<br></br>
                            h) Fecha de Disposicio??n. Es el di??a en que PRESTTO acredita de manera efectiva el importe del Cre??dito al CLIENTE a trave??s de cualquiera de los medios de disposicio??n previstos en el presente Contrato.<br></br>
                            j) Fecha de Corte. Corresponde al di??a o los di??as en que el CLIENTE debera?? pagar a PRESTTO el respectivo Pago Parcial o el Pago Total incluyendo las comisiones, intereses y dema??s accesorios aplicables (segu??n sea el caso) y, el o los di??as en que PRESTTO marca como el fin de un periodo de registro de los pagos que realizo?? el CLIENTE.<br></br>
                            k) Fecha Li??mite de Pago. Es el di??a ha??bil en el que el CLIENTE debera?? pagar a PRESTTO el respectivo Pago Total incluyendo las comisiones, intereses y dema??s accesorios aplicables (segu??n sea el caso).<br></br>
                            l) Importe del Cre??dito. Es el monto del Cre??dito otorgado al CLIENTE por PRESTTO, el cual se indica inicialmente en la Cara??tula del Contrato de Cre??dito.
                            m) Medios Electro??nicos: Significan cualesquiera medios electro??nicos de comunicacio??n actualmente conocidos o por inventarse, incluyendo sin limitar los siguientes: (i) vi??a telefo??nica en el servicio que PRESTTO opere para su operacio??n comercial; y (ii) a trave??s del Portal de Internet.<br></br>
                            El CLIENTE sabe, reconoce y acepta que el presente Contrato se celebra por medios electro??nicos, da??ndole plena validez en te??rminos de los arti??culos 1803 fraccio??n I del Co??digo Civil Federal, 80, 89 y 89 Bis Co??digo de Comercio y la NOM-151-SCFI-2002, acordando ambas partes que para la comprobacio??n fehaciente de este acto juri??dico bastara?? un correo electro??nico o la aceptacio??n del deudor de las condiciones generales del instrumento a trave??s del Portal de internet  https://prestto.mx/ de donde lo obtuvo. <br></br>
                            n) Monto Total del Cre??dito. Es el monto correspondiente al Importe del Cre??dito ma??s los intereses ordinarios, comisiones, impuesto al valor agregado y dema??s conceptos expresamente sen??alados en este Contrato. <br></br>
                            o) Pago Adelantado. Es el monto que EL CLIENTE entrega a PRESTTO con anterioridad a que sea exigible un pago parcial o total del Cre??dito, para que sea aplicado a cubrir el o los pagos perio??dicos inmediatos posteriores. <br></br>
                            p) Pago Anticipado. Al pago parcial o total del Saldo Insoluto de un cre??dito, antes de la fecha en que sea exigible. 		 	 	 		<br></br>
                            q) Mi Cuental: Cuenta personal del CLIENTE en el Portal de Internet, disponible u??nicamente con el usuario y contrasen??a generados por el CLIENTE.				<br></br>	
                            r) Portal de Internet. Es la pa??gina de Internet de  PRESTTO disponible en https://prestto.mx/<br></br>
                            s) Solicitud. Es la peticio??n que el CLIENTE realizo?? a  PRESTTO, a trave??s del Portal de Internet de este u??ltimo, a efecto de que le sea otorgado el cre??dito objeto del contrato<br></br>
                            En virtud de los ANTECEDENTES, DECLARACIONES y DEFINICIONES anteriores, las PARTES otorgan y se sujetan a las siguientes: <br></br>
                            <br></br><br></br>
                            Cl??usulas <br></br>
                                          
                            PRIMERA. Objeto. En este acto PRESTTO, otorga un cre??dito simple en favor del CLIENTE, por la cantidad de <b>{ totalapagar } </b> (cero MN 00/100) y el CLIENTE se obliga a restituir a PRESTTO el importe de cre??dito, ma??s los intereses, impuestos, comisiones y gastos que se generen por esta operacio??n y hasta la liquidacio??n total del cre??dito, conforme a lo establecido en la Car??tula del Contrato de Cre??dito.<br></br>
                            <br></br>   
                            1.2 El CLIENTE pagara?? a PRESTTO por el Cre??dito otorgado y a la o las fechas de vencimiento establecidas en el presente contrato, en una o varias exhibiciones, las cantidades estipuladas
                            en la siguiente tabla:
                            <br></br>     
                            TABLA
                            <br></br>   
                            Cuando la fecha li??mite de pago sea en un di??a inha??bil debe aclararse que se recorrera?? al siguiente di??a ha??bil, sin que proceda el cobro de Comisiones o intereses moratorios.
                            <br></br> 
                      SEGUNDA. Disposicio??n del Cre??dito. El CLIENTE dispondra?? del Cre??dito en una sola exhibicio??n mediante transferencia electro??nica de dinero a la Cuenta Clave Bancaria Estandarizada (CLABE) { clabe } o mediante depo??sito al nu??mero de tarjeta  { tarjetadebito } que el CLIENTE tiene abierta en la institucio??n bancaria denominada {bancotarjeta}, disposicio??n que quedara?? sujeta a que existan recursos disponibles que permitan a PRESTTO a hacer la entrega respectiva. 
                            <br></br>    
                            2.2 El cre??dito se entendera?? dispuesto una vez que los recursos queden depositados en la cuenta sen??alada en la cla??usula anterior y el comprobante de dicha operacio??n hara?? las veces del recibo ma??s amplio y suficiente que en derecho proceda. 
                            <br></br>
                            2.3. El CLIENTE podra?? cancelar el presente Contrato sin responsabilidad alguna y sin cobro de comisiones en un periodo de cinco di??as ha??biles posteriores a la firma del presente Contrato y siempre y cuando no haya dispuesto del Cre??dito. Para esto, el CLIENTE debera?? presentar copia de los movimientos de su cuenta dentro del periodo que comprende la fecha del presente Contrato y cinco di??as ha??biles posteriores, a efectos de comprobar que no han existido movimientos en la cuenta.
                            <br></br>
                            2.4. Transcurrido el te??rmino anterior y en caso de que el CLIENTE haya dispuesto del Cre??dito, debera?? cumplir con todas y cada una de las obligaciones que se estipulan en este Contrato, incluyendo el pago i??ntegro del Cre??dito que se le otorga y los accesorios que se pudieran generar. 
                            <br></br>
                            TERCERA. Destino del Cre??dito. El CLIENTE se obliga a destinar la cantidad total del cre??dito recibido, tal y como lo manifesto?? en la solicitud de cre??dito, para uso exclusivamente personal y para fines exclusivamente li??citos bajo estricto apercibimiento de las sanciones contempladas en los arti??culos 139, 148 Bis o 400 Bis del Co??digo Penal Federal, relativos a la prevencio??n de lavado de dinero y el financiamiento al terrorismo.
                            <br></br>
                            CUARTA. Vigencia del Contrato. El presente contrato tendra?? como plazo ma??ximo 7 di??as,  contados a partir de la fecha en la cual el CLIENTE recibio?? en su cuenta la cantidad objeto del Cre??dito por parte de PRESTTO debiendo realizar el pago en la cuenta sen??alada en la cla??usula 5 respecto del total del Cre??dito y sus accesorios o antes si incurren en las causales de vencimiento anticipado establecidas en la cla??usula 17 del presente contrato.			
                            4.2. No obstante su terminacio??n, este Contrato producira?? todos sus efectos legales, hasta que el CLIENTE haya liquidado en su totalidad todas las cantidades adeudadas a su cargo.		
                            4.3. La terminacio??n del Contrato se podra?? dar de manera anticipada de conformidad con lo establecido en la cla??usula 17 del presente contrato.					
                            4.4. El CLIENTE podra?? conocer la fecha li??mite de pago del cre??dito contratado en todo momento, ingresando con su Usuario y Contrasen??a a su Perfil en el Portal de Internet de la siguiente direccio??n: 
                            https://prestto.mx/
                            <br></br>
                            4.5. El presente contrato NO es PRORROGABLE, salvo pacto en contrario con el consentimiento expreso del CLIENTE y mediante aprobacio??n de la solicitud de Extensio??n del mismo. 
                            <br></br>       
                            4.6 Cuando la terminacio??n del contrato sea por conducto de una ENTIDAD FINANCIERA esta liquidara?? el adeudo del CLIENTE de acuerdo a la informacio??n que proporcione PRESTTO y una vez cubiertos los adeudos PRESTTO renunciara?? a todos los derechos de cobro remanente que pudieran subsistir despue??s del momento de la cancelacio??n.
                            <br></br>
                            QUINTA. Lugar y Forma de Pago. El pago del Cre??dito que el CLIENTE deba hacer a favor de PRESTTO, derivado del presente contrato lo hara?? sin necesidad de gestio??n previa de cobros, recordatorio o notificacio??n de alg??n previo cobro. 
                            <br></br>
                            EL CLIENTE a su eleccio??n, podra?? realizar el pago correspondiente, a ma??s tardar el di??a sen??alado como fecha de vencimiento en la cla??usula 1, la cantidad indicada como gran total, mediante cualquiera de los siguientes me??todos:
                            <br></br>
                            1.	Deposito Bancario Banorte y transferencia electr??nica
                            <br></br>
                            a)	Dep??sito al n??mero de cuenta 0300226122 a nombre AREZ FINANCIERA SA DE CV SOFOM ENR,  con n??mero de referencia 0000000  asignado al CLIENTE.
                            <br></br>
                            b)	Transferencia electr??nica a la Cuenta Clabe: 072180003002261226, a nombre AREZ FINANCIERA SA DE CV SOFOM ENR,  con n??mero de referencia 0000000 asignado al CLIENTE.
                            <br></br>
                            2.	Pago en  Efectivo
                            <br></br>
                            El pago se podra?? realizar en cualquiera de los siguientes establecimientos: Walmart, Bodega Aurrera, Bodega, Aurrera Express, Mi Bodega Aurrera, Sam??s Club, Superama, Medimart Farmacia, Calimax, Tiendas Extra y C??rculo K y cobrar??n una comisi??n de $ 8.00 MXN por concepto de pago. Tiendas 7 Eleven cobrar??n una comisi??n de $10.00 MXN por concepto de pago. Tiendas siguientes: Telecomm, Soriana y Comercial Mexicana no cobrar??n ninguna comisi??n por concepto de pago. Durante los horarios de los mismos, utilizando el co??digo de barras proporcionado por PRESTTO a trave??s del Portal de Internet. 
                            <br></br>
                            3.	Pagos con tarjeta a trav??s del portal de Internet. 
                            <br></br>
                            PRESTTO, se reserva el derecho de incorporar medios alternativos de pago, mismos que incluyen, ma??s no se limitan a: depo??sitos o transferencias en cuentas bancarias alternas y pago directo en otras tiendas de conveniencia. PRESTTO publicara?? y pondra?? a disposicio??n del CLIENTE un listado de dichas opciones alternas de pago en su Portal de Internet.
                            <br></br>
                            El CLIENTE debera?? incluir el nu??mero de referencia, contrato o cre??dito correspondiente como concepto de transferencia en cualquiera de los pagos realizados a favor de PRESTTO.
                            <br></br>
                            Cuando la fecha li??mite de pago sea en un di??a inha??bil esta se recorrera?? al siguiente di??a ha??bil, sin que proceda el cobro de Comisiones o intereses moratorios.
                            <br></br>
                            En caso de que el CLIENTE realice un pago parcial en exceso, autoriza que los recursos que se entregan en exceso a sus obligaciones exigibles se apliquen por concepto de pagos anticipados del principal, en caso que el excedente sea realizado en el pago total, acepta que el mismo le sea devuelto mediante depo??sito a la cuenta o tarjeta que se indica en la cla??usula 2 del presente contrato, previa solicitud que dirija a la Unidad Especializada de PRESTTO y se encuentre disponible al CLIENTE hasta en tanto no se solicite la devolucio??n correspondiente. 				
                            <br></br>
                            5.2. PRESTTO se reserva el derecho de utilizar la ???Autorizacio??n de Cargo a Cuenta Bancaria??? del CLIENTE, para el pago del cre??dito otorgado al amparo del presente Contrato. Dicha domiciliacio??n podra?? hacerse con cargo a una cuenta a la vista que el CLIENTE tenga abierta en alguna Institucio??n, misma que ha sido ingresada por el CLIENTE en el Portal de Internet y se sen??ala en la cla??usula 2 del presente Contrato y para lo cual el CLIENTE debera?? autorizar por escrito a dicha Institucio??n mediante la firma de una ???Carta Autorizacio??n de Domiciliacio??n??? misma que forma parte integral de este Contrato, con el visto bueno de PRESTTO, en donde se establezca la cuenta de la Institucio??n en donde se cargara??n los pagos, por la domiciliacio??n. El pago por domiciliacio??n se acreditar?? en la(s) fecha(s) que PRESTTO acuerde con el CLIENTE, o en la fecha li??mite del pago del cre??dito.
                            <br></br>
                            EL CLIENTE no podra?? designar otra cuenta bancaria distinta a la sen??alada en la cla??usula 2. 
                            <br></br>
                            EL CLIENTE podra?? solicitar en cualquier momento, por cualquiera de los medios de contacto puestos a su disposicio??n, la cancelacio??n del servicio de domiciliacio??n del pago de las cantidades adeudadas con cargo a su cuenta, sin responsabilidad alguna para PRESTTO, siendo que dicha solicitud surtira?? efectos a ma??s tardar a los 10 (diez) di??as ha??biles siguientes posteriores a su recepcio??n. El servicio de Domiciliacio??n sera?? cancelado automa??ticamente una vez que el CLIENTE haya liquidado la totalidad de los saldos adeudados a favor de PRESTTO.
                            <br></br>
                            5.3. En caso de que EL CLIENTE se atrase en sus pagos, PRESTTO podra?? extender el plazo para el pago del capital del Cre??dito a su sola discrecio??n, sin que se considere reestructura, descuento o quita, para lo cual EL CLIENTE debera?? pagar los intereses ordinarios y moratorios generados a la fecha de la extensio??n, y cubrir dentro del nuevo periodo de pago establecido.
                            <br></br>
                            SEXTA. Costo Anual Total. El costo anual total de financiamiento expresado en te??rminos porcentuales anuales que, para fines informativos y de comparacio??n, incorpora la totalidad de los costos y gastos inherentes al Cre??dito (en adelante, el ???CAT???), asciende al porcentaje indicado en la Cara??tula del Contrato de Cre??dito inicial. El CLIENTE reconoce que PRESTTO, previo a la celebracio??n del Contrato, hizo de su conocimiento el CAT.
                            <br></br>
                            SE??PTIMA. Prelacio??n de Pago. PRESTTO aplicara?? las cantidades que reciba en pago, conforme al siguiente orden: i. Impuestos, ii. Comisiones iii. Intereses moratorios, iv. Intereses ordinarios y iv. Capital. En caso de que PRESTTO hubiera tenido que demandar al CLIENTE por incumplimiento, los pagos que realice se aplicara??n en primer lugar a los gastos y costas del juicio determinados por una autoridad judicial y despue??s se seguira?? el orden estipulado en la presente cla??usula. 
                            <br></br>
                            7.2 PRESTTO acreditara?? el pago el mismo di??a en que el CLIENTE lo realice, siempre y cuando se efectu??e en un Di??a Ha??bil. En caso de que el pago se realice en un di??a inha??bil, el pago se acreditara?? al Di??a Ha??bil siguiente, sin que proceda el cobro de comisiones o intereses moratorios.
                            <br></br>
                            OCTAVA. Intereses Ordinarios. El CLIENTE se obliga a pagar a PRESTTO, por el otorgamiento del presente Cre??dito y sin necesidad de previo requerimiento o cobro, por concepto de intereses ordinarios, sobre saldo insoluto, a razo??n de una tasa de intere??s gradiente. Los intereses ordinarios se generara??n desde la fecha de depo??sito de la cantidad sen??alada en la cla??usula nu??mero 1 y hasta el u??ltimo di??a del plazo para el pago y sera??n exigidos u??nicamente por periodos vencidos. 
                            <br></br>
                            8.2. El ca??lculo de los intereses ordinarios dentro de los primeros 3 di??as naturales se efectuara?? de la siguiente forma: tasa promedio diaria multiplicada por 1 (uno) ma??s 0.3688 dando como resultado la ???Primer Tasa???, posteriormente el resto del periodo se calculara?? de acuerdo a lo siguiente: tasa promedio diaria multiplicada por el plazo del cre??dito otorgado menos el resultado de la ???Primer Tasa??? multiplicado por el periodo de la duracio??n de la primer tasa dividido entre el periodo de la duracio??n de la segunda tasa. Donde la ???duracio??n de la primer tasa??? se calculara?? de la siguiente manera: plazo del cre??dito otorgado menos 1 (uno) menos el plazo del cre??dito otorgado dividido entre 2 (dos) en el caso en que la duracio??n de la primer tasa no sea un nu??mero entero se debera?? redondear al nu??mero entero pro??ximo; y la ???duracio??n de la segunda tasa??? se calculara?? de la siguiente manera: plazo del cre??dito otorgado menos la duracio??n de la primer tasa. 
                            <br></br>
                            Fo??rmula:
                            <br></br>   <br></br>
                            Primer Tasa = Tasa_promedio_diaria * (1 + 0.3688)
                            <br></br>   <br></br>
                            Segunda Tasa = (Tasa_promedio_diaria * plazo del cre??dito otorgado ??? Primer Tasa * duracio??n de la primer tasa) / duracio??n de la segunda tasa
                            <br></br>   <br></br>
                            Duracio??n Primer Tasa = plazo del cre??dito otorgado ??? 1 ??? (plazo del cre??dito otorgado / 2)
                            <br></br>   <br></br>
                            ***En caso de que la duracio??n de la primer tasa no sea un nu??mero entero se redondeara?? al nu??mero entero pro??ximo.
                            <br></br>   <br></br>
                            Duracio??n Segunda Tasa = plazo del cre??dito otorgado ??? duracio??n de la primer tasa.    <br></br>
                            <br></br>
                            NOVENA. Intereses Moratorios. En caso de que el CLIENTE no cubra i??ntegramente el Monto Total del Cre??dito (en el caso de pago en una sola exhibicio??n) o cualquier Pago Parcial, debera?? pagar a PRESTTO intereses moratorios que se devengara??n en forma diaria a partir del di??a siguiente a la fecha de vencimiento del plazo para el pago y hasta la de su total liquidacio??n y se calculara??n multiplicando la tasa de intere??s moratorio sen??alada en la Cara??tula del Contrato de Cre??dito por el saldo vencido y no pagado, hasta que el Monto Total del Cre??dito o el Pago Parcial de que se trate, haya sido pagado completamente. 
                            9.2. El ca??lculo de los intereses moratorios se efectuara?? de la siguiente forma: Se multiplicara?? el saldo vencido por la tasa de intere??s moratoria anual. Posteriormente se dividira?? entre 360 (trescientos sesenta) para obtener el monto de intere??s moratorio diario. Este monto se multiplicara?? por el nu??mero de di??as en que el cre??dito haya permanecido en mora. 				
                            <br></br>   <br></br>
                            Fo??rmula:
                            <br></br>   <br></br>
                            Saldo vencido x tasa de intere??s moratoria anual / 360 = Monto de intere??s moratorio diario 
                            Monto de intere??s moratorio diario x di??as en mora = Monto de intere??s moratorio total
                            <br></br>
                            9.3 En caso de que el CLIENTE omita realizar el pago en la fecha pactada, se considerara?? en mora o cartera vencida al haber transcurrido el primer di??a contado a partir de la fecha li??mite de pago establecida en el presente contrato, segu??n aplicable.   <br></br>
                            No obstante lo anterior mencionado en la presente clausula, las partes acuerdan que PRESTTO suspendera?? el cobro de los intereses correspondientes al pre??stamo objeto del presente contrato despue??s del periodo contemplado en el arti??culo 18 fraccio??n IX de la ley de Impuesto Sobre la renta vigente a la fecha de firma del presente, de igual forma las Partes acuerdan que PRESTTO podra?? otorgar quitas y/o descuentos totales o parciales respecto de los intereses derivados del presente Contrato (ordinarios y/o moratorios), sin que para ello exista la necesidad de notificacio??n alguna a 
                            EL CLIENTE por parte de PRESTTO, ya que se trata de un beneficio a EL CLIENTE y no una obligacio??n por parte del mismo. 			   <br></br>
                            DE??CIMA. Comisiones. El CLIENTE se obliga a pagar a PRESTTO, los siguientes montos por concepto de Comisiones:   <br></br>
                            a. Comisi??n por Extensio??n: Las PARTES acuerdan que el presente Contrato no cuenta con cla??usula de extensio??n automa??tica, sin embargo, el CLIENTE, previo aviso o solicitud por cualquiera de los medios permitidos por el presente Contrato a PRESTTO dentro de las 24 (veinticuatro) horas mi??nimas previas al vencimiento del cre??dito otorgado, tendra?? el derecho de prolongar o extender el pago del mismo, hasta por un plazo igual al originalmente pactado, exclusivamente en su principal sin incurrir en intereses moratorios y hasta por un ma??ximo de 05 extensiones por el mismo cre??dito, PRESTTO se reserva el derecho de aprobar o declinar la solicitud de extensio??n en cualquier momento. 
                            <br></br><br></br>
                            La comisio??n por extensio??n sera?? calculada de la siguiente manera:   <br></br>
                            Comisio??n por Extensio??n x Di??as a extender = Monto por los di??as de extensio??n   <br></br>
                            Monto por los di??as de extensio??n x Saldo a extender / 1000 = Monto de Comisio??n por Extensio??n   <br></br>
                            <br></br>       
                            El pago de la comisio??n por extensio??n aplicable por parte del CLIENTE constituye su aceptacio??n expresa para la formalizacio??n de la prolongacio??n de la vigencia del presente contrato.
                            <br></br>        
                            a. Comisio??n por Cobranza: Las PARTES acuerdan que por cualquier incumplimiento de las obligaciones de pago del CLIENTE en los te??rminos pactados en el presente Contrato, se establece el cobro de una Comisio??n variable de Cobranza de $ 600.00 (Seiscientos pesos MN 00/100) ma??s IVA, misma que se debera?? cubrir en el siguiente pago. 
                            <br></br>       
                            En el evento de requisicio??n judicial de las cantidades adeudadas, en relaci??n con el incumplimiento del presente contrato, el CLIENTE se obliga a pagar de manera unilateral adicional a la Comisio??n por Cobranza los gastos y costas judiciales relacionadas, asi?? como tambie??n los honorarios de abogados. EL CLIENTE cubrira?? por su cuenta todo tipo de gastos extrajudiciales y de cobranza que tuviera que erogar PRESTTO debido al incumplimiento de cualquier obligacio??n estipulada en el presente Contrato.
                            <br></br>        
                            DE??CIMA PRIMERA. Comprobantes y Estados de Cuenta: El CLIENTE acepta consultar su estado de cuenta en el Portal de Internet, lo que podra?? hacer en forma diaria y sin costo alguno. 
                            <br></br>
                            El CLIENTE contara?? con un peri??odo de 60 (sesenta) di??as naturales, contados a partir de la fecha en que el respectivo estado de cuenta se puso a su disposicio??n, para formular, por escrito firmado, cualquier solicitud de aclaracio??n de la informacio??n contenida en el mismo, ante PRESTTO, enviada al correo electro??nico clientes@prestto.mx, o a trave??s del domicilio establecido para tal efecto en la Declaracio??n I- c) del presente Contrato; en caso contrario, se entendera?? que dicha informacio??n es aceptada en los te??rminos en los que se publica en el estado de cuenta.
                            Una vez que PRESTTO reciba cualquier aclaracio??n que sea formulada por el CLIENTE conforme a lo establecido en los pa??rrafos anteriores de la presente Cla??usula, tendra?? un plazo de hasta 45 (cuarenta y cinco) di??as naturales para entregarle al CLIENTE el dictamen correspondiente, junto con la informacio??n y/o documentacio??n considerada para su emisio??n, asi?? como un informe detallado en el que se respondan los hechos contenidos en la solicitud de aclaracio??n. En caso de que conforme a dicho dictamen resulte procedente el cobro del monto de que se trate, el CLIENTE debera?? hacer el pago de la cantidad a su cargo, incluyendo los intereses ordinarios. Dentro del plazo de 45 (cuarenta y cinco) di??as naturales contado a partir de la entrega del dictamen de referencia, PRESTTO pondra?? a su disposicio??n, a trave??s de su Unidad Especializada, el expediente generado por la solicitud, con la integracio??n de la informacio??n y documentacio??n que deba obrar en su poder y que se relacione directamente con la solicitud. Hasta en tanto la solicitud de aclaracio??n no sea resuelta, PRESTTO no podra?? reportar como vencidas las cantidades sujetas a dicha aclaracio??n a las sociedades de informacio??n crediticia. 
                            Asimismo, el CLIENTE podra?? consultar el saldo insoluto del Cre??dito, Pagos Parciales realizados y los Pagos Parciales pendientes de pago y sus pro??ximas Fechas de Pago en el Portal de Internet, utilizando la clave o contrasen??a que el CLIENTE creo?? para acceder a su Perfil en el Portal de Internet. 
                            DE??CIMA SEGUNDA. Origen de los Recursos. PRESTTO financiara?? el cre??dito concedido al CLIENTE con recursos provenientes de su capital. Asimismo, podra?? otorgarle el cre??dito total o parcialmente con recursos provenientes de financiamiento privado o de los programas de promocio??n que ofrece la banca de desarrollo mexicana. 
                            <br></br>   <br></br>
                            12.2. El CLIENTE declara que los recursos con los cuales pagara?? el cre??dito han sido obtenidos o generados a trave??s de una fuente de origen permitido por la ley y con recursos propios. El destino de los servicios o productos adquiridos sera?? dedicado tan solo a fines permitidos por la ley y que no se encuentran dentro de los supuestos establecidos por los arti??culos 139 Qua??ter y 400 Bis del Co??digo Penal Federal (estos arti??culos prohi??ben el lavado de dinero y el financiamiento al terrorismo.
                            DE??CIMA TERCERA. Pago Anticipado. PRESTTO esta?? obligada a aceptar pagos anticipados de los cre??ditos menores al equivalente a 900,000 UDIS, siempre que: i) EL CLIENTE lo solicite, ii) se encuentre al corriente en los pagos exigibles de conformidad con el presente Contrato y, iii) que el importe del pago anticipado sea por una cantidad igual o mayor a la correspondiente al pago parcial.				
                            <br></br>   <br></br>
                            13.2 PRESTTO se compromete a informar el saldo adeudado al CLIENTE a los 3 tres di??as ha??biles siguientes al pago realizado de forma anticipada, enviando la NUEVA TABLA DE AMORTIZACIO??N vi??a correo electro??nico.					
                            <br></br>
                            No habra?? penalizacio??n monetaria de ningu??n tipo por realizar pagos anticipadamente o adelantados.
                            <br></br>
                            Las cantidades pagadas anticipadamente se aplicara??n en funcio??n de lo previsto en la cla??usula 7 anterior. 				
                            <br></br>
                            DE??CIMA CUARTA. Obligaciones de Hacer. En adicio??n a cualquier otra obligacio??n a su cargo derivada de este instrumento, el CLIENTE se obliga a cumplir con las siguientes obligaciones:	
                            <br></br>
                            i) Cumplir con todas las cantidades que deban ser pagadas y con cada una de las obligaciones a su cargo, derivadas de este contrato y hasta que el Cre??dito y sus accesorios sean totalmente pagados.
                            <br></br>
                            ii) Notificar a PRESTTO cualquier cambio de domicilio o nu??meros telefo??nicos, dentro de los 3 (tres) di??as ha??biles siguientes a la fecha que se realice dicho cambio.					
                            <br></br>
                            iii) Notificar a PRESTTO, dentro de los 3 (tres) di??as ha??biles siguientes a la fecha que se realice cualquier variacio??n en el monto de sus ingresos o cualquier hecho y/o acto que pudiere traer como consecuencia el incumplimiento de las obligaciones de pago a cargo del CLIENTE derivadas de este instrumento. 				
                            <br></br>
                            DE??CIMA QUINTA. Obligaciones de No Hacer. El CLIENTE no podra?? sin previa autorizacio??n por escrito de PRESTTO: Ceder de forma alguna, parcial o totalmente, los derechos y/o las obligaciones a su cargo derivadas del presente contrato.
                            <br></br>
                            DE??CIMA SEXTA.- Limitaciones Legales. EL CLIENTE se obliga  por medio del presente Contrato, a no celebrar con cualquier entidad financiera, u dependencias similares, asi?? como con cualquier persona fi??sica o moral, ningu??n contrato o convenio, o realizar alguna transaccio??n comercial en la que se disponga de ma??s del TREINTA (30%) por ciento del total de sus ingresos, durante la vigencia del cre??dito otorgado.				
                            <br></br>
                            El incumplimiento de esta disposicio??n sera?? causal de rescisio??n del presente Contrato.
                            <br></br>
                            DE??CIMA SE??PTIMA. Terminacio??n Anticipada. EL CLIENTE podra?? solicitar a PRESTTO, en cualquier tiempo, la terminacio??n anticipada del Contrato, para tal efecto, EL CLIENTE debera?? pagar a PRESTTO, en los te??rminos establecidos en el Contrato: a) el saldo insoluto principal, asi?? como el impuesto al valor agregado, los intereses ordinarios, los intereses moratorios, en su caso, comisiones del Cre??dito que se hayan causado hasta ese momento, asi?? como aquellos que se hubieren causado de no haber terminacio??n anticipada; y b) cualquier otro importe que EL CLIENTE adeude a PRESTTO conforme al Contrato. Dicha solicitud debera?? ser notificada por el CLIENTE a PRESTTO, mediante escrito firmado, al correo electro??nico clientes@PRESTTO.mx, o a trave??s del domicilio establecido para tal efecto en la Declaracio??n I- c) del presente Contrato.
                            <br></br>
                            PRESTTO dara?? por terminado el presente Contrato, el di??a ha??bil siguiente al de la recepcio??n de la solicitud de terminacio??n siempre y cuando no existieren adeudos en favor de PRESTTO. 
                            <br></br>
                            En caso contrario, y una vez presentada la solicitud de terminacio??n: (i) Al di??a ha??bil siguiente contado desde la recepcio??n de la solicitud de terminacio??n, PRESTTO notificara?? al CLIENTE, mediante correo electro??nico a la direccio??n que EL CLIENTE indico?? en la Solicitud, el saldo insoluto a liquidar; (ii) Asimismo, dentro de los 5 (cinco) di??as ha??biles siguientes al de la recepcio??n de la solicitud pondra?? a disposicio??n del Cliente el importe de los adeudos a la fecha, y (iii) una vez que EL CLIENTE tenga conocimiento del saldo, debera?? realizar el pago total del mismo, dentro de los 5 (cinco) Di??as Ha??biles siguientes; si dentro del plazo establecido EL CLIENTE no realiza el pago, el Contrato continuara?? vigente en sus te??rminos.
                            <br></br>
                            De los 10 (diez) Di??as Ha??biles siguientes a la fecha en que EL CLIENTE haya realizado el pago total de la totalidad del cre??dito otorgado, asi?? como de los accesorios generados, podra?? solicitar a PRESTTO una constancia o carta finiquito para hacer constar la terminacio??n del Cre??dito, la inexistencia de adeudos, o la existencia de saldo a favor en caso de haberlo; mismo que estara?? a disposicio??n del CLIENTE a partir de la fecha de terminacio??n; debiendo apegarse a lo establecido en el presente Contrato para su devolucio??n.
                            <br></br>
                            Al dar por terminada la relacio??n contractual en caso de que exista saldo a favor, PRESTTO debe entregarlo al CLIENTE en la fecha en que se de?? por terminada la operacio??n y en caso de que 
                            <br></br>
                            EL CLIENTE no acuda a las oficinas de PRESTTO, se le informara?? que se encuentra a su disposicio??n. EL CLIENTE acepta que el mismo le sea devuelto mediante depo??sito a la cuenta o tarjeta que se indica en la cla??usula 2 del presente contrato, previa solicitud que dirija a la Unidad Especializada de PRESTTO. 
                            <br></br>
                            Una vez concluida la relacio??n contractual PRESTTO cancelara?? las autorizaciones de cargo a cuenta bancaria o domiciliacio??n suscritas por EL CLIENTE.					
                            <br></br>
                            Las partes acuerdan que EL CLIENTE, no podra?? aumentar su li??nea de cre??dito con PRESTTO si l??quida antes de que haya transcurrido al menos el 75% del plazo definido en este contrato. 
                            <br></br>
                            DE??CIMA OCTAVA. Causas de Rescisi??n del Contrato.- Las partes convienen expresamente que, para el caso de que el CLIENTE dejara de cumplir con cualquiera de las obligaciones a su cargo derivadas de este contrato, y sin necesidad de declaracio??n judicial previa, PRESTTO podra?? dar por vencido anticipadamente el plazo para el pago del cre??dito. En tal caso, sera?? exigible el pago anticipado del total de adeudo que se encuentre pendiente de vencimiento, el cual procedera?? en los te??rminos sen??alados en la cla??usula 13 de este contrato.
                            <br></br>
                            Especi??ficamente, sera??n causas de rescisio??n de este contrato, los siguientes motivos:
                            <br></br>
                            a) En caso de que cualquiera de las declaraciones del CLIENTE contenidas en este instrumento y la solicitud de cre??dito sea o resulte ser falsa o incorrecta.
                            <br></br>
                            b) En caso de que cualquier dato o informacio??n del CLIENTE que sea entregada o hecha del conocimiento de PRESTTO de forma dolosa sea o resulte ser falsa o incorrecta.		
                            <br></br>
                            c) El incumplimiento del CLIENTE a cualquiera de las obligaciones de hacer o de no hacer consignadas a su cargo en este contrato. 				
                            <br></br>
                            d) Si el Cre??dito otorgado fuera destinado a la consecucio??n de cualquier acto ili??cito.
                            <br></br>
                            e) Por considerar PRESTTO, que EL CLIENTE no podra?? hacer cumplir las obligaciones impuestas por el presente contrato de manera TOTAL Y/O PUNTUAL como consecuencia, m??s no limitado a: cualquier modificacio??n salarial que resulte en un detrimento econo??mico, respecto al salario por e??l reportado en la solicitud crediticia; su participacio??n en un proceso judicial; cese temporal o definitivo de su fuente de trabajo; cualquier situacio??n que resulte en un detrimento de su patrimonio. 
                            <br></br>
                            18.2. Ante la actualizacio??n de cualquiera de las causas de incumplimiento antes sen??alada, el CLIENTE estara?? obligado a pagar a PRESTTO de manera inmediata el importe total del saldo insoluto del Cre??dito, que incluye los Intereses Ordinarios vencidos, Intereses Moratorios, asi?? como los gastos y cualquier otro concepto devengado contractual o legalmente, pago que debera?? verificarse sin necesidad de presentacio??n, requerimiento, protesto u otra notificacio??n de cualquier clase al CLIENTE, a todas las cuales renuncia expresamente por el presente instrumento. Sin perjuicio de lo anterior, PRESTTO podra?? tambie??n por la vi??a que estime conveniente, ejercitar aquellas acciones que conforme a la ley sean aplicables en contra del CLIENTE. 
                            <br></br>
                            DE??CIMA NOVENA. Comunicaciones. El CLIENTE autoriza a PRESTTO para poder contactarlo mediante los medios conocidos en la Internet y telecomunicaciones. El usuario acepta recibir a su email ________________, correos procedentes de PRESTTO de publicidad, informacio??n sobre su cre??dito o informacio??n que PRESTTO considere importante para EL CLIENTE.				
                            <br></br>
                            EL CLIENTE entiende que el principal medio de comunicacio??n es vi??a Internet y que los mensajes a trave??s de plataformas como Facebook, Instagram, y WhatsApp tendra??n validez en los acuerdos que EL CLIENTE y PRESTTO puedan llegar.				
                            <br></br>
                            EL CLIENTE podra?? contactar a PRESTTO en los siguientes medios:			
                            <br></br>
                            E-mail: clientes@prestto.mx Tele??fono: +52 1 55 8038 7757	 				
                            <br></br>
                            Facebook: https://fb.me/PresttoMexico	
                            <br></br>
                            Instagram: www.prestto_mexico	
                            <br></br>
                            VIGE??SIMA. Avisos y Autorizaciones Generales. EL CLIENTE otorga expresa autorizacio??n a PRESTTO para:
                            <br></br>
                            I. Recabar toda informacio??n relacionada con su comportamiento crediticio en las operaciones financieras amparadas en el presente Contrato, asi?? como para facilitar la misma a las sociedades de informacio??n crediticia.				
                            <br></br>
                            II. Consultar su informacio??n en las Sociedades de Informacio??n Crediticia en forma previa al otorgamiento del presente cre??dito mediante la autorizacio??n que se realizo?? a trave??s de medios electro??nicos.				
                            <br></br>
                            III. Establecer contacto con EL CLIENTE mediante mensajes SMS, llamadas o comunicaciones ana??logas a los tele??fonos o direcciones por e??l proporcionados para efectos de retroalimentacio??n, ofertas de productos y/o servicios de naturaleza ana??loga, asi?? como cobranza directa o mediante terceros.				
                            <br></br>
                            IV. Avisar a las autoridades correspondientes respecto a lo dispuesto en el pa??rrafo segundo del arti??culo 17 de la Ley Federal para la Prevencio??n e Identificacio??n de Recursos de Procedencia Ili??cita, asi?? como lo dispuesto en el arti??culo 19 de sus reglas. 
                            En el evento de que EL CLIENTE no desee que su informacio??n sea utilizada con fines de retroalimentacio??n, mercadote??cnicos o publicitarios, debera??n notificarlo por escrito a PRESTTO, en cuyo caso, el presente Contrato continuara?? surtiendo sus efectos de manera i??ntegra y sin modificacio??n alguna. 
                            VIGE??SIMA PRIMERA. Autorizacio??n de Consulta Crediticia. Declara el CLIENTE bajo protesta de decir verdad que la informacio??n proporcionada a PRESTTO en la presente solicitud es verdadera, libre de vicios, errores o mala fe, responsabiliza??ndose en caso contrario, por la declinacio??n de la solicitud, deslindando de responsabilidad a PRESTTO por cualquier controversia relacionada. De igual manera expresa EL CLIENTE:
                            <br></br>
                            I. Por este conducto yo el CLIENTE autorizo expresamente a PRESTTO, para que por conducto de sus funcionarios facultados lleve a cabo Investigaciones, sobre mi comportamiento crediticio o el de la Empresa que represento en, C??rculo de Cr??dito, S.A. de C.V., S.I.C. Asimismo, declaro que conozco la naturaleza y alcance de las sociedades de informacio??n crediticia y de la informacio??n contenida en los reportes de cre??dito y reporte de cre??dito especial, declaro que conozco la naturaleza y alcance de la informacio??n que se solicitara??, del uso que PRESTTO., hara?? de tal informacio??n y de que esta podra?? realizar consultas perio??dicas sobre mi historial o el de la empresa que represento, consintiendo que esta autorizacio??n se encuentre vigente por un peri??odo de tres an??os contados a partir de su expedicio??n y en todo caso durante el tiempo que se mantenga la relacio??n juri??dica.
                            <br></br>
                            II. Estoy consciente y acepto que este documento quede bajo custodia de PRESTTO y/o Sociedad de Informacio??n Crediticia consultada para efectos de control y cumplimiento del arti??culo 28 de la Ley para Regular las Sociedades de Informacio??n Crediticia. 
                            <br></br>
                            VIGE??SIMA SEGUNDA. Modificacio??n al Contrato. Cualquier modificacio??n que PRESTTO pretenda realizar al presente Contrato, debera?? ser notificada al CLIENTE con una anticipacio??n de 30 (treinta) di??as naturales a su entrada en vigor. Si el CLIENTE no esta?? de acuerdo con las modificaciones propuestas, podra?? solicitar la terminacio??n del Contrato hasta 30 (treinta) di??as naturales despue??s de la entrada en vigor de dichas modificaciones, sin responsabilidad ni comisio??n alguna a su cargo, teniendo la obligacio??n de cubrir, en su caso, los adeudos que ya se hubieren generado a la fecha en que solicite dar por terminado el Contrato. 				
                            <br></br>
                            Una vez transcurrido el plazo sen??alado, sin que PRESTTO haya recibido comunicacio??n alguna por parte del CLIENTE, se tendra??n por aceptadas las modificaciones al Contrato.
                            <br></br>
                            VIGE??SIMA TERCERA. Cesio??n de Derechos al Cobro. EL CLIENTE da expresa autorizacio??n a PRESTTO para transferir, ceder, negociar en cualquier forma la propiedad y/o derechos de cobro de las cantidades principales y/o secundarias amparadas bajo el presente Contrato y/o el Pagare?? suscrito por EL CLIENTE, tanto anterior como posteriormente a su vencimiento. 
                            <br></br>
                            De manera irrevocable, el CLIENTE faculta a PRESTTO para que transmita toda la informacio??n que el mismo proporciono??, con motivo del cre??dito amparado por el presente Contrato, al nuevo acreedor o cesionario au??n antes de que se lleve a cabo la transmisio??n de derechos. En caso de transmisio??n de derechos por parte de PRESTTO, EL CLIENTE renuncia expresamente a que le sean abonados los intereses mencionados por el pa??rrafo segundo del arti??culo 299 de la Ley General de Ti??tulos y Operaciones de Cre??dito.				
                            <br></br>
                            VIGE??SIMA CUARTA. Domicilios. Las PARTES acuerdan que todas las notificaciones, avisos y en general cualquier comunicacio??n que las partes deban hacerse con motivo del presente contrato, sean estos de cara??cter judicial o extrajudicial, surtira??n sus efectos legales en los siguientes domicilios: 
                            <br></br>
                            ???PRESTTO??? Av. Nuevo Le??n #213 - 602 Col. Condesa, Cuauht??moc, C.P. 06100, Ciudad de M??xico
                            <br></br>
                            ???EL CLIENTE???  (Domicilio personalizado)
                            <br></br>
                            24.2. Asimismo, las partes convienen en que cualquier cambio de sus domicilios, debera??n notificarlo a la otra parte dentro de los 3 (tres) di??as naturales siguientes a la fecha en que ello ocurra, en el entendido de que, de no ser asi??, se considerara??n va??lidas cualquier clase de notificaciones, judiciales o extrajudiciales, realizadas en los domicilios mencionados.
                            VIGE??SIMA QUINTA. Aclaraciones. En el supuesto que EL CLIENTE desee realizar consultas, aclaraciones, quejas o reclamaciones vinculadas con el servicio o producto que por medio del presente contrato le brinde PRESTTO, podra?? hacerlo a trave??s de: 				
                            <br></br>
                            I. Unidad Especializada de Atencio??n a Usuarios PRESTTO, a trave??s de la cual PRESTTO atendera?? las consultas, aclaraciones, quejas o reclamaciones. Para tales efectos, EL CLIENTE debera?? formular un escrito libre narrando el motivo de su consulta asi?? como los hechos que le dieron lugar. EL CLIENTE debera?? incluir la fecha, su domicilio para oi??r y recibir notificaciones, su tele??fono, datos de su cuenta bancaria, asi?? como su nombre y firma.					
                            <br></br>
                            II. PRESTTO respondera?? toda consulta en un plazo ma??ximo de 30 (treinta) di??as naturales posteriores a la fecha de recepcio??n de la misma, mediante asesori??a telefo??nica, por medios electro??nicos o, en caso de gravedad, requiriendo su presencia en su Unidad Especializada de Atencio??n a Usuarios. Trat??ndose de cantidades a cargo del CLIENTE, este tendra?? el derecho de no realizar el pago sobre el cual solicita su aclaracio??n, asi?? como el de cualquier otra cantidad relacionada con dicho pago, hasta en tanto se resuelva la aclaracio??n.
                            <br></br>
                            III. EL CLIENTE podra?? contactar a la Unidad Especializada de Atencio??n a Usuarios puesta a disposicio??n por PRESTTO, con domicilio en Av. Nuevo Le??n #213 - 602 Col. Condesa, Cuauht??moc, C.P. 06100, Ciudad de M??xico. Alternativamente, su sitio de internet https://prestto.mx/, asi?? como tambie??n a trave??s del correo electro??nico clientes@prestto.mx o al tele??fono +52 1 55 8038 7757
                            <br></br>
                            VIGE??SIMA SEXTA. Confidencialidad. Toda la informacio??n y documentacio??n relativa a las operaciones y servicios que realice PRESTTO sera??n consideradas como confidenciales para la proteccio??n del derecho de privacidad de sus clientes, la cual solo podra?? ser otorgada a EL CLIENTE.
                            <br></br>
                            VIGE??SIMA SE??PTIMA. Leyes Aplicables y Jurisdiccio??n. Para todo lo relacionado con la interpretacio??n y cumplimiento del presente contrato, las partes se someten a la jurisdiccio??n y competencia de los Tribunales de la Ciudad de Me??xico, renunciando expresamente a cualquier otro fuero que pudiere corresponderles en virtud de sus domicilios presentes o futuros o por cualquier otra causa les pudiera corresponder.
                            <br></br>
                            Las disposiciones legales que se mencionan en el presente contrato pueden ser consultadas en el Anexo A ???Disposiciones Legales???, y se encuentran a su disposicio??n en las oficinas de PRESTTO. 
                            VIGE??SIMA OCTAVA. Integridad del Contrato. El presente Contrato incluyendo los Anexos que se mencionan en el mismo, conjuntamente con la cara??tula y el Aviso de Privacidad vigente (https://www.PRESTTO.mx/aviso-de-privacidad) constituyen el acuerdo total entre las partes en relacio??n con el otorgamiento del cre??dito, por lo que prevalece sobre y reemplaza cualquier entendimiento, contrato, convenio o acuerdo de voluntades previo, ya sea oral o escrito, de cualquier naturaleza con relacio??n a lo aqui?? establecido.
                            <br></br>
                            En virtud de la presente Cla??usula las partes acuerdan que el presente Contrato constituye el acuerdo final de las partes, y acuerdan dar por terminado para todos los efectos a que haya lugar, todo tipo de acuerdos orales o escritos de las partes relacionadas con el presente Contrato. 		
                            VIGE??SIMA NOVENA. Ti??tulos de las Cla??usulas. Las partes convienen en que los Ti??tulos de las cla??usulas que aparecen en el presente contrato, se han puesto con el exclusivo propo??sito de facilitar su lectura, y por tanto no definen ni limitan el contenido de las mismas. Para efectos de interpretacio??n del presente contrato debera?? atenderse exclusivamente al contenido de sus declaraciones y cla??usulas y de ninguna manera a los ti??tulos de estas u??ltimas. 
                            Enterados del contenido y alcance juri??dico de las obligaciones y derechos que contraen las partes contratantes con la celebracio??n de este contrato de adhesio??n, EL CLIENTE lo suscribe, manifestando que tiene conocimiento y comprende plenamente la obligacio??n que adquiere, aceptando el monto del cre??dito que se le otorga, asi?? como los cargos y gastos que se generen, o en su caso, se llegaran a generar por motivo de su suscripcio??n, entendiendo tambie??n que no se efectuara??n cargos o gastos distintos a los especificados, por lo que lo firman de conformidad en la Ciudad de Me??xico, ----

                            <br></br><br></br>
                            Al momento de la celebracio??n del presente contrato se entrega vi??a correo electro??nico copia fiel del mismo con todos sus anexos, incluida la Cara??tula del Contrato de Cre??dito, el Pagare?? y la Carta Autorizacio??n de cargo a cuenta bancaria que forman parte integrante del mismo. 
                            Las PARTES de comu??n acuerdo manifiestan su consentimiento a efectos de celebrar el presente contrato de acuerdo a las Disposiciones del Co??digo de Comercio y el arti??culo 89 Bis respecto de las operaciones relativas al otorgamiento de cre??ditos de manera remota en cuanto a la declaracio??n de su voluntad.
                            <br></br><br></br>       
                            ???PRESTTO???                        ???EL CLIENTE???
                            <br></br><br></br>    
                            AUTORIZO MEDIANTE MEDIOS ELECTRO??NICOS EN TE??RMINOS DEL ARTI??CULO 80 DEL CO??DIGO DE COMERCIO VIGENTE.
                                    
                            <br></br><br></br>
                            Autorizacio??n de cargo a cuenta bancaria
                            <br></br>
                            Por medio de la presente, el suscrito autoriza a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R. ???PRESTTO???) para que domicilie los pagos del cre??dito simple que tengo contratado con dicha empresa a trave??s de la cuenta a nombre de ???BANCO ?????? Cuenta ??????, con base en la informacio??n que a continuacio??n se indica:				
                            <br></br>
                            1.- Nu??mero de Cliente:
                            <br></br>
                            2.- Nu??mero de Cre??dito: 
                            <br></br>
                            3.- Plazo del Pre??stamo: 0 (di??as)
                            <br></br>
                            4.- Nombre del banco que me lleva la Cuenta: 
                            <br></br>
                            5.- Datos de Identificacio??n de la Cuenta
                            <br></br>
                            Nu??mero de tarjeta de de??bito (16 di??gitos): 
                            <br></br>
                            Clave Bancaria Estandarizada (???CLABE???) de la Cuenta (18 di??gitos): 
                            <br></br><br></br>
                            6.- Monto ma??ximo de cada cargo autorizado: (monto total de  pr??stamo+ intereses+iva)
                            <br></br><br></br>
                            En caso de que la Cuenta objeto de la presente autorizacio??n no cuente con fondos suficientes para cubrir la parcialidad ma??s los intereses ordinarios, el suscrito autoriza a PRESTTO para que en cualquier momento, realice los intentos de cargo que estime necesarios para cubrir el adeudo, incluyendo capital, intereses ordinarios, intereses moratorios y comisiones, segu??n sea el caso.
                            <br></br>
                            Esta autorizacio??n estara?? vigente por todo el plazo del Contrato de Cre??dito y continuara?? en vigor hasta que todas las obligaciones a mi cargo hayan sido i??ntegramente cumplidas.
                            <br></br>
                            Estoy enterado de que en cualquier momento podre?? solicitar la cancelacio??n de la presente Domiciliacio??n sin costo a mi cargo.
                            <br></br>
                            Nombre del Cliente: 
                            <br></br>
                            Nu??mero de Autorizacio??n:  
                            <br></br>
                            Fecha:
                            <br></br>
                            Tele??fono: 
                            <br></br>
                            Correo Electro??nico: 
                            <br></br><br></br>     
                            (NOMBRE ???EL CLIENTE???) AUTORIZO MEDIANTE MEDIOS ELECTRO??NICOS EN TE??RMINOS DEL ARTI??CULO 89 DEL CO??DIGO DE COMERCIO VIGENTE 
                            <br></br>
                            Pagar??
                            <br></br>				
                            NU??MERO DE CRE??DITO: 0000000 BUENO POR: $ 0000   <br></br>
                            Por este pagare?? me obligo incondicionalmente a pagar a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R., en adelante (PRESTTO), en oficinas ubicadas en Av. Nuevo Le??n #213 - 602 Col. Condesa, Cuauht??moc, C.P. 06100, Cuidad de M??xico, la cantidad de $ 00000 (cero pesos MN 00/100), a ma??s tardar el di??a (Fecha de pago) , o bien a trave??s del depo??sito bancario o transferencia electro??nica efectuada al nu??mero de cuenta CIE 001689959, nu??mero de CLABE:                        072180 003002261226, del Banco: Banorte S.A.B. a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R. o bien mediante los medios alternativos de pago, mismos que incluyen, ma??s no se limitan a: depo??sitos o transferencias en cuentas bancarias alternas y pago directo en tiendas de conveniencia. PRESTTO  publicara?? y pondra?? a disposicio??n del CLIENTE un listado de dichas opciones alternas de pago en su Portal de Internet.
                            <br></br>
                            Este pagare?? causara?? intereses financieros durante el periodo del (fecha plazo del pr??stamo inicio ) al (fecha plazo  del pr??stamo final) de 2021, a una tasa anual de 493 %.
                            <br></br>
                            Me obligo a pagar el importe sen??alado en el primer pa??rrafo de este documento mediante pagos vencidos sobre saldos insolutos conforme a la siguiente tabla de amortizaci??n: 			
                            <br></br>
                            {fecha}    -  {totalapagar}
                            En caso de incumplimiento en el pago de una o ma??s de las obligaciones derivadas de este ti??tulo de cre??dito, el valor insoluto del presente PAGARE?? se dara?? por vencido anticipadamente, siendo exigible de contado cualquier saldo que quedar?? pendiente a mi cargo.
                            En caso de incumplimiento en el pago de cualquiera de las obligaciones derivadas de este ti??tulo de cre??dito, pagare?? intereses moratorios sobre las sumas vencidas a la tasa anual sen??alada en la Cara??tula del Contrato de Cre??dito.
                            Asimismo me obligo a satisfacer por mi exclusiva cuenta los honorarios de abogados, gastos y costas que ocasionen, el o los litigios que en su caso inicie PRESTTO, en mi contra, por incumplimiento en el pago puntual de mis obligaciones.
                            Para todo lo relativo a la interpretacio??n, cumplimiento y ejecucio??n de este pagare?? me someto expresamente a la jurisdiccio??n de los Tribunales Federales competentes de la Ciudad de Me??xico, renunciando expresamente a cualquier otro fuero que pudiere corresponderles en virtud de sus domicilios presentes o futuros., o por cualquier otro motivo. Ciudad de Me??xico a (fecha personalizada)
                            <br></br><br></br>        
                            (NOMBRE ???EL CLIENTE???)  AUTORIZO MEDIANTE MEDIOS ELECTRO??NICOS EN TE??RMINOS DEL ARTI??CULO 89 BIS DEL CO??DIGO DE COMERCIO VIGENTE.
                            <br></br><br></br>      
                            Anexo A 
                            <br></br><br></br>
                            DISPOSICIONES LEGALES					
                            <br></br>   <br></br>
                            Se transcriben a continuacio??n las disposiciones legales referidas expresamente en el presente Contrato, para consulta del CLIENTE					
                            <br></br>
                            LEY FEDERAL DE PROTECCIO??N AL CONSUMIDOR
                            <br></br>
                            ARTI??CULO 85.- Para los efectos de esta ley, se entiende por contrato de adhesio??n el documento elaborado unilateralmente por el proveedor, para establecer en formatos uniformes los te??rminos y condiciones aplicables a la adquisicio??n de un producto o la prestacio??n de un servicio, aun cuando dicho documento no contenga todas las cla??usulas ordinarias de un contrato. Todo contrato de adhesio??n celebrado en territorio nacional, para su validez, debera?? estar escrito en idioma espan??ol y sus caracteres tendra??n que ser legibles a simple vista y en un taman??o y tipo de letra uniforme. Adema??s, no podra?? implicar prestaciones desproporcionadas a cargo de los consumidores, obligaciones inequitativas o abusivas, o cualquier otra cla??usula o texto que viole las disposiciones de esta ley.
                            <br></br>
                            ARTI??CULO 88.- Los interesados podra??n inscribir voluntariamente sus modelos de contrato de adhesio??n aunque no requieran registro previo, siempre y cuando la Procuraduri??a estime que sus efectos no lesionan el intere??s de los consumidores y que su texto se apega a lo dispuesto por esta ley.
                            <br></br>
                            CO??DIGO CIVIL FEDERAL
                            <br></br>
                            Arti??culo 1803.- El consentimiento puede ser expreso o ta??cito, para ello se estara?? a lo siguiente:
                            <br></br>
                            I.- Sera?? expreso cuando la voluntad se manifiesta verbalmente, por escrito, por medios electro??nicos, o??pticos o por cualquier otra tecnologi??a, o por signos inequi??vocos, y
                            <br></br>
                            CO??DIGO DE COMERCIO
                            <br></br>
                            Arti??culo 80.- Los convenios y contratos mercantiles que se celebren por correspondencia, tele??grafo, o mediante el uso de medios electro??nicos, o??pticos o de cualquier otra tecnologi??a, quedara??n perfeccionados desde que se reciba la aceptacio??n de la propuesta o las condiciones con que esta fuere modificada.
                            <br></br>
                            Arti??culo 81.- Con las modificaciones y restricciones de este Co??digo, sera??n aplicables a los actos mercantiles las disposiciones del derecho civil acerca de la capacidad de los contrayentes, y de las excepciones y causas que rescinden o invalidan los contratos.
                            <br></br>
                            Arti??culo 89.- Las disposiciones de este Ti??tulo regira??n en toda la Repu??blica Mexicana en asuntos del orden comercial, sin perjuicio de lo dispuesto en los tratados internacionales de los que Me??xico sea parte.					
                            <br></br>
                            Las actividades reguladas por este Ti??tulo se sometera??n en su interpretacio??n y aplicacio??n a los principios de neutralidad tecnolo??gica, autonomi??a de la voluntad, compatibilidad internacional y equivalencia funcional del Mensaje de Datos en relacio??n con la informacio??n documentada en medios no electro??nicos y de la Firma Electro??nica en relacio??n con la firma auto??grafa. 
                            <br></br>
                            En los actos de comercio y en la formacio??n de los mismos podra??n emplearse los medios electro??nicos, o??pticos o cualquier otra tecnologi??a. Para efecto del presente Co??digo, se debera??n tomar en cuenta las siguientes definiciones:				
                            <br></br>
                            Certificado: Todo Mensaje de Datos u otro registro que confirme el vi??nculo entre un Firmante y los datos de creacio??n de Firma Electro??nica.
                            <br></br>
                            Datos de Creacio??n de Firma Electro??nica: Son los datos u??nicos, como co??digos o claves criptogra??ficas privadas, que el Firmante genera de manera secreta y utiliza para crear su Firma Electro??nica, a fin de lograr el vi??nculo entre dicha Firma Electro??nica y el Firmante.
                            <br></br>
                            Destinatario: La persona designada por el Emisor para recibir el Mensaje de Datos, pero que no este?? actuando a ti??tulo de Intermediario con respecto a dicho Mensaje.
                            <br></br>
                            Digitalizacio??n: Migracio??n de documentos impresos a mensaje de datos, de acuerdo con lo dispuesto en la norma oficial mexicana sobre digitalizacio??n y conservacio??n de mensajes de datos que para tal efecto emita la Secretari??a.
                            <br></br>
                            Emisor: Toda persona que, al tenor del Mensaje de Datos, haya actuado a nombre propio o en cuyo nombre se haya enviado o generado ese mensaje antes de ser archivado, si este es el caso, pero que no haya actuado a ti??tulo de Intermediario.
                            <br></br>
                            Firma Electro??nica: Los datos en forma electro??nica consignados en un Mensaje de Datos, o adjuntados o lo??gicamente asociados al mismo por cualquier tecnologi??a, que son utilizados para identificar al Firmante en relacio??n con el Mensaje de Datos e indicar que el Firmante aprueba la informacio??n contenida en el Mensaje de Datos, y que produce los mismos efectos juri??dicos que la firma auto??grafa, siendo admisible como prueba en juicio.
                            <br></br>
                            Firma Electro??nica Avanzada o Fiable: Aquella Firma Electro??nica que cumpla con los requisitos contemplados en las fracciones I a IV del arti??culo 97.				
                            <br></br>
                            En aquellas disposiciones que se refieran a Firma Digital, se considerara?? a esta como una especie de la Firma Electro??nica. 
                            <br></br>
                            Firmante: La persona que posee los datos de la creacio??n de la firma y que actu??a en nombre propio o de la persona a la que representa. 					
                            <br></br>
                            Intermediario: En relacio??n con un determinado Mensaje de Datos, se entendera?? toda persona que, actuando por cuenta de otra, envi??e, reciba o archive dicho Mensaje o preste algu??n otro servicio con respecto a e??l.
                            <br></br>
                            Mensaje de Datos: La informacio??n generada, enviada, recibida o archivada por medios electro??nicos, o??pticos o cualquier otra tecnologi??a.
                            <br></br>
                            Parte que Confi??a: La persona que, siendo o no el Destinatario, actu??a sobre la base de un Certificado o de una Firma Electro??nica.
                            <br></br>
                            Prestador de Servicios de Certificacio??n: La persona o institucio??n pu??blica que preste servicios relacionados con firmas electro??nicas, expide los certificados o presta servicios relacionados como la conservacio??n de mensajes de datos, el sellado digital de tiempo y la digitalizacio??n de documentos impresos, en los te??rminos que se establezca en la norma oficial mexicana sobre digitalizacio??n y conservacio??n de mensajes de datos que para tal efecto emita la Secretari??a.
                            <br></br>
                            Secretari??a: Se entendera?? la Secretari??a de Economi??a.
                            <br></br>
                            Sello Digital de Tiempo: El registro que prueba que un dato existi??a antes de la fecha y hora de emisio??n del citado Sello, en los te??rminos que se establezca en la norma oficial mexicana sobre digitalizacio??n y conservacio??n de mensajes de datos que para tal efecto emita la Secretari??a.
                            <br></br>
                            Sistema de Informacio??n: Se entendera?? todo sistema utilizado para generar, enviar, recibir, archivar o procesar de alguna otra forma Mensajes de Datos.
                            <br></br>
                            Titular del Certificado: Se entendera?? a la persona a cuyo favor fue expedido el Certificado. 
                            <br></br>
                            Arti??culo 89 bis.- No se negara??n efectos juri??dicos, validez o fuerza obligatoria a cualquier tipo de informacio??n por la sola razo??n de que este?? contenida en un Mensaje de Datos. Por tanto, dichos mensajes podra??n ser utilizados como medio probatorio en cualquier diligencia ante autoridad legalmente reconocida, y surtira??n los mismos efectos juri??dicos que la documentacio??n impresa, siempre y cuando los mensajes de datos se ajusten a las disposiciones de este Co??digo y a los lineamientos normativos correspondientes.			
                            <br></br><br></br>
                            CO??DIGO PENAL FEDERAL
                            <br></br>
                            Arti??culo 139 Qua??ter.- Se impondra?? la misma pena sen??alada en el arti??culo 139 de este Co??digo, sin perjuicio de las penas que corresponden por los dema??s delitos que resulten, al que por cualquier medio que fuere ya sea directa o indirectamente, aporte o recaude fondos econo??micos o recursos de cualquier naturaleza, con conocimiento de que sera??n destinados para financiar o apoyar actividades de individuos u organizaciones terroristas, o para ser utilizados, o pretendan ser utilizados, directa o indirectamente, total o parcialmente, para la comisio??n, en territorio nacional o en el extranjero, de cualquiera de los delitos previstos en los ordenamientos legales siguientes: 
                            <br></br>
                            I.	Del C??digo Penal Federal, los siguientes: 
                            <br></br>
                            1.	Terrorismo, previstos en los arti??culos 139, 139 Bis y 139 Ter; 
                            <br></br>
                            2.	Sabotaje, previsto en el arti??culo 140 
                            <br></br>
                            3.	Terrorismo Internacional, previsto en los arti??culos 148 Bis, 148 Ter y 148 Qua??ter; 
                            <br></br>
                            4.	Ataques a las vi??as de comunicacio??n, previstos en los arti??culos 167, fraccio??n IX, y 170, pa??rrafos primero, segundo y tercero, y 
                            <br></br>
                            5.	Robo previsto en el art??culo Quinquies.
                            <br></br>
                            II.	De la ley que Declara Reservas Mineras los yacimientos de Uranio, Torio y las dem??s substancias de las cuales se obtengan is??topos hendibles que puedan producir energ??a nuclear, los previstos en los art??culos 10 y 13. 
                            <br></br>
                            Arti??culo 400 Bis. Se impondra?? de cinco a quince an??os de prisio??n y de mil a cinco mil di??as multa al que, por si?? o por interpo??sita persona realice cualquiera de las siguientes conductas:
                            <br></br>
                            I. Adquiera, enajene, administre, custodie, posea, cambie, convierta, deposite, retire, de?? o reciba por cualquier motivo, invierta, traspase, transporte o transfiera, dentro del territorio nacional, de este hacia el extranjero o a la inversa, recursos, derechos o bienes de cualquier naturaleza, cuando tenga conocimiento de que proceden o representan el producto de una actividad ili??cita, o
                            <br></br>
                            II. Oculte, encubra o pretenda ocultar o encubrir la naturaleza, origen, ubicacio??n, destino, movimiento, propiedad o titularidad de recursos, derechos o bienes, cuando tenga conocimiento de que proceden o representan el producto de una actividad ili??cita.
                            <br></br>
                            Para efectos de este Capi??tulo, se entendera?? que son producto de una actividad ili??cita, los recursos, derechos o bienes de cualquier naturaleza, cuando existan indicios fundados o certeza de que provienen directa o indirectamente, o representan las ganancias derivadas de la comisio??n de algu??n delito y no pueda acreditarse su legi??tima procedencia.
                            <br></br>
                            En caso de conductas previstas en este Capi??tulo, en las que se utilicen servicios de instituciones que integran el sistema financiero, para proceder penalmente se requerira?? la denuncia previa de la Secretari??a de Hacienda y Cre??dito Pu??blico.
                            <br></br>
                            Cuando la Secretari??a de Hacienda y Cre??dito Pu??blico, en ejercicio de sus facultades de fiscalizacio??n, encuentre elementos que permitan presumir la comisio??n de alguno de los delitos referidos en este Capi??tulo, debera?? ejercer respecto de los mismos las facultades de comprobacio??n que le confieren las leyes y denunciar los hechos que probablemente puedan constituir dichos ili??citos. 			
                            <br></br><br></br>
                            LEY GENERAL DE TI??TULOS Y OPERACIONES DE CRE??DITO				
                            <br></br>
                            Arti??culo 299.- (...)	
                            <br></br>			
                            Negociado o cedido el cre??dito por el acreditante, este abonara?? al acreditado, desde la fecha de tales actos, los intereses correspondientes al importe de la disposicio??n de que dicho cre??dito proceda, conforme al tipo estipulado en la apertura de cre??dito; pero el cre??dito concedido no se entendera?? renovado por esa cantidad, sino cuando las partes asi?? lo hayan convenido.		
                            <br></br><br></br>
                            LEY PARA REGULAR LAS SOCIEDADES DE INFORMACIO??N CREDITICIA
                            <br></br>
                            Arti??culo 28.- Las Sociedades solo podra??n proporcionar informacio??n a un Usuario, cuando este cuente con la autorizacio??n expresa del Cliente, mediante su firma, en donde conste de manera fehaciente que tiene pleno conocimiento de la naturaleza y alcance de la informacio??n que la Sociedad proporcionara?? al Usuario que asi?? la solicite, del uso que dicho Usuario hara?? de tal informacio??n y del hecho de que este podra?? realizar consultas perio??dicas de su historial crediticio, durante el tiempo que mantenga relacio??n juri??dica con el Cliente. La firma a que se refiere este pa??rrafo podra?? ser recabada de manera auto??grafa o por medios electro??nicos, en este u??ltimo caso, siempre que cumpla con los te??rminos y condiciones establecidos por el Banco de Me??xico.
                            <br></br>
                            Las Sociedades podra??n proporcionar informacio??n a los Usuarios que adquieran o administren cartera de cre??dito, utilizando para ello la autorizacio??n que el Cliente haya dado conforme al presente arti??culo al Usuario que otorgo?? el cre??dito respectivo originalmente. 
                            <br></br>
                            Asimismo, el Banco de Me??xico podra?? autorizar a las Sociedades los te??rminos y condiciones bajo los cuales podra??n pactar con los Usuarios la sustitucio??n de la firma auto??grafa del Cliente, con alguna de las formas de manifestacio??n de la voluntad sen??aladas en el arti??culo 1803 del Co??digo Civil Federal.
                            <br></br>
                            La autorizacio??n expresa a que se refiere este arti??culo sera?? necesaria trata??ndose de:			
                            <br></br>
                            I.	 Personas fi??sicas, y  					 	 
                            <br></br>
                            II.	Personas morales con cre??ditos totales inferiores a cuatrocientas mil UDIS, de conformidad con el valor de dicha unidad publicado por el Banco de Me??xico a la fecha en que se presente la solicitud de informacio??n. Los Usuarios que realicen consultas relacionadas con personas morales con cre??ditos totales superiores a cuatrocientas mil UDIS, no requerira??n de la autorizacio??n expresa a que se refiere el presente arti??culo. 			
                            <br></br>
                            La obligacio??n de obtener las autorizaciones a que se refiere este arti??culo, no aplicara?? a la informacio??n solicitada por el Banco de Me??xico, la Comisio??n, las autoridades judiciales en virtud de providencia dictada en juicio en que el Cliente sea parte o acusado y por las autoridades hacendarias federales, cuando la soliciten a trave??s de la Comisio??n, para fines fiscales, de combate al blanqueo de capitales o de acciones tendientes a prevenir y castigar el financiamiento del terrorismo.
                            <br></br>
                            La vigencia de la autorizacio??n prevista en el primer pa??rrafo de este arti??culo sera?? de un an??o contado a partir de su otorgamiento, o hasta dos an??os adicionales a ese an??o si el Cliente asi?? lo autoriza expresamente. En todo caso, la vigencia permanecera?? mientras exista relacio??n juri??dica entre el Usuario y el Cliente.
                            <br></br>
                            Los Reportes de Cre??dito Especiales que sean entregados a los Clientes en te??rminos de esta ley debera??n contener la identidad de los Usuarios que hayan consultado su informacio??n en los veinticuatro meses anteriores.
                            <br></br>
                            Cuando el texto que contenga la autorizacio??n del Cliente forme parte de la documentacio??n que deba firmar el mismo para gestionar un servicio ante algu??n Usuario, dicho texto debera?? incluirse en una seccio??n especial dentro de la documentacio??n citada y la firma auto??grafa del Cliente relativa al texto de su autorizacio??n debera?? ser una firma adicional a la normalmente requerida por el Usuario para el tra??mite del servicio solicitado.
                            <br></br>
                            Se entendera?? que violan las disposiciones relativas al Secreto Financiero tanto la Sociedad, como sus empleados o funcionarios que participen en alguna consulta a sabiendas de que no se ha recabado la autorizacio??n a que se refiere este arti??culo, en los te??rminos de los arti??culos 29 y 30 siguientes.
                            <br></br>
                            Se considerara?? que los Usuarios, asi?? como sus empleados o funcionarios involucrados, han violado las disposiciones relativas al Secreto Financiero, cuando realicen consultas o divulguen informacio??n en contravencio??n a lo establecido en los arti??culos mencionados en el pa??rrafo anterior.
                            <br></br>
                            Las Sociedades, sus empleados y funcionarios tendra??n prohibido proporcionar informacio??n relativa a datos personales de los Clientes para comercializacio??n de productos o servicios que pretendan ofrecer los Usuarios o cualquier tercero, salvo para la realizacio??n de consultas relativas al historial 
                            crediticio. Quien proporcione informacio??n en contravencio??n a lo establecido en este pa??rrafo, incurrira?? en el delito de revelacio??n de secretos a que se refiere el arti??culo 210 del Co??digo Penal Federal. 
                          </table>
                          </div>
                    </div>
                  </div>
  )
}

downloadFile=()=>??{
  let nom = this.state.idcontrato + '.pdf';
    html2canvas(document.querySelector("#dvContainer")).then(canvas => {
    /*document.body.appendChild(canvas)*/
      let imgData = canvas.toDataURL('image/jpeg',1.0);
      let doc = new jsPDF("p", "mm", "a4");
      doc.addImage(imgData, 'JPEG', 0, 0,210,297);
      doc.save(nom);
      });
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
  const { saveCalculadora, updateContract} = state
  return { 
    saveCalculadora: saveCalculadora.data,
    lastregistro: state.getRegister
  };
  
};

//Propiedades que envia
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getRegister,
    updateContract,
    validateForm: (data) => dispatch(validateForm(data)),
  }, dispatch )
}
export default connect(mapStateToProps,mapDispatchToProps)(Registro);
