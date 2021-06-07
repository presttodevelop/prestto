import React, { Component } from 'react';
import $ from 'jquery';

//CONECTAR COMPONENTE CON REDUX
import jsPDF from "jspdf";
import { connect } from 'react-redux';
import { saveContrato } from '../redux/actions';
import { bindActionCreators } from 'redux'
import SignatureCanvas from "react-signature-canvas";

import html2canvas from 'html2canvas';
import html2PDF from 'jspdf-html2canvas';
import axios from 'axios';

//img
import logomorado from '../assets/img/logo_morado.png';

class Contrato extends Component {

  constructor(props) {
    super(props);
    this.downloadFile = this.downloadFile.bind(this);
  }

  componentDidMount(){
    console.log("componentDidMount",this.props)
  }

  componentWillUpdate(){
    console.log("componentWillUpdate",this.props)
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps",this.props,nextProps)
  }
  componentWillMount(){
    console.log("componentWillMount",this.props)
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate",this.props,nextProps,nextState)
  }
  componentDidUpdate(){
    console.log("componentDidUpdate",this.props)
    
    /*let nom = this.props.numerocontrato + '.pdf';
    html2canvas(document.querySelector("#dvContainer")).then(canvas => {
      document.body.appendChild(canvas)
      let imgData = canvas.toDataURL('image/jpeg',1.0);
        let doc = new jsPDF("p", "mm", "a4");
        doc.addImage(imgData, 'JPEG', 0, 0,210,297);
        doc.save(nom);
        var pdf = doc.output('blob');
        var data = new FormData();
        data.append("data" , pdf);

        axios.post(`https://prestto.mx/api/uploadContract.php?nom=${this.props.numerocontrato}`,data)
        .then(res => {
          console.log("pdfresponse",res)
        })
        .catch (error => console.log(error))
        });*/
  }
  sendContract(){
    console.log("sendContract")
  }
  sendCon(){
    console.log("onFo")
  }

  downloadFile=()=> {
      let nom = this.props.numerocontrato + '.pdf';
      html2canvas(document.querySelector("#dvContainer")).then(canvas => {
        document.body.appendChild(canvas)
        let imgData = canvas.toDataURL('image/jpeg',1.0);
          let doc = new jsPDF("p", "mm", "a4");
          doc.addImage(imgData, 'JPEG', 0, 0,210,297);
          doc.save(nom);

          /*var formData = new FormData();
          formData.append('pdf', blob);*/
          var pdf = doc.output('blob');
          /*window.open(doc.output('bloburl'))*/
          var data = new FormData();
          data.append("data" , pdf);

          axios.post('https://prestto.mx/api/uploadContract.php',data)
          .then(res => {
            console.log("pdfresponse",res)
          })
          .catch (error => console.log(error))
          });


  }
  
