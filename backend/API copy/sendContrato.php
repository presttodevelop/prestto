<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];

if($method == "OPTIONS") {
	die();
}

/*ini_set('display_errors', 1);*/

  try {
    $conn = new PDO('mysql:host=localhost;dbname=dbpresseguro','userpresty','A)0A3~170G9.');
     // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $nombre =$_GET['nombre'];
        $apellidopaterno =$_GET['apellidopaterno'];
        $apellidomaterno =$_GET['apellidomaterno'];
        $celular=$_GET['celular'];
        $email =$_GET['email'];
        $aceptoterminoscondicionescel=$_GET['aceptoterminoscondicionescel'];
        $historialcrediticio=$_GET['historialcrediticio'];
        $conocimientodelcliente=$_GET['conocimientodelcliente'];
        $genero=$_GET['genero'];
        $curp=$_GET['conocimientodelcliente'];
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
        $totalaprestar=$_GET['totalaprestar'];
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
        $statuscliente='Applicant';


        //Carácteres para la contraseña
        $cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#!€%&()";
        $longitudCadena=strlen($cadena);
        //Definimos la variable que va a contener la contraseña
        $pass = $password;
        //Se define la longitud de la contraseña, puedes poner la longitud que necesites
        //Se debe tener en cuenta que cuanto más larga sea más segura será.
        $longitudPass=10;

        //Guardar cifrada la informacion md5
        // Multiple recipients
          $to = $email; // note the comma
          // Subject
          $subject = ' ¡Felicidades, tu préstamo ha sido aprobado! 👨🏻‍🚀';

          // Message
          $message = '
          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

            <head>
              <title>¡Felicidades, tu préstamo ha sido aprobado! 👨🏻‍🚀</title>
              <link rel="icon" href="img/favicon.ico" type="image/gif" sizes="16x16">
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
              <meta name="Title" content="PRESTTO" />
              <meta name="Author" content="PRESTTO" />
              <meta name="Copyright" content="Copyright by PRESTTO" />
              <meta name="robots" content="noindex" />
              <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
              <!--[if mso]><style type="text/css">
              .mso-hide,
              .mso-hide tr,
              .mso-hide table,
              .mso-hide span,
              .mso-hide a,
              .mso-hide p,
              .mso-hide td {
                  display: none;
              }
          </style><![endif]-->
              <style type="text/css">
                table {
                  border-collapse: collapse;
                  border-spacing: 0;
                }

                td>p,
                td>ul,
                td>span,
                td>div>p {
                  font-size: 14px;
                  font-family: Montserrat,Open Sans,sans-serif;
                }

                p,
                span {
                  max-width: 100%;
                }

                a {
                  text-decoration: none;
                }

                .preheader {
                  visibility: hidden;
                  opacity: 0;
                  color: transparent;
                  height: 0;
                  width: 0;
                  display: none !important;
                  font-size: 0px;
                }

                img {
                  width: auto !important;
                  max-width: 100%;
                }

                @media(max-width: 610px) {
                  .rwd {
                    width: 100% !important;
                    max-width: 100% !important;
                  }

                  .email-content-table {
                    width: 100%;
                  }
                }

                @media(min-width: 610px) {
                  .email-content-table {
                    width: 610px;
                  }
                }
              </style>
              <style type="text/css">
                @media all and (max-width: 610px) {

                  .rwd-600,
                  .rwd-600>table {
                    width: 100% !important;
                    max-width: 100% !important;
                  }

                  .rwd-600 img {
                    max-width: 100% !important;
                  }
                }
              </style>
            </head>

            <body style="margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#ffffff;"> <span class="preheader" style="visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;display: none !important; font-size: 0px;"></span>
              <table class="email-content-table" style="background-color:#ffffff;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                  <tr>
                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:5px;background-color:#ffffff;font-size:0;" align="center">&nbsp;</td>
                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;max-width:600px;" align="center">
                      <center style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
                        <div style="max-width:600px;background-color: #ffffff;">
                          <!--[if (gte mso 9)|(IE)]><table width="600" style="width:600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;max-width:600px;width:600px;background-color: #ffffff;"><![endif]-->
                          <table style="margin: 0px auto; width: 100%; max-width: 600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="background-color:transparent;padding-top:0px;padding-bottom:0px;padding-right:0;padding-left:0;text-align:center;font-size:0;">
                                  <!--[if (gte mso 9)|(IE)]><table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;"> <tbody> <tr> <td width="600" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;font-size: 0;"><![endif]-->
                                  <div class="rwd-600" style="width:100%;max-width:600px;display:inline-block;vertical-align:top;" align="center">
                                    <table style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="left" width="auto" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="rwd-600" align="center" width="600" valign="top" style="background-color:;">
                                            <table valign="top" style="width:auto;max-width:600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" width="600" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr width="100%" style="width: 100%">
                                                  <td style="width: 600px;" align="center" width="600" valign="top">
                                                    <p style="margin:0;padding:0;width:100%;text-align:center"><br /></p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if (gte mso 9)|(IE)]></td></tr></tbody></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table style="margin: 0px auto; width: 100%; max-width: 600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" cellspacing="0" cellpadding="0" border="0">
                            <a href="https://prestto.mx/login" target="_self">
                            <tbody>
                              <tr>
                                <td style="background-color:transparent;padding-top:0px;padding-bottom:0px;padding-right:0;padding-left:0;text-align:center;font-size:0;">
                                  <!--[if (gte mso 9)|(IE)]><table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;"> <tbody> <tr> <td width="600" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;font-size: 0;"><![endif]-->
                                  <div class="rwd-600" style="width:100%;max-width:600px;display:inline-block;vertical-align:top;" align="center">
                                    <table style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="left" width="auto" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="rwd-600" align="center" width="600" valign="top" style="background-color:;">
                                            <table valign="top" style="width:auto;max-width:600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" width="600" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr width="100%" style="width: 100%">
                                                  <td style="text-align:center">
                                                    <p style="height:350px; background:linear-gradient(62deg,#5a6ff0,#c31fe6);">
                                                      <a href="https://prestto.mx/login" target="_blank">
                                                        <img src="https://prestto.mx/api/img/asset3.png" border="0" alt="PRESTTO" style="width: auto; border-radius: 0px; margin-left: 0px; margin-right: 0px; border: none; display: block;max-width: 600px" width="600" />
                                                      </a>
                                                    </p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if (gte mso 9)|(IE)]></td></tr></tbody></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table style="margin: 0px auto; width: 100%; max-width: 600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="background-color:transparent;padding-top:0px;padding-bottom:0px;padding-right:0;padding-left:0;text-align:center;font-size:0;">
                                  <!--[if (gte mso 9)|(IE)]><table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;"> <tbody> <tr> <td width="600" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;font-size: 0;"><![endif]-->
                                  <div class="rwd-600" style="width:100%;max-width:600px;display:inline-block;vertical-align:top;" align="center">
                                    <table style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="left" width="auto" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="rwd-600" align="center" width="600" valign="top" style="background-color:;">
                                            <table valign="top" style="width:auto;max-width:600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" width="600" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr width="100%" style="width: 100%">
                                                  <td style="width: 600px;" align="center" width="600" valign="top">
                                                    <p style="font-family:Montserrat, Open Sans, sans-serif;font-size:22px;font-weight:900;color:#0a0e44;margin-top:40px">&iexcl;Hola <span style="color:#0a0e44;"> '.$nombre.'  '.$apellidopaterno.'</span>!</p>
                                                    <p style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:1.2;font-weight:200;padding:0 45px">Gracias por haber solicitado tu pr&eacute;stamo con nosotros. A continuaci&oacute;n, te proporcionamos un resumen de las condiciones m&aacute;s relevantes de tu pr&eacute;stamo, que tambi&eacute;n puedes encontrar en la car&aacute;tula de tu contrato adjunto.</p>
                                                    <p style="color:#000;font-size:18px;text-align:center;line-height:0.5;font-family:Montserrat,Open Sans,sans-serif;color:#0a0e44;"><span style="font-weight:900">N&uacute;mero de Cr&eacute;dito:</span><span style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:0.5;font-weight:400"> '.$idcontrato.' </span> </span></p>
                                                    <p style="color:#000;font-size:18px;text-align:center;line-height:0.5;font-family:Montserrat,Open Sans,sans-serif;color:#0a0e44;"><span style="font-weight:900">Monto del Cr&eacute;dito:</span><span style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:0.5;font-weight:400"> '.$dineroquenecesita.' </span> </span></p>
                                                    <br>
                                                    <p style="color:#000;font-size:18px;text-align:center;line-height:0.5;font-family:Montserrat,Open Sans,sans-serif;color:#0a0e44;"><span style="font-weight:900">Fecha l&iacute;mite de Pago:</span><span style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:0.5;font-weight:400"> '.$fechadepagoen.' </span> </span></p>
                                                    <p style="color:#000;font-size:18px;text-align:center;line-height:0.5;font-family:Montserrat,Open Sans,sans-serif;color:#0a0e44;"><span style="font-weight:900">Monto total a pagar en la</span></p>
                                                    <p style="color:#000;font-size:18px;text-align:center;line-height:0.5;font-family:Montserrat,Open Sans,sans-serif;color:#0a0e44;"><span style="font-weight:900">fecha l&iacute;mite  indicada:</span><span style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:0.5;font-weight:400"> '.$totalaprestar.' </span></p>
                                                    <p style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:1.2;font-weight:200">Las formas de pago se indican en la cláusula  <br> <b>QUINTA</b>, de tu contrato.</p>
                                                    <p style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:1.2;font-weight:200">Tu contrato se encuentra adjunto a este correo, <br>es muy importante que lo leas detenidamente para <br>comprender correctamente las condiciones que lo rigen <br>y tu relaci&oacute;n con nosotros.</p>
                                                    <p style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:1.2;font-weight:200">En tu contrato explicamos que ocurre si pagas t&uacute; <br>pr&eacute;stamo antes de la fecha estipulada y c&oacute;mo puedes <br>ejercer tu derecho a la cancelaci&oacute;n del mismo o donde <br>puedes dirigirte si tienes alguna duda o queja.</p>
                                                    <p style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:1.2;font-weight:200">Es importante que recuerdes que el préstamo que<br> solicitaste es un pr&eacute;stamo de corto plazo. Esto significa <br>que no es adecuado para enfrentar situaciones crediticias <br>de largo plazo. En caso de que decidas cancelar este <br>contrato de pr&eacute;stamo,  est&aacute;s obligado a pagar sin demora <br>el dinero recibido y los intereses acumulados hasta <br>la fecha efectiva de pago. </p>
                                                    <p style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:1.2;font-weight:200">Atentamente,</span><br>Tu equipo Prestto</p>
                                                    <p style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:1.2;font-weight:200">&#169; 2021</span>Prestto</p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if (gte mso 9)|(IE)]></td></tr></tbody></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                            </a>
                          </table>
        
                          <!--FOOTER-->
                          <table style="margin: 0px auto; width: 100%; max-width: 600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="background-color:transparent;padding-top:0px;padding-bottom:0px;padding-right:0;padding-left:0;text-align:center;font-size:0;">
                                  <!--[if (gte mso 9)|(IE)]><table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;"> <tbody> <tr> <td width="600" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;font-size: 0;"><![endif]-->
                                  <div class="rwd-600" style="width:100%;max-width:600px;display:inline-block;vertical-align:top;" align="center">
                                    <table style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="left" width="auto" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="rwd-600" align="center" width="600" valign="top" style="background-color:#323542;padding:20px;">
                                            <table valign="top" style="width:auto;max-width:600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" width="600" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr width="100%" style="width: 100%">
                                                <!-- Dirección-->
                                                  <td style="width: 600px;" align="center" width="600" valign="top" > 
                                                    <p style="margin:0;padding:0;width:100%;text-align:center"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:12px;color:#fff;font-weight:600;">Informaci&oacute;n </span></p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center"><a href="" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff">&nbsp;</span></a></p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center"><a href="https://prestto.mx/avisodeprivacidad" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff;line-height:1.2">Pol&iacute;tica de privacidad</span></a></p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center"><a href="https://prestto.mx/terminosycondiciones" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff;line-height:1.2">T&eacute;rminos y condiciones</span></p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center"><a href="" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff;line-height:1.2">Aviso legal</span></p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center"><a href="" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff;line-height:1.2">Condiciones de pr&eacute;stamo</span></p>
                                                  </td>

                                                  <td style="width: 600px;" align="center" width="600" valign="top" > 
                                                    <p style="margin:0;padding:0;width:100%;text-align:center"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:12px;color:#fff;font-weight:600;"> Horario de atenci&oacute;n</span></p><br>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center"><a href="" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff">&nbsp;</span></a></p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center;color:#fff;font-family:Montserrat,Open Sans,sans-serif;font-size:10px;line-height:1.2">Lunes a viernes,</p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center;color:#fff;font-family:Montserrat,Open Sans,sans-serif;font-size:10px;line-height:1.2">de 9&#58;00h a 20&#58;00h</p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center;color:#fff;font-family:Montserrat,Open Sans,sans-serif;font-size:10px;line-height:1.2">Sábados</p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center;color:#fff;font-family:Montserrat,Open Sans,sans-serif;font-size:10px;line-height:1.2">de 10&#58;00h a 15&#58;00h</p>
                                                  </td>
                                                  <td style="width: 600px;" align="center" width="600" valign="top" > 
                                                    <p style="margin:0;padding:0;width:100%;text-align:center;line-height:1.2"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:12px;color:#fff;font-weight:600;"> Contacto</span></p><br>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center;line-height:1.2"><a href="" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff">&nbsp;</span></a></p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center;line-height:1.2"><a href="mailto:contacto@prestto.mx" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff">contacto@prestto.mx</span></a></p>
                                                    <p style="margin:0;padding:0;width:100%;text-align:center;line-height:1.2"><a href="tel:+5525052455" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff">5525052455</span></a></p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr style="background-color: #323542;">
                                          <td style="padding:20px 30px">
                                              <p style="margin:0;padding:0;width:100%;text-align:center;line-height:0.6">
                                                <a href="" target="_blank">
                                                  <span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff;line-height:1">
                                                    Tasa de inter&eacute;s mensual ordinaria aplicable desde 3.99% sin IVA. Por defecto, 
                                                    la tasa de inter&eacute;s anual fija es de 47.8% m&aacute; IVA por un cr&eacute;dito de &#36;70,000. 
                                                    Costo Anual Total Promedio Ponderado: 212.20% sin IVA, Ejemplo representativo de una l&iacute;nea de cr&eacute;dito por &#36;70,000. 
                                                    M.N. calculado a un plazo de 60 quincenas. Fecha de c&aacute;lculo: Septiembre 2019.
                                                  </span>
                                                </a>
                                              </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <!--[if (gte mso 9)|(IE)]></td></tr></tbody></table><![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </center>
                    </td>
                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:5px;background-color: #ffffff; font-size: 0;" align="center">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </body>
          </html>
          ';

          // To send HTML mail, the Content-type header must be set
          $headers[] = 'MIME-Version: 1.0';
          $headers[] = 'Content-type: text/html; charset=iso-8859-1';

          // Additional headers
          $headers[] = 'From:Prestto<noreply@prestto.mx>';
          // Attachment file 
          $my_file = "test.pdf"; 
          $file_type = 'pdf';
          $my_path = "http://prestto.mx/api/contratos/";

          $filename = 'test.pdf';
          $path = 'http://prestto.mx/api/contratos';
          $file = $path . "/" . $filename;
          
        
            // Mail it
          mail($to, $subject, $message, implode("\r\n", $headers));

    if(!empty($celular)) {
        echo "Saving on Database.<br />";
        /*$sql = "INSERT INTO `registrosprestamo` (`id`, `fecha`, `nombre`, `apellidopaterno`, `apellidomaterno`, `celular`, `email`, `aceptoterminoscondicionescel`, `historialcrediticio`, `conocimientodelcliente`, `genero`, `curp`, `rfc`, `cp`, `estado`, `municipio`, `ciudad`, `colonia`, `calle`, `numeroexterior`, `numerointerior`, `parentesco`, `referenciapellido`, `telfijoreferencia`,`nivelestudios`,`salarioneto`,`ocupacion`,`detalleocupacion`, `deudas`, `frecuenciadepago`, `clabe`,`bancoclabe`,`titulartarjeta`,`fechadevencimiento`, `numerotarjeta`, `bancotarjeta`, `dineroquenecesita`, `fechadepagoen`, `totalaprestar`, `aceptoterminoscondicionescontrato`, `pictures1`, `pictures2`, `aceptocontrato`, `contrasena`, `idcontrato`,`contrato`,`timer`,`idSMS`,`idpago`,`idsugerencia`,`statuscliente`) 
                  VALUES (NULL, CURRENT_TIMESTAMP, '".$nombre."','".$apellidopaterno."','".$apellidomaterno."','".$celular."','$email','".$aceptoterminoscondicionescel."','".$historialcrediticio."','".$conocimientodelcliente."','".$genero."','".$curp."','".$rfc."','".$cp."','".$estado."','".$municipio."','".$ciudad."','".$colonia."','".$calle."','".$numeroexterior."','".$numerointerior."', '".$parentesco."','".$referenciapellido."','".$telfijoreferencia."','".$nivelestudios."','".$salarioneto."','".$ocupacion."','".$detalleocupacion."', '".$deudas."','".$frecuenciadepago."','".$clabe."','".$bancoclabe."','".$titulartarjeta."','".$fechadevencimiento."','".$numerotarjeta."', '".$bancotarjeta."','".$dineroquenecesita."','".$fechadepagoen."','".$totalaprestar."','".$aceptoterminoscondicionescontrato."','".$pictures1."','".$pictures2."','".$aceptocontrato."','".$password."','".$idcontrato."','".$contrato."','".$timer."','".$idsms."','".$idpago."','".$idsugerencia."','".$statuscliente."')";
                          $conn->exec($sql);*/
                          echo "New record created successfully";
                        }
                else {
                  echo $file ;
                }
    } catch (PDOException $e) 
    {
      echo 'Error: '. $e->getMessage();
    }
    $conn = null;
    ?>


