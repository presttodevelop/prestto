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
import Barcode from "react-hooks-barcode";
import ReactToPrint from 'react-to-print';

//img
import logomorado from '../assets/img/logo_morado.png';
import tiendas from '../assets/img/Tiendas _new.png';

class Contrato extends Component {

  constructor(props) {
    super(props);
  }


  
  render() {
    /*let { idpago, barcode, barcode_img, due_date} = this.props;*/

    let urlGet = window.location.pathname;
    let splitURL = urlGet.split('/');
    /*let name = splitURL[2].replace('%20', " ").replace('%20', " ").replace('%20', " ");*/
    let namecompleto = splitURL[2]
    let name = unescape(namecompleto);
    let email = splitURL[3];
    let idpago = splitURL[4];
    let barcode = splitURL[5];
    let monto = splitURL[6];
    let date = splitURL[7];


    const config = {
      background: "#f5f5f5",
      marginTop: "20px",
      marginBottom: "20px",
      fontOptions: "italic",
      width: 2
    };
    return (
            <>
                <div className="contrato_container_pay">
                  <div id="dvContainer">
                    <table className="contrato-table-b">
                      <tr className="row-contrato">
                        <td className="col"><h4 className="men"><b>Formato pago en tiendas</b></h4></td>
                        <td className="col"> <img src={logomorado} className="logo_pay"></img></td>
                      </tr>
                      <tr>
                        <td> Estimado(a) <b>{ name }</b></td>
                      </tr>
                    </table>
                    <br></br>
                    <div className="bg-hr"></div>
                    <div>
                      <p className="letra_black padd">
                        Imprime el cupón adjunto de manera clara y legible, usa de preferencia impresora láser, consérvalo en buen estado sin tachar ó doblar la parte del código de barras. En caso de no ser legible, la tienda puede rechazar el pago correspondiente.
                        Para fines de validación en el comercio es necesario mencionar que el pago se hace a través de Paycash.
                      </p>
                      <h4><b>Formato Pago</b></h4><br></br>
                      <p className="letra_black">Nombre del Cliente: <b>{ name }</b></p>
                      <p className="letra_black">Correo electrónico: <b>{ email }</b></p>
                      <p className="letra_black">ID de Transacción: <b>{ idpago }</b></p>
                      <p className="letra_black">Monto a pagar: <b>${ monto }</b></p>
                      <p className="letra_black">Vigencia: <b>{ date }</b></p>
                      
                      <p className="payment-referencen mx-auto">
                          <Barcode value= { barcode } {...config} />
                      </p>

                      <div className="bg-hr"></div>
                        <img src={tiendas} className="imgtiendas" />
                      <div className="bg-hr"></div>
            
                      <p className="letra_black">
                         <br></br>
                          Tiendas soportadas:Walmart, Sam's, Bodega Aurrera, Soriana, Comercial Mexicana, Superama, Calimax, 7 Eleven, BBVA Bancomer, Extra, Circle K, Telecomm y Banorte. <br></br> 
                          Este cupón es válido únicamente para realizar el pago correspondiente y dentro de la fecha de vigencia establecida. La acreditación del mismo es aproximadamente alos 30 minutos hasta entonces el pago podrá ser corroborado por el vendedor.
                          Cualquier aclaración sobre la compra, favor de comunicarse con el vendedor. Banwire no se hace responsable por cualquier reclamo ó aclaración, es responsabilidad del vendedor resolver cualquier situación relacionada con la compra del producto o servicio adquirido. <br></br>
                          <br></br>
                          *Imprime el cupón de manera clara y legible, usa de preferencia impresora láser, conservalo en buen estado sin tachar ó doblar la parte del código de barras. En caso de no ser legible, la tienda puede rechazar elpago correspondiente.<br></br>
                          *Las tiendas siguientes: Walmart, Bodega Aurrera, Bodega, Aurrera Express, Mi Bodega Aurrera, Sam´s Club, Superema, Medimart Farmacia, Calimax, Tiendas Extra y Círculo K cobrarán una comisión de $ 8.00 MXN por concepto de pago.<br></br>
                          *La tienda 7 Eleven cobrarán una comisión de $10.00 MXN por concepto de pago.<br></br>
                          *Las tiendas siguientes: Telecomm, Soriana y Comercial Mexicana no cobrarán ninguna comisión por concepto de pago.</p>
                      </div>
                      <div className="bg-hr"></div>
                      <table className="contrato-table-b">
                      <tr className="row-contrato">
                        <p className="col-50 text-left">clientes@prestto.mx</p>
                        <p className="col-50 text-right">prestto.mx </p>
                      </tr>
                    </table>
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
            </>
    )
  }
}

//Propiedades que recibe
const mapStateToProps = (state) => {
  const { saveCalculadora} = state
  return { 
    saveCalculadora: saveCalculadora.data,

  };
  
};


//Propiedades que envia
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveContrato,
  }, dispatch )
}
export default connect(mapStateToProps,mapDispatchToProps)(Contrato);



