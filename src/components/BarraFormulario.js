import React, { Component } from 'react';

/* Imagenes */
import icono1 from '../assets/img/iconosformulario/Icon_01.png';
import icono2 from '../assets/img/iconosformulario/Icon_02.png';
import icono3 from '../assets/img/iconosformulario/Icon_03.png';
import icono4 from '../assets/img/iconosformulario/Icon_04.png';
import cohetelado from '../assets/img/icons/icon1.png';

/* Componentes Formulario */

import DatosdeContacto  from '../components/Formulario/DatosdeContacto';

class BarraFormulario extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      apellidopaterno:'',
      apellidomaterno:'',
      celular:'',
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
      dia: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      mes:['Enero','Febrero','Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      tateView:'datospersonales',
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
}


  
  render() {
    let { stateView, datospersonales } = this.props

    return (
            <div className="container-tabs">
                {/* Mobile View*/}
                <div className="mobile-buttons">
                    <div className="col-especial-mobile">
                        <img src={icono1} alt="prestify" className="iconosForm"/>
                        <p className="leyenda-icon active_button">Datos de<br></br> contacto</p>
                    </div>
                    <div className="col-especial-mobile">
                        <img src={icono2} alt="prestify" className="iconosForm"/>
                        <p className="leyenda-icon">Registro</p>
                    </div>
                    <div className="col-especial-mobile">
                        <img src={icono3} alt="prestify" className="iconosForm"/>
                        <p className="leyenda-icon">Información <br></br>de empleo</p>
                    </div>
                    <div className="col-especial-mobile">
                        <img src={icono4} alt="prestify" className="iconosForm"/>
                        <p className="leyenda-icon">Confirma  <br></br>tu préstamo</p>
                    </div>
                </div>
                {/* Desktop View*/}
                <div className="row desktopbuttons">
                    <div className="col-sm  margin-espe">
                        <img src={icono1} alt="prestify" className="iconosForm"/>
                        <p className="leyenda-icon">Datos de contacto</p>
                    </div>
                    <div className="col-sm margin-espe2">
                        <img src={icono2} alt="prestify" className="iconosForm"/>
                        <p className="leyenda-icon">Registro</p>
                    </div>
                    <div className="col-sm margin-espe3">
                        <img src={icono3} alt="prestify" className="iconosForm"/>
                        <p className="leyenda-icon">Información de empleo</p>
                    </div>
                    <div className="col-sm margin-espe4">
                        <img src={icono4} alt="prestify" className="iconosForm"/>
                        <p className="leyenda-icon">Confirma tu préstamo</p>
                    </div>
                    <div className="tabsvolando row">
                        <div className="col-sm text-center tab_number">
                            <p className={ stateView === 'datospersonales' ? 
                            'titles-prestify tab-container tab-active' : datospersonales === 1 ? 'titles-prestify tab-container tab-active'
                            :'titles-prestify tab-container' }>
                            <span className={ stateView === 'datospersonales' ? 'show' : datospersonales === 1 || stateView === 'datosbancarios' ? 'show' : 'hide'}> ✔ </span>
                            </p>
                            <p className='linemedio'></p>
                        </div>
                        <div className="col-sm text-center tab_number">
                            <p className={ stateView === 'historial' ? 'lineatras': 'lineatras'}></p>
                            <p className={ stateView=== 'historial' || stateView=== 'datosempleo'  || stateView === 'datosbancarios'  ||  stateView === 'tarjetadebito' || stateView === 'confirmacondiciones'  || stateView === 'felicidades' ? 
                            'titles-prestify tab-container tab-active' : 'titles-prestify tab-container' }>
                            <span className={ stateView === 'historial' || stateView === 'datosempleo' || stateView === 'datosbancarios' ||  stateView === 'tarjetadebito' || stateView === 'confirmacondiciones'  || stateView === 'felicidades' ? 'show' : 'hide'}> ✔ </span>
                            </p>
                            <p className={ stateView === 'historial' ? 'linemedio': 'linemedio'}></p>
                        </div>
                        <div className="col-sm text-center tab_number">
                            <p className={ stateView === 'datosempleo' ? 'lineatras': 'lineatras'}></p>
                            <p className={ stateView === 'datosempleo'  ||  stateView === 'datosbancarios' ||  stateView === 'tarjetadebito'  || stateView === 'confirmacondiciones'   || stateView === 'felicidades' ? 
                            'titles-prestify tab-container tab-active' : 'titles-prestify tab-container' }>
                            <span className={ stateView === 'datosempleo' || stateView === 'datosbancarios' ||  stateView === 'tarjetadebito'   || stateView === 'confirmacondiciones'  || stateView === 'felicidades' ? 'show' : 'hide'}> ✔ </span>
                            </p>
                            <p className={ stateView === 'datosempleo'? 'linemedio degradado': 'linemedio degradado'}></p>
                        </div>
                        <div className="col-sm text-center tab_number">
                            <p className={ stateView === 'datosbancarios'  || stateView === 'tarjetadebito' || stateView === 'confirmacondiciones'  || stateView === 'felicidades' ? 'lineatras degradado': 'lineatras degradado'}></p>
                            <p className={ stateView === 'datosbancarios' || stateView === 'tarjetadebito'  || stateView === 'confirmacondiciones'  || stateView === 'felicidades' ? 
                            'titles-prestify tab-container tab-active' : 'titles-prestify tab-container' }>
                            <span className={ stateView === 'datosbancarios' || stateView === 'confirmacondiciones' ||  stateView === 'tarjetadebito'  || stateView === 'felicidades' ? 'show' : 'hide'}> ✔ </span>
                            </p>
                            <p className={ stateView === 'datosbancarios' || stateView === 'tarjetadebito'  || stateView === 'confirmacondiciones'   || stateView === 'felicidades' ? 'linemedio rosa': 'linemedio rosa'}></p>
                        </div>
                        <div className="col-sm text-center tab_number">
                            <p className={ stateView === 'datoscredito' || stateView === 'tarjetadebito' || stateView === 'confirmacondiciones' || stateView === 'felicidades' ? 'lineafinal' : 'lineafinal'}></p>
                        </div>
                </div>
            </div>
        </div>
    )
  }
}

export default BarraFormulario;