  render() {
    let { nombre, apellidopaterno, apellidomaterno, rfc, curp, email, totalaprestar, totalapagar, clabe, fecha, numerocontrato, sendServer} = this.props
    console.log("sendServer",this.props)
    let contrato = $('#dvContainer').html();
    this.props.saveContrato(contrato)
    return (
            <>
                <div>
                <div id="image-out"></div>
                    <button className="btn btn-outline-secondary pointer btn_download" type="button" onClick={() => this.downloadFile()}>DESCARGAR</button>
                    <div id="dvContainer">
                    {/*<!-<img src={logomorado} className="logo_contrato"></img> -->*/}
                    <table className="contrato-table">
                      <tr className="row-contrato morado_bg">
                        <td className="colr col-fecha"><b>Fecha: { fecha }</b></td>
                        <td className="colr text-right"><b>NÚMERO DE CONTRATO:PRECGR002</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td>CARÁTULA DEL CONTRATO DE CRÉDITO que forma parte integrante del contrato de crédito simple, que celebran por una parte AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R., “PRESTTO” con domicilio en Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Ciudad de México, RFC: AFI090129MZ2, y por la otra  { nombre + apellidopaterno + apellidomaterno} “EL CLIENTE”, con domicilio en (DOMICILIO “EL CLIENTE”)</td>
                      </tr>
                    </table>
                    <br></br>
                    <table className="contrato-table">
                      <tr className="row-contrato morado_bg">
                        <td className="colr col-fecha text-center"><b>NOMBRE DEL PRODUCTO: PRODUCT_NIVEL 1 <br></br>TIPO DE PRÉSTAMO: CRÉDITO SIMPLE </b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td className="td-ex text-center"><b>CAT sin IVA (COSTO ANUAL TOTAL)</b></td>
                        <td className="td-ex text-center"><b>TASA DE INTERÉS ANUAL ORDINARIA </b></td>
                        <td className="td-ex text-center"><b>TASA DE INTERÉS ANUAL MORATORIA</b></td>
                        <td className="td-ex text-center"><b>MONTO DEL CRÉDITO</b></td>
                        <td className="td-ex text-center"><b>MONTO TOTAL A PAGAR</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td className="td-ex text-center"><b>(Personalizado)</b> <br></br>(Para fines informativos y de comparación exclusivamente) </td>
                        <td className="td-ex text-center"><b>493%</b></td>
                        <td className="td-ex text-center"><b>986%</b></td>
                        <td className="td-ex text-center"><b>$000,000 (Personalizado)</b></td>
                        <td className="td-ex text-center"><b>$000,000 (monto+interés+IVA)</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td className="td-ex text-center"><b>COMISIONES</b> <br></br>`EXTENSIÓN Fija según el plazo, más IVA Cláusula: Décima COBRANZA $ 600.00 (Seiscientos pesos MN 00/100) más IVA Cláusula: Décima</td>
                        <td className="td-ex text-center"><b>PLAZO DEL CRÉDITO APROBADO <br></br>(personalizado)</b></td>
                        <td className="td-ex-b"><b>FECHAS DEL PAGO <br></br>(Personalizado)</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td className="td-ex text-center"><b>EXTENSIÓN Fija</b></td>
                        <td className="td-ex text-center"><b>00 días</b></td>
                        <td className="td-ex-b"><b>Fecha límite de pago: {fecha}<br></br>Fecha al corte:{fecha}</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td><b>Cálculo de Interés Moratorio:</b> Los Intereses Moratorios se calcularán sobre saldos insolutos diarios durante la totalidad del plazo comprendido entre la Fecha de Pago aplicable a un crédito y la fecha en que efectivamente se realice el pago total de las obligaciones del el Cliente conforme al contrato.</td>
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
                        <td className="td-ex"><b>RECLAMACIÓN IMPROCEDENTE: N/A</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td><b>Medios Electrónicos:</b> “EL Cliente”, sabe, reconoce y acepta que la presente carátula, así como el Contrato de Crédito se celebra por medios electrónicos, dándole plena validez en términos de los artículos 1803 fracción I del Código Civil Federal, 80, 89 y 89 Bis Código de Comercio y la NOM-151-SCFI-2002, acordando ambas partes que para la comprobación fehaciente de este acto jurídico bastará un correo electrónico o la aceptación del deudor de las condiciones generales del instrumento a través de la página web de donde lo obtuvo.</td>
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
                        <td><b>Unidad Especializada para Atención a Usuarios PRESTTO (UNE PRESTTO)</b></td>
                      </tr>
                      <tr className="row-contrato-ma">
                        <td><b>Domicilio:</b>Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Ciudad de México</td>
                      </tr>
                      <tr className="row-contrato-ma">
                        <td><b>Teléfono: </b>A+52 1 55 8038 7757 <b> &nbps;Correo electrónico:</b> clientes@PRESTTO.mx Página de Internet: https://prestto.mx/</td>
                      </tr>
                      <tr className="row-contrato-ma">
                        <td><b>PROFECO:</b> Teléfono. 800 468 8722. &nbps;<b>Página de Internet: </b> https://www.gob.mx/profeco</td>
                      </tr>
                    </table>

                      <SignatureCanvas canvasProps={{width: 500, height: 200 }} onChange={this.sendContract} onBlur={this.sendCon}/>
                    </div>
                  </div>
            </>
    )
  }
}

//Propiedades que recibe
const mapStateToProps = (state) => {
  const { saveCalculadora, updateContract} = state
  return { 
    saveCalculadora: saveCalculadora.data,
    updateContract:updateContract,
  };
  
};


//Propiedades que envia
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveContrato,
  }, dispatch )
}
export default connect(mapStateToProps,mapDispatchToProps)(Contrato);



