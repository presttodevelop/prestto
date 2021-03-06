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
  }


  downloadFile=()=> {

        let nom = this.props.numerocontrato + '.pdf';
        html2canvas(document.querySelector("#dvContainer")).then(canvas => {
          document.body.appendChild(canvas)
            let imgData = canvas.toDataURL('image/jpeg');
            let imgWidth = 210,
            pageHeight = 295,
            imgHeight = canvas.height * imgWidth / canvas.width,
            heightLeft = imgHeight,
            doc = new jsPDF('p', 'mm'),
            position = 0;

            doc.addImage(imgData, 'JPEG', 0,position, imgWidth-20, imgHeight-20);
            heightLeft -= pageHeight;

           while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              doc.addPage();
              doc.addImage(imgData, 'JPEG', 0, position, imgWidth-20, imgHeight-20);
              heightLeft -= pageHeight;
          }

            doc.save('re.pdf');

            /*var formData = new FormData();
            formData.append('pdf', blob);*/
            /*var pdf = doc.output('blob');*/
            /*window.open(doc.output('bloburl'))*/
            /*var data = new FormData();
            data.append("data" , pdf);

          console.log("sfdds", data)*/
          /*axios.post(`https://prestto.mx/api/uploadContract.php?nom=${this.props.numerocontrato}`,data)
            .then(res => {
              console.log("pdfresponse",res)
            })
            .catch (error => console.log(error))*/
            });


}

  
  render() {
    let { nombre, apellidopaterno, apellidomaterno, rfc, curp, email, totalaprestar, totalapagar, clabe, fecha, numerocontrato} = this.props
    let contrato = $('#dvContainer').html();
    this.props.saveContrato(contrato)
    return (
            <>
                <div className="contrato_container_mio">
                    <img src={logomorado} className="logo_contrato"></img>
                    <button id="cmd" className="btn btn-outline-secondary pointer btn_download" type="button" onClick={() => this.downloadFile()}>DESCARGAR</button>
                  <div id="dvContainer">
                    <table className="contrato-table">
                      <tr className="row-contrato morado_bg">
                        <td className="colr col-fecha"><b>Fecha: { fecha }</b></td>
                        <td className="colr text-right"><b>NÚMERO DE CONTRATO:PRECGR002</b></td>
                      </tr>
                    </table>
                    <table className="contrato-table">
                      <tr className="row-contrato-m">
                        <td>CARÁTULA DEL CONTRATO DE CRÉDITO que forma parte integrante del contrato de crédito simple, que celebran por una parte AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R., “PRESTTO” con domicilio en Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Ciudad de México, RFC: AFI090129MZ2, y por la otra (NOMBRE “EL CLIENTE”) “EL CLIENTE”, con domicilio en (DOMICILIO “EL CLIENTE”)</td>
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
                        <td className="td-ex-b"><b>Fecha límite de pago:<br></br>Fecha al corte:</b></td>
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
                        <td><b>Teléfono: </b>A+52 1 55 8038 7757   <b>Correo electrónico:</b> clientes@PRESTTO.mx Página de Internet: https://prestto.mx/</td>
                      </tr>
                      <tr className="row-contrato-ma">
                        <td><b>PROFECO:</b> Teléfono. 800 468 8722. <b>Página de Internet: </b> https://www.gob.mx/profeco</td>
                      </tr>
                    </table>
                       {/* PIE */}
                      <hr className="line_contra"></hr>
                      <p className="footer_pie">Av. Nuevo León 213-602 Col.Condesa, CDMX</p>
                      <p className="footer_pie">clientes@prestto.mx</p>
                      <p className="footer_pie">www.prestto.mx</p>
                      {/* PIE */}
                      <br></br><br></br>
                      <table className="contrato-table">
                      <tr className="row-contrato morado_bg">
                        <td className="colr col-fecha text-center"><b>ADVERTENCIA:</b></td>
                      </tr>
                    </table>
                      <table className="contrato-table">
                      <tr className="row-contrato-ma">
                          <td className="contrafir">
                            “INCUMPLIR CON LAS OBLIGACIONES AQUÍ PACTADAS PUEDE GENERAR COMISIONES E INTERESES MORATORIOS” <br></br>
                            “CONTRATAR PRÉSTAMOS Y/O CRÉDITOS POR ARRIBA DE TU CAPACIDAD DE PAGO PUEDE AFECTAR TU HISTORIAL CREDITICIO” 
                          </td>
                      </tr>
                      <tr className="row-contrato-ma">
                          <td className="contrafir">
                            <b>EL Cliente</b>, expresamente declara que <b>PRESTTO</b>  le ha explicado el contenido y alcance de las condiciones generales de este crédito conforme con el contenido del cuadro informativo arriba descrito, las cuales acepta de conformidad, en la Ciudad de México, en la fecha arriba mencionada.
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
                    <div>
                            <table>
                            CONTRATO DE ADHESIÓN DE CRÉDITO SIMPLE QUE CELEBRAN, POR UNA PARTE A, AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R.,, A QUIEN EN LO SUCESIVO Y PARA EFECTOS DEL PRESENTE CONTRATO SERÁ DENOMINADA “PRESTTO” Y POR LA OTRA PARTE Y POR SU PROPIO DERECHO ______________________ A QUIEN EN LO SUCESIVO Y PARA EFECTOS DEL PRESENTE CONTRATO SE LE DENOMINARÁ “EL CLIENTE” Y CONJUNTAMENTE CON PRESTTO “LAS PARTES” AL TENOR DE LOS SIGUIENTES ANTECEDENTES, DECLARACIONES Y CLÁUSULAS:
                            <br></br><br></br>
                            ANTECEDENTES
                            PRIMERO. EL CLIENTE formuló a través de la página de internet https://prestto.mx/ una solicitud (en adelante, la Solicitud), a través de la cual requirió a PRESTTO, el otorgamiento de un crédito simple, en moneda nacional (en adelante, el Crédito). <br></br>
                            SEGUNDO. PRESTTO, revisará y analizará la Solicitud, así como de la información y documentación que le fue proporcionada por el CLIENTE, para autorizar en definitiva dicha Solicitud.
                            <br></br><br></br>
                            DECLARACIONES
                            <br></br>
                            I. Declara PRESTTO, que:<br></br>
                            a) Es una  Sociedad Financiera de Objeto Múltiple No Regulada (SOFOM E.N.R.). Conforme a las leyes de los Estados Unidos Mexicanos, mediante escritura pública número 24,595 de fecha 16 de julio de 2014, otorgada ante la fe del Licenciado Carlos Francisco Castro Suárez, Notario Público número 110 del Estado de México.<br></br>
                            
                            b) Que se encuentra inscrito ante el registro federal de contribuyentes (RFC) con clave: AFI090129MZ2<br></br>
                            
                            c) Señala como su domicilio, para los efectos relacionados con el presente contrato, el ubicado en Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Ciudad de México.<br></br>
                            
                            d) Su página de Internet se encuentra ubicada en la dirección: https://prestto.mx/<br></br>
                                      
                            e) Que da estricto cumplimiento a lo establecido en la Ley Federal de Protección de Datos Personales en posesión de Particulares, y su Reglamento, respecto de la información personal proporcionada por sus clientes, asegurando la confidencialidad de la misma y estableciendo que solamente la utilizará con la finalidad de corroborar la información proporcionada por El CLIENTE, respecto de su capacidad jurídica y financiera a efectos de contratar los productos y servicios establecidos en el presente Contrato; así como para rendir informes tanto a autoridades administrativas como judiciales que debidamente justificadas en disposiciones legales, así lo solicitaren.
                            <br></br>
                            f) Que se encuentra a disposición del CLIENTE en las oficinas de PRESTTO, el Anexo que contiene  las disposiciones legales referidas expresamente en el presente Contrato, mismas que también podrán ser consultadas en la página web https://prestto.mx/<br></br>
                            Es su intención otorgar al CLIENTE el Crédito solicitado, conforme a lo estipulado en el presente Contrato. <br></br>
                            II. Declara el CLIENTE, que:<br></br>
                            a) Es una persona física, mayor de edad, con capacidad legal y facultades suficientes para celebrar el presente Contrato, así como para asumir y dar cumplimiento a las obligaciones que en el mismo se establecen. <br></br>
                            b) Que su Registro Federal de Contribuyentes (RFC) es: ______________________, y su Clave Única de Registro de Población es: _______________________.<br></br>
                            c) Señala como su domicilio, para los efectos relacionados con el Contrato, el indicado en la Solicitud, mencionada en el Antecedente Primero del presente instrumento.<br></br>
                            d) PRESTTO, con anterioridad a la fecha de celebración del Contrato, ha hecho de su conocimiento el contenido del presente contrato y de todas las características aplicables al Crédito.<br></br>
                            e) Reconoce que detrás de esta operación no existe un Propietario Real, conforme a lo que estable la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita, siendo el CLIENTE, el único y exclusivo beneficiario del crédito solicitado.<br></br>
                            f) Es su intención que PRESTTO le otorgue el Crédito, conforme a lo estipulado en el presente Contrato.<br></br>
                            g) Declara bajo protesta de decir verdad que toda la información y documentación que presentó y proporcionó a PRESTTO a la fecha de firma del presente contrato es actual, verdadera y carece de error, vicios del consentimiento o mala fe.<br></br>
                            h) Cuenta con los recursos económicos suficientes para dar cumplimiento a las obligaciones que, en términos del Contrato, contrae a su cargo, mismos que provienen y provendrán de fuentes lícitas. <br></br>
                            i) Que recibió a su entera satisfacción, comprendiendo el alcance de la misma, la siguiente información por parte de PRESTTO: I.-La cantidad total a pagar, así como la forma y condiciones para su liquidación; II.- Los intereses generados y demás cargas financieras; III.- Los montos accesorios; IV.- La descripción detallada del monto y cargos vinculados al crédito amparado por el presente contrato; V.- La cantidad total a pagar, su fecha exacta de vencimiento, el número y monto de pagos individuales, intereses, comisiones, penalidades convencionales y cargos respectivos, incluidos los fijados por pagos anticipados o cancelación; VI. El derecho y las condiciones para la liquidación prematura del crédito y sus accesorios; VII. Los intereses ordinarios causados, forma de calcularlos y el tipo de tasa aplicable; VIII. Los intereses moratorios en los que podría incurrir, la forma de calcularlos y el tipo de tasa aplicable.<br></br>
                            j) Que con anterioridad a la celebración del presente contrato, PRESTTO hizo de su conocimiento, a su entera comprensión, el contenido del presente instrumento y de los demás documentos a suscribir, así como también los cargos o gastos a generarse en relación con el mismo, incluyendo más no limitándose al (CAT) “Costo Anual Total de financiamiento expresado en términos porcentuales anuales que, para fines informativos y de comparación, incorpora la totalidad de los costos y gastos inherentes a los Créditos” (sin incluir el impuesto al valor agregado (IVA), correspondiente al presente crédito).<br></br>
                            k) Que no desempeña actualmente o ha desempeñado en los últimos dos años anteriores a la fecha de la firma del presente contrato, actividades que lo categoricen como persona políticamente expuesta, incluyendo más no limitándose a funciones públicas destacadas en un país extranjero o en territorio nacional, considerando entre otros, a los jefes de estado o de gobierno, líderes políticos, funcionarios gubernamentales, judiciales o militares de alta jerarquía, altos ejecutivos de empresas estatales o funcionarios o miembros importantes de partidos políticos. <br></br>
                            l) Que a su leal saber y entender ninguna de las personas con las cuales guarda parentesco por consanguineidad o afinidad hasta en segundo grado, su cónyuge, concubina, concubinario y/o persona moral alguna con la cual mantenga vínculos patrimoniales realizan o han realizado las actividades descritas en el inciso k bajo los mismos términos. <br></br>
                            Para efectos del Contrato, las PARTES asignan a los términos señalados a continuación, el significado que en cada caso se les atribuye, a menos que el contexto en que se utilicen, implique un concepto diferente y así se indique, independientemente de su utilización en singular o en plural. <br></br>
                            a) Carátula del Contrato de Crédito. Documento que forma parte integrante del presente Contrato, que suscribe el Cliente por cada operación, crédito o servicio que contrate, en el cual se establecen las características aplicables al crédito otorgado por PRESTTO.<br></br>
                            b) CAT: Costo Anual Total de Financiamiento expresado en términos anuales porcentuales que, para fines informativos y de comparación, incorpora la totalidad de los costos y gastos inherentes a los créditos, préstamos o financiamientos que otorgan las entidades financieras, de conformidad con las disposiciones que al efecto emita el Banco de México.<br></br>
                            c) Comisión por Extensión. Significa la comisión que el CLIENTE podrá pagar antes o hasta en la Fecha de Pago para obtener una prórroga para el pago total del crédito en ese momento vigente. Esta comisión podrá ser variable por cada préstamo efectuado al CLIENTE.<br></br>
                            d) Comisión por Gastos de Cobranza. Significa la comisión que el CLIENTE deberá pagar en caso de retrasarse en el pago de cualesquiera cantidades a su cargo bajo este Contrato conforme al importe indicado en la Carátula del Contrato de Crédito.<br></br>
                            e) Crédito. Es la operación financiera objeto del presente contrato, que consiste en el otorgamiento que hace PRESTTO al CLIENTE de una cantidad determinada de dinero, obligándose éste último a devolver la cantidad solicitada en los términos y condiciones estipulados en el Contrato.<br></br>
                                      
                            f) Día Hábil. Es cualquier día de la semana, excluyendo los días sábado y domingo, así como los días en que, conforme a las disposiciones aplicables, las instituciones de crédito deban cerrar sus puertas, suspender operaciones y la prestación de servicios al público.<br></br>
                            
                            g) Documentos de Identificación. Se refiere a los documentos de identificación que, conforme a la legislación vigente, se requieren para el otorgamiento de un crédito. Y son, comprobante de domicilio, y cualquier identificación oficial; que puede ser cualquiera de los siguientes documentos: Credencial para Votar (INE).<br></br>
                            i) Extensión. Significa el derecho que el CLIENTE adquiere mediante el pago de una Comisión por Extensión para diferir la Fecha Límite de Pago del Crédito entonces vigente, en los términos establecidos en este Contrato.<br></br>
                            h) Fecha de Disposición. Es el día en que PRESTTO acredita de manera efectiva el importe del Crédito al CLIENTE a través de cualquiera de los medios de disposición previstos en el presente Contrato.<br></br>
                            j) Fecha de Corte. Corresponde al día o los días en que el CLIENTE deberá pagar a PRESTTO el respectivo Pago Parcial o el Pago Total incluyendo las comisiones, intereses y demás accesorios aplicables (según sea el caso) y, el o los días en que PRESTTO marca como el fin de un periodo de registro de los pagos que realizó el CLIENTE.<br></br>
                            k) Fecha Límite de Pago. Es el día hábil en el que el CLIENTE deberá pagar a PRESTTO el respectivo Pago Total incluyendo las comisiones, intereses y demás accesorios aplicables (según sea el caso).<br></br>
                            l) Importe del Crédito. Es el monto del Crédito otorgado al CLIENTE por PRESTTO, el cual se indica inicialmente en la Carátula del Contrato de Crédito.
                            m) Medios Electrónicos: Significan cualesquiera medios electrónicos de comunicación actualmente conocidos o por inventarse, incluyendo sin limitar los siguientes: (i) vía telefónica en el servicio que PRESTTO opere para su operación comercial; y (ii) a través del Portal de Internet.<br></br>
                            El CLIENTE sabe, reconoce y acepta que el presente Contrato se celebra por medios electrónicos, dándole plena validez en términos de los artículos 1803 fracción I del Código Civil Federal, 80, 89 y 89 Bis Código de Comercio y la NOM-151-SCFI-2002, acordando ambas partes que para la comprobación fehaciente de este acto jurídico bastará un correo electrónico o la aceptación del deudor de las condiciones generales del instrumento a través del Portal de internet  https://prestto.mx/ de donde lo obtuvo. <br></br>
                            n) Monto Total del Crédito. Es el monto correspondiente al Importe del Crédito más los intereses ordinarios, comisiones, impuesto al valor agregado y demás conceptos expresamente señalados en este Contrato. <br></br>
                            o) Pago Adelantado. Es el monto que EL CLIENTE entrega a PRESTTO con anterioridad a que sea exigible un pago parcial o total del Crédito, para que sea aplicado a cubrir el o los pagos periódicos inmediatos posteriores. <br></br>
                            p) Pago Anticipado. Al pago parcial o total del Saldo Insoluto de un crédito, antes de la fecha en que sea exigible. 		 	 	 		<br></br>
                            q) Mi Cuental: Cuenta personal del CLIENTE en el Portal de Internet, disponible únicamente con el usuario y contraseña generados por el CLIENTE.				<br></br>	
                            r) Portal de Internet. Es la página de Internet de  PRESTTO disponible en https://prestto.mx/<br></br>
                            s) Solicitud. Es la petición que el CLIENTE realizó a  PRESTTO, a través del Portal de Internet de este último, a efecto de que le sea otorgado el crédito objeto del contrato<br></br>
                            En virtud de los ANTECEDENTES, DECLARACIONES y DEFINICIONES anteriores, las PARTES otorgan y se sujetan a las siguientes: <br></br>
                            <br></br><br></br>
                            Cláusulas <br></br>
                                          
                            PRIMERA. Objeto. En este acto PRESTTO, otorga un crédito simple en favor del CLIENTE, por la cantidad de __________ (cero MN 00/100) y el CLIENTE se obliga a restituir a PRESTTO el importe de crédito, más los intereses, impuestos, comisiones y gastos que se generen por esta operación y hasta la liquidación total del crédito, conforme a lo establecido en la Carátula del Contrato de Crédito.<br></br>
                            <br></br>   
                            1.2 El CLIENTE pagará a PRESTTO por el Crédito otorgado y a la o las fechas de vencimiento establecidas en el presente contrato, en una o varias exhibiciones, las cantidades estipuladas
                            en la siguiente tabla:
                            <br></br>     
                            TABLA
                            <br></br>   
                            Cuando la fecha límite de pago sea en un día inhábil debe aclararse que se recorrerá al siguiente día hábil, sin que proceda el cobro de Comisiones o intereses moratorios.
                            <br></br> 
                            SEGUNDA. Disposición del Crédito. El CLIENTE dispondrá del Crédito en una sola exhibición mediante transferencia electrónica de dinero a la Cuenta Clave Bancaria Estandarizada (CLABE) ________________ o mediante depósito al número de tarjeta _____________que el CLIENTE tiene abierta en la institución bancaria denominada _____________, disposición que quedará sujeta a que existan recursos disponibles que permitan a PRESTTO a hacer la entrega respectiva. 
                            <br></br>    
                            2.2 El crédito se entenderá dispuesto una vez que los recursos queden depositados en la cuenta señalada en la cláusula anterior y el comprobante de dicha operación hará las veces del recibo más amplio y suficiente que en derecho proceda. 
                            <br></br>
                            2.3. El CLIENTE podrá cancelar el presente Contrato sin responsabilidad alguna y sin cobro de comisiones en un periodo de cinco días hábiles posteriores a la firma del presente Contrato y siempre y cuando no haya dispuesto del Crédito. Para esto, el CLIENTE deberá presentar copia de los movimientos de su cuenta dentro del periodo que comprende la fecha del presente Contrato y cinco días hábiles posteriores, a efectos de comprobar que no han existido movimientos en la cuenta.
                            <br></br>
                            2.4. Transcurrido el término anterior y en caso de que el CLIENTE haya dispuesto del Crédito, deberá cumplir con todas y cada una de las obligaciones que se estipulan en este Contrato, incluyendo el pago íntegro del Crédito que se le otorga y los accesorios que se pudieran generar. 
                            <br></br>
                            TERCERA. Destino del Crédito. El CLIENTE se obliga a destinar la cantidad total del crédito recibido, tal y como lo manifestó en la solicitud de crédito, para uso exclusivamente personal y para fines exclusivamente lícitos bajo estricto apercibimiento de las sanciones contempladas en los artículos 139, 148 Bis o 400 Bis del Código Penal Federal, relativos a la prevención de lavado de dinero y el financiamiento al terrorismo.
                            <br></br>
                            CUARTA. Vigencia del Contrato. El presente contrato tendrá como plazo máximo 7 días,  contados a partir de la fecha en la cual el CLIENTE recibió en su cuenta la cantidad objeto del Crédito por parte de PRESTTO debiendo realizar el pago en la cuenta señalada en la cláusula 5 respecto del total del Crédito y sus accesorios o antes si incurren en las causales de vencimiento anticipado establecidas en la cláusula 17 del presente contrato.			
                            4.2. No obstante su terminación, este Contrato producirá todos sus efectos legales, hasta que el CLIENTE haya liquidado en su totalidad todas las cantidades adeudadas a su cargo.		
                            4.3. La terminación del Contrato se podrá dar de manera anticipada de conformidad con lo establecido en la cláusula 17 del presente contrato.					
                            4.4. El CLIENTE podrá conocer la fecha límite de pago del crédito contratado en todo momento, ingresando con su Usuario y Contraseña a su Perfil en el Portal de Internet de la siguiente dirección: 
                            https://prestto.mx/
                            <br></br>
                            4.5. El presente contrato NO es PRORROGABLE, salvo pacto en contrario con el consentimiento expreso del CLIENTE y mediante aprobación de la solicitud de Extensión del mismo. 
                            <br></br>       
                            4.6 Cuando la terminación del contrato sea por conducto de una ENTIDAD FINANCIERA esta liquidará el adeudo del CLIENTE de acuerdo a la información que proporcione PRESTTO y una vez cubiertos los adeudos PRESTTO renunciará a todos los derechos de cobro remanente que pudieran subsistir después del momento de la cancelación.
                            <br></br>
                            QUINTA. Lugar y Forma de Pago. El pago del Crédito que el CLIENTE deba hacer a favor de PRESTTO, derivado del presente contrato lo hará sin necesidad de gestión previa de cobros, recordatorio o notificación de algún previo cobro. 
                            <br></br>
                            EL CLIENTE a su elección, podrá realizar el pago correspondiente, a más tardar el día señalado como fecha de vencimiento en la cláusula 1, la cantidad indicada como gran total, mediante cualquiera de los siguientes métodos:
                            <br></br>
                            1.	Deposito Bancario Banorte y transferencia electrónica
                            <br></br>
                            a)	Depósito al número de cuenta 0300226122 a nombre AREZ FINANCIERA SA DE CV SOFOM ENR,  con número de referencia 0000000  asignado al CLIENTE.
                            <br></br>
                            b)	Transferencia electrónica a la Cuenta Clabe: 072180003002261226, a nombre AREZ FINANCIERA SA DE CV SOFOM ENR,  con número de referencia 0000000 asignado al CLIENTE.
                            <br></br>
                            2.	Pago en  Efectivo
                            <br></br>
                            El pago se podrá realizar en cualquiera de los siguientes establecimientos: Walmart, Bodega Aurrera, Bodega, Aurrera Express, Mi Bodega Aurrera, Sam´s Club, Superama, Medimart Farmacia, Calimax, Tiendas Extra y Círculo K y cobrarán una comisión de $ 8.00 MXN por concepto de pago. Tiendas 7 Eleven cobrarán una comisión de $10.00 MXN por concepto de pago. Tiendas siguientes: Telecomm, Soriana y Comercial Mexicana no cobrarán ninguna comisión por concepto de pago. Durante los horarios de los mismos, utilizando el código de barras proporcionado por PRESTTO a través del Portal de Internet. 
                            <br></br>
                            3.	Pagos con tarjeta a través del portal de Internet. 
                            <br></br>
                            PRESTTO, se reserva el derecho de incorporar medios alternativos de pago, mismos que incluyen, más no se limitan a: depósitos o transferencias en cuentas bancarias alternas y pago directo en otras tiendas de conveniencia. PRESTTO publicará y pondrá a disposición del CLIENTE un listado de dichas opciones alternas de pago en su Portal de Internet.
                            <br></br>
                            El CLIENTE deberá incluir el número de referencia, contrato o crédito correspondiente como concepto de transferencia en cualquiera de los pagos realizados a favor de PRESTTO.
                            <br></br>
                            Cuando la fecha límite de pago sea en un día inhábil esta se recorrerá al siguiente día hábil, sin que proceda el cobro de Comisiones o intereses moratorios.
                            <br></br>
                            En caso de que el CLIENTE realice un pago parcial en exceso, autoriza que los recursos que se entregan en exceso a sus obligaciones exigibles se apliquen por concepto de pagos anticipados del principal, en caso que el excedente sea realizado en el pago total, acepta que el mismo le sea devuelto mediante depósito a la cuenta o tarjeta que se indica en la cláusula 2 del presente contrato, previa solicitud que dirija a la Unidad Especializada de PRESTTO y se encuentre disponible al CLIENTE hasta en tanto no se solicite la devolución correspondiente. 				
                            <br></br>
                            5.2. PRESTTO se reserva el derecho de utilizar la “Autorización de Cargo a Cuenta Bancaria” del CLIENTE, para el pago del crédito otorgado al amparo del presente Contrato. Dicha domiciliación podrá hacerse con cargo a una cuenta a la vista que el CLIENTE tenga abierta en alguna Institución, misma que ha sido ingresada por el CLIENTE en el Portal de Internet y se señala en la cláusula 2 del presente Contrato y para lo cual el CLIENTE deberá autorizar por escrito a dicha Institución mediante la firma de una “Carta Autorización de Domiciliación” misma que forma parte integral de este Contrato, con el visto bueno de PRESTTO, en donde se establezca la cuenta de la Institución en donde se cargarán los pagos, por la domiciliación. El pago por domiciliación se acreditará en la(s) fecha(s) que PRESTTO acuerde con el CLIENTE, o en la fecha límite del pago del crédito.
                            <br></br>
                            EL CLIENTE no podrá designar otra cuenta bancaria distinta a la señalada en la cláusula 2. 
                            <br></br>
                            EL CLIENTE podrá solicitar en cualquier momento, por cualquiera de los medios de contacto puestos a su disposición, la cancelación del servicio de domiciliación del pago de las cantidades adeudadas con cargo a su cuenta, sin responsabilidad alguna para PRESTTO, siendo que dicha solicitud surtirá efectos a más tardar a los 10 (diez) días hábiles siguientes posteriores a su recepción. El servicio de Domiciliación será cancelado automáticamente una vez que el CLIENTE haya liquidado la totalidad de los saldos adeudados a favor de PRESTTO.
                            <br></br>
                            5.3. En caso de que EL CLIENTE se atrase en sus pagos, PRESTTO podrá extender el plazo para el pago del capital del Crédito a su sola discreción, sin que se considere reestructura, descuento o quita, para lo cual EL CLIENTE deberá pagar los intereses ordinarios y moratorios generados a la fecha de la extensión, y cubrir dentro del nuevo periodo de pago establecido.
                            <br></br>
                            SEXTA. Costo Anual Total. El costo anual total de financiamiento expresado en términos porcentuales anuales que, para fines informativos y de comparación, incorpora la totalidad de los costos y gastos inherentes al Crédito (en adelante, el “CAT”), asciende al porcentaje indicado en la Carátula del Contrato de Crédito inicial. El CLIENTE reconoce que PRESTTO, previo a la celebración del Contrato, hizo de su conocimiento el CAT.
                            <br></br>
                            SÉPTIMA. Prelación de Pago. PRESTTO aplicará las cantidades que reciba en pago, conforme al siguiente orden: i. Impuestos, ii. Comisiones iii. Intereses moratorios, iv. Intereses ordinarios y iv. Capital. En caso de que PRESTTO hubiera tenido que demandar al CLIENTE por incumplimiento, los pagos que realice se aplicarán en primer lugar a los gastos y costas del juicio determinados por una autoridad judicial y después se seguirá el orden estipulado en la presente cláusula. 
                            <br></br>
                            7.2 PRESTTO acreditará el pago el mismo día en que el CLIENTE lo realice, siempre y cuando se efectúe en un Día Hábil. En caso de que el pago se realice en un día inhábil, el pago se acreditará al Día Hábil siguiente, sin que proceda el cobro de comisiones o intereses moratorios.
                            <br></br>
                            OCTAVA. Intereses Ordinarios. El CLIENTE se obliga a pagar a PRESTTO, por el otorgamiento del presente Crédito y sin necesidad de previo requerimiento o cobro, por concepto de intereses ordinarios, sobre saldo insoluto, a razón de una tasa de interés gradiente. Los intereses ordinarios se generarán desde la fecha de depósito de la cantidad señalada en la cláusula número 1 y hasta el último día del plazo para el pago y serán exigidos únicamente por periodos vencidos. 
                            <br></br>
                            8.2. El cálculo de los intereses ordinarios dentro de los primeros 3 días naturales se efectuará de la siguiente forma: tasa promedio diaria multiplicada por 1 (uno) más 0.3688 dando como resultado la “Primer Tasa”, posteriormente el resto del periodo se calculará de acuerdo a lo siguiente: tasa promedio diaria multiplicada por el plazo del crédito otorgado menos el resultado de la “Primer Tasa” multiplicado por el periodo de la duración de la primer tasa dividido entre el periodo de la duración de la segunda tasa. Donde la “duración de la primer tasa” se calculará de la siguiente manera: plazo del crédito otorgado menos 1 (uno) menos el plazo del crédito otorgado dividido entre 2 (dos) en el caso en que la duración de la primer tasa no sea un número entero se deberá redondear al número entero próximo; y la “duración de la segunda tasa” se calculará de la siguiente manera: plazo del crédito otorgado menos la duración de la primer tasa. 
                            <br></br>
                            Fórmula:
                            <br></br>
                            Primer Tasa = Tasa_promedio_diaria * (1 + 0.3688)
                            <br></br>
                            Segunda Tasa = (Tasa_promedio_diaria * plazo del crédito otorgado – Primer Tasa * duración de la primer tasa) / duración de la segunda tasa
                            Duración Primer Tasa = plazo del crédito otorgado – 1 – (plazo del crédito otorgado / 2)
                            ***En caso de que la duración de la primer tasa no sea un número entero se redondeará al número entero próximo.
                            Duración Segunda Tasa = plazo del crédito otorgado – duración de la primer tasa. 
                            NOVENA. Intereses Moratorios. En caso de que el CLIENTE no cubra íntegramente el Monto Total del Crédito (en el caso de pago en una sola exhibición) o cualquier Pago Parcial, deberá pagar a PRESTTO intereses moratorios que se devengarán en forma diaria a partir del día siguiente a la fecha de vencimiento del plazo para el pago y hasta la de su total liquidación y se calcularán multiplicando la tasa de interés moratorio señalada en la Carátula del Contrato de Crédito por el saldo vencido y no pagado, hasta que el Monto Total del Crédito o el Pago Parcial de que se trate, haya sido pagado completamente. 
                            9.2. El cálculo de los intereses moratorios se efectuará de la siguiente forma: Se multiplicará el saldo vencido por la tasa de interés moratoria anual. Posteriormente se dividirá entre 360 (trescientos sesenta) para obtener el monto de interés moratorio diario. Este monto se multiplicará por el número de días en que el crédito haya permanecido en mora. 				
                            Fórmula:
                            Saldo vencido x tasa de interés moratoria anual / 360 = Monto de interés moratorio diario 
                            Monto de interés moratorio diario x días en mora = Monto de interés moratorio total
                            
                            9.3 En caso de que el CLIENTE omita realizar el pago en la fecha pactada, se considerará en mora o cartera vencida al haber transcurrido el primer día contado a partir de la fecha límite de pago establecida en el presente contrato, según aplicable.
                            No obstante lo anterior mencionado en la presente clausula, las partes acuerdan que PRESTTO suspenderá el cobro de los intereses correspondientes al préstamo objeto del presente contrato después del periodo contemplado en el artículo 18 fracción IX de la ley de Impuesto Sobre la renta vigente a la fecha de firma del presente, de igual forma las Partes acuerdan que PRESTTO podrá otorgar quitas y/o descuentos totales o parciales respecto de los intereses derivados del presente Contrato (ordinarios y/o moratorios), sin que para ello exista la necesidad de notificación alguna a 
                            EL CLIENTE por parte de PRESTTO, ya que se trata de un beneficio a EL CLIENTE y no una obligación por parte del mismo. 			
                            DÉCIMA. Comisiones. El CLIENTE se obliga a pagar a PRESTTO, los siguientes montos por concepto de Comisiones:
                            a. Comisión por Extensión: Las PARTES acuerdan que el presente Contrato no cuenta con cláusula de extensión automática, sin embargo, el CLIENTE, previo aviso o solicitud por cualquiera de los medios permitidos por el presente Contrato a PRESTTO dentro de las 24 (veinticuatro) horas mínimas previas al vencimiento del crédito otorgado, tendrá el derecho de prolongar o extender el pago del mismo, hasta por un plazo igual al originalmente pactado, exclusivamente en su principal sin incurrir en intereses moratorios y hasta por un máximo de 05 extensiones por el mismo crédito, PRESTTO se reserva el derecho de aprobar o declinar la solicitud de extensión en cualquier momento. 
                            La comisión por extensión será calculada de la siguiente manera:
                            Comisión por Extensión x Días a extender = Monto por los días de extensión
                            Monto por los días de extensión x Saldo a extender / 1000 = Monto de Comisión por Extensión
                                      
                            El pago de la comisión por extensión aplicable por parte del CLIENTE constituye su aceptación expresa para la formalización de la prolongación de la vigencia del presente contrato.
                            <br></br>        
                            a. Comisión por Cobranza: Las PARTES acuerdan que por cualquier incumplimiento de las obligaciones de pago del CLIENTE en los términos pactados en el presente Contrato, se establece el cobro de una Comisión variable de Cobranza de $ 600.00 (Seiscientos pesos MN 00/100) más IVA, misma que se deberá cubrir en el siguiente pago. 
                            <br></br>       
                            En el evento de requisición judicial de las cantidades adeudadas, en relación con el incumplimiento del presente contrato, el CLIENTE se obliga a pagar de manera unilateral adicional a la Comisión por Cobranza los gastos y costas judiciales relacionadas, así como también los honorarios de abogados. EL CLIENTE cubrirá por su cuenta todo tipo de gastos extrajudiciales y de cobranza que tuviera que erogar PRESTTO debido al incumplimiento de cualquier obligación estipulada en el presente Contrato.
                            <br></br>        
                            DÉCIMA PRIMERA. Comprobantes y Estados de Cuenta: El CLIENTE acepta consultar su estado de cuenta en el Portal de Internet, lo que podrá hacer en forma diaria y sin costo alguno. 
                            <br></br>
                            El CLIENTE contará con un período de 60 (sesenta) días naturales, contados a partir de la fecha en que el respectivo estado de cuenta se puso a su disposición, para formular, por escrito firmado, cualquier solicitud de aclaración de la información contenida en el mismo, ante PRESTTO, enviada al correo electrónico clientes@prestto.mx, o a través del domicilio establecido para tal efecto en la Declaración I- c) del presente Contrato; en caso contrario, se entenderá que dicha información es aceptada en los términos en los que se publica en el estado de cuenta.
                            Una vez que PRESTTO reciba cualquier aclaración que sea formulada por el CLIENTE conforme a lo establecido en los párrafos anteriores de la presente Cláusula, tendrá un plazo de hasta 45 (cuarenta y cinco) días naturales para entregarle al CLIENTE el dictamen correspondiente, junto con la información y/o documentación considerada para su emisión, así como un informe detallado en el que se respondan los hechos contenidos en la solicitud de aclaración. En caso de que conforme a dicho dictamen resulte procedente el cobro del monto de que se trate, el CLIENTE deberá hacer el pago de la cantidad a su cargo, incluyendo los intereses ordinarios. Dentro del plazo de 45 (cuarenta y cinco) días naturales contado a partir de la entrega del dictamen de referencia, PRESTTO pondrá a su disposición, a través de su Unidad Especializada, el expediente generado por la solicitud, con la integración de la información y documentación que deba obrar en su poder y que se relacione directamente con la solicitud. Hasta en tanto la solicitud de aclaración no sea resuelta, PRESTTO no podrá reportar como vencidas las cantidades sujetas a dicha aclaración a las sociedades de información crediticia. 
                            Asimismo, el CLIENTE podrá consultar el saldo insoluto del Crédito, Pagos Parciales realizados y los Pagos Parciales pendientes de pago y sus próximas Fechas de Pago en el Portal de Internet, utilizando la clave o contraseña que el CLIENTE creó para acceder a su Perfil en el Portal de Internet. 
                            DÉCIMA SEGUNDA. Origen de los Recursos. PRESTTO financiará el crédito concedido al CLIENTE con recursos provenientes de su capital. Asimismo, podrá otorgarle el crédito total o parcialmente con recursos provenientes de financiamiento privado o de los programas de promoción que ofrece la banca de desarrollo mexicana. 
                            12.2. El CLIENTE declara que los recursos con los cuales pagará el crédito han sido obtenidos o generados a través de una fuente de origen permitido por la ley y con recursos propios. El destino de los servicios o productos adquiridos será dedicado tan solo a fines permitidos por la ley y que no se encuentran dentro de los supuestos establecidos por los artículos 139 Quáter y 400 Bis del Código Penal Federal (estos artículos prohíben el lavado de dinero y el financiamiento al terrorismo.
                            DÉCIMA TERCERA. Pago Anticipado. PRESTTO está obligada a aceptar pagos anticipados de los créditos menores al equivalente a 900,000 UDIS, siempre que: i) EL CLIENTE lo solicite, ii) se encuentre al corriente en los pagos exigibles de conformidad con el presente Contrato y, iii) que el importe del pago anticipado sea por una cantidad igual o mayor a la correspondiente al pago parcial.				
                            13.2 PRESTTO se compromete a informar el saldo adeudado al CLIENTE a los 3 tres días hábiles siguientes al pago realizado de forma anticipada, enviando la NUEVA TABLA DE AMORTIZACIÓN vía correo electrónico.					
                            No habrá penalización monetaria de ningún tipo por realizar pagos anticipadamente o adelantados.
                            Las cantidades pagadas anticipadamente se aplicarán en función de lo previsto en la cláusula 7 anterior. 				
                            DÉCIMA CUARTA. Obligaciones de Hacer. En adición a cualquier otra obligación a su cargo derivada de este instrumento, el CLIENTE se obliga a cumplir con las siguientes obligaciones:	
                            i) Cumplir con todas las cantidades que deban ser pagadas y con cada una de las obligaciones a su cargo, derivadas de este contrato y hasta que el Crédito y sus accesorios sean totalmente pagados.
                            ii) Notificar a PRESTTO cualquier cambio de domicilio o números telefónicos, dentro de los 3 (tres) días hábiles siguientes a la fecha que se realice dicho cambio.					
                            iii) Notificar a PRESTTO, dentro de los 3 (tres) días hábiles siguientes a la fecha que se realice cualquier variación en el monto de sus ingresos o cualquier hecho y/o acto que pudiere traer como consecuencia el incumplimiento de las obligaciones de pago a cargo del CLIENTE derivadas de este instrumento. 				
                            DÉCIMA QUINTA. Obligaciones de No Hacer. El CLIENTE no podrá sin previa autorización por escrito de PRESTTO: Ceder de forma alguna, parcial o totalmente, los derechos y/o las obligaciones a su cargo derivadas del presente contrato.
                            DÉCIMA SEXTA.- Limitaciones Legales. EL CLIENTE se obliga  por medio del presente Contrato, a no celebrar con cualquier entidad financiera, u dependencias similares, así como con cualquier persona física o moral, ningún contrato o convenio, o realizar alguna transacción comercial en la que se disponga de más del TREINTA (30%) por ciento del total de sus ingresos, durante la vigencia del crédito otorgado.				
                            El incumplimiento de esta disposición será causal de rescisión del presente Contrato.
                            DÉCIMA SÉPTIMA. Terminación Anticipada. EL CLIENTE podrá solicitar a PRESTTO, en cualquier tiempo, la terminación anticipada del Contrato, para tal efecto, EL CLIENTE deberá pagar a PRESTTO, en los términos establecidos en el Contrato: a) el saldo insoluto principal, así como el impuesto al valor agregado, los intereses ordinarios, los intereses moratorios, en su caso, comisiones del Crédito que se hayan causado hasta ese momento, así como aquellos que se hubieren causado de no haber terminación anticipada; y b) cualquier otro importe que EL CLIENTE adeude a PRESTTO conforme al Contrato. Dicha solicitud deberá ser notificada por el CLIENTE a PRESTTO, mediante escrito firmado, al correo electrónico clientes@PRESTTO.mx, o a través del domicilio establecido para tal efecto en la Declaración I- c) del presente Contrato.
                            PRESTTO dará por terminado el presente Contrato, el día hábil siguiente al de la recepción de la solicitud de terminación siempre y cuando no existieren adeudos en favor de PRESTTO. 
                            <br></br>
                            En caso contrario, y una vez presentada la solicitud de terminación: (i) Al día hábil siguiente contado desde la recepción de la solicitud de terminación, PRESTTO notificará al CLIENTE, mediante correo electrónico a la dirección que EL CLIENTE indicó en la Solicitud, el saldo insoluto a liquidar; (ii) Asimismo, dentro de los 5 (cinco) días hábiles siguientes al de la recepción de la solicitud pondrá a disposición del Cliente el importe de los adeudos a la fecha, y (iii) una vez que EL CLIENTE tenga conocimiento del saldo, deberá realizar el pago total del mismo, dentro de los 5 (cinco) Días Hábiles siguientes; si dentro del plazo establecido EL CLIENTE no realiza el pago, el Contrato continuará vigente en sus términos.
                            <br></br>
                            De los 10 (diez) Días Hábiles siguientes a la fecha en que EL CLIENTE haya realizado el pago total de la totalidad del crédito otorgado, así como de los accesorios generados, podrá solicitar a PRESTTO una constancia o carta finiquito para hacer constar la terminación del Crédito, la inexistencia de adeudos, o la existencia de saldo a favor en caso de haberlo; mismo que estará a disposición del CLIENTE a partir de la fecha de terminación; debiendo apegarse a lo establecido en el presente Contrato para su devolución.
                            <br></br>
                            Al dar por terminada la relación contractual en caso de que exista saldo a favor, PRESTTO debe entregarlo al CLIENTE en la fecha en que se dé por terminada la operación y en caso de que 
                            <br></br>
                            EL CLIENTE no acuda a las oficinas de PRESTTO, se le informará que se encuentra a su disposición. EL CLIENTE acepta que el mismo le sea devuelto mediante depósito a la cuenta o tarjeta que se indica en la cláusula 2 del presente contrato, previa solicitud que dirija a la Unidad Especializada de PRESTTO. 
                            <br></br>
                            Una vez concluida la relación contractual PRESTTO cancelará las autorizaciones de cargo a cuenta bancaria o domiciliación suscritas por EL CLIENTE.					
                            <br></br>
                            Las partes acuerdan que EL CLIENTE, no podrá aumentar su línea de crédito con PRESTTO si líquida antes de que haya transcurrido al menos el 75% del plazo definido en este contrato. 
                            <br></br>
                            DÉCIMA OCTAVA. Causas de Rescisión del Contrato.- Las partes convienen expresamente que, para el caso de que el CLIENTE dejara de cumplir con cualquiera de las obligaciones a su cargo derivadas de este contrato, y sin necesidad de declaración judicial previa, PRESTTO podrá dar por vencido anticipadamente el plazo para el pago del crédito. En tal caso, será exigible el pago anticipado del total de adeudo que se encuentre pendiente de vencimiento, el cual procederá en los términos señalados en la cláusula 13 de este contrato.
                            Específicamente, serán causas de rescisión de este contrato, los siguientes motivos:
                            a) En caso de que cualquiera de las declaraciones del CLIENTE contenidas en este instrumento y la solicitud de crédito sea o resulte ser falsa o incorrecta.
                            b) En caso de que cualquier dato o información del CLIENTE que sea entregada o hecha del conocimiento de PRESTTO de forma dolosa sea o resulte ser falsa o incorrecta.		
                            c) El incumplimiento del CLIENTE a cualquiera de las obligaciones de hacer o de no hacer consignadas a su cargo en este contrato. 				
                            d) Si el Crédito otorgado fuera destinado a la consecución de cualquier acto ilícito.
                            e) Por considerar PRESTTO, que EL CLIENTE no podrá hacer cumplir las obligaciones impuestas por el presente contrato de manera TOTAL Y/O PUNTUAL como consecuencia, más no limitado a: cualquier modificación salarial que resulte en un detrimento económico, respecto al salario por él reportado en la solicitud crediticia; su participación en un proceso judicial; cese temporal o definitivo de su fuente de trabajo; cualquier situación que resulte en un detrimento de su patrimonio. 
                            18.2. Ante la actualización de cualquiera de las causas de incumplimiento antes señalada, el CLIENTE estará obligado a pagar a PRESTTO de manera inmediata el importe total del saldo insoluto del Crédito, que incluye los Intereses Ordinarios vencidos, Intereses Moratorios, así como los gastos y cualquier otro concepto devengado contractual o legalmente, pago que deberá verificarse sin necesidad de presentación, requerimiento, protesto u otra notificación de cualquier clase al CLIENTE, a todas las cuales renuncia expresamente por el presente instrumento. Sin perjuicio de lo anterior, PRESTTO podrá también por la vía que estime conveniente, ejercitar aquellas acciones que conforme a la ley sean aplicables en contra del CLIENTE. 
                            DÉCIMA NOVENA. Comunicaciones. El CLIENTE autoriza a PRESTTO para poder contactarlo mediante los medios conocidos en la Internet y telecomunicaciones. El usuario acepta recibir a su email ________________, correos procedentes de PRESTTO de publicidad, información sobre su crédito o información que PRESTTO considere importante para EL CLIENTE.				
                            EL CLIENTE entiende que el principal medio de comunicación es vía Internet y que los mensajes a través de plataformas como Facebook, Instagram, y WhatsApp tendrán validez en los acuerdos que EL CLIENTE y PRESTTO puedan llegar.				
                            EL CLIENTE podrá contactar a PRESTTO en los siguientes medios:			
                            E-mail: clientes@prestto.mx Teléfono: +52 1 55 8038 7757	 				
                            Facebook: https://fb.me/PresttoMexico	
                            Instagram: www.prestto_mexico	
                            <br></br>
                            VIGÉSIMA. Avisos y Autorizaciones Generales. EL CLIENTE otorga expresa autorización a PRESTTO para:
                            <br></br>
                            I. Recabar toda información relacionada con su comportamiento crediticio en las operaciones financieras amparadas en el presente Contrato, así como para facilitar la misma a las sociedades de información crediticia.				
                            <br></br>
                            II. Consultar su información en las Sociedades de Información Crediticia en forma previa al otorgamiento del presente crédito mediante la autorización que se realizó a través de medios electrónicos.				
                            <br></br>
                            III. Establecer contacto con EL CLIENTE mediante mensajes SMS, llamadas o comunicaciones análogas a los teléfonos o direcciones por él proporcionados para efectos de retroalimentación, ofertas de productos y/o servicios de naturaleza análoga, así como cobranza directa o mediante terceros.				
                            <br></br>
                            IV. Avisar a las autoridades correspondientes respecto a lo dispuesto en el párrafo segundo del artículo 17 de la Ley Federal para la Prevención e Identificación de Recursos de Procedencia Ilícita, así como lo dispuesto en el artículo 19 de sus reglas. 
                            En el evento de que EL CLIENTE no desee que su información sea utilizada con fines de retroalimentación, mercadotécnicos o publicitarios, deberán notificarlo por escrito a PRESTTO, en cuyo caso, el presente Contrato continuará surtiendo sus efectos de manera íntegra y sin modificación alguna. 
                            VIGÉSIMA PRIMERA. Autorización de Consulta Crediticia. Declara el CLIENTE bajo protesta de decir verdad que la información proporcionada a PRESTTO en la presente solicitud es verdadera, libre de vicios, errores o mala fe, responsabilizándose en caso contrario, por la declinación de la solicitud, deslindando de responsabilidad a PRESTTO por cualquier controversia relacionada. De igual manera expresa EL CLIENTE:
                            <br></br>
                            I. Por este conducto yo el CLIENTE autorizo expresamente a PRESTTO, para que por conducto de sus funcionarios facultados lleve a cabo Investigaciones, sobre mi comportamiento crediticio o el de la Empresa que represento en, Círculo de Crédito, S.A. de C.V., S.I.C. Asimismo, declaro que conozco la naturaleza y alcance de las sociedades de información crediticia y de la información contenida en los reportes de crédito y reporte de crédito especial, declaro que conozco la naturaleza y alcance de la información que se solicitará, del uso que PRESTTO., hará de tal información y de que esta podrá realizar consultas periódicas sobre mi historial o el de la empresa que represento, consintiendo que esta autorización se encuentre vigente por un período de tres años contados a partir de su expedición y en todo caso durante el tiempo que se mantenga la relación jurídica.
                            <br></br>
                            II. Estoy consciente y acepto que este documento quede bajo custodia de PRESTTO y/o Sociedad de Información Crediticia consultada para efectos de control y cumplimiento del artículo 28 de la Ley para Regular las Sociedades de Información Crediticia. 
                            VIGÉSIMA SEGUNDA. Modificación al Contrato. Cualquier modificación que PRESTTO pretenda realizar al presente Contrato, deberá ser notificada al CLIENTE con una anticipación de 30 (treinta) días naturales a su entrada en vigor. Si el CLIENTE no está de acuerdo con las modificaciones propuestas, podrá solicitar la terminación del Contrato hasta 30 (treinta) días naturales después de la entrada en vigor de dichas modificaciones, sin responsabilidad ni comisión alguna a su cargo, teniendo la obligación de cubrir, en su caso, los adeudos que ya se hubieren generado a la fecha en que solicite dar por terminado el Contrato. 				
                            Una vez transcurrido el plazo señalado, sin que PRESTTO haya recibido comunicación alguna por parte del CLIENTE, se tendrán por aceptadas las modificaciones al Contrato.
                            VIGÉSIMA TERCERA. Cesión de Derechos al Cobro. EL CLIENTE da expresa autorización a PRESTTO para transferir, ceder, negociar en cualquier forma la propiedad y/o derechos de cobro de las cantidades principales y/o secundarias amparadas bajo el presente Contrato y/o el Pagaré suscrito por EL CLIENTE, tanto anterior como posteriormente a su vencimiento. 
                            De manera irrevocable, el CLIENTE faculta a PRESTTO para que transmita toda la información que el mismo proporcionó, con motivo del crédito amparado por el presente Contrato, al nuevo acreedor o cesionario aún antes de que se lleve a cabo la transmisión de derechos. En caso de transmisión de derechos por parte de PRESTTO, EL CLIENTE renuncia expresamente a que le sean abonados los intereses mencionados por el párrafo segundo del artículo 299 de la Ley General de Títulos y Operaciones de Crédito.				
                            VIGÉSIMA CUARTA. Domicilios. Las PARTES acuerdan que todas las notificaciones, avisos y en general cualquier comunicación que las partes deban hacerse con motivo del presente contrato, sean estos de carácter judicial o extrajudicial, surtirán sus efectos legales en los siguientes domicilios: 
                            “PRESTTO” Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Ciudad de México
                            “EL CLIENTE”  (Domicilio personalizado)
                            <br></br>
                            24.2. Asimismo, las partes convienen en que cualquier cambio de sus domicilios, deberán notificarlo a la otra parte dentro de los 3 (tres) días naturales siguientes a la fecha en que ello ocurra, en el entendido de que, de no ser así, se considerarán válidas cualquier clase de notificaciones, judiciales o extrajudiciales, realizadas en los domicilios mencionados.
                            VIGÉSIMA QUINTA. Aclaraciones. En el supuesto que EL CLIENTE desee realizar consultas, aclaraciones, quejas o reclamaciones vinculadas con el servicio o producto que por medio del presente contrato le brinde PRESTTO, podrá hacerlo a través de: 				
                            <br></br>
                            I. Unidad Especializada de Atención a Usuarios PRESTTO, a través de la cual PRESTTO atenderá las consultas, aclaraciones, quejas o reclamaciones. Para tales efectos, EL CLIENTE deberá formular un escrito libre narrando el motivo de su consulta así como los hechos que le dieron lugar. EL CLIENTE deberá incluir la fecha, su domicilio para oír y recibir notificaciones, su teléfono, datos de su cuenta bancaria, así como su nombre y firma.					
                            <br></br>
                            II. PRESTTO responderá toda consulta en un plazo máximo de 30 (treinta) días naturales posteriores a la fecha de recepción de la misma, mediante asesoría telefónica, por medios electrónicos o, en caso de gravedad, requiriendo su presencia en su Unidad Especializada de Atención a Usuarios. Tratándose de cantidades a cargo del CLIENTE, este tendrá el derecho de no realizar el pago sobre el cual solicita su aclaración, así como el de cualquier otra cantidad relacionada con dicho pago, hasta en tanto se resuelva la aclaración.
                            <br></br>
                            III. EL CLIENTE podrá contactar a la Unidad Especializada de Atención a Usuarios puesta a disposición por PRESTTO, con domicilio en Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Ciudad de México. Alternativamente, su sitio de internet https://prestto.mx/, así como también a través del correo electrónico clientes@prestto.mx o al teléfono +52 1 55 8038 7757
                            <br></br>
                            VIGÉSIMA SEXTA. Confidencialidad. Toda la información y documentación relativa a las operaciones y servicios que realice PRESTTO serán consideradas como confidenciales para la protección del derecho de privacidad de sus clientes, la cual solo podrá ser otorgada a EL CLIENTE.
                            <br></br>
                            VIGÉSIMA SÉPTIMA. Leyes Aplicables y Jurisdicción. Para todo lo relacionado con la interpretación y cumplimiento del presente contrato, las partes se someten a la jurisdicción y competencia de los Tribunales de la Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiere corresponderles en virtud de sus domicilios presentes o futuros o por cualquier otra causa les pudiera corresponder.
                            <br></br>
                            Las disposiciones legales que se mencionan en el presente contrato pueden ser consultadas en el Anexo A “Disposiciones Legales”, y se encuentran a su disposición en las oficinas de PRESTTO. 
                            VIGÉSIMA OCTAVA. Integridad del Contrato. El presente Contrato incluyendo los Anexos que se mencionan en el mismo, conjuntamente con la carátula y el Aviso de Privacidad vigente (https://www.PRESTTO.mx/aviso-de-privacidad) constituyen el acuerdo total entre las partes en relación con el otorgamiento del crédito, por lo que prevalece sobre y reemplaza cualquier entendimiento, contrato, convenio o acuerdo de voluntades previo, ya sea oral o escrito, de cualquier naturaleza con relación a lo aquí establecido.
                            <br></br>
                            En virtud de la presente Cláusula las partes acuerdan que el presente Contrato constituye el acuerdo final de las partes, y acuerdan dar por terminado para todos los efectos a que haya lugar, todo tipo de acuerdos orales o escritos de las partes relacionadas con el presente Contrato. 		
                            VIGÉSIMA NOVENA. Títulos de las Cláusulas. Las partes convienen en que los Títulos de las cláusulas que aparecen en el presente contrato, se han puesto con el exclusivo propósito de facilitar su lectura, y por tanto no definen ni limitan el contenido de las mismas. Para efectos de interpretación del presente contrato deberá atenderse exclusivamente al contenido de sus declaraciones y cláusulas y de ninguna manera a los títulos de estas últimas. 
                            Enterados del contenido y alcance jurídico de las obligaciones y derechos que contraen las partes contratantes con la celebración de este contrato de adhesión, EL CLIENTE lo suscribe, manifestando que tiene conocimiento y comprende plenamente la obligación que adquiere, aceptando el monto del crédito que se le otorga, así como los cargos y gastos que se generen, o en su caso, se llegaran a generar por motivo de su suscripción, entendiendo también que no se efectuarán cargos o gastos distintos a los especificados, por lo que lo firman de conformidad en la Ciudad de México, ----

                            <br></br><br></br>
                            Al momento de la celebración del presente contrato se entrega vía correo electrónico copia fiel del mismo con todos sus anexos, incluida la Carátula del Contrato de Crédito, el Pagaré y la Carta Autorización de cargo a cuenta bancaria que forman parte integrante del mismo. 
                            Las PARTES de común acuerdo manifiestan su consentimiento a efectos de celebrar el presente contrato de acuerdo a las Disposiciones del Código de Comercio y el artículo 89 Bis respecto de las operaciones relativas al otorgamiento de créditos de manera remota en cuanto a la declaración de su voluntad.
                            <br></br><br></br>       
                            “PRESTTO”                        “EL CLIENTE”
                            <br></br><br></br>    
                            AUTORIZO MEDIANTE MEDIOS ELECTRÓNICOS EN TÉRMINOS DEL ARTÍCULO 80 DEL CÓDIGO DE COMERCIO VIGENTE.
                                    
                            <br></br><br></br>
                            Autorización de cargo a cuenta bancaria
                            <br></br>
                            Por medio de la presente, el suscrito autoriza a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R. “PRESTTO”) para que domicilie los pagos del crédito simple que tengo contratado con dicha empresa a través de la cuenta a nombre de “BANCO “” Cuenta “”, con base en la información que a continuación se indica:				
                            <br></br>
                            1.- Número de Cliente:
                            <br></br>
                            2.- Número de Crédito: 
                            <br></br>
                            3.- Plazo del Préstamo: 0 (días)
                            <br></br>
                            4.- Nombre del banco que me lleva la Cuenta: 
                            <br></br>
                            5.- Datos de Identificación de la Cuenta
                            <br></br>
                            Número de tarjeta de débito (16 dígitos): 
                            <br></br>
                            Clave Bancaria Estandarizada (“CLABE”) de la Cuenta (18 dígitos): 
                            <br></br><br></br>
                            6.- Monto máximo de cada cargo autorizado: (monto total de  préstamo+ intereses+iva)
                            <br></br><br></br>
                            En caso de que la Cuenta objeto de la presente autorización no cuente con fondos suficientes para cubrir la parcialidad más los intereses ordinarios, el suscrito autoriza a PRESTTO para que en cualquier momento, realice los intentos de cargo que estime necesarios para cubrir el adeudo, incluyendo capital, intereses ordinarios, intereses moratorios y comisiones, según sea el caso.
                            <br></br>
                            Esta autorización estará vigente por todo el plazo del Contrato de Crédito y continuará en vigor hasta que todas las obligaciones a mi cargo hayan sido íntegramente cumplidas.
                            <br></br>
                            Estoy enterado de que en cualquier momento podré solicitar la cancelación de la presente Domiciliación sin costo a mi cargo.
                            <br></br>
                            Nombre del Cliente: 
                            <br></br>
                            Número de Autorización:  
                            <br></br>
                            Fecha:
                            <br></br>
                            Teléfono: 
                            <br></br>
                            Correo Electrónico: 
                            <br></br><br></br>     
                            (NOMBRE “EL CLIENTE”) AUTORIZO MEDIANTE MEDIOS ELECTRÓNICOS EN TÉRMINOS DEL ARTÍCULO 89 DEL CÓDIGO DE COMERCIO VIGENTE 
                            <br></br>
                            Pagaré
                            <br></br>				
                            NÚMERO DE CRÉDITO: 0000000 BUENO POR: $ 0000
                            Por este pagaré me obligo incondicionalmente a pagar a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R., en adelante (PRESTTO), en oficinas ubicadas en Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Cuidad de México, la cantidad de $ 00000 (cero pesos MN 00/100), a más tardar el día (Fecha de pago) , o bien a través del depósito bancario o transferencia electrónica efectuada al número de cuenta CIE 001689959, número de CLABE:                        072180 003002261226, del Banco: Banorte S.A.B. a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R. o bien mediante los medios alternativos de pago, mismos que incluyen, más no se limitan a: depósitos o transferencias en cuentas bancarias alternas y pago directo en tiendas de conveniencia. PRESTTO  publicará y pondrá a disposición del CLIENTE un listado de dichas opciones alternas de pago en su Portal de Internet.
                            Este pagaré causará intereses financieros durante el periodo del (fecha plazo del préstamo inicio ) al (fecha plazo  del préstamo final) de 2021, a una tasa anual de 493 %.
                            Me obligo a pagar el importe señalado en el primer párrafo de este documento mediante pagos vencidos sobre saldos insolutos conforme a la siguiente tabla de amortización: 			
                            (FECHA  pago  préstamo)    -  (pago monto préstamo) 
                            En caso de incumplimiento en el pago de una o más de las obligaciones derivadas de este título de crédito, el valor insoluto del presente PAGARÉ se dará por vencido anticipadamente, siendo exigible de contado cualquier saldo que quedaré pendiente a mi cargo.
                            En caso de incumplimiento en el pago de cualquiera de las obligaciones derivadas de este título de crédito, pagaré intereses moratorios sobre las sumas vencidas a la tasa anual señalada en la Carátula del Contrato de Crédito.
                            Asimismo me obligo a satisfacer por mi exclusiva cuenta los honorarios de abogados, gastos y costas que ocasionen, el o los litigios que en su caso inicie PRESTTO, en mi contra, por incumplimiento en el pago puntual de mis obligaciones.
                            Para todo lo relativo a la interpretación, cumplimiento y ejecución de este pagaré me someto expresamente a la jurisdicción de los Tribunales Federales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiere corresponderles en virtud de sus domicilios presentes o futuros., o por cualquier otro motivo. Ciudad de México a (fecha personalizada)
                            <br></br><br></br>        
                            (NOMBRE “EL CLIENTE”)  AUTORIZO MEDIANTE MEDIOS ELECTRÓNICOS EN TÉRMINOS DEL ARTÍCULO 89 BIS DEL CÓDIGO DE COMERCIO VIGENTE.
                            <br></br><br></br>      
                            Anexo A 
                            <br></br><br></br>
                            DISPOSICIONES LEGALES					
                            Se transcriben a continuación las disposiciones legales referidas expresamente en el presente Contrato, para consulta del CLIENTE					
                            LEY FEDERAL DE PROTECCIÓN AL CONSUMIDOR
                            ARTÍCULO 85.- Para los efectos de esta ley, se entiende por contrato de adhesión el documento elaborado unilateralmente por el proveedor, para establecer en formatos uniformes los términos y condiciones aplicables a la adquisición de un producto o la prestación de un servicio, aun cuando dicho documento no contenga todas las cláusulas ordinarias de un contrato. Todo contrato de adhesión celebrado en territorio nacional, para su validez, deberá estar escrito en idioma español y sus caracteres tendrán que ser legibles a simple vista y en un tamaño y tipo de letra uniforme. Además, no podrá implicar prestaciones desproporcionadas a cargo de los consumidores, obligaciones inequitativas o abusivas, o cualquier otra cláusula o texto que viole las disposiciones de esta ley.
                            ARTÍCULO 88.- Los interesados podrán inscribir voluntariamente sus modelos de contrato de adhesión aunque no requieran registro previo, siempre y cuando la Procuraduría estime que sus efectos no lesionan el interés de los consumidores y que su texto se apega a lo dispuesto por esta ley.
                            CÓDIGO CIVIL FEDERAL
                            Artículo 1803.- El consentimiento puede ser expreso o tácito, para ello se estará a lo siguiente:
                            I.- Será expreso cuando la voluntad se manifiesta verbalmente, por escrito, por medios electrónicos, ópticos o por cualquier otra tecnología, o por signos inequívocos, y
                            CÓDIGO DE COMERCIO
                            Artículo 80.- Los convenios y contratos mercantiles que se celebren por correspondencia, telégrafo, o mediante el uso de medios electrónicos, ópticos o de cualquier otra tecnología, quedarán perfeccionados desde que se reciba la aceptación de la propuesta o las condiciones con que esta fuere modificada.
                            Artículo 81.- Con las modificaciones y restricciones de este Código, serán aplicables a los actos mercantiles las disposiciones del derecho civil acerca de la capacidad de los contrayentes, y de las excepciones y causas que rescinden o invalidan los contratos.
                            Artículo 89.- Las disposiciones de este Título regirán en toda la República Mexicana en asuntos del orden comercial, sin perjuicio de lo dispuesto en los tratados internacionales de los que México sea parte.					
                            Las actividades reguladas por este Título se someterán en su interpretación y aplicación a los principios de neutralidad tecnológica, autonomía de la voluntad, compatibilidad internacional y equivalencia funcional del Mensaje de Datos en relación con la información documentada en medios no electrónicos y de la Firma Electrónica en relación con la firma autógrafa. 
                            <br></br>
                            En los actos de comercio y en la formación de los mismos podrán emplearse los medios electrónicos, ópticos o cualquier otra tecnología. Para efecto del presente Código, se deberán tomar en cuenta las siguientes definiciones:				
                            <br></br>
                            Certificado: Todo Mensaje de Datos u otro registro que confirme el vínculo entre un Firmante y los datos de creación de Firma Electrónica.
                            <br></br>
                            Datos de Creación de Firma Electrónica: Son los datos únicos, como códigos o claves criptográficas privadas, que el Firmante genera de manera secreta y utiliza para crear su Firma Electrónica, a fin de lograr el vínculo entre dicha Firma Electrónica y el Firmante.
                            <br></br>
                            Destinatario: La persona designada por el Emisor para recibir el Mensaje de Datos, pero que no esté actuando a título de Intermediario con respecto a dicho Mensaje.
                            <br></br>
                            Digitalización: Migración de documentos impresos a mensaje de datos, de acuerdo con lo dispuesto en la norma oficial mexicana sobre digitalización y conservación de mensajes de datos que para tal efecto emita la Secretaría.
                            <br></br>
                            Emisor: Toda persona que, al tenor del Mensaje de Datos, haya actuado a nombre propio o en cuyo nombre se haya enviado o generado ese mensaje antes de ser archivado, si este es el caso, pero que no haya actuado a título de Intermediario.
                            <br></br>
                            Firma Electrónica: Los datos en forma electrónica consignados en un Mensaje de Datos, o adjuntados o lógicamente asociados al mismo por cualquier tecnología, que son utilizados para identificar al Firmante en relación con el Mensaje de Datos e indicar que el Firmante aprueba la información contenida en el Mensaje de Datos, y que produce los mismos efectos jurídicos que la firma autógrafa, siendo admisible como prueba en juicio.
                            <br></br>
                            Firma Electrónica Avanzada o Fiable: Aquella Firma Electrónica que cumpla con los requisitos contemplados en las fracciones I a IV del artículo 97.				
                            <br></br>
                            En aquellas disposiciones que se refieran a Firma Digital, se considerará a esta como una especie de la Firma Electrónica. 
                            <br></br>
                            Firmante: La persona que posee los datos de la creación de la firma y que actúa en nombre propio o de la persona a la que representa. 					
                            <br></br>
                            Intermediario: En relación con un determinado Mensaje de Datos, se entenderá toda persona que, actuando por cuenta de otra, envíe, reciba o archive dicho Mensaje o preste algún otro servicio con respecto a él.
                            <br></br>
                            Mensaje de Datos: La información generada, enviada, recibida o archivada por medios electrónicos, ópticos o cualquier otra tecnología.
                            <br></br>
                            Parte que Confía: La persona que, siendo o no el Destinatario, actúa sobre la base de un Certificado o de una Firma Electrónica.
                            <br></br>
                            Prestador de Servicios de Certificación: La persona o institución pública que preste servicios relacionados con firmas electrónicas, expide los certificados o presta servicios relacionados como la conservación de mensajes de datos, el sellado digital de tiempo y la digitalización de documentos impresos, en los términos que se establezca en la norma oficial mexicana sobre digitalización y conservación de mensajes de datos que para tal efecto emita la Secretaría.
                            <br></br>
                            Secretaría: Se entenderá la Secretaría de Economía.
                            <br></br>
                            Sello Digital de Tiempo: El registro que prueba que un dato existía antes de la fecha y hora de emisión del citado Sello, en los términos que se establezca en la norma oficial mexicana sobre digitalización y conservación de mensajes de datos que para tal efecto emita la Secretaría.
                            <br></br>
                            Sistema de Información: Se entenderá todo sistema utilizado para generar, enviar, recibir, archivar o procesar de alguna otra forma Mensajes de Datos.
                            <br></br>
                            Titular del Certificado: Se entenderá a la persona a cuyo favor fue expedido el Certificado. 
                            <br></br>
                            Artículo 89 bis.- No se negarán efectos jurídicos, validez o fuerza obligatoria a cualquier tipo de información por la sola razón de que esté contenida en un Mensaje de Datos. Por tanto, dichos mensajes podrán ser utilizados como medio probatorio en cualquier diligencia ante autoridad legalmente reconocida, y surtirán los mismos efectos jurídicos que la documentación impresa, siempre y cuando los mensajes de datos se ajusten a las disposiciones de este Código y a los lineamientos normativos correspondientes.			
                            <br></br><br></br>
                            CÓDIGO PENAL FEDERAL
                            <br></br>
                            Artículo 139 Quáter.- Se impondrá la misma pena señalada en el artículo 139 de este Código, sin perjuicio de las penas que corresponden por los demás delitos que resulten, al que por cualquier medio que fuere ya sea directa o indirectamente, aporte o recaude fondos económicos o recursos de cualquier naturaleza, con conocimiento de que serán destinados para financiar o apoyar actividades de individuos u organizaciones terroristas, o para ser utilizados, o pretendan ser utilizados, directa o indirectamente, total o parcialmente, para la comisión, en territorio nacional o en el extranjero, de cualquiera de los delitos previstos en los ordenamientos legales siguientes: 
                            <br></br>
                            I.	Del Código Penal Federal, los siguientes: 
                            <br></br>
                            1.	Terrorismo, previstos en los artículos 139, 139 Bis y 139 Ter; 
                            <br></br>
                            2.	Sabotaje, previsto en el artículo 140 
                            <br></br>
                            3.	Terrorismo Internacional, previsto en los artículos 148 Bis, 148 Ter y 148 Quáter; 
                            <br></br>
                            4.	Ataques a las vías de comunicación, previstos en los artículos 167, fracción IX, y 170, párrafos primero, segundo y tercero, y 
                            <br></br>
                            5.	Robo previsto en el artículo Quinquies.
                            <br></br>
                            II.	De la ley que Declara Reservas Mineras los yacimientos de Uranio, Torio y las demás substancias de las cuales se obtengan isótopos hendibles que puedan producir energía nuclear, los previstos en los artículos 10 y 13. 
                            <br></br>
                            Artículo 400 Bis. Se impondrá de cinco a quince años de prisión y de mil a cinco mil días multa al que, por sí o por interpósita persona realice cualquiera de las siguientes conductas:
                            <br></br>
                            I. Adquiera, enajene, administre, custodie, posea, cambie, convierta, deposite, retire, dé o reciba por cualquier motivo, invierta, traspase, transporte o transfiera, dentro del territorio nacional, de este hacia el extranjero o a la inversa, recursos, derechos o bienes de cualquier naturaleza, cuando tenga conocimiento de que proceden o representan el producto de una actividad ilícita, o
                            <br></br>
                            II. Oculte, encubra o pretenda ocultar o encubrir la naturaleza, origen, ubicación, destino, movimiento, propiedad o titularidad de recursos, derechos o bienes, cuando tenga conocimiento de que proceden o representan el producto de una actividad ilícita.
                            <br></br>
                            Para efectos de este Capítulo, se entenderá que son producto de una actividad ilícita, los recursos, derechos o bienes de cualquier naturaleza, cuando existan indicios fundados o certeza de que provienen directa o indirectamente, o representan las ganancias derivadas de la comisión de algún delito y no pueda acreditarse su legítima procedencia.
                            <br></br>
                            En caso de conductas previstas en este Capítulo, en las que se utilicen servicios de instituciones que integran el sistema financiero, para proceder penalmente se requerirá la denuncia previa de la Secretaría de Hacienda y Crédito Público.
                            <br></br>
                            Cuando la Secretaría de Hacienda y Crédito Público, en ejercicio de sus facultades de fiscalización, encuentre elementos que permitan presumir la comisión de alguno de los delitos referidos en este Capítulo, deberá ejercer respecto de los mismos las facultades de comprobación que le confieren las leyes y denunciar los hechos que probablemente puedan constituir dichos ilícitos. 			
                            <br></br><br></br>
                            LEY GENERAL DE TÍTULOS Y OPERACIONES DE CRÉDITO				
                            <br></br>
                            Artículo 299.- (...)	
                            <br></br>			
                            Negociado o cedido el crédito por el acreditante, este abonará al acreditado, desde la fecha de tales actos, los intereses correspondientes al importe de la disposición de que dicho crédito proceda, conforme al tipo estipulado en la apertura de crédito; pero el crédito concedido no se entenderá renovado por esa cantidad, sino cuando las partes así lo hayan convenido.		
                            <br></br><br></br>
                            LEY PARA REGULAR LAS SOCIEDADES DE INFORMACIÓN CREDITICIA
                            <br></br>
                            Artículo 28.- Las Sociedades solo podrán proporcionar información a un Usuario, cuando este cuente con la autorización expresa del Cliente, mediante su firma, en donde conste de manera fehaciente que tiene pleno conocimiento de la naturaleza y alcance de la información que la Sociedad proporcionará al Usuario que así la solicite, del uso que dicho Usuario hará de tal información y del hecho de que este podrá realizar consultas periódicas de su historial crediticio, durante el tiempo que mantenga relación jurídica con el Cliente. La firma a que se refiere este párrafo podrá ser recabada de manera autógrafa o por medios electrónicos, en este último caso, siempre que cumpla con los términos y condiciones establecidos por el Banco de México.
                            <br></br>
                            Las Sociedades podrán proporcionar información a los Usuarios que adquieran o administren cartera de crédito, utilizando para ello la autorización que el Cliente haya dado conforme al presente artículo al Usuario que otorgó el crédito respectivo originalmente. 
                            <br></br>
                            Asimismo, el Banco de México podrá autorizar a las Sociedades los términos y condiciones bajo los cuales podrán pactar con los Usuarios la sustitución de la firma autógrafa del Cliente, con alguna de las formas de manifestación de la voluntad señaladas en el artículo 1803 del Código Civil Federal.
                            <br></br>
                            La autorización expresa a que se refiere este artículo será necesaria tratándose de:			
                            <br></br>
                            I.	 Personas físicas, y  					 	 
                            <br></br>
                            II.	Personas morales con créditos totales inferiores a cuatrocientas mil UDIS, de conformidad con el valor de dicha unidad publicado por el Banco de México a la fecha en que se presente la solicitud de información. Los Usuarios que realicen consultas relacionadas con personas morales con créditos totales superiores a cuatrocientas mil UDIS, no requerirán de la autorización expresa a que se refiere el presente artículo. 			
                            <br></br>
                            La obligación de obtener las autorizaciones a que se refiere este artículo, no aplicará a la información solicitada por el Banco de México, la Comisión, las autoridades judiciales en virtud de providencia dictada en juicio en que el Cliente sea parte o acusado y por las autoridades hacendarias federales, cuando la soliciten a través de la Comisión, para fines fiscales, de combate al blanqueo de capitales o de acciones tendientes a prevenir y castigar el financiamiento del terrorismo.
                            <br></br>
                            La vigencia de la autorización prevista en el primer párrafo de este artículo será de un año contado a partir de su otorgamiento, o hasta dos años adicionales a ese año si el Cliente así lo autoriza expresamente. En todo caso, la vigencia permanecerá mientras exista relación jurídica entre el Usuario y el Cliente.
                            <br></br>
                            Los Reportes de Crédito Especiales que sean entregados a los Clientes en términos de esta ley deberán contener la identidad de los Usuarios que hayan consultado su información en los veinticuatro meses anteriores.
                            <br></br>
                            Cuando el texto que contenga la autorización del Cliente forme parte de la documentación que deba firmar el mismo para gestionar un servicio ante algún Usuario, dicho texto deberá incluirse en una sección especial dentro de la documentación citada y la firma autógrafa del Cliente relativa al texto de su autorización deberá ser una firma adicional a la normalmente requerida por el Usuario para el trámite del servicio solicitado.
                            <br></br>
                            Se entenderá que violan las disposiciones relativas al Secreto Financiero tanto la Sociedad, como sus empleados o funcionarios que participen en alguna consulta a sabiendas de que no se ha recabado la autorización a que se refiere este artículo, en los términos de los artículos 29 y 30 siguientes.
                            <br></br>
                            Se considerará que los Usuarios, así como sus empleados o funcionarios involucrados, han violado las disposiciones relativas al Secreto Financiero, cuando realicen consultas o divulguen información en contravención a lo establecido en los artículos mencionados en el párrafo anterior.
                            <br></br>
                            Las Sociedades, sus empleados y funcionarios tendrán prohibido proporcionar información relativa a datos personales de los Clientes para comercialización de productos o servicios que pretendan ofrecer los Usuarios o cualquier tercero, salvo para la realización de consultas relativas al historial 
                            crediticio. Quien proporcione información en contravención a lo establecido en este párrafo, incurrirá en el delito de revelación de secretos a que se refiere el artículo 210 del Código Penal Federal. 
                          </table>
                          </div>
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



