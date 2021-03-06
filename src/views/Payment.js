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
                        Imprime el cup??n adjunto de manera clara y legible, usa de preferencia impresora l??ser, cons??rvalo en buen estado sin tachar ?? doblar la parte del c??digo de barras. En caso de no ser legible, la tienda puede rechazar el pago correspondiente.
                        Para fines de validaci??n en el comercio es necesario mencionar que el pago se hace a trav??s de Paycash.
                      </p>
                      <h4><b>Formato Pago</b></h4><br></br>
                      <p className="letra_black">Nombre del Cliente: <b>{ name }</b></p>
                      <p className="letra_black">Correo electr??nico: <b>{ email }</b></p>
                      <p className="letra_black">ID de Transacci??n: <b>{ idpago }</b></p>
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
                          Este cup??n es v??lido ??nicamente para realizar el pago correspondiente y dentro de la fecha de vigencia establecida. La acreditaci??n del mismo es aproximadamente alos 30 minutos hasta entonces el pago podr?? ser corroborado por el vendedor.
                          Cualquier aclaraci??n sobre la compra, favor de comunicarse con el vendedor. Banwire no se hace responsable por cualquier reclamo ?? aclaraci??n, es responsabilidad del vendedor resolver cualquier situaci??n relacionada con la compra del producto o servicio adquirido. <br></br>
                          <br></br>
                          *Imprime el cup??n de manera clara y legible, usa de preferencia impresora l??ser, conservalo en buen estado sin tachar ?? doblar la parte del c??digo de barras. En caso de no ser legible, la tienda puede rechazar elpago correspondiente.<br></br>
                          *Las tiendas siguientes: Walmart, Bodega Aurrera, Bodega, Aurrera Express, Mi Bodega Aurrera, Sam??s Club, Superema, Medimart Farmacia, Calimax, Tiendas Extra y C??rculo K cobrar??n una comisi??n de $ 8.00 MXN por concepto de pago.<br></br>
                          *La tienda 7 Eleven cobrar??n una comisi??n de $10.00 MXN por concepto de pago.<br></br>
                          *Las tiendas siguientes: Telecomm, Soriana y Comercial Mexicana no cobrar??n ninguna comisi??n por concepto de pago.</p>
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



