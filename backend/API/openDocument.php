<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];

if($method == "OPTIONS") {
	die();
}


          $nombre=$_GET['nombre'];
          $apellidopaterno=$_GET['apellidopaterno'];
          $apellidomaterno=$_GET['apellidomaterno'];
          $celular=$_GET['celular'];
          $email =$_GET['email'];
          $aceptoterminoscondicionescel=$_GET['aceptoterminoscondicionescel'];
          $historialcrediticio=$_GET['historialcrediticio'];
          $conocimientodelcliente=$_GET['conocimientodelcliente'];
          $genero=$_GET['genero'];
          $curp=$_GET['curp'];
          $rfc=$_GET['rfc'];
          $cp=$_GET['cp'];
          $estado=$_GET['estado'];
          $municipio=$_GET['municipio'];
          $ciudad=$_GET['ciudad'];
          $colonia=$_GET['colonia'];
          $calle=$_GET['calle'];
          $numeroexterior=$_GET['numeroexterior'];
          $numerointerior=$_GET['numerointerior'];
          $telefonofijo=$_GET['telefonofijo'];
          $parentesco=$_GET['parentesco'];
          $referenciapellido=$_GET['referenciapellido'];
          $telfijoreferencia=$_GET['telfijoreferencia'];
          $nivelestudios=$_GET['nivelestudios'];
          $salarioneto=$_GET['salarioneto'];
          $ocupacion=$_GET['ocupacion'];
          $detalleocupacion=$_GET['detalleocupacion'];
          $deudas=$_GET['deudas'];
          $frecuenciadepago=$_GET['frecuenciadepago'];
          $clabe=$_GET['clabe'];
          $bancoclabe=$_GET['bancoclabe'];
          $titulartarjeta=$_GET['titulartarjeta'];
          $fechadevencimiento=$_GET['fechadevencimiento'];
          $numerotarjeta=$_GET['numerotarjeta'];
          $bancotarjeta=$_GET['bancotarjeta'];
          $dineroquenecesita=$_GET['dineroquenecesita'];
          $fechadepagoen=$_GET['fechadepagoen'];
         $totalapagar=$_GET['totalaprestar'];
          $setValue=$_GET['totalaprestar'];
          $aceptoterminoscondicionescontrato=$_GET['aceptoterminoscondicionescontrato'];
          $pictures1=$_GET['pictures1'];
          $pictures2=$_GET['pictures2'];
          $aceptocontrato=$_GET['aceptocontrato'];
          $password=$_GET['password'];
          $idcontrato=$_GET['idcontrato'];
          $contrato=$_GET['contrato'];
          $idsms=$_GET['idsms'];
          $idpago='pendiente';
          $idsugerencia='pendiente';
          $timer=$_GET['timer'];

        $fecha= date("Y/m/d");
        $cattotal ="133.38%";

        ob_start();

require_once 'dompdf/autoload.inc.php';

use Dompdf\Dompdf;

