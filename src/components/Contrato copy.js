import React, { Component } from 'react';
import $ from 'jquery';

//CONECTAR COMPONENTE CON REDUX
import { connect } from 'react-redux';
import { saveContrato } from '../redux/actions';
import { bindActionCreators } from 'redux'

//img
import logomorado from '../assets/img/logo_morado.png';

class Contrato extends Component {

  constructor(props) {
    super(props);
    this.downloadFile = this.downloadFile.bind(this);
  }


  downloadFile=()=> {
      let divContents = $("#dvContainer").html();
      let printWindow = window.open('', '', 'height=400,width=800');
      printWindow.document.write('<html><head><title>contrato</title>');
      printWindow.document.write('</head><body >');
      printWindow.document.write(divContents);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
  }
  
  render() {
    let { nombre, apellidopaterno, apellidomaterno, rfc, curp, email, totalaprestar, totalapagar, clabe, fecha, numerocontrato} = this.props
    let contrato = $('#dvContainer').html();
    this.props.saveContrato(contrato)
    return (
            <>
                <div>
                    <button className="btn btn-outline-secondary pointer btn_download" type="button" onClick={() => this.downloadFile()}>DESCARGAR</button>
                  <div id="dvContainer">
                    <hr></hr>
                    {/*<!-<img src={logomorado} className="logo_contrato"></img> -->*/}
                    <table className="contrato-table">
                      <tr className="row-contrato morado_bg">
                        <td >Fecha: { fecha }</td>
                        <td className="text-right">NÚMERO DE CONTRATO: { numerocontrato }</td>
                      </tr>
                    </table>

                    FINANCIERA S.A. de C.V., SOFOM, E.N.R.,, A QUIEN EN LO SUCESIVO Y PARA EFECTOS DEL PRESENTE CONTRATO SERÁ DENOMINADA <b>“PRESTTO” </b>Y POR LA OTRA PARTE Y POR SU PROPIO DERECHO <b> { nombre + ' ' + apellidopaterno + ' ' + apellidomaterno }  </b> A QUIEN EN LO SUCESIVO Y PARA EFECTOS DEL PRESENTE CONTRATO SE LE DENOMINARÁ “EL CLIENTE” Y CONJUNTAMENTE CON PRESTTO “LAS PARTES” AL TENOR DE LOS SIGUIENTES ANTECEDENTES, DECLARACIONES Y CLÁUSULAS:
                    <br></br><br></br>
                    <h4>ANTECEDENTES</h4>

                    PRIMERO. EL CLIENTE, formuló a través de la página de internet https://prestto.mx/ una solicitud (en adelante, la Solicitud), a través de la cual requirió a PRESTTO, el otorgamiento de un crédito simple, en moneda nacional (en adelante, el Crédito).
                    SEGUNDO. PRESTTO, revisará y analizará la Solicitud, así como de la información y documentación que le fue proporcionada por el CLIENTE, para autorizar en definitiva dicha Solicitud.
                    <br></br><br></br>
                    <b>DECLARACIONES</b>
                    I. Declara PRESTTO, que:<br></br>
                    a) Es una  Sociedad Financiera de Objeto Múltiple No Regulada (SOFOM E.N.R.). Conforme a las leyes de los Estados Unidos Mexicanos, mediante escritura pública número 48814 de fecha 29 de enero de 2019, otorgada ante la fe del Licenciado Carlos Hermosillo Pérez, Notario Público número 44 la Ciudad de México.
                    <br></br>
                    b) Que se encuentra inscrito ante el registro federal de contribuyentes (RFC) con clave: AFI090129MZ2
                    <br></br>
                    c) Señala como su domicilio, para los efectos relacionados con el presente contrato, el ubicado en Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Cuidad de México.
                    <br></br>
                    d) Su página de Internet se encuentra ubicada en la dirección: https://prestto.mx/
                    <br></br>                 
                    e) Que da estricto cumplimiento a lo establecido en la Ley Federal de Protección de Datos Personales en posesión de Particulares, y su Reglamento, respecto de la información personal proporcionada por sus clientes, asegurando la confidencialidad de la misma y estableciendo que solamente la utilizará con la finalidad de corroborar la información proporcionada por El CLIENTE, respecto de su capacidad jurídica y financiera a efectos de contratar los productos y servicios establecidos en el presente Contrato; así como para rendir informes tanto a autoridades administrativas como judiciales que debidamente justificadas en disposiciones legales, así lo solicitaren.<br></br>
                    f) Que se encuentra a disposición del CLIENTE en las oficinas de PRESTTO, el Anexo que contiene  las disposiciones legales referidas expresamente en el presente Contrato, mismas que también podrán ser consultadas en la página web <b>https://prestto.mx/ </b><br></br>
                    Es su intención otorgar al CLIENTE el Crédito solicitado, conforme a lo estipulado en el presente Contrato. <br></br>
                    <b></b>II. Declara el CLIENTE, que:<br></br>
                    a) Es una persona física, mayor de edad, con capacidad legal y facultades suficientes para celebrar el presente Contrato, así como para asumir y dar cumplimiento a las obligaciones que en el mismo se establecen. 
                    b) Que su Registro Federal de Contribuyentes (RFC) es: <b>{ rfc }</b>, y su Clave Única de Registro de Población es: { curp }.
                    c) Señala como su domicilio, para los efectos relacionados con el Contrato, el indicado en la Solicitud, mencionada en el Antecedente Primero del presente instrumento.
                    d) <b>PRESTTO</b> , con anterioridad a la fecha de celebración del Contrato, ha hecho de su conocimiento el contenido del presente contrato y de todas las características aplicables al Crédito.
                    e) Reconoce que detrás de esta operación no existe un Propietario Real, conforme a lo que estable la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita, siendo el CLIENTE, el único y exclusivo beneficiario del crédito solicitado.
                    f) Es su intención que <b>PRESTTO</b>  le otorgue el Crédito, conforme a lo estipulado en el presente Contrato.
                    g) Declara bajo protesta de decir verdad que toda la información y documentación que presentó y proporcionó a <b>PRESTTO</b>  a la fecha de firma del presente contrato es actual, verdadera y carece de error, vicios del consentimiento o mala fe.
                    h) Cuenta con los recursos económicos suficientes para dar cumplimiento a las obligaciones que, en términos del Contrato, contrae a su cargo, mismos que provienen y provendrán de fuentes lícitas. 
                    i) Que recibió a su entera satisfacción, comprendiendo el alcance de la misma, la siguiente información por parte de <b>PRESTTO</b> : I.-La cantidad total a pagar, así como la forma y condiciones para su liquidación; II.- Los intereses generados y demás cargas financieras; III.- Los montos accesorios; IV.- La descripción detallada del monto y cargos vinculados al crédito amparado por el presente contrato; V.- La cantidad total a pagar, su fecha exacta de vencimiento, el número y monto de pagos individuales, intereses, comisiones, penalidades convencionales y cargos respectivos, incluidos los fijados por pagos anticipados o cancelación; VI. El derecho y las condiciones para la liquidación prematura del crédito y sus accesorios; VII. Los intereses ordinarios causados, forma de calcularlos y el tipo de tasa aplicable; VIII. Los intereses moratorios en los que podría incurrir, la forma de calcularlos y el tipo de tasa aplicable.
                    j) Que con anterioridad a la celebración del presente contrato, <b><b>PRESTTO</b> </b> hizo de su conocimiento, a su entera comprensión, el contenido del presente instrumento y de los demás documentos a suscribir, así como también los cargos o gastos a generarse en relación con el mismo, incluyendo más no limitándose al (CAT) “Costo Anual Total de financiamiento expresado en términos porcentuales anuales que, para fines informativos y de comparación, incorpora la totalidad de los costos y gastos inherentes a los Créditos” (sin incluir el impuesto al valor agregado (IVA), correspondiente al presente crédito).
                    k) Que no desempeña actualmente o ha desempeñado en los últimos dos años anteriores a la fecha de la firma del presente contrato, actividades que lo categoricen como persona políticamente expuesta, incluyendo más no limitándose a funciones públicas destacadas en un país extranjero o en territorio nacional, considerando entre otros, a los jefes de estado o de gobierno, líderes políticos, funcionarios gubernamentales, judiciales o militares de alta jerarquía, altos ejecutivos de empresas estatales o funcionarios o miembros importantes de partidos políticos. 
                    l) Que a su leal saber y entender ninguna de las personas con las cuales guarda parentesco por consanguineidad o afinidad hasta en segundo grado, su cónyuge, concubina, concubinario y/o persona moral alguna con la cual mantenga vínculos patrimoniales realizan o han realizado las actividades descritas en el inciso k bajo los mismos términos. 
                    Para efectos del Contrato, las PARTES asignan a los términos señalados a continuación, el significado que en cada caso se les atribuye, a menos que el contexto en que se utilicen, implique un concepto diferente y así se indique, independientemente de su utilización en singular o en plural. 
                    a) Carátula del Contrato de Crédito. Documento que forma parte integrante del presente Contrato, que suscribe el Cliente por cada operación, crédito o servicio que contrate, en el cual se establecen las características aplicables al crédito otorgado por <b>PRESTTO</b> .
                    b) CAT: Costo Anual Total de Financiamiento expresado en términos anuales porcentuales que, para fines informativos y de comparación, incorpora la totalidad de los costos y gastos inherentes a los créditos, préstamos o financiamientos que otorgan las entidades financieras, de conformidad con las disposiciones que al efecto emita el Banco de México.
                    c) Comisión por Extensión. Significa la comisión que el CLIENTE podrá pagar antes o hasta en la Fecha de Pago para obtener una prórroga para el pago total del crédito en ese momento vigente. Está comisión podrá ser variable por cada préstamo efectuado al CLIENTE.
                    d) Comisión por Gastos de Cobranza. Significa la comisión que el CLIENTE deberá pagar en caso de retrasarse en el pago de cualesquiera cantidades a su cargo bajo este Contrato conforme al importe indicado en la Carátula del Contrato de Crédito.
                    e) Crédito. Es la operación financiera objeto del presente contrato, que consiste en el otorgamiento que hace <b>PRESTTO</b>  al CLIENTE de una cantidad determinada de dinero, obligándose éste último a devolver la cantidad solicitada en los términos y condiciones estipulados en el Contrato.
                                        
                    f) Día Hábil. Es cualquier día de la semana, excluyendo los días sábado y domingo, así como los días en que, conforme a las disposiciones aplicables, las instituciones de crédito deban cerrar sus puertas, suspender operaciones y la prestación de servicios al público.
                    g) Documentos de Identificación. Se refiere a los documentos de identificación que, conforme a la legislación vigente, se requieren para el otorgamiento de un crédito. Y son, comprobante de domicilio, y cualquier identificación oficial; que puede ser cualquiera de los siguientes documentos: Credencial para Votar (INE); Pasaporte; Cédula profesional o Cartilla de Servicio Militar.					
                    i) Extensión. Significa el derecho que el CLIENTE adquiere mediante el pago de una Comisión por Extensión para diferir la Fecha Límite de Pago del Crédito entonces vigente, en los términos establecidos en este Contrato.
                    h) Fecha de Disposición. Es el día en que <b>PRESTTO</b>  acredita de manera efectiva el importe del Crédito al CLIENTE a través de cualquiera de los medios de disposición previstos en el presente Contrato.
                    j) Fecha de Corte. Corresponde al día o los días en que el CLIENTE deberá pagar a <b>PRESTTO</b>  el respectivo Pago Parcial o el Pago Total incluyendo las comisiones, intereses y demás accesorios aplicables (según sea el caso) y, el o los días en que <b>PRESTTO</b>  marca como el fin de un periodo de registro de los pagos que realizó el CLIENTE.
                    k) Fecha Límite de Pago. Es el día hábil en el que el CLIENTE deberá pagar a <b>PRESTTO</b>  el respectivo Pago Total incluyendo las comisiones, intereses y demás accesorios aplicables (según sea el caso).
                    l) Importe del Crédito. Es el monto del Crédito otorgado al CLIENTE por <b>PRESTTO</b> , el cual se indica inicialmente en la Carátula del Contrato de Crédito.
                    m) Medios Electrónicos: Significan cualesquiera medios electrónicos de comunicación actualmente conocidos o por inventarse, incluyendo sin limitar los siguientes: (i) vía telefónica en el servicio que <b>PRESTTO</b>  opere para su operación comercial; y (ii) a través del Portal de Internet.
                    El CLIENTE sabe, reconoce y acepta que el presente Contrato se celebra por medios electrónicos, dándole plena validez en términos de los artículos 1803 fracción I del Código Civil Federal, 80, 89 y 89 Bis Código de Comercio y la NOM-151-SCFI-2002, acordando ambas partes que para la comprobación fehaciente de este acto jurídico bastará un correo electrónico o la aceptación del deudor de las condiciones generales del instrumento a través del Portal de internet  https://prestto.mx/ de donde lo obtuvo. 
                    n) Monto Total del Crédito. Es el monto correspondiente al Importe del Crédito más los intereses ordinarios, comisiones, impuesto al valor agregado y demás conceptos expresamente señalados en este Contrato. 
                    o) Pago Adelantado. Es el monto que EL CLIENTE entrega a <b>PRESTTO</b>  con anterioridad a que sea exigible un pago parcial o total del Crédito, para que sea aplicado a cubrir el o los pagos periódicos inmediatos posteriores. 
                    p) Pago Anticipado. Al pago parcial o total del Saldo Insoluto de un crédito, antes de la fecha en que sea exigible. 		 	 	 		
                    q) Perfil: Cuenta personal del CLIENTE en el Portal de Internet, disponible únicamente con el usuario y contraseña generados por el CLIENTE.					
                    r) Portal de Internet. Es la página de Internet de  <b>PRESTTO</b>  disponible en https://prestto.mx/ 
                    s) Solicitud. Es la petición que el CLIENTE realizó a  <b>PRESTTO</b> , a través del Portal de Internet de este último, a efecto de que le sea otorgado el crédito objeto del contrato
                    En virtud de los ANTECEDENTES, DECLARACIONES y DEFINICIONES anteriores, las PARTES otorgan y se sujetan a las siguientes: 

                    Clausulas 
                                            
                    PRIMERA. Objeto. En éste acto <b>PRESTTO</b> , otorga un crédito simple en favor del CLIENTE, por la cantidad de { totalaprestar} y el CLIENTE se obliga a restituir a <b>PRESTTO</b>  el importe de crédito, más los intereses, impuestos, comisiones y gastos que se generen por esta operación y hasta la liquidación total del crédito, conforme a lo establecido en la Carátula del Contrato de Crédito.
                                        
                    1.2 El CLIENTE pagará a <b>PRESTTO</b>  por el Crédito otorgado y a la o las fechas de vencimiento establecidas en el presente contrato, en una o varias exhibiciones, las cantidades estipuladas
                    en la siguiente tabla:
                                        
                    TABLA
                                        
                    Cuando la fecha límite de pago sea en un día inhábil debe aclararse que se recorrerá al siguiente día hábil, sin que proceda el cobro de Comisiones o intereses moratorios.
                                        
                    SEGUNDA. Disposición del Crédito. El CLIENTE dispondrá del Crédito en una sola exhibición mediante transferencia electrónica de dinero a la Cuenta Clave Bancaria Estandarizada (CLABE) { clabe } o mediante depósito al número de tarjeta - que el CLIENTE tiene abierta en la institución bancaria denominada _____________, disposición que quedará sujeta a que existan recursos disponibles que permitan a <b>PRESTTO</b>  a hacer la entrega respectiva.
                                        
                    2.2 El crédito se entenderá dispuesto una vez que los recursos queden depositados en la cuenta señalada en la cláusula anterior y el comprobante de dicha operación hará las veces del recibo más amplio y suficiente que en derecho proceda. 

                    2.3. El CLIENTE podrá cancelar el presente Contrato sin responsabilidad alguna y sin cobro de comisiones en un periodo de cinco días hábiles posteriores a la firma del presente Contrato y siempre y cuando no haya dispuesto del Crédito. Para esto, el CLIENTE deberá presentar copia de los movimientos de su cuenta dentro del periodo que comprende la fecha del presente Contrato y cinco días hábiles posteriores, a efectos de comprobar que no han existido movimientos en la cuenta.

                    2.4. Transcurrido el término anterior y en caso de que el CLIENTE haya dispuesto del Crédito, deberá cumplir con todas y cada una de las obligaciones que se estipulan en este Contrato, incluyendo el pago íntegro del Crédito que se le otorga y los accesorios que se pudieran generar. 

                    TERCERA. Destino del Crédito. El CLIENTE se obliga a destinar la cantidad total del crédito recibido, tal y como lo manifestó en la solicitud de crédito, para uso exclusivamente personal y para fines exclusivamente lícitos bajo estricto apercibimiento de las sanciones contempladas en los artículos 139, 148 Bis o 400 Bis del Código Penal Federal, relativos a la prevención de lavado de dinero y el financiamiento al terrorismo.

                    CUARTA. Vigencia del Contrato. El presente contrato tendrá como plazo máximo 7 días, contados a partir de la fecha en la cual el CLIENTE recibió en su cuenta la cantidad objeto del Crédito por parte de <b>PRESTTO</b>  debiendo realizar el pago en la cuenta señalada en la cláusula 5 respecto del total del Crédito y sus accesorios o antes si incurren en las causales de vencimiento anticipado establecidas en la cláusula 17 del presente contrato.			
                    4.2. No obstante su terminación, este Contrato producirá todos sus efectos legales, hasta que el CLIENTE haya liquidado en su totalidad todas las cantidades adeudadas a su cargo.		
                    4.3. La terminación del Contrato se podrá dar de manera anticipada de conformidad con lo establecido en la cláusula 17 del presente contrato.					
                    4.4. El CLIENTE podrá conocer la fecha límite de pago del crédito contratado en todo momento, ingresando con su Usuario y Contraseña a su Perfil en el Portal de Internet de la siguiente dirección: 
                    https://prestto.mx/

                    4.5. El presente contrato NO es PRORROGABLE, salvo pacto en contrario con el consentimiento expreso del CLIENTE y mediante aprobación de la solicitud de Extensión del mismo. 
                                            
                    4.6 Cuando la terminación del contrato sea por conducto de una ENTIDAD FINANCIERA esta liquidará el adeudo del CLIENTE de acuerdo a la información que proporcione <b>PRESTTO</b>  y una vez cubiertos los adeudos <b>PRESTTO</b>  renunciará a todos los derechos de cobro remanente que pudieran subsistir después del momento de la cancelación.
                    QUINTA. Lugar y Forma de Pago. El pago del Crédito que el CLIENTE deba hacer a favor de <b>PRESTTO</b> , derivado del presente contrato lo hará sin necesidad de gestión previa de cobros, recordatorio o notificación de algún previo cobro. 

                    EL CLIENTE a su elección, podrá realizar el pago correspondiente, a más tardar el día señalado como fecha de vencimiento en la cláusula 1, la cantidad indicada como gran total, mediante cualquiera de los siguientes métodos:

                    Banorte

                    Depósito al número de cuenta 0300226122 y número de referencia 0000000 asignado al CLIENTE 
                    Ventanilla al número de cuenta CIE 0300226122, número de crédito 0000000, número de referencia 0000000 asignado al CLIENTE.

                    Oxxo Pay

                    El pago se podrá realizar en cualquier establecimiento de OXXO, durante los horarios del mismo, utilizando el código de barras proporcionado por <b>PRESTTO</b>  a través del Portal de Internet. 
                    Pagos con tarjeta a través del portal de Internet. 

                    <b>PRESTTO</b> , se reserva el derecho de incorporar medios alternativos de pago, mismos que incluyen, más no se limitan a: depósitos o transferencias en cuentas bancarias alternas y pago directo en otras tiendas de conveniencia. <b>PRESTTO</b>  publicará y pondrá a disposición del CLIENTE un listado de dichas opciones alternas de pago en su Portal de Internet.
                    El CLIENTE deberá incluir el número de referencia, contrato o crédito correspondiente como concepto de transferencia en cualquiera de los pagos realizados a favor de <b>PRESTTO</b> .
                    Cuando la fecha límite de pago sea en un día inhábil esta se recorrerá al siguiente día hábil, sin que proceda el cobro de Comisiones o intereses moratorios.
                    En caso de que el CLIENTE realice un pago parcial en exceso, autoriza que los recursos que se entregan en exceso a sus obligaciones exigibles se apliquen por concepto de pagos anticipados del principal, en caso que el excedente sea realizado en el pago total, acepta que el mismo le sea devuelto mediante depósito a la cuenta o tarjeta que se indica en la cláusula 2 del presente contrato, previa solicitud que dirija a la Unidad Especializada de <b>PRESTTO</b>  y se encuentre disponible al CLIENTE hasta en tanto no se solicite la devolución correspondiente. 				
                    5.2. <b>PRESTTO</b>  se reserva el derecho de utilizar la “Autorización de Cargo a Cuenta Bancaria” del CLIENTE, para el pago del crédito otorgado al amparo del presente Contrato. Dicha domiciliación podrá hacerse con cargo a una cuenta a la vista que el CLIENTE tenga abierta en alguna Institución, misma que ha sido ingresada por el CLIENTE en el Portal de Internet y se señala en la cláusula 2 del presente Contrato y para lo cual el CLIENTE deberá autorizar por escrito a dicha Institución mediante la firma de una “Carta Autorización de Domiciliación” misma que forma parte integral de este Contrato, con el visto bueno de <b>PRESTTO</b> , en donde se establezca la cuenta de la Institución en donde se cargarán los pagos, por la domiciliación. El pago por domiciliación se acreditará en la(s) fecha(s) que <b>PRESTTO</b>  acuerde con el CLIENTE, o en la fecha límite del pago del crédito.
                    EL CLIENTE no podrá designar otra cuenta bancaria distinta a la señalada en la cláusula 2. 
                    EL CLIENTE podrá solicitar en cualquier momento, por cualquiera de los medios de contacto puestos a su disposición, la cancelación del servicio de domiciliación del pago de las cantidades adeudadas con cargo a su cuenta, sin responsabilidad alguna para <b>PRESTTO</b> , siendo que dicha solicitud surtirá efectos a más tardar a los 10 (diez) días hábiles siguientes posteriores a su recepción. El servicio de Domiciliación será cancelado automáticamente una vez que el CLIENTE haya liquidado la totalidad de los saldos adeudados a favor de <b>PRESTTO</b> .
                    5.3. En caso de que EL CLIENTE se atrase en sus pagos, <b>PRESTTO</b>  podrá extender el plazo para el pago del capital del Crédito a su sola discreción, sin que se considere reestructura, descuento o quita, para lo cual EL CLIENTE deberá pagar los intereses ordinarios y moratorios generados a la fecha de la extensión, y cubrir dentro del nuevo periodo de pago establecido.
                    SEXTA. Costo Anual Total. El costo anual total de financiamiento expresado en términos porcentuales anuales que, para fines informativos y de comparación, incorpora la totalidad de los costos y gastos inherentes al Crédito (en adelante, el “CAT”), asciende al porcentaje indicado en la Carátula del Contrato de Crédito inicial. El CLIENTE reconoce que <b>PRESTTO</b> , previo a la celebración del Contrato, hizo de su conocimiento el CAT.
                    SÉPTIMA. Prelación de Pago. <b>PRESTTO</b>  aplicará las cantidades que reciba en pago, conforme al siguiente orden: i. Impuestos, ii. Comisiones iii. Intereses moratorios, iv. Intereses ordinarios y iv. Capital. En caso de que <b>PRESTTO</b>  hubiera tenido que demandar al CLIENTE por incumplimiento, los pagos que realice se aplicarán en primer lugar a los gastos y costas del juicio determinados por una autoridad judicial y después se seguirá el orden estipulado en la presente cláusula. 
                    7.2 <b>PRESTTO</b>  acreditará el pago el mismo día en que el CLIENTE lo realice, siempre y cuando se efectúe en un Día Hábil. En caso de que el pago se realice en un día inhábil, el pago se acreditará al Día Hábil siguiente, sin que proceda el cobro de comisiones o intereses moratorios.
                    OCTAVA. Intereses Ordinarios. El CLIENTE se obliga a pagar a <b>PRESTTO</b> , por el otorgamiento del presente Crédito y sin necesidad de previo requerimiento o cobro, por concepto de intereses ordinarios, sobre saldo insoluto, a razón de una tasa de interés gradiente. Los intereses ordinarios se generarán desde la fecha de depósito de la cantidad señalada en la cláusula número 1 y hasta el último día del plazo para el pago y serán exigidos únicamente por periodos vencidos. 
                    8.2. El cálculo de los intereses ordinarios dentro de los primeros 3 días naturales se efectuará de la siguiente forma: tasa promedio diaria multiplicada por 1 (uno) más 0.00 dando como resultado la “Primer Tasa”, posteriormente el resto del periodo se calculará de acuerdo a lo siguiente: tasa promedio diaria multiplicada por el plazo del crédito otorgado menos el resultado de la “Primer Tasa” multiplicado por el periodo de la duración de la primer tasa dividido entre el periodo de la duración de la segunda tasa. Donde la “duración de la primer tasa” se calculará de la siguiente manera: plazo del crédito otorgado menos 1 (uno) menos el plazo del crédito otorgado dividido entre 2 (dos) en el caso en que la duración de la primer tasa no sea un número entero se deberá redondear al número entero próximo; y la “duración de la segunda tasa” se calculará de la siguiente manera: plazo del crédito otorgado menos la duración de la primer tasa. 
                    Fórmula:
                    Primer Tasa = Tasa_promedio_diaria * (1 + 0.00)
                    Segunda Tasa = (Tasa_promedio_diaria * plazo del crédito otorgado – Primer Tasa * duración de la primer tasa) / duración de la segunda tasa
                    Duración Primer Tasa = plazo del crédito otorgado – 1 – (plazo del crédito otorgado / 2)
                    ***En caso de que la duración de la primer tasa no sea un número entero se redondeará al número entero próximo.
                    Duración Segunda Tasa = plazo del crédito otorgado – duración de la primer tasa. 
                    NOVENA. Intereses Moratorios. En caso de que el CLIENTE no cubra íntegramente el Monto Total del Crédito (en el caso de pago en una sola exhibición) o cualquier Pago Parcial, deberá pagar a <b>PRESTTO</b>  intereses moratorios que se devengarán en forma diaria a partir del día siguiente a la fecha de vencimiento del plazo para el pago y hasta la de su total liquidación y se calcularán multiplicando la tasa de interés moratorio señalada en la Carátula del Contrato de Crédito por el saldo vencido y no pagado, hasta que el Monto Total del Crédito o el Pago Parcial de que se trate, haya sido pagado completamente. 
                    9.2. El cálculo de los intereses moratorios se efectuará de la siguiente forma: Se multiplicará el saldo vencido por la tasa de interés moratoria anual. Posteriormente se dividirá entre 360 (trescientos sesenta) para obtener el monto de interés moratorio diario. Este monto se multiplicará por el número de días en que el crédito haya permanecido en mora. 				
                    Fórmula:
                    Saldo vencido x tasa de interés moratoria anual / 360 = Monto de interés moratorio diario 
                    Monto de interés moratorio diario x días en mora = Monto de interés moratorio total

                    9.3 En caso de que el CLIENTE omita realizar el pago en la fecha pactada, se considerará en mora o cartera vencida al haber transcurrido el primer día contado a partir de la fecha límite de pago establecida en el presente contrato, según aplicable.
                    No obstante lo anterior mencionado en la presente clausula, las partes acuerdan que <b>PRESTTO</b>  suspenderá el cobro de los intereses correspondientes al préstamo objeto del presente contrato después del periodo contemplado en el artículo 18 fracción IX de la ley de Impuesto Sobre la renta vigente a la fecha de firma del presente, de igual forma las Partes acuerdan que <b>PRESTTO</b>  podrá otorgar quitas y/o descuentos totales o parciales respecto de los intereses derivados del presente Contrato (ordinarios y/o moratorios), sin que para ello exista la necesidad de notificación alguna a 
                    EL CLIENTE por parte de <b>PRESTTO</b> , ya que se trata de un beneficio a EL CLIENTE y no una obligación por parte del mismo. 			
                    DÉCIMA. Comisiones. El CLIENTE se obliga a pagar a <b>PRESTTO</b> , los siguientes montos por concepto de Comisiones:
                    a. Comisión por Extensión: Las PARTES acuerdan que el presente Contrato no cuenta con cláusula de extensión automática, sin embargo, el CLIENTE, previo aviso o solicitud por cualquiera de los medios permitidos por el presente Contrato a <b>PRESTTO</b>  dentro de las 24 (veinticuatro) horas mínimas previas al vencimiento del crédito otorgado, tendrá el derecho de prolongar o extender el pago del mismo, hasta por un plazo igual al originalmente pactado, exclusivamente en su principal sin incurrir en intereses moratorios y hasta por un máximo de 05 extensiones por el mismo crédito, <b>PRESTTO</b>  se reserva el derecho de aprobar o declinar la solicitud de extensión en cualquier momento. 
                    La comisión por extensión será calculada de la siguiente manera:
                    Comisión por Extensión x Días a extender = Monto por los días de extensión
                    Monto por los días de extensión x Saldo a extender / 1000 = Monto de Comisión por Extensión
                                        
                    El pago de la comisión por extensión aplicable por parte del CLIENTE constituye su aceptación expresa para la formalización de la prolongación de la vigencia del presente contrato.
                                        
                    a. Comisión por Cobranza: Las PARTES acuerdan que por cualquier incumplimiento de las obligaciones de pago del CLIENTE en los términos pactados en el presente Contrato, se establece el cobro de una Comisión variable de Cobranza de $ 150.00 (Ciento cincuenta pesos MN 00/100) más IVA, misma que se deberá cubrir en el siguiente pago.
                                        
                    En el evento de requisición judicial de las cantidades adeudadas, en relación con el incumplimiento del presente contrato, el CLIENTE se obliga a pagar de manera unilateral adicional a la Comisión por Cobranza los gastos y costas judiciales relacionadas, así como también los honorarios de abogados. EL CLIENTE cubrirá por su cuenta todo tipo de gastos extrajudiciales y de cobranza que tuviera que erogar <b>PRESTTO</b>  debido al incumplimiento de cualquier obligación estipulada en el presente Contrato.
                                        
                    DÉCIMA PRIMERA. Comprobantes y Estados de Cuenta: El CLIENTE acepta consultar su estado de cuenta en el Portal de Internet, lo que podrá hacer en forma diaria y sin costo alguno. 

                    El CLIENTE contará con un período de 60 (sesenta) días naturales, contados a partir de la fecha en que el respectivo estado de cuenta se puso a su disposición, para formular, por escrito firmado, cualquier solicitud de aclaración de la información contenida en el mismo, ante <b>PRESTTO</b> , enviada al correo electrónico clientes@prestto.mx, o a través del domicilio establecido para tal efecto en la Declaración I- c) del presente Contrato; en caso contrario, se entenderá que dicha información es aceptada en los términos en los que se publica en el estado de cuenta.
                    Una vez que <b>PRESTTO</b>  reciba cualquier aclaración que sea formulada por el CLIENTE conforme a lo establecido en los párrafos anteriores de la presente Cláusula, tendrá un plazo de hasta 45 (cuarenta y cinco) días naturales para entregarle al CLIENTE el dictamen correspondiente, junto con la información y/o documentación considerada para su emisión, así como un informe detallado en el que se respondan los hechos contenidos en la solicitud de aclaración. En caso de que conforme a dicho dictamen resulte procedente el cobro del monto de que se trate, el CLIENTE deberá hacer el pago de la cantidad a su cargo, incluyendo los intereses ordinarios. Dentro del plazo de 45 (cuarenta y cinco) días naturales contado a partir de la entrega del dictamen de referencia, <b>PRESTTO</b>  pondrá a su disposición, a través de su Unidad Especializada, el expediente generado por la solicitud, con la integración de la información y documentación que deba obrar en su poder y que se relacione directamente con la solicitud. Hasta en tanto la solicitud de aclaración no sea resuelta, <b>PRESTTO</b>  no podrá reportar como vencidas las cantidades sujetas a dicha aclaración a las sociedades de información crediticia. 
                    Asimismo, el CLIENTE podrá consultar el saldo insoluto del Crédito, Pagos Parciales realizados y los Pagos Parciales pendientes de pago y sus próximas Fechas de Pago en el Portal de Internet, utilizando la clave o contraseña que el CLIENTE creó para acceder a su Perfil en el Portal de Internet. 
                    DÉCIMA SEGUNDA. Origen de los Recursos. <b>PRESTTO</b>  financiará el crédito concedido al CLIENTE con recursos provenientes de su capital. Asimismo, podrá otorgarle el crédito total o parcialmente con recursos provenientes de financiamiento privado o de los programas de promoción que ofrece la banca de desarrollo mexicana. 
                    12.2. El CLIENTE declara que los recursos con los cuales pagará el crédito han sido obtenidos o generados a través de una fuente de origen permitido por la ley y con recursos propios. El destino de los servicios o productos adquiridos será dedicado tan solo a fines permitidos por la ley y que no se encuentran dentro de los supuestos establecidos por los artículos 139 Quáter y 400 Bis del Código Penal Federal (estos artículos prohíben el lavado de dinero y el financiamiento al terrorismo.
                    DÉCIMA TERCERA. Pago Anticipado. <b>PRESTTO</b>  está obligada a aceptar pagos anticipados de los créditos menores al equivalente a 900,000 UDIS, siempre que: i) EL CLIENTE lo solicite, ii) se encuentre al corriente en los pagos exigibles de conformidad con el presente Contrato y, iii) que el importe del pago anticipado sea por una cantidad igual o mayor a la correspondiente al pago parcial.				
                    13.2 <b>PRESTTO</b>  se compromete a informar el saldo adeudado al CLIENTE a los 3 tres días hábiles siguientes al pago realizado de forma anticipada, enviando la NUEVA TABLA DE AMORTIZACIÓN vía correo electrónico.					
                    No habrá penalización monetaria de ningún tipo por realizar pagos anticipadamente o adelantados.
                    Las cantidades pagadas anticipadamente se aplicarán en función de lo previsto en la cláusula 7 anterior. 				
                    DÉCIMA CUARTA. Obligaciones de Hacer. En adición a cualquier otra obligación a su cargo derivada de este instrumento, el CLIENTE se obliga a cumplir con las siguientes obligaciones:	
                    i) Cumplir con todas las cantidades que deban ser pagadas y con cada una de las obligaciones a su cargo, derivadas de este contrato y hasta que el Crédito y sus accesorios sean totalmente pagados.
                    ii) Notificar a <b>PRESTTO</b>  cualquier cambio de domicilio o números telefónicos, dentro de los 3 (tres) días hábiles siguientes a la fecha que se realice dicho cambio.					
                    iii) Notificar a <b>PRESTTO</b> , dentro de los 3 (tres) días hábiles siguientes a la fecha que se realice cualquier variación en el monto de sus ingresos o cualquier hecho y/o acto que pudiere traer como consecuencia el incumplimiento de las obligaciones de pago a cargo del CLIENTE derivadas de este instrumento. 				
                    DÉCIMA QUINTA. Obligaciones de No Hacer. El CLIENTE no podrá sin previa autorización por escrito de <b>PRESTTO</b> : Ceder de forma alguna, parcial o totalmente, los derechos y/o las obligaciones a su cargo derivadas del presente contrato.
                    DÉCIMA SEXTA.- Limitaciones Legales. EL CLIENTE se obliga  por medio del presente Contrato, a no celebrar con cualquier entidad financiera, u dependencias similares, así como con cualquier persona física o moral, ningún contrato o convenio, o realizar alguna transacción comercial en la que se disponga de más del TREINTA (30%) por ciento del total de sus ingresos, durante la vigencia del crédito otorgado.				
                    El incumplimiento de esta disposición será causal de rescisión del presente Contrato.
                    DÉCIMA SÉPTIMA. Terminación Anticipada. EL CLIENTE podrá solicitar a <b>PRESTTO</b> , en cualquier tiempo, la terminación anticipada del Contrato, para tal efecto, EL CLIENTE deberá pagar a <b>PRESTTO</b> , en los términos establecidos en el Contrato: a) el saldo insoluto principal, así como el impuesto al valor agregado, los intereses ordinarios, los intereses moratorios, en su caso, comisiones del Crédito que se hayan causado hasta ese momento, así como aquellos que se hubieren causado de no haber terminación anticipada; y b) cualquier otro importe que EL CLIENTE adeude a <b>PRESTTO</b>  conforme al Contrato. Dicha solicitud deberá ser notificada por el CLIENTE a <b>PRESTTO</b> , mediante escrito firmado, al correo electrónico clientes@prestto.mx, o a través del domicilio establecido para tal efecto en la Declaración I- c) del presente Contrato.
                    <b>PRESTTO</b>  dará por terminado el presente Contrato, el día hábil siguiente al de la recepción de la solicitud de terminación siempre y cuando no existieren adeudos en favor de <b>PRESTTO</b> . 

                    En caso contrario, y una vez presentada la solicitud de terminación: (i) Al día hábil siguiente contado desde la recepción de la solicitud de terminación, <b>PRESTTO</b>  notificará al CLIENTE, mediante correo electrónico a la dirección que EL CLIENTE indicó en la Solicitud, el saldo insoluto a liquidar; (ii) Asimismo, dentro de los 5 (cinco) días hábiles siguientes al de la recepción de la solicitud pondrá a disposición del Cliente el importe de los adeudos a la fecha, y (iii) una vez que EL CLIENTE tenga conocimiento del saldo, deberá realizar el pago total del mismo, dentro de los 5 (cinco) Días Hábiles siguientes; si dentro del plazo establecido EL CLIENTE no realiza el pago, el Contrato continuará vigente en sus términos.
                    De los 10 (diez) Días Hábiles siguientes a la fecha en que EL CLIENTE haya realizado el pago total de la totalidad del crédito otorgado, así como de los accesorios generados, podrá solicitar a <b>PRESTTO</b>  una constancia o carta finiquito para hacer constar la terminación del Crédito, la inexistencia de adeudos, o la existencia de saldo a favor en caso de haberlo; mismo que estará a disposición del CLIENTE a partir de la fecha de terminación; debiendo apegarse a lo establecido en el presente Contrato para su devolución.
                    Al dar por terminada la relación contractual en caso de que exista saldo a favor, <b>PRESTTO</b>  debe entregarlo al CLIENTE en la fecha en que se dé por terminada la operación y en caso de que 
                    EL CLIENTE no acuda a las oficinas de <b>PRESTTO</b> , se le informará que se encuentra a su disposición. EL CLIENTE acepta que el mismo le sea devuelto mediante depósito a la cuenta o tarjeta que se indica en la cláusula 2 del presente contrato, previa solicitud que dirija a la Unidad Especializada de <b>PRESTTO</b> . 
                    Una vez concluida la relación contractual <b>PRESTTO</b>  cancelará las autorizaciones de cargo a cuenta bancaria o domiciliación suscritas por EL CLIENTE.					
                    Las partes acuerdan que EL CLIENTE, no podrá aumentar su línea de crédito con <b>PRESTTO</b>  si líquida antes de que haya transcurrido al menos el 75% del plazo definido en este contrato. 
                    DÉCIMA OCTAVA. Causas de Rescisión del Contrato.- Las partes convienen expresamente que, para el caso de que el CLIENTE dejara de cumplir con cualquiera de las obligaciones a su cargo derivadas de este contrato, y sin necesidad de declaración judicial previa, <b>PRESTTO</b>  podrá dar por vencido anticipadamente el plazo para el pago del crédito. En tal caso, será exigible el pago anticipado del total de adeudo que se encuentre pendiente de vencimiento, el cual procederá en los términos señalados en la cláusula 13 de este contrato.
                    Específicamente, serán causas de rescisión de este contrato, los siguientes motivos:
                    a) En caso de que cualquiera de las declaraciones del CLIENTE contenidas en este instrumento y la solicitud de crédito sea o resulte ser falsa o incorrecta.
                    b) En caso de que cualquier dato o información del CLIENTE que sea entregada o hecha del conocimiento de <b>PRESTTO</b>  de forma dolosa sea o resulte ser falsa o incorrecta.		
                    c) El incumplimiento del CLIENTE a cualquiera de las obligaciones de hacer o de no hacer consignadas a su cargo en este contrato. 				
                    d) Si el Crédito otorgado fuera destinado a la consecución de cualquier acto ilícito.
                    e) Por considerar <b>PRESTTO</b> , que EL CLIENTE no podrá hacer cumplir las obligaciones impuestas por el presente contrato de manera TOTAL Y/O PUNTUAL como consecuencia, más no limitado a: cualquier modificación salarial que resulte en un detrimento económico, respecto al salario por él reportado en la solicitud crediticia; su participación en un proceso judicial; cese temporal o definitivo de su fuente de trabajo; cualquier situación que resulte en un detrimento de su patrimonio. 
                    18.2. Ante la actualización de cualquiera de las causas de incumplimiento antes señalada, el CLIENTE estará obligado a pagar a <b>PRESTTO</b>  de manera inmediata el importe total del saldo insoluto del Crédito, que incluye los Intereses Ordinarios vencidos, Intereses Moratorios, así como los gastos y cualquier otro concepto devengado contractual o legalmente, pago que deberá verificarse sin necesidad de presentación, requerimiento, protesto u otra notificación de cualquier clase al CLIENTE, a todas las cuales renuncia expresamente por el presente instrumento. Sin perjuicio de lo anterior, <b>PRESTTO</b>  podrá también por la vía que estime conveniente, ejercitar aquellas acciones que conforme a la ley sean aplicables en contra del CLIENTE. 
                    DÉCIMA NOVENA. Comunicaciones. El CLIENTE autoriza a <b>PRESTTO</b>  para poder contactarlo mediante los medios conocidos en la Internet y telecomunicaciones. El usuario acepta recibir a su email { email }, correos procedentes de <b><b>PRESTTO</b> </b>  de publicidad, información sobre su crédito o información que <b>PRESTTO</b>  considere importante para EL CLIENTE.				
                    EL CLIENTE entiende que el principal medio de comunicación es vía Internet y que los mensajes a través de plataformas como Facebook, Instagram, y WhatsApp tendrán validez en los acuerdos que EL CLIENTE y <b>PRESTTO</b>  puedan llegar.				
                    EL CLIENTE podrá contactar a <b>PRESTTO</b>  en los siguientes medios:			
                    E-mail: clientes@prestto.mx Teléfono: +52 1 55 8038 7757					
                    Facebook: https://www.facebook.com/presttomexico				
                    VIGÉSIMA. Avisos y Autorizaciones Generales. EL CLIENTE otorga expresa autorización a <b>PRESTTO</b>  para:
                    I. Recabar toda información relacionada con su comportamiento crediticio en las operaciones financieras amparadas en el presente Contrato, así como para facilitar la misma a las sociedades de información crediticia.				
                    II. Consultar su información en las Sociedades de Información Crediticia en forma previa al otorgamiento del presente crédito mediante la autorización que se realizó a través de medios electrónicos.				
                    III. Establecer contacto con EL CLIENTE mediante mensajes SMS, llamadas o comunicaciones análogas a los teléfonos o direcciones por él proporcionados para efectos de retroalimentación, ofertas de productos y/o servicios de naturaleza análoga, así como cobranza directa o mediante terceros.				
                    IV. Avisar a las autoridades correspondientes respecto a lo dispuesto en el párrafo segundo del artículo 17 de la Ley Federal para la Prevención e Identificación de Recursos de Procedencia Ilícita, así como lo dispuesto en el artículo 19 de sus reglas. 
                    En el evento de que EL CLIENTE no desee que su información sea utilizada con fines de retroalimentación, mercadotécnicos o publicitarios, deberán notificarlo por escrito a <b>PRESTTO</b> , en cuyo caso, el presente Contrato continuará surtiendo sus efectos de manera íntegra y sin modificación alguna. 
                    VIGÉSIMA PRIMERA. Autorización de Consulta Crediticia. Declara el CLIENTE bajo protesta de decir verdad que la información proporcionada a <b>PRESTTO</b>  en la presente solicitud es verdadera, libre de vicios, errores o mala fe, responsabilizándose en caso contrario, por la declinación de la solicitud, deslindando de responsabilidad a <b>PRESTTO</b>  por cualquier controversia relacionada. De igual manera expresa EL CLIENTE:
                    I. Por este conducto yo el CLIENTE autorizo expresamente a <b>PRESTTO</b> , para que por conducto de sus funcionarios facultados lleve a cabo Investigaciones, sobre mi comportamiento crediticio o el de la Empresa que represento en, Dun & Bradstreet, S.A. SIC. Asimismo, declaro que conozco la naturaleza y alcance de las sociedades de información crediticia y de la información contenida en los reportes de crédito y reporte de crédito especial, declaro que conozco la naturaleza y alcance de la información que se solicitará, del uso que <b>PRESTTO</b> ., hará de tal información y de que esta podrá realizar consultas periódicas sobre mi historial o el de la empresa que represento, consintiendo que esta autorización se encuentre vigente por un período de tres años contados a partir de su expedición y en todo caso durante el tiempo que se mantenga la relación jurídica.
                    II. Estoy consciente y acepto que este documento quede bajo custodia de <b>PRESTTO</b>  y/o Sociedad de Información Crediticia consultada para efectos de control y cumplimiento del artículo 28 de la Ley para Regular las Sociedades de Información Crediticia. 
                    VIGÉSIMA SEGUNDA. Modificación al Contrato. Cualquier modificación que <b>PRESTTO</b>  pretenda realizar al presente Contrato, deberá ser notificada al CLIENTE con una anticipación de 30 (treinta) días naturales a su entrada en vigor. Si el CLIENTE no está de acuerdo con las modificaciones propuestas, podrá solicitar la terminación del Contrato hasta 30 (treinta) días naturales después de la entrada en vigor de dichas modificaciones, sin responsabilidad ni comisión alguna a su cargo, teniendo la obligación de cubrir, en su caso, los adeudos que ya se hubieren generado a la fecha en que solicite dar por terminado el Contrato. 				
                    Una vez transcurrido el plazo señalado, sin que <b>PRESTTO</b>  haya recibido comunicación alguna por parte del CLIENTE, se tendrán por aceptadas las modificaciones al Contrato.
                    VIGÉSIMA TERCERA. Cesión de Derechos al Cobro. EL CLIENTE da expresa autorización a <b>PRESTTO</b>  para transferir, ceder, negociar en cualquier forma la propiedad y/o derechos de cobro de las cantidades principales y/o secundarias amparadas bajo el presente Contrato y/o el Pagaré suscrito por EL CLIENTE, tanto anterior como posteriormente a su vencimiento. 
                    De manera irrevocable, el CLIENTE faculta a <b>PRESTTO</b>  para que transmita toda la información que el mismo proporcionó, con motivo del crédito amparado por el presente Contrato, al nuevo acreedor o cesionario aún antes de que se lleve a cabo la transmisión de derechos. En caso de transmisión de derechos por parte de <b>PRESTTO</b> , EL CLIENTE renuncia expresamente a que le sean abonados los intereses mencionados por el párrafo segundo del artículo 299 de la Ley General de Títulos y Operaciones de Crédito.				
                    VIGÉSIMA CUARTA. Domicilios. Las PARTES acuerdan que todas las notificaciones, avisos y en general cualquier comunicación que las partes deban hacerse con motivo del presente contrato, sean estos de carácter judicial o extrajudicial, surtirán sus efectos legales en los siguientes domicilios: 
                    “<b>PRESTTO</b> ” Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Cuidad de México
                    “EL CLIENTE”  Av. Pavo Real #32 Mayorazgos del Bosque, C.P. 52957, Estado de México	
                    24.2. Asimismo, las partes convienen en que cualquier cambio de sus domicilios, deberán notificarlo a la otra parte dentro de los 3 (tres) días naturales siguientes a la fecha en que ello ocurra, en el entendido de que, de no ser así, se considerarán válidas cualquier clase de notificaciones, judiciales o extrajudiciales, realizadas en los domicilios mencionados.
                    VIGÉSIMA QUINTA. Aclaraciones. En el supuesto que EL CLIENTE desee realizar consultas, aclaraciones, quejas o reclamaciones vinculadas con el servicio o producto que por medio del presente contrato le brinde <b>PRESTTO</b> , podrá hacerlo a través de: 				
                    I. Unidad Especializada de Atención a Usuarios <b>PRESTTO</b> , a través de la cual <b>PRESTTO</b>  atenderá las consultas, aclaraciones, quejas o reclamaciones. Para tales efectos, EL CLIENTE deberá formular un escrito libre narrando el motivo de su consulta así como los hechos que le dieron lugar. ELl CLIENTE deberá incluir la fecha, su domicilio para oír y recibir notificaciones, su teléfono, datos de su cuenta bancaria, así como su nombre y firma.					
                    II. <b>PRESTTO</b>  responderá toda consulta en un plazo máximo de 30 (treinta) días naturales posteriores a la fecha de recepción de la misma, mediante asesoría telefónica, por medios electrónicos o, en caso de gravedad, requiriendo su presencia en su Unidad Especializada de Atención a Usuarios. Tratándose de cantidades a cargo del CLIENTE, este tendrá el derecho de no realizar el pago sobre el cual solicita su aclaración, así como el de cualquier otra cantidad relacionada con dicho pago, hasta en tanto se resuelva la aclaración.
                    III. EL CLIENTE podrá contactar a la Unidad Especializada de Atención a Usuarios puesta a disposición por <b>PRESTTO</b> , con domicilio en Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Cuidad de México. Alternativamente, su sitio de internet https://prestto.mx/, así como también a través del correo electrónico clientes@prestto.mx o al teléfono +52 1 55 8038 7757
                    VIGÉSIMA SEXTA. Confidencialidad. Toda la información y documentación relativa a las operaciones y servicios que realice <b>PRESTTO</b>  serán consideradas como confidenciales para la protección del derecho de privacidad de sus clientes, la cual solo podrá ser otorgada a EL CLIENTE.
                    VIGÉSIMA SÉPTIMA. Leyes Aplicables y Jurisdicción. Para todo lo relacionado con la interpretación y cumplimiento del presente contrato, las partes se someten a la jurisdicción y competencia de los Tribunales de la Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiere corresponderles en virtud de sus domicilios presentes o futuros o por cualquier otra causa les pudiera corresponder.
                    Las disposiciones legales que se mencionan en el presente contrato pueden ser consultadas en el Anexo A “Disposiciones Legales”, y se encuentran a su disposición en las oficinas de <b>PRESTTO</b> . 
                    VIGÉSIMA OCTAVA. Integridad del Contrato. El presente Contrato incluyendo los Anexos que se mencionan en el mismo, conjuntamente con la carátula y el Aviso de Privacidad vigente (https://www.prestto.mx/aviso-de-privacidad) constituyen el acuerdo total entre las partes en relación con el otorgamiento del crédito, por lo que prevalece sobre y reemplaza cualquier entendimiento, contrato, convenio o acuerdo de voluntades previo, ya sea oral o escrito, de cualquier naturaleza con relación a lo aquí establecido.
                    En virtud de la presente Cláusula las partes acuerdan que el presente Contrato constituye el acuerdo final de las partes, y acuerdan dar por terminado para todos los efectos a que haya lugar, todo tipo de acuerdos orales o escritos de las partes relacionadas con el presente Contrato. 		
                    VIGÉSIMA NOVENA. Títulos de las Cláusulas. Las partes convienen en que los Títulos de las cláusulas que aparecen en el presente contrato, se han puesto con el exclusivo propósito de facilitar su lectura, y por tanto no definen ni limitan el contenido de las mismas. Para efectos de interpretación del presente contrato deberá atenderse exclusivamente al contenido de sus declaraciones y cláusulas y de ninguna manera a los títulos de estas últimas. 
                    Enterados del contenido y alcance jurídico de las obligaciones y derechos que contraen las partes contratantes con la celebración de este contrato de adhesión, EL CLIENTE lo suscribe, manifestando que tiene conocimiento y comprende plenamente la obligación que adquiere, aceptando el monto del crédito que se le otorga, así como los cargos y gastos que se generen, o en su caso, se llegaran a generar por motivo de su suscripción, entendiendo también que no se efectuarán cargos o gastos distintos a los especificados, por lo que lo firman de conformidad en la Ciudad de México, el 14 de octubre del 2020 
                                    

                    Al momento de la celebración del presente contrato se entrega vía correo electrónico copia fiel del mismo con todos sus anexos, incluida la Carátula del Contrato de Crédito, el Pagaré y la Carta Autorización de cargo a cuenta bancaria que forman parte integrante del mismo. 
                    Las PARTES de común acuerdo manifiestan su consentimiento a efectos de celebrar el presente contrato de acuerdo a las Disposiciones del Código de Comercio y el artículo 89 Bis respecto de las operaciones relativas al otorgamiento de créditos de manera remota en cuanto a la declaración de su voluntad.
                                        
                    “<b>PRESTTO</b> ”                        “EL CLIENTE”
                                        
                    AUTORIZO MEDIANTE MEDIOS ELECTRÓNICOS EN TÉRMINOS DEL ARTÍCULO 80 DEL CÓDIGO DE COMERCIO VIGENTE.
                                    

                    Autorización de cargo a cuenta bancaria
                    Por medio de la presente, el suscrito autoriza a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R. “<b>PRESTTO</b> ”) para que domicilie los pagos del crédito simple que tengo contratado con dicha empresa a través de la cuenta a nombre de “BANCO “” Cuenta “”, con base en la información que a continuación se indica:				
                    1.- Número de Cliente:
                    2.- Número de Crédito: 
                    3.- Plazo del Préstamo: 0 (días)
                    4.- Nombre del banco que me lleva la Cuenta: 
                    5.- Datos de Identificación de la Cuenta
                    Número de tarjeta de débito (16 dígitos): 
                    Clave Bancaria Estandarizada (“CLABE”) de la Cuenta (18 dígitos): 

                    6.- Monto máximo de cada cargo autorizado: 

                    En caso de que la Cuenta objeto de la presente autorización no cuente con fondos suficientes para cubrir la parcialidad más los intereses ordinarios, el suscrito autoriza a <b>PRESTTO</b>  para que en cualquier momento, realice los intentos de cargo que estime necesarios para cubrir el adeudo, incluyendo capital, intereses ordinarios, intereses moratorios y comisiones, según sea el caso.
                    Esta autorización estará vigente por todo el plazo del Contrato de Crédito y continuará en vigor hasta que todas las obligaciones a mi cargo hayan sido íntegramente cumplidas.
                    Estoy enterado de que en cualquier momento podré solicitar la cancelación de la presente Domiciliación sin costo a mi cargo.
                    Nombre del Cliente: 
                    Número de Autorización:  
                    Fecha:
                    Teléfono: 
                    Correo Electrónico: 
                                
                    ÁLVARO RODRIGO AUTORIZO MEDIANTE MEDIOS ELECTRÓNICOS EN TÉRMINOS DEL ARTÍCULO 89 DEL CÓDIGO DE COMERCIO VIGENTE 

                    Pagaré				
                    NÚMERO DE CRÉDITO: 0000000 BUENO POR: $ 0000
                    Por este pagaré me obligo incondicionalmente a pagar a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R., en adelante (<b>PRESTTO</b> ), en oficinas ubicadas en Av. Nuevo León #213 - 602 Col. Condesa, Cuauhtémoc, C.P. 06100, Cuidad de México, la cantidad de $ 00000 (cero pesos MN 00/100), a más tardar el día 21 de octubre del 2020, o bien a través del depósito bancario o transferencia electrónica efectuada al número de cuenta CIE 001689959, número de CLABE:                        072180 003002261226, del Banco: Banorte S.A.B. a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R. o bien mediante los medios alternativos de pago, mismos que incluyen, más no se limitan a: depósitos o transferencias en cuentas bancarias alternas y pago directo en tiendas de conveniencia. <b>PRESTTO</b>   publicará y pondrá a disposición del CLIENTE un listado de dichas opciones alternas de pago en su Portal de Internet.
                    Este pagaré causará intereses financieros durante el periodo del 14 de octubre del 2020 al 21 de octubre del 2020, a una tasa anual de 0 %.
                    Me obligo a pagar el importe señalado en el primer párrafo de este documento mediante pagos vencidos sobre saldos insolutos conforme a la siguiente tabla de amortización: 			
                    2020-10-21    1,000 
                    En caso de incumplimiento en el pago de una o más de las obligaciones derivadas de este título de crédito, el valor insoluto del presente PAGARÉ se dará por vencido anticipadamente, siendo exigible de contado cualquier saldo que quedaré pendiente a mi cargo.
                    En caso de incumplimiento en el pago de cualquiera de las obligaciones derivadas de este título de crédito, pagaré intereses moratorios sobre las sumas vencidas a la tasa anual señalada en la Carátula del Contrato de Crédito.
                    Asimismo me obligo a satisfacer por mi exclusiva cuenta los honorarios de abogados, gastos y costas que ocasionen, el o los litigios que en su caso inicie <b>PRESTTO</b> , en mi contra, por incumplimiento en el pago puntual de mis obligaciones.
                    Para todo lo relativo a la interpretación, cumplimiento y ejecución de este pagaré me someto expresamente a la jurisdicción de los Tribunales Federales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiere corresponderles en virtud de sus domicilios presentes o futuros., o por cualquier otro motivo. Ciudad de México a 14 de octubre del 2020.
                                        
                    ÁLVARO RODRIGO AUTORIZO MEDIANTE MEDIOS ELECTRÓNICOS EN TÉRMINOS DEL ARTÍCULO 89 BIS DEL CÓDIGO DE COMERCIO VIGENTE.
                                    

                    Anexo A 
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
                    En los actos de comercio y en la formación de los mismos podrán emplearse los medios electrónicos, ópticos o cualquier otra tecnología. Para efecto del presente Código, se deberán tomar en cuenta las siguientes definiciones:				
                    Certificado: Todo Mensaje de Datos u otro registro que confirme el vínculo entre un Firmante y los datos de creación de Firma Electrónica.
                    Datos de Creación de Firma Electrónica: Son los datos únicos, como códigos o claves criptográficas privadas, que el Firmante genera de manera secreta y utiliza para crear su Firma Electrónica, a fin de lograr el vínculo entre dicha Firma Electrónica y el Firmante.
                    Destinatario: La persona designada por el Emisor para recibir el Mensaje de Datos, pero que no esté actuando a título de Intermediario con respecto a dicho Mensaje.
                    Digitalización: Migración de documentos impresos a mensaje de datos, de acuerdo con lo dispuesto en la norma oficial mexicana sobre digitalización y conservación de mensajes de datos que para tal efecto emita la Secretaría.
                    Emisor: Toda persona que, al tenor del Mensaje de Datos, haya actuado a nombre propio o en cuyo nombre se haya enviado o generado ese mensaje antes de ser archivado, si este es el caso, pero que no haya actuado a título de Intermediario.
                    Firma Electrónica: Los datos en forma electrónica consignados en un Mensaje de Datos, o adjuntados o lógicamente asociados al mismo por cualquier tecnología, que son utilizados para identificar al Firmante en relación con el Mensaje de Datos e indicar que el Firmante aprueba la información contenida en el Mensaje de Datos, y que produce los mismos efectos jurídicos que la firma autógrafa, siendo admisible como prueba en juicio.
                    Firma Electrónica Avanzada o Fiable: Aquella Firma Electrónica que cumpla con los requisitos contemplados en las fracciones I a IV del artículo 97.				
                    En aquellas disposiciones que se refieran a Firma Digital, se considerará a esta como una especie de la Firma Electrónica. 
                    Firmante: La persona que posee los datos de la creación de la firma y que actúa en nombre propio o de la persona a la que representa. 					
                    Intermediario: En relación con un determinado Mensaje de Datos, se entenderá toda persona que, actuando por cuenta de otra, envíe, reciba o archive dicho Mensaje o preste algún otro servicio con respecto a él.
                    Mensaje de Datos: La información generada, enviada, recibida o archivada por medios electrónicos, ópticos o cualquier otra tecnología.
                    Parte que Confía: La persona que, siendo o no el Destinatario, actúa sobre la base de un Certificado o de una Firma Electrónica.
                    Prestador de Servicios de Certificación: La persona o institución pública que preste servicios relacionados con firmas electrónicas, expide los certificados o presta servicios relacionados como la conservación de mensajes de datos, el sellado digital de tiempo y la digitalización de documentos impresos, en los términos que se establezca en la norma oficial mexicana sobre digitalización y conservación de mensajes de datos que para tal efecto emita la Secretaría.
                    Secretaría: Se entenderá la Secretaría de Economía.
                    Sello Digital de Tiempo: El registro que prueba que un dato existía antes de la fecha y hora de emisión del citado Sello, en los términos que se establezca en la norma oficial mexicana sobre digitalización y conservación de mensajes de datos que para tal efecto emita la Secretaría.
                    Sistema de Información: Se entenderá todo sistema utilizado para generar, enviar, recibir, archivar o procesar de alguna otra forma Mensajes de Datos.
                    Titular del Certificado: Se entenderá a la persona a cuyo favor fue expedido el Certificado. 
                    Artículo 89 bis.- No se negarán efectos jurídicos, validez o fuerza obligatoria a cualquier tipo de información por la sola razón de que esté contenida en un Mensaje de Datos. Por tanto, dichos mensajes podrán ser utilizados como medio probatorio en cualquier diligencia ante autoridad legalmente reconocida, y surtirán los mismos efectos jurídicos que la documentación impresa, siempre y cuando los mensajes de datos se ajusten a las disposiciones de este Código y a los lineamientos normativos correspondientes.			
                    CÓDIGO PENAL FEDERAL
                    Artículo 139 Quáter.- Se impondrá la misma pena señalada en el artículo 139 de este Código, sin perjuicio de las penas que corresponden por los demás delitos que resulten, al que por cualquier medio que fuere ya sea directa o indirectamente, aporte o recaude fondos económicos o recursos de cualquier naturaleza, con conocimiento de que serán destinados para financiar o apoyar actividades de individuos u organizaciones terroristas, o para ser utilizados, o pretendan ser utilizados, directa o indirectamente, total o parcialmente, para la comisión, en territorio nacional o en el extranjero, de cualquiera de los delitos previstos en los ordenamientos legales siguientes: 
                    Del Código Penal Federal, los siguientes: 
                    Terrorismo, previstos en los artículos 139, 139 Bis y 139 Ter; 
                    Sabotaje, previsto en el artículo 140 
                    Terrorismo Internacional, previsto en los artículos 148 Bis, 148 Ter y 148 Quáter; 
                    Ataques a las vías de comunicación, previstos en los artículos 167, fracción IX, y 170, párrafos primero, segundo y tercero, y 
                    Robo previsto en el artículo Quinquies.
                    De la ley que Declara Reservas Mineras los yacimientos de Uranio, Torio y las demás substancias de las cuales se obtengan isótopos hendibles que puedan producir energía nuclear, los previstos en los artículos 10 y 13. 
                    Artículo 400 Bis. Se impondrá de cinco a quince años de prisión y de mil a cinco mil días multa al que, por sí o por interpósita persona realice cualquiera de las siguientes conductas:
                    I. Adquiera, enajene, administre, custodie, posea, cambie, convierta, deposite, retire, dé o reciba por cualquier motivo, invierta, traspase, transporte o transfiera, dentro del territorio nacional, de este hacia el extranjero o a la inversa, recursos, derechos o bienes de cualquier naturaleza, cuando tenga conocimiento de que proceden o representan el producto de una actividad ilícita, o
                    II. Oculte, encubra o pretenda ocultar o encubrir la naturaleza, origen, ubicación, destino, movimiento, propiedad o titularidad de recursos, derechos o bienes, cuando tenga conocimiento de que proceden o representan el producto de una actividad ilícita.
                    Para efectos de este Capítulo, se entenderá que son producto de una actividad ilícita, los recursos, derechos o bienes de cualquier naturaleza, cuando existan indicios fundados o certeza de que provienen directa o indirectamente, o representan las ganancias derivadas de la comisión de algún delito y no pueda acreditarse su legítima procedencia.
                    En caso de conductas previstas en este Capítulo, en las que se utilicen servicios de instituciones que integran el sistema financiero, para proceder penalmente se requerirá la denuncia previa de la Secretaría de Hacienda y Crédito Público.
                    Cuando la Secretaría de Hacienda y Crédito Público, en ejercicio de sus facultades de fiscalización, encuentre elementos que permitan presumir la comisión de alguno de los delitos referidos en este Capítulo, deberá ejercer respecto de los mismos las facultades de comprobación que le confieren las leyes y denunciar los hechos que probablemente puedan constituir dichos ilícitos. 			
                    LEY GENERAL DE TÍTULOS Y OPERACIONES DE CRÉDITO				
                    Artículo 299.- (...)				
                    Negociado o cedido el crédito por el acreditante, este abonará al acreditado, desde la fecha de tales actos, los intereses correspondientes al importe de la disposición de que dicho crédito proceda, conforme al tipo estipulado en la apertura de crédito; pero el crédito concedido no se entenderá renovado por esa cantidad, sino cuando las partes así lo hayan convenido.		
                    LEY PARA REGULAR LAS SOCIEDADES DE INFORMACIÓN CREDITICIA
                    Artículo 28.- Las Sociedades solo podrán proporcionar información a un Usuario, cuando este cuente con la autorización expresa del Cliente, mediante su firma, en donde conste de manera fehaciente que tiene pleno conocimiento de la naturaleza y alcance de la información que la Sociedad proporcionará al Usuario que así la solicite, del uso que dicho Usuario hará de tal información y del hecho de que este podrá realizar consultas periódicas de su historial crediticio, durante el tiempo que mantenga relación jurídica con el Cliente. La firma a que se refiere este párrafo podrá ser recabada de manera autógrafa o por medios electrónicos, en este último caso, siempre que cumpla con los términos y condiciones establecidos por el Banco de México.
                    Las Sociedades podrán proporcionar información a los Usuarios que adquieran o administren cartera de crédito, utilizando para ello la autorización que el Cliente haya dado conforme al presente artículo al Usuario que otorgó el crédito respectivo originalmente. 
                    Asimismo, el Banco de México podrá autorizar a las Sociedades los términos y condiciones bajo los cuales podrán pactar con los Usuarios la sustitución de la firma autógrafa del Cliente, con alguna de las formas de manifestación de la voluntad señaladas en el artículo 1803 del Código Civil Federal.
                    La autorización expresa a que se refiere este artículo será necesaria tratándose de:			
                    Personas físicas, y  					 	 
                    Personas morales con créditos totales inferiores a cuatrocientas mil UDIS, de conformidad con el valor de dicha unidad publicado por el Banco de México a la fecha en que se presente la solicitud de información. Los Usuarios que realicen consultas relacionadas con personas morales con créditos totales superiores a cuatrocientas mil UDIS, no requerirán de la autorización expresa a que se refiere el presente artículo. 			
                    La obligación de obtener las autorizaciones a que se refiere este artículo, no aplicará a la información solicitada por el Banco de México, la Comisión, las autoridades judiciales en virtud de providencia dictada en juicio en que el Cliente sea parte o acusado y por las autoridades hacendarias federales, cuando la soliciten a través de la Comisión, para fines fiscales, de combate al blanqueo de capitales o de acciones tendientes a prevenir y castigar el financiamiento del terrorismo.

                    La vigencia de la autorización prevista en el primer párrafo de este artículo será de un año contado a partir de su otorgamiento, o hasta dos años adicionales a ese año si el Cliente así lo autoriza expresamente. En todo caso, la vigencia permanecerá mientras exista relación jurídica entre el Usuario y el Cliente.

                    Los Reportes de Crédito Especiales que sean entregados a los Clientes en términos de esta ley deberán contener la identidad de los Usuarios que hayan consultado su información en los veinticuatro meses anteriores.

                    Cuando el texto que contenga la autorización del Cliente forme parte de la documentación que deba firmar el mismo para gestionar un servicio ante algún Usuario, dicho texto deberá incluirse en una sección especial dentro de la documentación citada y la firma autógrafa del Cliente relativa al texto de su autorización deberá ser una firma adicional a la normalmente requerida por el Usuario para el trámite del servicio solicitado.

                    Se entenderá que violan las disposiciones relativas al Secreto Financiero tanto la Sociedad, como sus empleados o funcionarios que participen en alguna consulta a sabiendas de que no se ha recabado la autorización a que se refiere este artículo, en los términos de los artículos 29 y 30 siguientes.

                    Se considerará que los Usuarios, así como sus empleados o funcionarios involucrados, han violado las disposiciones relativas al Secreto Financiero, cuando realicen consultas o divulguen información en contravención a lo establecido en los artículos mencionados en el párrafo anterior.

                    Las Sociedades, sus empleados y funcionarios tendrán prohibido proporcionar información relativa a datos personales de los Clientes para comercialización de productos o servicios que pretendan ofrecer los Usuarios o cualquier tercero, salvo para la realización de consultas relativas al historial crediticio. Quien proporcione información en contravención a lo establecido en este párrafo, incurrirá en el delito de revelación de secretos a que se refiere el artículo 210 del Código Penal Federal. 
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