$full_path = '/public_html/api';
$domdpf = new Dompdf();
$domdpf -> loadHtml(
'
<style>
body {
  font-family: "Montserrat","Open Sans", sans-serif;
  font-size:12px;
}
table{
    width:100%;
}
 td {
  border: 2px solid#0a0e44;
}
tr {
  padding: 5px;
}
.logo {
  color:#5a3186;
  font-weight: 900;
  width: 100%;
  text-align: right;
  font-size: 35px;
}
</style>
       <p class="logo">prestto</p>
      <table className="contrato-table">
        <tr className="row-contrato morado_bg" width="100%">
          <td className="colr col-fecha"><b>Fecha:  '.$fecha.'</b></td>
          <td className="colr text-right"><b>N&Uacute;MERO DE CONTRATO:'.$idcontrato.'</b></td>
        </tr>
      </table>
      <table className="contrato-table">
        <tr className="row-contrato-m">
        <td>CAR&Aacute;TULA DEL CONTRATO DE CR&Eacute;DITO que forma parte integrante del contrato de cr&Eacute;dito simple, que celebran por una parte AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R., “PRESTTO” con domicilio en Av. Nuevo Le&oacute;n #213 - 602 Col. Condesa, Cuauht&eacute;moc, C.P. 06100, Ciudad de M&eacute;xico, RFC: AFI090129MZ2, y por la otra  '.$nombre.''.$apellidopaterno.' '.$apellidomaterno.'“EL CLIENTE”, con domicilio en calle  numerointerior  colonia  ciudad   municipio  estado  cp</td>
        </tr>
      </table>
      <br></br>
      <table className="contrato-table">
        <tr className="row-contrato morado_bg">
          <td className="colr col-fecha text-center"><b>NOMBRE DEL PRODUCTO: PRODUCT_NIVEL 1 <br></br>TIPO DE PR&Eacute;STAMO: CR&Eacute;DITO SIMPLE </b></td>
        </tr>
      </table>
      <table className="contrato-table">
        <tr className="row-contrato-m">
          <td className="td-ex text-center"><b>CAT sin IVA (COSTO ANUAL TOTAL)</b></td>
          <td className="td-ex text-center"><b>TASA DE INTER&Eacute;S ANUAL ORDINARIA </b></td>
          <td className="td-ex text-center"><b>TASA DE INTER&Eacute;S ANUAL MORATORIA</b></td>
          <td className="td-ex text-center"><b>MONTO DEL CR&eacute;DITO</b></td>
          <td className="td-ex text-center"><b>MONTO TOTAL A PAGAR</b></td>
        </tr>
      </table>
      <table className="contrato-table">
        <tr className="row-contrato-m">
          <td className="td-ex text-center"><b>'.$cattotal.'</b> <br></br>(Para fines informativos y de comparaci&oacute;n exclusivamente) </td>
          <td className="td-ex text-center"><b>493%</b></td>
          <td className="td-ex text-center"><b>986%</b></td>
          <td className="td-ex text-center"><b>'.$setValue.' </b></td>
          <td className="td-ex text-center"><b>'.$totalapagar.'</b></td>
        </tr>
      </table>
      <table className="contrato-table">
        <tr className="row-contrato-m">
          <td className="td-ex text-center"><b>COMISIONES</b> <br></br>`EXTENSI&oacute;N Fija seg&uacute;n el plazo, m&aacute;s IVA Cl&aacute;usula: D&eacute;cima COBRANZA $ 600.00 (Seiscientos pesos MN 00/100) m&aacute;s IVA Cl&aacute;usula: D&eacute;cima</td>
          <td className="td-ex text-center"><b>PLAZO DEL CR&eacute;DITO APROBADO <br></br>'.$fechadepagoen.'</b></td>
          <td className="td-ex-b"><b>FECHAS DEL PAGO <br></br>'.$fechadepagoen.'</b></td>
        </tr>
      </table>
      <table className="contrato-table">
        <tr className="row-contrato-m">
          <td className="td-ex text-center"><b>EXTENSI&oacute;N Fija</b></td>
          <td className="td-ex text-center"><b>'.$fechadepagoen.'</b></td>
          <td className="td-ex-b"><b>Fecha l&iacute;mite de pago: '.$fechadepagoen.'<br></br>Fecha al corte: '.$fechadepagoen.'</b></td>
        </tr>
      </table>
      <table className="contrato-table">
        <tr className="row-contrato-m">
          <td><b>C&aacute;lculo de Inter&Eacute;s Moratorio:</b> Los Intereses Moratorios se calcular&aacute;n sobre saldos insolutos diarios durante la totalidad del plazo comprendido entre la Fecha de Pago aplicable a un cr&Eacute;dito y la fecha en que efectivamente se realice el pago total de las obligaciones del el Cliente conforme al contrato.</td>
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
          <td className="td-ex"><b>RECLAMACI&Oacute;N IMPROCEDENTE: N/A</b></td>
        </tr>
      </table>
      <table className="contrato-table">
        <tr className="row-contrato-m">
          <td><b>Medios Electr&oacute;nicos:</b> “EL Cliente”, sabe, reconoce y acepta que la presente car&aacute;tula, as&iacute; como el Contrato de Cr&Eacute;dito se celebra por medios electr&oacute;nicos, d&aacute;ndole plena validez en t&Eacute;rminos de los art&iacute;culos 1803 fracci&oacute;n I del C&oacute;digo Civil Federal, 80, 89 y 89 Bis C&oacute;digo de Comercio y la NOM-151-SCFI-2002, acordando ambas partes que para la comprobaci&oacute;n fehaciente de este acto jur&iacute;dico bastar&aacute; un correo electr&oacute;nico o la aceptaci&oacute;n del deudor de las condiciones generales del instrumento a trav&Eacute;s de la p&aacute;gina web de donde lo obtuvo.</td>
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
            <td><b>Unidad Especializada para Atenci&oacute;n a Usuarios PRESTTO (UNE PRESTTO)</b></td>
          </tr>
          <tr className="row-contrato-ma">
            <td><b>Domicilio:</b>Av. Nuevo Le&oacute;n #213 - 602 Col. Condesa, Cuauht&eacute;moc, C.P. 06100, Ciudad de M&eacute;xico</td>
          </tr>
          <tr className="row-contrato-ma">
            <td><b>Tel&eacute;fono: </b>A+52 1 55 8038 7757 <br><b>Correo electr&oacute;nico:</b> clientes@PRESTTO.mx P&aacute;gina de Internet: https://prestto.mx/</td>
          </tr>
          <tr className="row-contrato-ma">
            <td><b>PROFECO:</b> Tel&eacute;fono. 800 468 8722. <b>P&aacute;gina de Internet: </b> https://www.gob.mx/profeco</td>
          </tr>
      </table>
        <br></br>
        <table className="contrato-table">
        <tr className="row-contrato morado_bg">
          <td className="colr col-fecha text-center"><b>ADVERTENCIA:</b></td>
        </tr>
      </table>
        <table className="contrato-table">
        <tr className="row-contrato-ma">
            <td className="contrafir">
              “INCUMPLIR CON LAS OBLIGACIONES AQU&iacute; PACTADAS PUEDE GENERAR COMISIONES E INTERESES MORATORIOS” <br></br>
              “CONTRATAR PR&Eacute;STAMOS Y/O CR&Eacute;DITOS POR ARRIBA DE TU CAPACIDAD DE PAGO PUEDE AFECTAR TU HISTORIAL CREDITICIO” 
            </td>
        </tr>
        <tr className="row-contrato-ma">
            <td className="contrafir">
              <b>EL Cliente</b>, expresamente declara que <b>PRESTTO</b>  le ha explicado el contenido y alcance de las condiciones generales de este cr&Eacute;dito conforme con el contenido del cuadro informativo arriba descrito, las cuales acepta de conformidad, en la Ciudad de M&Eacute;xico, en la fecha arriba mencionada.
            </td>
        </tr>
        <tr className="row-contrato-ma">
            <td className="contrafir">
            <SignatureCanvas canvasProps={{width: 500, height: 100 }} />
            </td>
        </tr>
        <tr className="row-contrato-ma">
            <td className="contrafir">
              <b>  nombre  apellidopaterno  apellidomaterno</b>
            </td>
        </tr>
      </table>
      <br></br>
      <hr className="line_contra"></hr>
      <p className="footer_pie">Av. Nuevo Le&oacute;n 213-602 Col.Condesa, CDMX<br>clientes@prestto.mx<br>www.prestto.mx</p>
      <p class="logo">prestto</p>
      <br></br>
              CONTRATO DE ADHESI&Oacute;N DE CR&Eacute;DITO SIMPLE QUE CELEBRAN, POR UNA PARTE A, AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R.,, A QUIEN EN LO SUCESIVO Y PARA EFECTOS DEL PRESENTE CONTRATO SER&aacute; DENOMINADA “PRESTTO” Y POR LA OTRA PARTE Y POR SU PROPIO DERECHO nombre  apellidopaterno  apellidomaterno A QUIEN EN LO SUCESIVO Y PARA EFECTOS DEL PRESENTE CONTRATO SE LE DENOMINAR&aacute; “EL CLIENTE” Y CONJUNTAMENTE CON PRESTTO “LAS PARTES” AL TENOR DE LOS SIGUIENTES ANTECEDENTES, DECLARACIONES Y CL&aacute;USULAS:
              <br></br><br></br>
              ANTECEDENTES
              PRIMERO. EL CLIENTE formul&oacute; a trav&Eacute;s de la p&aacute;gina de internet https://prestto.mx/ una solicitud (en adelante, la Solicitud), a trav&Eacute;s de la cual requiri&oacute; a PRESTTO, el otorgamiento de un cr&Eacute;dito simple, en moneda nacional (en adelante, el Cr&Eacute;dito). <br></br>
              SEGUNDO. PRESTTO, revisar&aacute; y analizar&aacute; la Solicitud, as&iacute; como de la informaci&oacute;n y documentaci&oacute;n que le fue proporcionada por el CLIENTE, para autorizar en definitiva dicha Solicitud.
              <br></br><br></br>
              DECLARACIONES
              <br></br>
              I. Declara PRESTTO, que:<br></br>
              a) Es una  Sociedad Financiera de Objeto M&uacute;ltiple No Regulada (SOFOM E.N.R.). Conforme a las leyes de los Estados Unidos Mexicanos, mediante escritura pública número 24,595 de fecha 16 de julio de 2014, otorgada ante la fe del Licenciado Carlos Francisco Castro Su&aacute;rez, Notario Público número 110 del Estado de M&Eacute;xico.<br></br>
              
              b) Que se encuentra inscrito ante el registro federal de contribuyentes (RFC) con clave: AFI090129MZ2<br></br>
              
              c) Se&nacute;ala como su domicilio, para los efectos relacionados con el presente contrato, el ubicado en Av. Nuevo Le&oacute;n #213 - 602 Col. Condesa, Cuauht&eacute;moc, C.P. 06100, Ciudad de M&eacute;xico.<br></br>
              
              d) Su p&aacute;gina de Internet se encuentra ubicada en la direcci&oacute;n: https://prestto.mx/<br></br>
                        
              e) Que da estricto cumplimiento a lo establecido en la Ley Federal de Protecci&oacute;n de Datos Personales en posesi&oacute;n de Particulares, y su Reglamento, respecto de la informaci&oacute;n personal proporcionada por sus clientes, asegurando la confidencialidad de la misma y estableciendo que solamente la utilizar&aacute; con la finalidad de corroborar la informaci&oacute;n proporcionada por El CLIENTE, respecto de su capacidad jur&iacute;dica y financiera a efectos de contratar los productos y servicios establecidos en el presente Contrato; as&iacute; como para rendir informes tanto a autoridades administrativas como judiciales que debidamente justificadas en disposiciones legales, as&iacute; lo solicitaren.
              <br></br>
              f) Que se encuentra a disposici&oacute;n del CLIENTE en las oficinas de PRESTTO, el Anexo que contiene  las disposiciones legales referidas expresamente en el presente Contrato, mismas que tambi&Eacute;n podr&aacute;n ser consultadas en la p&aacute;gina web https://prestto.mx/<br></br>
              Es su intenci&oacute;n otorgar al CLIENTE el Cr&Eacute;dito solicitado, conforme a lo estipulado en el presente Contrato. <br></br>
              II. Declara el CLIENTE, que:<br></br>
              a) Es una persona f&iacute;sica, mayor de edad, con capacidad legal y facultades suficientes para celebrar el presente Contrato, as&iacute; como para asumir y dar cumplimiento a las obligaciones que en el mismo se establecen. <br></br>
              b) Que su Registro Federal de Contribuyentes (RFC) es:<b> { rfc }</b>, y su Clave Única de Registro de Poblaci&oacute;n es: <b>{curp}</b> .<br></br>
              c) Se&nacute;ala como su domicilio, para los efectos relacionados con el Contrato, el indicado en la Solicitud, mencionada en el Antecedente Primero del presente instrumento.<br></br>
              d) PRESTTO, con anterioridad a la fecha de celebraci&oacute;n del Contrato, ha hecho de su conocimiento el contenido del presente contrato y de todas las caracter&iacute;sticas aplicables al Cr&Eacute;dito.<br></br>
              e) Reconoce que detr&aacute;s de esta operaci&oacute;n no existe un Propietario Real, conforme a lo que estable la Ley Federal para la Prevenci&oacute;n e Identificaci&oacute;n de Operaciones con Recursos de Procedencia Il&iacute;cita, siendo el CLIENTE, el único y exclusivo beneficiario del cr&Eacute;dito solicitado.<br></br>
              f) Es su intenci&oacute;n que PRESTTO le otorgue el Cr&Eacute;dito, conforme a lo estipulado en el presente Contrato.<br></br>
              g) Declara bajo protesta de decir verdad que toda la informaci&oacute;n y documentaci&oacute;n que present&oacute; y proporcion&oacute; a PRESTTO a la fecha de firma del presente contrato es actual, verdadera y carece de error, vicios del consentimiento o mala fe.<br></br>
              h) Cuenta con los recursos econ&oacute;micos suficientes para dar cumplimiento a las obligaciones que, en t&Eacute;rminos del Contrato, contrae a su cargo, mismos que provienen y provendr&aacute;n de fuentes l&iacute;citas. <br></br>
              i) Que recibi&oacute; a su entera satisfacci&oacute;n, comprendiendo el alcance de la misma, la siguiente informaci&oacute;n por parte de PRESTTO: I.-La cantidad total a pagar, as&iacute; como la forma y condiciones para su liquidaci&oacute;n; II.- Los intereses generados y dem&aacute;s cargas financieras; III.- Los montos accesorios; IV.- La descripci&oacute;n detallada del monto y cargos vinculados al cr&Eacute;dito amparado por el presente contrato; V.- La cantidad total a pagar, su fecha exacta de vencimiento, el número y monto de pagos individuales, intereses, comisiones, penalidades convencionales y cargos respectivos, incluidos los fijados por pagos anticipados o cancelaci&oacute;n; VI. El derecho y las condiciones para la liquidaci&oacute;n prematura del cr&Eacute;dito y sus accesorios; VII. Los intereses ordinarios causados, forma de calcularlos y el tipo de tasa aplicable; VIII. Los intereses moratorios en los que podr&iacute;a incurrir, la forma de calcularlos y el tipo de tasa aplicable.<br></br>
              j) Que con anterioridad a la celebraci&oacute;n del presente contrato, PRESTTO hizo de su conocimiento, a su entera comprensi&oacute;n, el contenido del presente instrumento y de los dem&aacute;s documentos a suscribir, as&iacute; como tambi&Eacute;n los cargos o gastos a generarse en relaci&oacute;n con el mismo, incluyendo m&aacute;s no limit&aacute;ndose al (CAT) “Costo Anual Total de financiamiento expresado en t&Eacute;rminos porcentuales anuales que, para fines informativos y de comparaci&oacute;n, incorpora la totalidad de los costos y gastos inherentes a los Cr&Eacute;ditos” (sin incluir el impuesto al valor agregado (IVA), correspondiente al presente cr&Eacute;dito).<br></br>
              k) Que no desempe&nacute;a actualmente o ha desempe&nacute;ado en los últimos dos a&nacute;os anteriores a la fecha de la firma del presente contrato, actividades que lo categoricen como persona pol&iacute;ticamente expuesta, incluyendo m&aacute;s no limit&aacute;ndose a funciones públicas destacadas en un pa&iacute;s extranjero o en territorio nacional, considerando entre otros, a los jefes de estado o de gobierno, l&iacute;deres pol&iacute;ticos, funcionarios gubernamentales, judiciales o militares de alta jerarqu&iacute;a, altos ejecutivos de empresas estatales o funcionarios o miembros importantes de partidos pol&iacute;ticos. <br></br>
              l) Que a su leal saber y entender ninguna de las personas con las cuales guarda parentesco por consanguineidad o afinidad hasta en segundo grado, su c&oacute;nyuge, concubina, concubinario y/o persona moral alguna con la cual mantenga v&iacute;nculos patrimoniales realizan o han realizado las actividades descritas en el inciso k bajo los mismos t&Eacute;rminos. <br></br>
              Para efectos del Contrato, las PARTES asignan a los t&Eacute;rminos se&nacute;alados a continuaci&oacute;n, el significado que en cada caso se les atribuye, a menos que el contexto en que se utilicen, implique un concepto diferente y as&iacute; se indique, independientemente de su utilizaci&oacute;n en singular o en plural. <br></br>
              a) Car&aacute;tula del Contrato de Cr&Eacute;dito. Documento que forma parte integrante del presente Contrato, que suscribe el Cliente por cada operaci&oacute;n, cr&Eacute;dito o servicio que contrate, en el cual se establecen las caracter&iacute;sticas aplicables al cr&Eacute;dito otorgado por PRESTTO.<br></br>
              b) CAT: Costo Anual Total de Financiamiento expresado en t&Eacute;rminos anuales porcentuales que, para fines informativos y de comparaci&oacute;n, incorpora la totalidad de los costos y gastos inherentes a los cr&Eacute;ditos, pr&Eacute;stamos o financiamientos que otorgan las entidades financieras, de conformidad con las disposiciones que al efecto emita el Banco de M&Eacute;xico.<br></br>
              c) Comisi&oacute;n por Extensi&oacute;n. Significa la comisi&oacute;n que el CLIENTE podr&aacute; pagar antes o hasta en la Fecha de Pago para obtener una pr&oacute;rroga para el pago total del cr&Eacute;dito en ese momento vigente. Esta comisi&oacute;n podr&aacute; ser variable por cada pr&Eacute;stamo efectuado al CLIENTE.<br></br>
              d) Comisi&oacute;n por Gastos de Cobranza. Significa la comisi&oacute;n que el CLIENTE deber&aacute; pagar en caso de retrasarse en el pago de cualesquiera cantidades a su cargo bajo este Contrato conforme al importe indicado en la Car&aacute;tula del Contrato de Cr&Eacute;dito.<br></br>
              e) Cr&Eacute;dito. Es la operaci&oacute;n financiera objeto del presente contrato, que consiste en el otorgamiento que hace PRESTTO al CLIENTE de una cantidad determinada de dinero, oblig&aacute;ndose &Eacute;ste último a devolver la cantidad solicitada en los t&Eacute;rminos y condiciones estipulados en el Contrato.<br></br>
                        
              f) D&iacute;a H&aacute;bil. Es cualquier d&iacute;a de la semana, excluyendo los d&iacute;as s&aacute;bado y domingo, as&iacute; como los d&iacute;as en que, conforme a las disposiciones aplicables, las instituciones de cr&Eacute;dito deban cerrar sus puertas, suspender operaciones y la prestaci&oacute;n de servicios al público.<br></br>
              
              g) Documentos de Identificaci&oacute;n. Se refiere a los documentos de identificaci&oacute;n que, conforme a la legislaci&oacute;n vigente, se requieren para el otorgamiento de un cr&Eacute;dito. Y son, comprobante de domicilio, y cualquier identificaci&oacute;n oficial; que puede ser cualquiera de los siguientes documentos: Credencial para Votar (INE).<br></br>
              i) Extensi&oacute;n. Significa el derecho que el CLIENTE adquiere mediante el pago de una Comisi&oacute;n por Extensi&oacute;n para diferir la Fecha L&iacute;mite de Pago del Cr&Eacute;dito entonces vigente, en los t&Eacute;rminos establecidos en este Contrato.<br></br>
              h) Fecha de Disposici&oacute;n. Es el d&iacute;a en que PRESTTO acredita de manera efectiva el importe del Cr&Eacute;dito al CLIENTE a trav&Eacute;s de cualquiera de los medios de disposici&oacute;n previstos en el presente Contrato.<br></br>
              j) Fecha de Corte. Corresponde al d&iacute;a o los d&iacute;as en que el CLIENTE deber&aacute; pagar a PRESTTO el respectivo Pago Parcial o el Pago Total incluyendo las comisiones, intereses y dem&aacute;s accesorios aplicables (según sea el caso) y, el o los d&iacute;as en que PRESTTO marca como el fin de un periodo de registro de los pagos que realiz&oacute; el CLIENTE.<br></br>
              k) Fecha L&iacute;mite de Pago. Es el d&iacute;a h&aacute;bil en el que el CLIENTE deber&aacute; pagar a PRESTTO el respectivo Pago Total incluyendo las comisiones, intereses y dem&aacute;s accesorios aplicables (según sea el caso).<br></br>
              l) Importe del Cr&Eacute;dito. Es el monto del Cr&Eacute;dito otorgado al CLIENTE por PRESTTO, el cual se indica inicialmente en la Car&aacute;tula del Contrato de Cr&Eacute;dito.
              m) Medios Electr&oacute;nicos: Significan cualesquiera medios electr&oacute;nicos de comunicaci&oacute;n actualmente conocidos o por inventarse, incluyendo sin limitar los siguientes: (i) v&iacute;a telef&oacute;nica en el servicio que PRESTTO opere para su operaci&oacute;n comercial; y (ii) a trav&Eacute;s del Portal de Internet.<br></br>
              El CLIENTE sabe, reconoce y acepta que el presente Contrato se celebra por medios electr&oacute;nicos, d&aacute;ndole plena validez en t&Eacute;rminos de los art&iacute;culos 1803 fracci&oacute;n I del C&oacute;digo Civil Federal, 80, 89 y 89 Bis C&oacute;digo de Comercio y la NOM-151-SCFI-2002, acordando ambas partes que para la comprobaci&oacute;n fehaciente de este acto jur&iacute;dico bastar&aacute; un correo electr&oacute;nico o la aceptaci&oacute;n del deudor de las condiciones generales del instrumento a trav&Eacute;s del Portal de internet  https://prestto.mx/ de donde lo obtuvo. <br></br>
              n) Monto Total del Cr&Eacute;dito. Es el monto correspondiente al Importe del Cr&Eacute;dito m&aacute;s los intereses ordinarios, comisiones, impuesto al valor agregado y dem&aacute;s conceptos expresamente se&nacute;alados en este Contrato. <br></br>
              o) Pago Adelantado. Es el monto que EL CLIENTE entrega a PRESTTO con anterioridad a que sea exigible un pago parcial o total del Cr&Eacute;dito, para que sea aplicado a cubrir el o los pagos peri&oacute;dicos inmediatos posteriores. <br></br>
              p) Pago Anticipado. Al pago parcial o total del Saldo Insoluto de un cr&Eacute;dito, antes de la fecha en que sea exigible. 		 	 	 		<br></br>
              q) Mi Cuental: Cuenta personal del CLIENTE en el Portal de Internet, disponible únicamente con el usuario y contrase&nacute;a generados por el CLIENTE.				<br></br>	
              r) Portal de Internet. Es la p&aacute;gina de Internet de  PRESTTO disponible en https://prestto.mx/<br></br>
              s) Solicitud. Es la petici&oacute;n que el CLIENTE realiz&oacute; a  PRESTTO, a trav&Eacute;s del Portal de Internet de este último, a efecto de que le sea otorgado el cr&Eacute;dito objeto del contrato<br></br>
              En virtud de los ANTECEDENTES, DECLARACIONES y DEFINICIONES anteriores, las PARTES otorgan y se sujetan a las siguientes: <br></br>
              <br></br><br></br>
              Cl&aacute;usulas <br></br>
                            
              PRIMERA. Objeto. En este acto PRESTTO, otorga un cr&Eacute;dito simple en favor del CLIENTE, por la cantidad de <b>{ totalapagar } </b> (cero MN 00/100) y el CLIENTE se obliga a restituir a PRESTTO el importe de cr&Eacute;dito, m&aacute;s los intereses, impuestos, comisiones y gastos que se generen por esta operaci&oacute;n y hasta la liquidaci&oacute;n total del cr&Eacute;dito, conforme a lo establecido en la Car&aacute;tula del Contrato de Cr&Eacute;dito.<br></br>
              <br></br>   
              1.2 El CLIENTE pagar&aacute; a PRESTTO por el Cr&Eacute;dito otorgado y a la o las fechas de vencimiento establecidas en el presente contrato, en una o varias exhibiciones, las cantidades estipuladas
              en la siguiente tabla:
              <br></br>     
              TABLA
              <br></br>   
              Cuando la fecha l&iacute;mite de pago sea en un d&iacute;a inh&aacute;bil debe aclararse que se recorrer&aacute; al siguiente d&iacute;a h&aacute;bil, sin que proceda el cobro de Comisiones o intereses moratorios.
              <br></br> 
        SEGUNDA. Disposici&oacute;n del Cr&Eacute;dito. El CLIENTE dispondr&aacute; del Cr&Eacute;dito en una sola exhibici&oacute;n mediante transferencia electr&oacute;nica de dinero a la Cuenta Clave Bancaria Estandarizada (CLABE) { clabe } o mediante dep&oacute;sito al número de tarjeta  { tarjetadebito } que el CLIENTE tiene abierta en la instituci&oacute;n bancaria denominada {bancotarjeta}, disposici&oacute;n que quedar&aacute; sujeta a que existan recursos disponibles que permitan a PRESTTO a hacer la entrega respectiva. 
              <br></br>    
              2.2 El cr&Eacute;dito se entender&aacute; dispuesto una vez que los recursos queden depositados en la cuenta se&nacute;alada en la cl&aacute;usula anterior y el comprobante de dicha operaci&oacute;n har&aacute; las veces del recibo m&aacute;s amplio y suficiente que en derecho proceda. 
              <br></br>
              2.3. El CLIENTE podr&aacute; cancelar el presente Contrato sin responsabilidad alguna y sin cobro de comisiones en un periodo de cinco d&iacute;as h&aacute;biles posteriores a la firma del presente Contrato y siempre y cuando no haya dispuesto del Cr&Eacute;dito. Para esto, el CLIENTE deber&aacute; presentar copia de los movimientos de su cuenta dentro del periodo que comprende la fecha del presente Contrato y cinco d&iacute;as h&aacute;biles posteriores, a efectos de comprobar que no han existido movimientos en la cuenta.
              <br></br>
              2.4. Transcurrido el t&Eacute;rmino anterior y en caso de que el CLIENTE haya dispuesto del Cr&Eacute;dito, deber&aacute; cumplir con todas y cada una de las obligaciones que se estipulan en este Contrato, incluyendo el pago &iacute;ntegro del Cr&Eacute;dito que se le otorga y los accesorios que se pudieran generar. 
              <br></br>
              TERCERA. Destino del Cr&Eacute;dito. El CLIENTE se obliga a destinar la cantidad total del cr&Eacute;dito recibido, tal y como lo manifest&oacute; en la solicitud de cr&Eacute;dito, para uso exclusivamente personal y para fines exclusivamente l&iacute;citos bajo estricto apercibimiento de las sanciones contempladas en los art&iacute;culos 139, 148 Bis o 400 Bis del C&oacute;digo Penal Federal, relativos a la prevenci&oacute;n de lavado de dinero y el financiamiento al terrorismo.
              <br></br>
              CUARTA. Vigencia del Contrato. El presente contrato tendr&aacute; como plazo m&aacute;ximo 7 d&iacute;as,  contados a partir de la fecha en la cual el CLIENTE recibi&oacute; en su cuenta la cantidad objeto del Cr&Eacute;dito por parte de PRESTTO debiendo realizar el pago en la cuenta se&nacute;alada en la cl&aacute;usula 5 respecto del total del Cr&Eacute;dito y sus accesorios o antes si incurren en las causales de vencimiento anticipado establecidas en la cl&aacute;usula 17 del presente contrato.			
              4.2. No obstante su terminaci&oacute;n, este Contrato producir&aacute; todos sus efectos legales, hasta que el CLIENTE haya liquidado en su totalidad todas las cantidades adeudadas a su cargo.		
              4.3. La terminaci&oacute;n del Contrato se podr&aacute; dar de manera anticipada de conformidad con lo establecido en la cl&aacute;usula 17 del presente contrato.					
              4.4. El CLIENTE podr&aacute; conocer la fecha l&iacute;mite de pago del cr&Eacute;dito contratado en todo momento, ingresando con su Usuario y Contrase&nacute;a a su Perfil en el Portal de Internet de la siguiente direcci&oacute;n: 
              https://prestto.mx/
              <br></br>
              4.5. El presente contrato NO es PRORROGABLE, salvo pacto en contrario con el consentimiento expreso del CLIENTE y mediante aprobaci&oacute;n de la solicitud de Extensi&oacute;n del mismo. 
              <br></br>       
              4.6 Cuando la terminaci&oacute;n del contrato sea por conducto de una ENTIDAD FINANCIERA esta liquidar&aacute; el adeudo del CLIENTE de acuerdo a la informaci&oacute;n que proporcione PRESTTO y una vez cubiertos los adeudos PRESTTO renunciar&aacute; a todos los derechos de cobro remanente que pudieran subsistir despu&Eacute;s del momento de la cancelaci&oacute;n.
              <br></br>
              QUINTA. Lugar y Forma de Pago. El pago del Cr&Eacute;dito que el CLIENTE deba hacer a favor de PRESTTO, derivado del presente contrato lo har&aacute; sin necesidad de gesti&oacute;n previa de cobros, recordatorio o notificaci&oacute;n de alg&uacute;n previo cobro. 
              <br></br>
              EL CLIENTE a su elecci&oacute;n, podr&aacute; realizar el pago correspondiente, a m&aacute;s tardar el d&iacute;a se&nacute;alado como fecha de vencimiento en la cl&aacute;usula 1, la cantidad indicada como gran total, mediante cualquiera de los siguientes m&Eacute;todos:
              <br></br>
              1.	Deposito Bancario Banorte y transferencia electr&oacute;nica
              <br></br>
              a)	Dep&oacute;sito al n&uacute;mero de cuenta 0300226122 a nombre AREZ FINANCIERA SA DE CV SOFOM ENR,  con n&uacute;mero de referencia 0000000  asignado al CLIENTE.
              <br></br>
              b)	Transferencia electr&oacute;nica a la Cuenta Clabe: 072180003002261226, a nombre AREZ FINANCIERA SA DE CV SOFOM ENR,  con n&uacute;mero de referencia 0000000 asignado al CLIENTE.
              <br></br>
              2.	Pago en  Efectivo
              <br></br>
              El pago se podr&aacute; realizar en cualquiera de los siguientes establecimientos: Walmart, Bodega Aurrera, Bodega, Aurrera Express, Mi Bodega Aurrera, Sam´s Club, Superama, Medimart Farmacia, Calimax, Tiendas Extra y C&iacute;rculo K y cobrar&aacute;n una comisi&oacute;n de $ 8.00 MXN por concepto de pago. Tiendas 7 Eleven cobrar&aacute;n una comisi&oacute;n de $10.00 MXN por concepto de pago. Tiendas siguientes: Telecomm, Soriana y Comercial Mexicana no cobrar&aacute;n ninguna comisi&oacute;n por concepto de pago. Durante los horarios de los mismos, utilizando el c&oacute;digo de barras proporcionado por PRESTTO a trav&Eacute;s del Portal de Internet. 
              <br></br>
              3.	Pagos con tarjeta a trav&eacute;s del portal de Internet. 
              <br></br>
              PRESTTO, se reserva el derecho de incorporar medios alternativos de pago, mismos que incluyen, m&aacute;s no se limitan a: dep&oacute;sitos o transferencias en cuentas bancarias alternas y pago directo en otras tiendas de conveniencia. PRESTTO publicar&aacute; y pondr&aacute; a disposici&oacute;n del CLIENTE un listado de dichas opciones alternas de pago en su Portal de Internet.
              <br></br>
              El CLIENTE deber&aacute; incluir el número de referencia, contrato o cr&Eacute;dito correspondiente como concepto de transferencia en cualquiera de los pagos realizados a favor de PRESTTO.
              <br></br>
              Cuando la fecha l&iacute;mite de pago sea en un d&iacute;a inh&aacute;bil esta se recorrer&aacute; al siguiente d&iacute;a h&aacute;bil, sin que proceda el cobro de Comisiones o intereses moratorios.
              <br></br>
              En caso de que el CLIENTE realice un pago parcial en exceso, autoriza que los recursos que se entregan en exceso a sus obligaciones exigibles se apliquen por concepto de pagos anticipados del principal, en caso que el excedente sea realizado en el pago total, acepta que el mismo le sea devuelto mediante dep&oacute;sito a la cuenta o tarjeta que se indica en la cl&aacute;usula 2 del presente contrato, previa solicitud que dirija a la Unidad Especializada de PRESTTO y se encuentre disponible al CLIENTE hasta en tanto no se solicite la devoluci&oacute;n correspondiente. 				
              <br></br>
              5.2. PRESTTO se reserva el derecho de utilizar la “Autorizaci&oacute;n de Cargo a Cuenta Bancaria” del CLIENTE, para el pago del cr&Eacute;dito otorgado al amparo del presente Contrato. Dicha domiciliaci&oacute;n podr&aacute; hacerse con cargo a una cuenta a la vista que el CLIENTE tenga abierta en alguna Instituci&oacute;n, misma que ha sido ingresada por el CLIENTE en el Portal de Internet y se se&nacute;ala en la cl&aacute;usula 2 del presente Contrato y para lo cual el CLIENTE deber&aacute; autorizar por escrito a dicha Instituci&oacute;n mediante la firma de una “Carta Autorizaci&oacute;n de Domiciliaci&oacute;n” misma que forma parte integral de este Contrato, con el visto bueno de PRESTTO, en donde se establezca la cuenta de la Instituci&oacute;n en donde se cargar&aacute;n los pagos, por la domiciliaci&oacute;n. El pago por domiciliaci&oacute;n se acreditar&aacute; en la(s) fecha(s) que PRESTTO acuerde con el CLIENTE, o en la fecha l&iacute;mite del pago del cr&Eacute;dito.
              <br></br>
              EL CLIENTE no podr&aacute; designar otra cuenta bancaria distinta a la se&nacute;alada en la cl&aacute;usula 2. 
              <br></br>
              EL CLIENTE podr&aacute; solicitar en cualquier momento, por cualquiera de los medios de contacto puestos a su disposici&oacute;n, la cancelaci&oacute;n del servicio de domiciliaci&oacute;n del pago de las cantidades adeudadas con cargo a su cuenta, sin responsabilidad alguna para PRESTTO, siendo que dicha solicitud surtir&aacute; efectos a m&aacute;s tardar a los 10 (diez) d&iacute;as h&aacute;biles siguientes posteriores a su recepci&oacute;n. El servicio de Domiciliaci&oacute;n ser&aacute; cancelado autom&aacute;ticamente una vez que el CLIENTE haya liquidado la totalidad de los saldos adeudados a favor de PRESTTO.
              <br></br>
              5.3. En caso de que EL CLIENTE se atrase en sus pagos, PRESTTO podr&aacute; extender el plazo para el pago del capital del Cr&Eacute;dito a su sola discreci&oacute;n, sin que se considere reestructura, descuento o quita, para lo cual EL CLIENTE deber&aacute; pagar los intereses ordinarios y moratorios generados a la fecha de la extensi&oacute;n, y cubrir dentro del nuevo periodo de pago establecido.
              <br></br>
              SEXTA. Costo Anual Total. El costo anual total de financiamiento expresado en t&Eacute;rminos porcentuales anuales que, para fines informativos y de comparaci&oacute;n, incorpora la totalidad de los costos y gastos inherentes al Cr&Eacute;dito (en adelante, el “CAT”), asciende al porcentaje indicado en la Car&aacute;tula del Contrato de Cr&Eacute;dito inicial. El CLIENTE reconoce que PRESTTO, previo a la celebraci&oacute;n del Contrato, hizo de su conocimiento el CAT.
              <br></br>
              S&Eacute;PTIMA. Prelaci&oacute;n de Pago. PRESTTO aplicar&aacute; las cantidades que reciba en pago, conforme al siguiente orden: i. Impuestos, ii. Comisiones iii. Intereses moratorios, iv. Intereses ordinarios y iv. Capital. En caso de que PRESTTO hubiera tenido que demandar al CLIENTE por incumplimiento, los pagos que realice se aplicar&aacute;n en primer lugar a los gastos y costas del juicio determinados por una autoridad judicial y despu&Eacute;s se seguir&aacute; el orden estipulado en la presente cl&aacute;usula. 
              <br></br>
              7.2 PRESTTO acreditar&aacute; el pago el mismo d&iacute;a en que el CLIENTE lo realice, siempre y cuando se efectúe en un D&iacute;a H&aacute;bil. En caso de que el pago se realice en un d&iacute;a inh&aacute;bil, el pago se acreditar&aacute; al D&iacute;a H&aacute;bil siguiente, sin que proceda el cobro de comisiones o intereses moratorios.
              <br></br>
              OCTAVA. Intereses Ordinarios. El CLIENTE se obliga a pagar a PRESTTO, por el otorgamiento del presente Cr&Eacute;dito y sin necesidad de previo requerimiento o cobro, por concepto de intereses ordinarios, sobre saldo insoluto, a raz&oacute;n de una tasa de inter&Eacute;s gradiente. Los intereses ordinarios se generar&aacute;n desde la fecha de dep&oacute;sito de la cantidad se&nacute;alada en la cl&aacute;usula número 1 y hasta el último d&iacute;a del plazo para el pago y ser&aacute;n exigidos únicamente por periodos vencidos. 
              <br></br>
              8.2. El c&aacute;lculo de los intereses ordinarios dentro de los primeros 3 d&iacute;as naturales se efectuar&aacute; de la siguiente forma: tasa promedio diaria multiplicada por 1 (uno) m&aacute;s 0.3688 dando como resultado la “Primer Tasa”, posteriormente el resto del periodo se calcular&aacute; de acuerdo a lo siguiente: tasa promedio diaria multiplicada por el plazo del cr&Eacute;dito otorgado menos el resultado de la “Primer Tasa” multiplicado por el periodo de la duraci&oacute;n de la primer tasa dividido entre el periodo de la duraci&oacute;n de la segunda tasa. Donde la “duraci&oacute;n de la primer tasa” se calcular&aacute; de la siguiente manera: plazo del cr&Eacute;dito otorgado menos 1 (uno) menos el plazo del cr&Eacute;dito otorgado dividido entre 2 (dos) en el caso en que la duraci&oacute;n de la primer tasa no sea un número entero se deber&aacute; redondear al número entero pr&oacute;ximo; y la “duraci&oacute;n de la segunda tasa” se calcular&aacute; de la siguiente manera: plazo del cr&Eacute;dito otorgado menos la duraci&oacute;n de la primer tasa. 
              <br></br>
              F&oacute;rmula:
              <br></br>   <br></br>
              Primer Tasa = Tasa_promedio_diaria * (1 + 0.3688)
              <br></br>   <br></br>
              Segunda Tasa = (Tasa_promedio_diaria * plazo del cr&Eacute;dito otorgado – Primer Tasa * duraci&oacute;n de la primer tasa) / duraci&oacute;n de la segunda tasa
              <br></br>   <br></br>
              Duraci&oacute;n Primer Tasa = plazo del cr&Eacute;dito otorgado – 1 – (plazo del cr&Eacute;dito otorgado / 2)
              <br></br>   <br></br>
              ***En caso de que la duraci&oacute;n de la primer tasa no sea un número entero se redondear&aacute; al número entero pr&oacute;ximo.
              <br></br>   <br></br>
              Duraci&oacute;n Segunda Tasa = plazo del cr&Eacute;dito otorgado – duraci&oacute;n de la primer tasa.    <br></br>
              <br></br>
              NOVENA. Intereses Moratorios. En caso de que el CLIENTE no cubra &iacute;ntegramente el Monto Total del Cr&Eacute;dito (en el caso de pago en una sola exhibici&oacute;n) o cualquier Pago Parcial, deber&aacute; pagar a PRESTTO intereses moratorios que se devengar&aacute;n en forma diaria a partir del d&iacute;a siguiente a la fecha de vencimiento del plazo para el pago y hasta la de su total liquidaci&oacute;n y se calcular&aacute;n multiplicando la tasa de inter&Eacute;s moratorio se&nacute;alada en la Car&aacute;tula del Contrato de Cr&Eacute;dito por el saldo vencido y no pagado, hasta que el Monto Total del Cr&Eacute;dito o el Pago Parcial de que se trate, haya sido pagado completamente. 
              9.2. El c&aacute;lculo de los intereses moratorios se efectuar&aacute; de la siguiente forma: Se multiplicar&aacute; el saldo vencido por la tasa de inter&Eacute;s moratoria anual. Posteriormente se dividir&aacute; entre 360 (trescientos sesenta) para obtener el monto de inter&Eacute;s moratorio diario. Este monto se multiplicar&aacute; por el número de d&iacute;as en que el cr&Eacute;dito haya permanecido en mora. 				
              <br></br>   <br></br>
              F&oacute;rmula:
              <br></br>   <br></br>
              Saldo vencido x tasa de inter&Eacute;s moratoria anual / 360 = Monto de inter&Eacute;s moratorio diario 
              Monto de inter&Eacute;s moratorio diario x d&iacute;as en mora = Monto de inter&Eacute;s moratorio total
              <br></br>
              9.3 En caso de que el CLIENTE omita realizar el pago en la fecha pactada, se considerar&aacute; en mora o cartera vencida al haber transcurrido el primer d&iacute;a contado a partir de la fecha l&iacute;mite de pago establecida en el presente contrato, según aplicable.   <br></br>
              No obstante lo anterior mencionado en la presente clausula, las partes acuerdan que PRESTTO suspender&aacute; el cobro de los intereses correspondientes al pr&Eacute;stamo objeto del presente contrato despu&Eacute;s del periodo contemplado en el art&iacute;culo 18 fracci&oacute;n IX de la ley de Impuesto Sobre la renta vigente a la fecha de firma del presente, de igual forma las Partes acuerdan que PRESTTO podr&aacute; otorgar quitas y/o descuentos totales o parciales respecto de los intereses derivados del presente Contrato (ordinarios y/o moratorios), sin que para ello exista la necesidad de notificaci&oacute;n alguna a 
              EL CLIENTE por parte de PRESTTO, ya que se trata de un beneficio a EL CLIENTE y no una obligaci&oacute;n por parte del mismo. 			   <br></br>
              D&Eacute;CIMA. Comisiones. El CLIENTE se obliga a pagar a PRESTTO, los siguientes montos por concepto de Comisiones:   <br></br>
              a. Comisi&oacute;n por Extensi&oacute;n: Las PARTES acuerdan que el presente Contrato no cuenta con cl&aacute;usula de extensi&oacute;n autom&aacute;tica, sin embargo, el CLIENTE, previo aviso o solicitud por cualquiera de los medios permitidos por el presente Contrato a PRESTTO dentro de las 24 (veinticuatro) horas m&iacute;nimas previas al vencimiento del cr&Eacute;dito otorgado, tendr&aacute; el derecho de prolongar o extender el pago del mismo, hasta por un plazo igual al originalmente pactado, exclusivamente en su principal sin incurrir en intereses moratorios y hasta por un m&aacute;ximo de 05 extensiones por el mismo cr&Eacute;dito, PRESTTO se reserva el derecho de aprobar o declinar la solicitud de extensi&oacute;n en cualquier momento. 
              <br></br><br></br>
              La comisi&oacute;n por extensi&oacute;n ser&aacute; calculada de la siguiente manera:   <br></br>
              Comisi&oacute;n por Extensi&oacute;n x D&iacute;as a extender = Monto por los d&iacute;as de extensi&oacute;n   <br></br>
              Monto por los d&iacute;as de extensi&oacute;n x Saldo a extender / 1000 = Monto de Comisi&oacute;n por Extensi&oacute;n   <br></br>
              <br></br>       
              El pago de la comisi&oacute;n por extensi&oacute;n aplicable por parte del CLIENTE constituye su aceptaci&oacute;n expresa para la formalizaci&oacute;n de la prolongaci&oacute;n de la vigencia del presente contrato.
              <br></br>        
              a. Comisi&oacute;n por Cobranza: Las PARTES acuerdan que por cualquier incumplimiento de las obligaciones de pago del CLIENTE en los t&Eacute;rminos pactados en el presente Contrato, se establece el cobro de una Comisi&oacute;n variable de Cobranza de $ 600.00 (Seiscientos pesos MN 00/100) m&aacute;s IVA, misma que se deber&aacute; cubrir en el siguiente pago. 
              <br></br>       
              En el evento de requisici&oacute;n judicial de las cantidades adeudadas, en relaci&oacute;n con el incumplimiento del presente contrato, el CLIENTE se obliga a pagar de manera unilateral adicional a la Comisi&oacute;n por Cobranza los gastos y costas judiciales relacionadas, as&iacute; como tambi&Eacute;n los honorarios de abogados. EL CLIENTE cubrir&aacute; por su cuenta todo tipo de gastos extrajudiciales y de cobranza que tuviera que erogar PRESTTO debido al incumplimiento de cualquier obligaci&oacute;n estipulada en el presente Contrato.
              <br></br>        
              D&Eacute;CIMA PRIMERA. Comprobantes y Estados de Cuenta: El CLIENTE acepta consultar su estado de cuenta en el Portal de Internet, lo que podr&aacute; hacer en forma diaria y sin costo alguno. 
              <br></br>
              El CLIENTE contar&aacute; con un per&iacute;odo de 60 (sesenta) d&iacute;as naturales, contados a partir de la fecha en que el respectivo estado de cuenta se puso a su disposici&oacute;n, para formular, por escrito firmado, cualquier solicitud de aclaraci&oacute;n de la informaci&oacute;n contenida en el mismo, ante PRESTTO, enviada al correo electr&oacute;nico clientes@prestto.mx, o a trav&Eacute;s del domicilio establecido para tal efecto en la Declaraci&oacute;n I- c) del presente Contrato; en caso contrario, se entender&aacute; que dicha informaci&oacute;n es aceptada en los t&Eacute;rminos en los que se publica en el estado de cuenta.
              Una vez que PRESTTO reciba cualquier aclaraci&oacute;n que sea formulada por el CLIENTE conforme a lo establecido en los p&aacute;rrafos anteriores de la presente Cl&aacute;usula, tendr&aacute; un plazo de hasta 45 (cuarenta y cinco) d&iacute;as naturales para entregarle al CLIENTE el dictamen correspondiente, junto con la informaci&oacute;n y/o documentaci&oacute;n considerada para su emisi&oacute;n, as&iacute; como un informe detallado en el que se respondan los hechos contenidos en la solicitud de aclaraci&oacute;n. En caso de que conforme a dicho dictamen resulte procedente el cobro del monto de que se trate, el CLIENTE deber&aacute; hacer el pago de la cantidad a su cargo, incluyendo los intereses ordinarios. Dentro del plazo de 45 (cuarenta y cinco) d&iacute;as naturales contado a partir de la entrega del dictamen de referencia, PRESTTO pondr&aacute; a su disposici&oacute;n, a trav&Eacute;s de su Unidad Especializada, el expediente generado por la solicitud, con la integraci&oacute;n de la informaci&oacute;n y documentaci&oacute;n que deba obrar en su poder y que se relacione directamente con la solicitud. Hasta en tanto la solicitud de aclaraci&oacute;n no sea resuelta, PRESTTO no podr&aacute; reportar como vencidas las cantidades sujetas a dicha aclaraci&oacute;n a las sociedades de informaci&oacute;n crediticia. 
              Asimismo, el CLIENTE podr&aacute; consultar el saldo insoluto del Cr&Eacute;dito, Pagos Parciales realizados y los Pagos Parciales pendientes de pago y sus pr&oacute;ximas Fechas de Pago en el Portal de Internet, utilizando la clave o contrase&nacute;a que el CLIENTE cre&oacute; para acceder a su Perfil en el Portal de Internet. 
              D&Eacute;CIMA SEGUNDA. Origen de los Recursos. PRESTTO financiar&aacute; el cr&Eacute;dito concedido al CLIENTE con recursos provenientes de su capital. Asimismo, podr&aacute; otorgarle el cr&Eacute;dito total o parcialmente con recursos provenientes de financiamiento privado o de los programas de promoci&oacute;n que ofrece la banca de desarrollo mexicana. 
              <br></br>   <br></br>
              12.2. El CLIENTE declara que los recursos con los cuales pagar&aacute; el cr&Eacute;dito han sido obtenidos o generados a trav&Eacute;s de una fuente de origen permitido por la ley y con recursos propios. El destino de los servicios o productos adquiridos ser&aacute; dedicado tan solo a fines permitidos por la ley y que no se encuentran dentro de los supuestos establecidos por los art&iacute;culos 139 Qu&aacute;ter y 400 Bis del C&oacute;digo Penal Federal (estos art&iacute;culos proh&iacute;ben el lavado de dinero y el financiamiento al terrorismo.
              D&Eacute;CIMA TERCERA. Pago Anticipado. PRESTTO est&aacute; obligada a aceptar pagos anticipados de los cr&Eacute;ditos menores al equivalente a 900,000 UDIS, siempre que: i) EL CLIENTE lo solicite, ii) se encuentre al corriente en los pagos exigibles de conformidad con el presente Contrato y, iii) que el importe del pago anticipado sea por una cantidad igual o mayor a la correspondiente al pago parcial.				
              <br></br>   <br></br>
              13.2 PRESTTO se compromete a informar el saldo adeudado al CLIENTE a los 3 tres d&iacute;as h&aacute;biles siguientes al pago realizado de forma anticipada, enviando la NUEVA TABLA DE AMORTIZACI&oacute;N v&iacute;a correo electr&oacute;nico.					
              <br></br>
              No habr&aacute; penalizaci&oacute;n monetaria de ningún tipo por realizar pagos anticipadamente o adelantados.
              <br></br>
              Las cantidades pagadas anticipadamente se aplicar&aacute;n en funci&oacute;n de lo previsto en la cl&aacute;usula 7 anterior. 				
              <br></br>
              D&Eacute;CIMA CUARTA. Obligaciones de Hacer. En adici&oacute;n a cualquier otra obligaci&oacute;n a su cargo derivada de este instrumento, el CLIENTE se obliga a cumplir con las siguientes obligaciones:	
              <br></br>
              i) Cumplir con todas las cantidades que deban ser pagadas y con cada una de las obligaciones a su cargo, derivadas de este contrato y hasta que el Cr&Eacute;dito y sus accesorios sean totalmente pagados.
              <br></br>
              ii) Notificar a PRESTTO cualquier cambio de domicilio o números telef&oacute;nicos, dentro de los 3 (tres) d&iacute;as h&aacute;biles siguientes a la fecha que se realice dicho cambio.					
              <br></br>
              iii) Notificar a PRESTTO, dentro de los 3 (tres) d&iacute;as h&aacute;biles siguientes a la fecha que se realice cualquier variaci&oacute;n en el monto de sus ingresos o cualquier hecho y/o acto que pudiere traer como consecuencia el incumplimiento de las obligaciones de pago a cargo del CLIENTE derivadas de este instrumento. 				
              <br></br>
              D&Eacute;CIMA QUINTA. Obligaciones de No Hacer. El CLIENTE no podr&aacute; sin previa autorizaci&oacute;n por escrito de PRESTTO: Ceder de forma alguna, parcial o totalmente, los derechos y/o las obligaciones a su cargo derivadas del presente contrato.
              <br></br>
              D&Eacute;CIMA SEXTA.- Limitaciones Legales. EL CLIENTE se obliga  por medio del presente Contrato, a no celebrar con cualquier entidad financiera, u dependencias similares, as&iacute; como con cualquier persona f&iacute;sica o moral, ningún contrato o convenio, o realizar alguna transacci&oacute;n comercial en la que se disponga de m&aacute;s del TREINTA (30%) por ciento del total de sus ingresos, durante la vigencia del cr&Eacute;dito otorgado.				
              <br></br>
              El incumplimiento de esta disposici&oacute;n ser&aacute; causal de rescisi&oacute;n del presente Contrato.
              <br></br>
              D&Eacute;CIMA S&Eacute;PTIMA. Terminaci&oacute;n Anticipada. EL CLIENTE podr&aacute; solicitar a PRESTTO, en cualquier tiempo, la terminaci&oacute;n anticipada del Contrato, para tal efecto, EL CLIENTE deber&aacute; pagar a PRESTTO, en los t&Eacute;rminos establecidos en el Contrato: a) el saldo insoluto principal, as&iacute; como el impuesto al valor agregado, los intereses ordinarios, los intereses moratorios, en su caso, comisiones del Cr&Eacute;dito que se hayan causado hasta ese momento, as&iacute; como aquellos que se hubieren causado de no haber terminaci&oacute;n anticipada; y b) cualquier otro importe que EL CLIENTE adeude a PRESTTO conforme al Contrato. Dicha solicitud deber&aacute; ser notificada por el CLIENTE a PRESTTO, mediante escrito firmado, al correo electr&oacute;nico clientes@PRESTTO.mx, o a trav&Eacute;s del domicilio establecido para tal efecto en la Declaraci&oacute;n I- c) del presente Contrato.
              <br></br>
              PRESTTO dar&aacute; por terminado el presente Contrato, el d&iacute;a h&aacute;bil siguiente al de la recepci&oacute;n de la solicitud de terminaci&oacute;n siempre y cuando no existieren adeudos en favor de PRESTTO. 
              <br></br>
              En caso contrario, y una vez presentada la solicitud de terminaci&oacute;n: (i) Al d&iacute;a h&aacute;bil siguiente contado desde la recepci&oacute;n de la solicitud de terminaci&oacute;n, PRESTTO notificar&aacute; al CLIENTE, mediante correo electr&oacute;nico a la direcci&oacute;n que EL CLIENTE indic&oacute; en la Solicitud, el saldo insoluto a liquidar; (ii) Asimismo, dentro de los 5 (cinco) d&iacute;as h&aacute;biles siguientes al de la recepci&oacute;n de la solicitud pondr&aacute; a disposici&oacute;n del Cliente el importe de los adeudos a la fecha, y (iii) una vez que EL CLIENTE tenga conocimiento del saldo, deber&aacute; realizar el pago total del mismo, dentro de los 5 (cinco) D&iacute;as H&aacute;biles siguientes; si dentro del plazo establecido EL CLIENTE no realiza el pago, el Contrato continuar&aacute; vigente en sus t&Eacute;rminos.
              <br></br>
              De los 10 (diez) D&iacute;as H&aacute;biles siguientes a la fecha en que EL CLIENTE haya realizado el pago total de la totalidad del cr&Eacute;dito otorgado, as&iacute; como de los accesorios generados, podr&aacute; solicitar a PRESTTO una constancia o carta finiquito para hacer constar la terminaci&oacute;n del Cr&Eacute;dito, la inexistencia de adeudos, o la existencia de saldo a favor en caso de haberlo; mismo que estar&aacute; a disposici&oacute;n del CLIENTE a partir de la fecha de terminaci&oacute;n; debiendo apegarse a lo establecido en el presente Contrato para su devoluci&oacute;n.
              <br></br>
              Al dar por terminada la relaci&oacute;n contractual en caso de que exista saldo a favor, PRESTTO debe entregarlo al CLIENTE en la fecha en que se d&Eacute; por terminada la operaci&oacute;n y en caso de que 
              <br></br>
              EL CLIENTE no acuda a las oficinas de PRESTTO, se le informar&aacute; que se encuentra a su disposici&oacute;n. EL CLIENTE acepta que el mismo le sea devuelto mediante dep&oacute;sito a la cuenta o tarjeta que se indica en la cl&aacute;usula 2 del presente contrato, previa solicitud que dirija a la Unidad Especializada de PRESTTO. 
              <br></br>
              Una vez concluida la relaci&oacute;n contractual PRESTTO cancelar&aacute; las autorizaciones de cargo a cuenta bancaria o domiciliaci&oacute;n suscritas por EL CLIENTE.					
              <br></br>
              Las partes acuerdan que EL CLIENTE, no podr&aacute; aumentar su l&iacute;nea de cr&Eacute;dito con PRESTTO si l&iacute;quida antes de que haya transcurrido al menos el 75% del plazo definido en este contrato. 
              <br></br>
              D&Eacute;CIMA OCTAVA. Causas de Rescisi&oacute;n del Contrato.- Las partes convienen expresamente que, para el caso de que el CLIENTE dejara de cumplir con cualquiera de las obligaciones a su cargo derivadas de este contrato, y sin necesidad de declaraci&oacute;n judicial previa, PRESTTO podr&aacute; dar por vencido anticipadamente el plazo para el pago del cr&Eacute;dito. En tal caso, ser&aacute; exigible el pago anticipado del total de adeudo que se encuentre pendiente de vencimiento, el cual proceder&aacute; en los t&Eacute;rminos se&nacute;alados en la cl&aacute;usula 13 de este contrato.
              <br></br>
              Espec&iacute;ficamente, ser&aacute;n causas de rescisi&oacute;n de este contrato, los siguientes motivos:
              <br></br>
              a) En caso de que cualquiera de las declaraciones del CLIENTE contenidas en este instrumento y la solicitud de cr&Eacute;dito sea o resulte ser falsa o incorrecta.
              <br></br>
              b) En caso de que cualquier dato o informaci&oacute;n del CLIENTE que sea entregada o hecha del conocimiento de PRESTTO de forma dolosa sea o resulte ser falsa o incorrecta.		
              <br></br>
              c) El incumplimiento del CLIENTE a cualquiera de las obligaciones de hacer o de no hacer consignadas a su cargo en este contrato. 				
              <br></br>
              d) Si el Cr&Eacute;dito otorgado fuera destinado a la consecuci&oacute;n de cualquier acto il&iacute;cito.
              <br></br>
              e) Por considerar PRESTTO, que EL CLIENTE no podr&aacute; hacer cumplir las obligaciones impuestas por el presente contrato de manera TOTAL Y/O PUNTUAL como consecuencia, m&aacute;s no limitado a: cualquier modificaci&oacute;n salarial que resulte en un detrimento econ&oacute;mico, respecto al salario por &Eacute;l reportado en la solicitud crediticia; su participaci&oacute;n en un proceso judicial; cese temporal o definitivo de su fuente de trabajo; cualquier situaci&oacute;n que resulte en un detrimento de su patrimonio. 
              <br></br>
              18.2. Ante la actualizaci&oacute;n de cualquiera de las causas de incumplimiento antes se&nacute;alada, el CLIENTE estar&aacute; obligado a pagar a PRESTTO de manera inmediata el importe total del saldo insoluto del Cr&Eacute;dito, que incluye los Intereses Ordinarios vencidos, Intereses Moratorios, as&iacute; como los gastos y cualquier otro concepto devengado contractual o legalmente, pago que deber&aacute; verificarse sin necesidad de presentaci&oacute;n, requerimiento, protesto u otra notificaci&oacute;n de cualquier clase al CLIENTE, a todas las cuales renuncia expresamente por el presente instrumento. Sin perjuicio de lo anterior, PRESTTO podr&aacute; tambi&Eacute;n por la v&iacute;a que estime conveniente, ejercitar aquellas acciones que conforme a la ley sean aplicables en contra del CLIENTE. 
              <br></br>
              D&Eacute;CIMA NOVENA. Comunicaciones. El CLIENTE autoriza a PRESTTO para poder contactarlo mediante los medios conocidos en la Internet y telecomunicaciones. El usuario acepta recibir a su email ________________, correos procedentes de PRESTTO de publicidad, informaci&oacute;n sobre su cr&Eacute;dito o informaci&oacute;n que PRESTTO considere importante para EL CLIENTE.				
              <br></br>
              EL CLIENTE entiende que el principal medio de comunicaci&oacute;n es v&iacute;a Internet y que los mensajes a trav&Eacute;s de plataformas como Facebook, Instagram, y WhatsApp tendr&aacute;n validez en los acuerdos que EL CLIENTE y PRESTTO puedan llegar.				
              <br></br>
              EL CLIENTE podr&aacute; contactar a PRESTTO en los siguientes medios:			
              <br></br>
              E-mail: clientes@prestto.mx Tel&Eacute;fono: +52 1 55 8038 7757	 				
              <br></br>
              Facebook: https://fb.me/PresttoMexico	
              <br></br>
              Instagram: www.prestto_mexico	
              <br></br>
              VIG&Eacute;SIMA. Avisos y Autorizaciones Generales. EL CLIENTE otorga expresa autorizaci&oacute;n a PRESTTO para:
              <br></br>
              I. Recabar toda informaci&oacute;n relacionada con su comportamiento crediticio en las operaciones financieras amparadas en el presente Contrato, as&iacute; como para facilitar la misma a las sociedades de informaci&oacute;n crediticia.				
              <br></br>
              II. Consultar su informaci&oacute;n en las Sociedades de Informaci&oacute;n Crediticia en forma previa al otorgamiento del presente cr&Eacute;dito mediante la autorizaci&oacute;n que se realiz&oacute; a trav&Eacute;s de medios electr&oacute;nicos.				
              <br></br>
              III. Establecer contacto con EL CLIENTE mediante mensajes SMS, llamadas o comunicaciones an&aacute;logas a los tel&Eacute;fonos o direcciones por &Eacute;l proporcionados para efectos de retroalimentaci&oacute;n, ofertas de productos y/o servicios de naturaleza an&aacute;loga, as&iacute; como cobranza directa o mediante terceros.				
              <br></br>
              IV. Avisar a las autoridades correspondientes respecto a lo dispuesto en el p&aacute;rrafo segundo del art&iacute;culo 17 de la Ley Federal para la Prevenci&oacute;n e Identificaci&oacute;n de Recursos de Procedencia Il&iacute;cita, as&iacute; como lo dispuesto en el art&iacute;culo 19 de sus reglas. 
              En el evento de que EL CLIENTE no desee que su informaci&oacute;n sea utilizada con fines de retroalimentaci&oacute;n, mercadot&Eacute;cnicos o publicitarios, deber&aacute;n notificarlo por escrito a PRESTTO, en cuyo caso, el presente Contrato continuar&aacute; surtiendo sus efectos de manera &iacute;ntegra y sin modificaci&oacute;n alguna. 
              VIG&Eacute;SIMA PRIMERA. Autorizaci&oacute;n de Consulta Crediticia. Declara el CLIENTE bajo protesta de decir verdad que la informaci&oacute;n proporcionada a PRESTTO en la presente solicitud es verdadera, libre de vicios, errores o mala fe, responsabiliz&aacute;ndose en caso contrario, por la declinaci&oacute;n de la solicitud, deslindando de responsabilidad a PRESTTO por cualquier controversia relacionada. De igual manera expresa EL CLIENTE:
              <br></br>
              I. Por este conducto yo el CLIENTE autorizo expresamente a PRESTTO, para que por conducto de sus funcionarios facultados lleve a cabo Investigaciones, sobre mi comportamiento crediticio o el de la Empresa que represento en, C&iacute;rculo de Cr&eacute;dito, S.A. de C.V., S.I.C. Asimismo, declaro que conozco la naturaleza y alcance de las sociedades de informaci&oacute;n crediticia y de la informaci&oacute;n contenida en los reportes de cr&Eacute;dito y reporte de cr&Eacute;dito especial, declaro que conozco la naturaleza y alcance de la informaci&oacute;n que se solicitar&aacute;, del uso que PRESTTO., har&aacute; de tal informaci&oacute;n y de que esta podr&aacute; realizar consultas peri&oacute;dicas sobre mi historial o el de la empresa que represento, consintiendo que esta autorizaci&oacute;n se encuentre vigente por un per&iacute;odo de tres a&nacute;os contados a partir de su expedici&oacute;n y en todo caso durante el tiempo que se mantenga la relaci&oacute;n jur&iacute;dica.
              <br></br>
              II. Estoy consciente y acepto que este documento quede bajo custodia de PRESTTO y/o Sociedad de Informaci&oacute;n Crediticia consultada para efectos de control y cumplimiento del art&iacute;culo 28 de la Ley para Regular las Sociedades de Informaci&oacute;n Crediticia. 
              <br></br>
              VIG&Eacute;SIMA SEGUNDA. Modificaci&oacute;n al Contrato. Cualquier modificaci&oacute;n que PRESTTO pretenda realizar al presente Contrato, deber&aacute; ser notificada al CLIENTE con una anticipaci&oacute;n de 30 (treinta) d&iacute;as naturales a su entrada en vigor. Si el CLIENTE no est&aacute; de acuerdo con las modificaciones propuestas, podr&aacute; solicitar la terminaci&oacute;n del Contrato hasta 30 (treinta) d&iacute;as naturales despu&Eacute;s de la entrada en vigor de dichas modificaciones, sin responsabilidad ni comisi&oacute;n alguna a su cargo, teniendo la obligaci&oacute;n de cubrir, en su caso, los adeudos que ya se hubieren generado a la fecha en que solicite dar por terminado el Contrato. 				
              <br></br>
              Una vez transcurrido el plazo se&nacute;alado, sin que PRESTTO haya recibido comunicaci&oacute;n alguna por parte del CLIENTE, se tendr&aacute;n por aceptadas las modificaciones al Contrato.
              <br></br>
              VIG&Eacute;SIMA TERCERA. Cesi&oacute;n de Derechos al Cobro. EL CLIENTE da expresa autorizaci&oacute;n a PRESTTO para transferir, ceder, negociar en cualquier forma la propiedad y/o derechos de cobro de las cantidades principales y/o secundarias amparadas bajo el presente Contrato y/o el Pagar&Eacute; suscrito por EL CLIENTE, tanto anterior como posteriormente a su vencimiento. 
              <br></br>
              De manera irrevocable, el CLIENTE faculta a PRESTTO para que transmita toda la informaci&oacute;n que el mismo proporcion&oacute;, con motivo del cr&Eacute;dito amparado por el presente Contrato, al nuevo acreedor o cesionario aún antes de que se lleve a cabo la transmisi&oacute;n de derechos. En caso de transmisi&oacute;n de derechos por parte de PRESTTO, EL CLIENTE renuncia expresamente a que le sean abonados los intereses mencionados por el p&aacute;rrafo segundo del art&iacute;culo 299 de la Ley General de T&iacute;tulos y Operaciones de Cr&Eacute;dito.				
              <br></br>
              VIG&Eacute;SIMA CUARTA. Domicilios. Las PARTES acuerdan que todas las notificaciones, avisos y en general cualquier comunicaci&oacute;n que las partes deban hacerse con motivo del presente contrato, sean estos de car&aacute;cter judicial o extrajudicial, surtir&aacute;n sus efectos legales en los siguientes domicilios: 
              <br></br>
              “PRESTTO” Av. Nuevo Le&oacute;n #213 - 602 Col. Condesa, Cuauht&eacute;moc, C.P. 06100, Ciudad de M&eacute;xico
              <br></br>
              “EL CLIENTE”  (Domicilio personalizado)
              <br></br>
              24.2. Asimismo, las partes convienen en que cualquier cambio de sus domicilios, deber&aacute;n notificarlo a la otra parte dentro de los 3 (tres) d&iacute;as naturales siguientes a la fecha en que ello ocurra, en el entendido de que, de no ser as&iacute;, se considerar&aacute;n v&aacute;lidas cualquier clase de notificaciones, judiciales o extrajudiciales, realizadas en los domicilios mencionados.
              VIG&Eacute;SIMA QUINTA. Aclaraciones. En el supuesto que EL CLIENTE desee realizar consultas, aclaraciones, quejas o reclamaciones vinculadas con el servicio o producto que por medio del presente contrato le brinde PRESTTO, podr&aacute; hacerlo a trav&Eacute;s de: 				
              <br></br>
              I. Unidad Especializada de Atenci&oacute;n a Usuarios PRESTTO, a trav&Eacute;s de la cual PRESTTO atender&aacute; las consultas, aclaraciones, quejas o reclamaciones. Para tales efectos, EL CLIENTE deber&aacute; formular un escrito libre narrando el motivo de su consulta as&iacute; como los hechos que le dieron lugar. EL CLIENTE deber&aacute; incluir la fecha, su domicilio para o&iacute;r y recibir notificaciones, su tel&Eacute;fono, datos de su cuenta bancaria, as&iacute; como su nombre y firma.					
              <br></br>
              II. PRESTTO responder&aacute; toda consulta en un plazo m&aacute;ximo de 30 (treinta) d&iacute;as naturales posteriores a la fecha de recepci&oacute;n de la misma, mediante asesor&iacute;a telef&oacute;nica, por medios electr&oacute;nicos o, en caso de gravedad, requiriendo su presencia en su Unidad Especializada de Atenci&oacute;n a Usuarios. Trat&aacute;ndose de cantidades a cargo del CLIENTE, este tendr&aacute; el derecho de no realizar el pago sobre el cual solicita su aclaraci&oacute;n, as&iacute; como el de cualquier otra cantidad relacionada con dicho pago, hasta en tanto se resuelva la aclaraci&oacute;n.
              <br></br>
              III. EL CLIENTE podr&aacute; contactar a la Unidad Especializada de Atenci&oacute;n a Usuarios puesta a disposici&oacute;n por PRESTTO, con domicilio en Av. Nuevo Le&oacute;n #213 - 602 Col. Condesa, Cuauht&eacute;moc, C.P. 06100, Ciudad de M&eacute;xico. Alternativamente, su sitio de internet https://prestto.mx/, as&iacute; como tambi&Eacute;n a trav&Eacute;s del correo electr&oacute;nico clientes@prestto.mx o al tel&Eacute;fono +52 1 55 8038 7757
              <br></br>
              VIG&Eacute;SIMA SEXTA. Confidencialidad. Toda la informaci&oacute;n y documentaci&oacute;n relativa a las operaciones y servicios que realice PRESTTO ser&aacute;n consideradas como confidenciales para la protecci&oacute;n del derecho de privacidad de sus clientes, la cual solo podr&aacute; ser otorgada a EL CLIENTE.
              <br></br>
              VIG&Eacute;SIMA S&Eacute;PTIMA. Leyes Aplicables y Jurisdicci&oacute;n. Para todo lo relacionado con la interpretaci&oacute;n y cumplimiento del presente contrato, las partes se someten a la jurisdicci&oacute;n y competencia de los Tribunales de la Ciudad de M&Eacute;xico, renunciando expresamente a cualquier otro fuero que pudiere corresponderles en virtud de sus domicilios presentes o futuros o por cualquier otra causa les pudiera corresponder.
              <br></br>
              Las disposiciones legales que se mencionan en el presente contrato pueden ser consultadas en el Anexo A “Disposiciones Legales”, y se encuentran a su disposici&oacute;n en las oficinas de PRESTTO. 
              VIG&Eacute;SIMA OCTAVA. Integridad del Contrato. El presente Contrato incluyendo los Anexos que se mencionan en el mismo, conjuntamente con la car&aacute;tula y el Aviso de Privacidad vigente (https://www.PRESTTO.mx/aviso-de-privacidad) constituyen el acuerdo total entre las partes en relaci&oacute;n con el otorgamiento del cr&Eacute;dito, por lo que prevalece sobre y reemplaza cualquier entendimiento, contrato, convenio o acuerdo de voluntades previo, ya sea oral o escrito, de cualquier naturaleza con relaci&oacute;n a lo aqu&iacute; establecido.
              <br></br>
              En virtud de la presente Cl&aacute;usula las partes acuerdan que el presente Contrato constituye el acuerdo final de las partes, y acuerdan dar por terminado para todos los efectos a que haya lugar, todo tipo de acuerdos orales o escritos de las partes relacionadas con el presente Contrato. 		
              VIG&Eacute;SIMA NOVENA. T&iacute;tulos de las Cl&aacute;usulas. Las partes convienen en que los T&iacute;tulos de las cl&aacute;usulas que aparecen en el presente contrato, se han puesto con el exclusivo prop&oacute;sito de facilitar su lectura, y por tanto no definen ni limitan el contenido de las mismas. Para efectos de interpretaci&oacute;n del presente contrato deber&aacute; atenderse exclusivamente al contenido de sus declaraciones y cl&aacute;usulas y de ninguna manera a los t&iacute;tulos de estas últimas. 
              Enterados del contenido y alcance jur&iacute;dico de las obligaciones y derechos que contraen las partes contratantes con la celebraci&oacute;n de este contrato de adhesi&oacute;n, EL CLIENTE lo suscribe, manifestando que tiene conocimiento y comprende plenamente la obligaci&oacute;n que adquiere, aceptando el monto del cr&Eacute;dito que se le otorga, as&iacute; como los cargos y gastos que se generen, o en su caso, se llegaran a generar por motivo de su suscripci&oacute;n, entendiendo tambi&Eacute;n que no se efectuar&aacute;n cargos o gastos distintos a los especificados, por lo que lo firman de conformidad en la Ciudad de M&Eacute;xico, ----

              <br></br><br></br>
              Al momento de la celebraci&oacute;n del presente contrato se entrega v&iacute;a correo electr&oacute;nico copia fiel del mismo con todos sus anexos, incluida la Car&aacute;tula del Contrato de Cr&Eacute;dito, el Pagare�� y la Carta Autorizaci&oacute;n de cargo a cuenta bancaria que forman parte integrante del mismo. 
              Las PARTES de común acuerdo manifiestan su consentimiento a efectos de celebrar el presente contrato de acuerdo a las Disposiciones del C&oacute;digo de Comercio y el art&iacute;culo 89 Bis respecto de las operaciones relativas al otorgamiento de cr&Eacute;ditos de manera remota en cuanto a la declaraci&oacute;n de su voluntad.
              <br></br><br></br>       
              “PRESTTO”                        “EL CLIENTE”
              <br></br><br></br>    
              AUTORIZO MEDIANTE MEDIOS ELECTR&oacute;NICOS EN T&Eacute;RMINOS DEL ART&iacute;CULO 80 DEL C&oacute;DIGO DE COMERCIO VIGENTE.
                      
              <br></br><br></br>
              Autorizaci&oacute;n de cargo a cuenta bancaria
              <br></br>
              Por medio de la presente, el suscrito autoriza a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R. “PRESTTO”) para que domicilie los pagos del cr&Eacute;dito simple que tengo contratado con dicha empresa a trav&Eacute;s de la cuenta a nombre de “BANCO “” Cuenta “”, con base en la informaci&oacute;n que a continuaci&oacute;n se indica:				
              <br></br>
              1.- Número de Cliente:
              <br></br>
              2.- Número de Cr&Eacute;dito: 
              <br></br>
              3.- Plazo del Pr&Eacute;stamo: 0 (d&iacute;as)
              <br></br>
              4.- Nombre del banco que me lleva la Cuenta: 
              <br></br>
              5.- Datos de Identificaci&oacute;n de la Cuenta
              <br></br>
              Número de tarjeta de d&Eacute;bito (16 d&iacute;gitos): 
              <br></br>
              Clave Bancaria Estandarizada (“CLABE”) de la Cuenta (18 d&iacute;gitos): 
              <br></br><br></br>
              6.- Monto m&aacute;ximo de cada cargo autorizado: (monto total de  pr&eacute;stamo+ intereses+iva)
              <br></br><br></br>
              En caso de que la Cuenta objeto de la presente autorizaci&oacute;n no cuente con fondos suficientes para cubrir la parcialidad m&aacute;s los intereses ordinarios, el suscrito autoriza a PRESTTO para que en cualquier momento, realice los intentos de cargo que estime necesarios para cubrir el adeudo, incluyendo capital, intereses ordinarios, intereses moratorios y comisiones, según sea el caso.
              <br></br>
              Esta autorizaci&oacute;n estar&aacute; vigente por todo el plazo del Contrato de Cr&Eacute;dito y continuar&aacute; en vigor hasta que todas las obligaciones a mi cargo hayan sido &iacute;ntegramente cumplidas.
              <br></br>
              Estoy enterado de que en cualquier momento podr&Eacute; solicitar la cancelaci&oacute;n de la presente Domiciliaci&oacute;n sin costo a mi cargo.
              <br></br>
              Nombre del Cliente: 
              <br></br>
              Número de Autorizaci&oacute;n:  
              <br></br>
              Fecha:
              <br></br>
              Tel&Eacute;fono: 
              <br></br>
              Correo Electr&oacute;nico: 
              <br></br><br></br>     
              (NOMBRE “EL CLIENTE”) AUTORIZO MEDIANTE MEDIOS ELECTR&oacute;NICOS EN T&Eacute;RMINOS DEL ART&iacute;CULO 89 DEL C&oacute;DIGO DE COMERCIO VIGENTE 
              <br></br>
              Pagar&eacute;
              <br></br>				
              NÚMERO DE CR&Eacute;DITO: 0000000 BUENO POR: $ 0000   <br></br>
              Por este pagar&Eacute; me obligo incondicionalmente a pagar a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R., en adelante (PRESTTO), en oficinas ubicadas en Av. Nuevo Le&oacute;n #213 - 602 Col. Condesa, Cuauht&eacute;moc, C.P. 06100, Cuidad de M&eacute;xico, la cantidad de $ 00000 (cero pesos MN 00/100), a m&aacute;s tardar el d&iacute;a (Fecha de pago) , o bien a trav&Eacute;s del dep&oacute;sito bancario o transferencia electr&oacute;nica efectuada al número de cuenta CIE 001689959, número de CLABE:                        072180 003002261226, del Banco: Banorte S.A.B. a AREZ FINANCIERA S.A. de C.V., SOFOM, E.N.R. o bien mediante los medios alternativos de pago, mismos que incluyen, m&aacute;s no se limitan a: dep&oacute;sitos o transferencias en cuentas bancarias alternas y pago directo en tiendas de conveniencia. PRESTTO  publicar&aacute; y pondr&aacute; a disposici&oacute;n del CLIENTE un listado de dichas opciones alternas de pago en su Portal de Internet.
              <br></br>
              Este pagar&Eacute; causar&aacute; intereses financieros durante el periodo del (fecha plazo del pr&eacute;stamo inicio ) al (fecha plazo  del pr&eacute;stamo final) de 2021, a una tasa anual de 493 %.
              <br></br>
              Me obligo a pagar el importe se&nacute;alado en el primer p&aacute;rrafo de este documento mediante pagos vencidos sobre saldos insolutos conforme a la siguiente tabla de amortizaci&oacute;n: 			
              <br></br>
              {fecha}    -  {totalapagar}
              En caso de incumplimiento en el pago de una o m&aacute;s de las obligaciones derivadas de este t&iacute;tulo de cr&Eacute;dito, el valor insoluto del presente PAGAR&Eacute; se dar&aacute; por vencido anticipadamente, siendo exigible de contado cualquier saldo que quedar&eacute; pendiente a mi cargo.
              En caso de incumplimiento en el pago de cualquiera de las obligaciones derivadas de este t&iacute;tulo de cr&Eacute;dito, pagar&Eacute; intereses moratorios sobre las sumas vencidas a la tasa anual se&nacute;alada en la Car&aacute;tula del Contrato de Cr&Eacute;dito.
              Asimismo me obligo a satisfacer por mi exclusiva cuenta los honorarios de abogados, gastos y costas que ocasionen, el o los litigios que en su caso inicie PRESTTO, en mi contra, por incumplimiento en el pago puntual de mis obligaciones.
              Para todo lo relativo a la interpretaci&oacute;n, cumplimiento y ejecuci&oacute;n de este pagar&Eacute; me someto expresamente a la jurisdicci&oacute;n de los Tribunales Federales competentes de la Ciudad de M&Eacute;xico, renunciando expresamente a cualquier otro fuero que pudiere corresponderles en virtud de sus domicilios presentes o futuros., o por cualquier otro motivo. Ciudad de M&Eacute;xico a (fecha personalizada)
              <br></br><br></br>        
              (NOMBRE “EL CLIENTE”)  AUTORIZO MEDIANTE MEDIOS ELECTR&oacute;NICOS EN T&Eacute;RMINOS DEL ART&iacute;CULO 89 BIS DEL C&oacute;DIGO DE COMERCIO VIGENTE.
              <br></br><br></br>      
              Anexo A 
              <br></br><br></br>
              DISPOSICIONES LEGALES					
              <br></br>   <br></br>
              Se transcriben a continuaci&oacute;n las disposiciones legales referidas expresamente en el presente Contrato, para consulta del CLIENTE					
              <br></br>
              LEY FEDERAL DE PROTECCI&oacute;N AL CONSUMIDOR
              <br></br>
              ART&iacute;CULO 85.- Para los efectos de esta ley, se entiende por contrato de adhesi&oacute;n el documento elaborado unilateralmente por el proveedor, para establecer en formatos uniformes los t&Eacute;rminos y condiciones aplicables a la adquisici&oacute;n de un producto o la prestaci&oacute;n de un servicio, aun cuando dicho documento no contenga todas las cl&aacute;usulas ordinarias de un contrato. Todo contrato de adhesi&oacute;n celebrado en territorio nacional, para su validez, deber&aacute; estar escrito en idioma espa&nacute;ol y sus caracteres tendr&aacute;n que ser legibles a simple vista y en un tama&nacute;o y tipo de letra uniforme. Adem&aacute;s, no podr&aacute; implicar prestaciones desproporcionadas a cargo de los consumidores, obligaciones inequitativas o abusivas, o cualquier otra cl&aacute;usula o texto que viole las disposiciones de esta ley.
              <br></br>
              ART&iacute;CULO 88.- Los interesados podr&aacute;n inscribir voluntariamente sus modelos de contrato de adhesi&oacute;n aunque no requieran registro previo, siempre y cuando la Procuradur&iacute;a estime que sus efectos no lesionan el inter&Eacute;s de los consumidores y que su texto se apega a lo dispuesto por esta ley.
              <br></br>
              C&oacute;DIGO CIVIL FEDERAL
              <br></br>
              Art&iacute;culo 1803.- El consentimiento puede ser expreso o t&aacute;cito, para ello se estar&aacute; a lo siguiente:
              <br></br>
              I.- Ser&aacute; expreso cuando la voluntad se manifiesta verbalmente, por escrito, por medios electr&oacute;nicos, &oacute;pticos o por cualquier otra tecnolog&iacute;a, o por signos inequ&iacute;vocos, y
              <br></br>
              C&oacute;DIGO DE COMERCIO
              <br></br>
              Art&iacute;culo 80.- Los convenios y contratos mercantiles que se celebren por correspondencia, tel&Eacute;grafo, o mediante el uso de medios electr&oacute;nicos, &oacute;pticos o de cualquier otra tecnolog&iacute;a, quedar&aacute;n perfeccionados desde que se reciba la aceptaci&oacute;n de la propuesta o las condiciones con que esta fuere modificada.
              <br></br>
              Art&iacute;culo 81.- Con las modificaciones y restricciones de este C&oacute;digo, ser&aacute;n aplicables a los actos mercantiles las disposiciones del derecho civil acerca de la capacidad de los contrayentes, y de las excepciones y causas que rescinden o invalidan los contratos.
              <br></br>
              Art&iacute;culo 89.- Las disposiciones de este T&iacute;tulo regir&aacute;n en toda la República Mexicana en asuntos del orden comercial, sin perjuicio de lo dispuesto en los tratados internacionales de los que M&Eacute;xico sea parte.					
              <br></br>
              Las actividades reguladas por este T&iacute;tulo se someter&aacute;n en su interpretaci&oacute;n y aplicaci&oacute;n a los principios de neutralidad tecnol&oacute;gica, autonom&iacute;a de la voluntad, compatibilidad internacional y equivalencia funcional del Mensaje de Datos en relaci&oacute;n con la informaci&oacute;n documentada en medios no electr&oacute;nicos y de la Firma Electr&oacute;nica en relaci&oacute;n con la firma aut&oacute;grafa. 
              <br></br>
              En los actos de comercio y en la formaci&oacute;n de los mismos podr&aacute;n emplearse los medios electr&oacute;nicos, &oacute;pticos o cualquier otra tecnolog&iacute;a. Para efecto del presente C&oacute;digo, se deber&aacute;n tomar en cuenta las siguientes definiciones:				
              <br></br>
              Certificado: Todo Mensaje de Datos u otro registro que confirme el v&iacute;nculo entre un Firmante y los datos de creaci&oacute;n de Firma Electr&oacute;nica.
              <br></br>
              Datos de Creaci&oacute;n de Firma Electr&oacute;nica: Son los datos únicos, como c&oacute;digos o claves criptogr&aacute;ficas privadas, que el Firmante genera de manera secreta y utiliza para crear su Firma Electr&oacute;nica, a fin de lograr el v&iacute;nculo entre dicha Firma Electr&oacute;nica y el Firmante.
              <br></br>
              Destinatario: La persona designada por el Emisor para recibir el Mensaje de Datos, pero que no est&Eacute; actuando a t&iacute;tulo de Intermediario con respecto a dicho Mensaje.
              <br></br>
              Digitalizaci&oacute;n: Migraci&oacute;n de documentos impresos a mensaje de datos, de acuerdo con lo dispuesto en la norma oficial mexicana sobre digitalizaci&oacute;n y conservaci&oacute;n de mensajes de datos que para tal efecto emita la Secretar&iacute;a.
              <br></br>
              Emisor: Toda persona que, al tenor del Mensaje de Datos, haya actuado a nombre propio o en cuyo nombre se haya enviado o generado ese mensaje antes de ser archivado, si este es el caso, pero que no haya actuado a t&iacute;tulo de Intermediario.
              <br></br>
              Firma Electr&oacute;nica: Los datos en forma electr&oacute;nica consignados en un Mensaje de Datos, o adjuntados o l&oacute;gicamente asociados al mismo por cualquier tecnolog&iacute;a, que son utilizados para identificar al Firmante en relaci&oacute;n con el Mensaje de Datos e indicar que el Firmante aprueba la informaci&oacute;n contenida en el Mensaje de Datos, y que produce los mismos efectos jur&iacute;dicos que la firma aut&oacute;grafa, siendo admisible como prueba en juicio.
              <br></br>
              Firma Electr&oacute;nica Avanzada o Fiable: Aquella Firma Electr&oacute;nica que cumpla con los requisitos contemplados en las fracciones I a IV del art&iacute;culo 97.				
              <br></br>
              En aquellas disposiciones que se refieran a Firma Digital, se considerar&aacute; a esta como una especie de la Firma Electr&oacute;nica. 
              <br></br>
              Firmante: La persona que posee los datos de la creaci&oacute;n de la firma y que actúa en nombre propio o de la persona a la que representa. 					
              <br></br>
              Intermediario: En relaci&oacute;n con un determinado Mensaje de Datos, se entender&aacute; toda persona que, actuando por cuenta de otra, env&iacute;e, reciba o archive dicho Mensaje o preste algún otro servicio con respecto a &Eacute;l.
              <br></br>
              Mensaje de Datos: La informaci&oacute;n generada, enviada, recibida o archivada por medios electr&oacute;nicos, &oacute;pticos o cualquier otra tecnolog&iacute;a.
              <br></br>
              Parte que Conf&iacute;a: La persona que, siendo o no el Destinatario, actúa sobre la base de un Certificado o de una Firma Electr&oacute;nica.
              <br></br>
              Prestador de Servicios de Certificaci&oacute;n: La persona o instituci&oacute;n pública que preste servicios relacionados con firmas electr&oacute;nicas, expide los certificados o presta servicios relacionados como la conservaci&oacute;n de mensajes de datos, el sellado digital de tiempo y la digitalizaci&oacute;n de documentos impresos, en los t&Eacute;rminos que se establezca en la norma oficial mexicana sobre digitalizaci&oacute;n y conservaci&oacute;n de mensajes de datos que para tal efecto emita la Secretar&iacute;a.
              <br></br>
              Secretar&iacute;a: Se entender&aacute; la Secretar&iacute;a de Econom&iacute;a.
              <br></br>
              Sello Digital de Tiempo: El registro que prueba que un dato exist&iacute;a antes de la fecha y hora de emisi&oacute;n del citado Sello, en los t&Eacute;rminos que se establezca en la norma oficial mexicana sobre digitalizaci&oacute;n y conservaci&oacute;n de mensajes de datos que para tal efecto emita la Secretar&iacute;a.
              <br></br>
              Sistema de Informaci&oacute;n: Se entender&aacute; todo sistema utilizado para generar, enviar, recibir, archivar o procesar de alguna otra forma Mensajes de Datos.
              <br></br>
              Titular del Certificado: Se entender&aacute; a la persona a cuyo favor fue expedido el Certificado. 
              <br></br>
              Art&iacute;culo 89 bis.- No se negar&aacute;n efectos jur&iacute;dicos, validez o fuerza obligatoria a cualquier tipo de informaci&oacute;n por la sola raz&oacute;n de que est&Eacute; contenida en un Mensaje de Datos. Por tanto, dichos mensajes podr&aacute;n ser utilizados como medio probatorio en cualquier diligencia ante autoridad legalmente reconocida, y surtir&aacute;n los mismos efectos jur&iacute;dicos que la documentaci&oacute;n impresa, siempre y cuando los mensajes de datos se ajusten a las disposiciones de este C&oacute;digo y a los lineamientos normativos correspondientes.			
              <br></br><br></br>
              <br></br>
              Art&iacute;culo 139 Qu&aacute;ter.- Se impondr&aacute; la misma pena se&nacute;alada en el art&iacute;culo 139 de este C&oacute;digo, sin perjuicio de las penas que corresponden por los dem&aacute;s delitos que resulten, al que por cualquier medio que fuere ya sea directa o indirectamente, aporte o recaude fondos econ&oacute;micos o recursos de cualquier naturaleza, con conocimiento de que ser&aacute;n destinados para financiar o apoyar actividades de individuos u organizaciones terroristas, o para ser utilizados, o pretendan ser utilizados, directa o indirectamente, total o parcialmente, para la comisi&oacute;n, en territorio nacional o en el extranjero, de cualquiera de los delitos previstos en los ordenamientos legales siguientes: 
              <br></br>
              I.	Del C&oacute;digo Penal Federal, los siguientes: 
              <br></br>
              1.	Terrorismo, previstos en los art&iacute;culos 139, 139 Bis y 139 Ter; 
              <br></br>
              2.	Sabotaje, previsto en el art&iacute;culo 140 
              <br></br>
              3.	Terrorismo Internacional, previsto en los art&iacute;culos 148 Bis, 148 Ter y 148 Qu&aacute;ter; 
              <br></br>
              4.	Ataques a las v&iacute;as de comunicaci&oacute;n, previstos en los art&iacute;culos 167, fracci&oacute;n IX, y 170, p&aacute;rrafos primero, segundo y tercero, y 
              <br></br>
              5.	Robo previsto en el art&iacute;culo Quinquies.
              <br></br>
              II.	De la ley que Declara Reservas Mineras los yacimientos de Uranio, Torio y las dem&aacute;s substancias de las cuales se obtengan is&oacute;topos hendibles que puedan producir energ&iacute;a nuclear, los previstos en los art&iacute;culos 10 y 13. 
              <br></br>
              Art&iacute;culo 400 Bis. Se impondr&aacute; de cinco a quince a&nacute;os de prisi&oacute;n y de mil a cinco mil d&iacute;as multa al que, por s&iacute; o por interp&oacute;sita persona realice cualquiera de las siguientes conductas:
              <br></br>
              I. Adquiera, enajene, administre, custodie, posea, cambie, convierta, deposite, retire, d&Eacute; o reciba por cualquier motivo, invierta, traspase, transporte o transfiera, dentro del territorio nacional, de este hacia el extranjero o a la inversa, recursos, derechos o bienes de cualquier naturaleza, cuando tenga conocimiento de que proceden o representan el producto de una actividad il&iacute;cita, o
              <br></br>
              II. Oculte, encubra o pretenda ocultar o encubrir la naturaleza, origen, ubicaci&oacute;n, destino, movimiento, propiedad o titularidad de recursos, derechos o bienes, cuando tenga conocimiento de que proceden o representan el producto de una actividad il&iacute;cita.
              <br></br>
              
              Para efectos de este Cap&iacute;tulo, se entender&aacute; que son producto de una actividad il&iacute;cita, los recursos, derechos o bienes de cualquier naturaleza, cuando existan indicios fundados o certeza de que provienen directa o indirectamente, o representan las ganancias derivadas de la comisi&oacute;n de algún delito y no pueda acreditarse su leg&iacute;tima procedencia.
              <br></br>
              En caso de conductas previstas en este Cap&iacute;tulo, en las que se utilicen servicios de instituciones que integran el sistema financiero, para proceder penalmente se requerir&aacute; la denuncia previa de la Secretar&iacute;a de Hacienda y Cr&Eacute;dito Público.
              <br></br>
              Cuando la Secretar&iacute;a de Hacienda y Cr&Eacute;dito Público, en ejercicio de sus facultades de fiscalizaci&oacute;n, encuentre elementos que permitan presumir la comisi&oacute;n de alguno de los delitos referidos en este Cap&iacute;tulo, deber&aacute; ejercer respecto de los mismos las facultades de comprobaci&oacute;n que le confieren las leyes y denunciar los hechos que probablemente puedan constituir dichos il&iacute;citos. 			
              <br></br><br></br>
              LEY GENERAL DE T&iacute;TULOS Y OPERACIONES DE CR&Eacute;DITO				
              <br></br>
              Art&iacute;culo 299.- (...)	
              <br></br>			
              Negociado o cedido el cr&Eacute;dito por el acreditante, este abonar&aacute; al acreditado, desde la fecha de tales actos, los intereses correspondientes al importe de la disposici&oacute;n de que dicho cr&Eacute;dito proceda, conforme al tipo estipulado en la apertura de cr&Eacute;dito; pero el cr&Eacute;dito concedido no se entender&aacute; renovado por esa cantidad, sino cuando las partes as&iacute; lo hayan convenido.		
              <br></br><br></br>
              LEY PARA REGULAR LAS SOCIEDADES DE INFORMACI&oacute;N CREDITICIA
              <br></br>
              Art&iacute;culo 28.- Las Sociedades solo podr&aacute;n proporcionar informaci&oacute;n a un Usuario, cuando este cuente con la autorizaci&oacute;n expresa del Cliente, mediante su firma, en donde conste de manera fehaciente que tiene pleno conocimiento de la naturaleza y alcance de la informaci&oacute;n que la Sociedad proporcionar&aacute; al Usuario que as&iacute; la solicite, del uso que dicho Usuario har&aacute; de tal informaci&oacute;n y del hecho de que este podr&aacute; realizar consultas peri&oacute;dicas de su historial crediticio, durante el tiempo que mantenga relaci&oacute;n jur&iacute;dica con el Cliente. La firma a que se refiere este p&aacute;rrafo podr&aacute; ser recabada de manera aut&oacute;grafa o por medios electr&oacute;nicos, en este último caso, siempre que cumpla con los t&Eacute;rminos y condiciones establecidos por el Banco de M&Eacute;xico.
              <br></br>
              Las Sociedades podr&aacute;n proporcionar informaci&oacute;n a los Usuarios que adquieran o administren cartera de cr&Eacute;dito, utilizando para ello la autorizaci&oacute;n que el Cliente haya dado conforme al presente art&iacute;culo al Usuario que otorg&oacute; el cr&Eacute;dito respectivo originalmente. 
              <br></br>
              Asimismo, el Banco de M&Eacute;xico podr&aacute; autorizar a las Sociedades los t&Eacute;rminos y condiciones bajo los cuales podr&aacute;n pactar con los Usuarios la sustituci&oacute;n de la firma aut&oacute;grafa del Cliente, con alguna de las formas de manifestaci&oacute;n de la voluntad se&nacute;aladas en el art&iacute;culo 1803 del C&oacute;digo Civil Federal.
              <br></br>
              La autorizaci&oacute;n expresa a que se refiere este art&iacute;culo ser&aacute; necesaria trat&aacute;ndose de:			
              <br></br>
              I.	 Personas f&iacute;sicas, y  					 	 
              <br></br>
              II.	Personas morales con cr&Eacute;ditos totales inferiores a cuatrocientas mil UDIS, de conformidad con el valor de dicha unidad publicado por el Banco de M&Eacute;xico a la fecha en que se presente la solicitud de informaci&oacute;n. Los Usuarios que realicen consultas relacionadas con personas morales con cr&Eacute;ditos totales superiores a cuatrocientas mil UDIS, no requerir&aacute;n de la autorizaci&oacute;n expresa a que se refiere el presente art&iacute;culo. 			
              <br></br>
              La obligaci&oacute;n de obtener las autorizaciones a que se refiere este art&iacute;culo, no aplicar&aacute; a la informaci&oacute;n solicitada por el Banco de M&Eacute;xico, la Comisi&oacute;n, las autoridades judiciales en virtud de providencia dictada en juicio en que el Cliente sea parte o acusado y por las autoridades hacendarias federales, cuando la soliciten a trav&Eacute;s de la Comisi&oacute;n, para fines fiscales, de combate al blanqueo de capitales o de acciones tendientes a prevenir y castigar el financiamiento del terrorismo.
              <br></br>
              La vigencia de la autorizaci&oacute;n prevista en el primer p&aacute;rrafo de este art&iacute;culo ser&aacute; de un a&nacute;o contado a partir de su otorgamiento, o hasta dos a&nacute;os adicionales a ese a&nacute;o si el Cliente as&iacute; lo autoriza expresamente. En todo caso, la vigencia permanecer&aacute; mientras exista relaci&oacute;n jur&iacute;dica entre el Usuario y el Cliente.
              <br></br>
              Los Reportes de Cr&Eacute;dito Especiales que sean entregados a los Clientes en t&Eacute;rminos de esta ley deber&aacute;n contener la identidad de los Usuarios que hayan consultado su informaci&oacute;n en los veinticuatro meses anteriores.
              <br></br>
              Cuando el texto que contenga la autorizaci&oacute;n del Cliente forme parte de la documentaci&oacute;n que deba firmar el mismo para gestionar un servicio ante algún Usuario, dicho texto deber&aacute; incluirse en una secci&oacute;n especial dentro de la documentaci&oacute;n citada y la firma aut&oacute;grafa del Cliente relativa al texto de su autorizaci&oacute;n deber&aacute; ser una firma adicional a la normalmente requerida por el Usuario para el tr&aacute;mite del servicio solicitado.
              <br></br>
              Se entender&aacute; que violan las disposiciones relativas al Secreto Financiero tanto la Sociedad, como sus empleados o funcionarios que participen en alguna consulta a sabiendas de que no se ha recabado la autorizaci&oacute;n a que se refiere este art&iacute;culo, en los t&Eacute;rminos de los art&iacute;culos 29 y 30 siguientes.
              <br></br>
              Se considerar&aacute; que los Usuarios, as&iacute; como sus empleados o funcionarios involucrados, han violado las disposiciones relativas al Secreto Financiero, cuando realicen consultas o divulguen informaci&oacute;n en contravenci&oacute;n a lo establecido en los art&iacute;culos mencionados en el p&aacute;rrafo anterior.
              <br></br>
              Las Sociedades, sus empleados y funcionarios tendr&aacute;n prohibido proporcionar informaci&oacute;n relativa a datos personales de los Clientes para comercializaci&oacute;n de productos o servicios que pretendan ofrecer los Usuarios o cualquier tercero, salvo para la realizaci&oacute;n de consultas relativas al historial 
              crediticio. Quien proporcione informaci&oacute;n en contravenci&oacute;n a lo establecido en este p&aacute;rrafo, incurrir&aacute; en el delito de revelaci&oacute;n de secretos a que se refiere el art&iacute;culo 210 del C&oacute;digo Penal Federal. 
              <p class="logo">prestto</p>
              </table>
    ');
      $domdpf -> setPaper('A4', 'portrait');
      $domdpf -> render();
      $domdpf -> stream ('open',array('Attachment'=>0));
      /*$output = $domdpf->output();
      $fp = fopen('otro.pdf', 'w');
      fwrite($fp, $output);
      fclose($fp);*/
    ?>


