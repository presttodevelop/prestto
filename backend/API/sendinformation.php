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
          $subject = '¡Tu cuenta en Prestto ha sido creada! 🚀✨';

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
                            <a href="https://prestto.mx/prestamo-en-linea-login/" target="_self">
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
                                                    <p style="height:auto">
                                                      <a href="https://prestto.mx/login" target="_blank">
                                                        <img src="https://prestto.mx/api/img/COVER1200.png" border="0" alt="PRESTTO" style="width: auto; border-radius: 0px; margin-left: 0px; margin-right: 0px; border: none; display: block;max-width: 600px" width="600" />
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
                                                        <p style="font-family:Montserrat, Open Sans, sans-serif;font-size:22px;font-weight:900;color:#0a0e44;margin-top:40px">&iexcl;Hola <span style="color:#0a0e44;"> '.$nombre.'  '.$apellidopaterno.'</span>&#33;</p>
                                                        <p style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:1.2;font-weight:200">Estos son los datos para acceder <br>a tu Cuenta creada en Prestto</p>
                                                        <p style="color:#000;font-size:18px;text-align:center;line-height:0.5;font-family:Montserrat,Open Sans,sans-serif;color:#0a0e44;"><span style="font-weight:900">Usuario:</span><span style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:0.5;font-weight:400"> '.$email.' </span> </span></p>
                                                        <p style="color:#000;font-size:18px;text-align:center;line-height:0.5;font-family:Montserrat,Open Sans,sans-serif;color:#0a0e44;"><span style="font-weight:900">Password:</span><span style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:0.5;font-weight:400"> '.$pass.' </span> </span></p>
                                                        <p style="color:#000;font-size:18px;text-align:center;line-height:0.5;font-family:Montserrat,Open Sans,sans-serif;color:#0a0e44;"><span style="font-weight:900">Password:</span><span style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:0.5;font-weight:400"> <a href="https://prestto.mx/api/'.$idcontrato.'.pdf">descargar contrato</a> </span> </span></p>
                                                        <p style="color:#000;font-size:17px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;line-height:1.2;font-weight:200">Si tienes alguna duda o necesitas informaci&oacute;n adicional <br>puedes consultar la secci&oacute;n de preguntas frecuentes.</p>
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
                                    <table style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;background-color: #323542;" align="left" width="auto" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="rwd-600" align="center" width="600" valign="top" style="background-color:#323542;padding:20px;">
                                            <table valign="top" style="width:auto;max-width:600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" width="600" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr width="100%" style="width: 100%">
                                                <!-- Dirección-->
                                                  <td style="width: 600px;" align="left" width="400" valign="top" colspan="2"> 
                                                    <p style="margin:0;padding:0;width:100px;text-align:left">
                                                      <img src="https://prestto.mx/api/img/Prestto_logo_white.png" style="width: 100px !important;margin-left: 20px;"/>
                                                    </p>
                                                    <p style="margin:0;padding:0;width:300px;text-align:left"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff;">&nbsp;</span></p>
                                                    <p style="margin:0;padding:0;width:300px;text-align:left"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff;line-height:1.2;margin-left: 19px;">¡Pr&eacute;stamo en linea, Confiables y al Instante!</span></p>
                                                    <p style="margin:0;padding:0;width:300px;text-align:left"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff;line-height:1.2;margin-left: 19px;">Recibelo sin salir de casa.</span></p>
                                                    <p style="margin:0;padding:0;width:300px;text-align:left"><a href="" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff">&nbsp;</span></a></p>
                                                  </td>
                            
                                                  <td style="width: 600px;" align="left" width="600" valign="top" > 
                                                    <p style="color:#fff;font-size: 12px;text-align:right;margin-right:20px;">S&iacute;guenos en:</p>
                                                    <p style="padding:0;width:100%;text-align:right;margin-right:-870px;">
                                                      <a href="https://www.facebook.com/PresttoMexico" target="_blank"> <img src="https://prestto.mx/api/img/facebook.png" alt="" /> </a>
                                                      <a href="https://www.instagram.com/prestto_mexico/" target="_blank" > <img src="https://prestto.mx/api/img/instagram.png" alt="" /> </a>
                                                      <a href="https://www.linkedin.com/prestto?_l=es_ES" target="_blank" style="margin-right:20px"> <img src="https://prestto.mx/api/img/linkedin.png" alt="" /> </a>
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
                          
                          <!--FOOTER-->
                          <table style="margin: 0px auto; width: 100%; max-width: 600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="background-color:transparent;padding-top:0px;padding-bottom:0px;padding-right:0;padding-left:0;text-align:center;font-size:0;">
                                  <!--[if (gte mso 9)|(IE)]><table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;"> <tbody> <tr> <td width="600" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;font-size: 0;"><![endif]-->
                                  <div class="rwd-600" style="width:100%;max-width:600px;display:inline-block;vertical-align:top;" align="center">
                                    <table style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;background-color: #323542;" align="left" width="auto" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <!-- Leyenda -->
                                        <tr style="background-color: #323542;padding: 20px 0;">
                                          <td style="padding:0px 30px 20px">
                                              <p style="margin:0;padding:10px ;width:100%;text-align:left;line-height:0.8; width:65%;float:left; ">
                                                  <span style="font-family:Montserrat,Open Sans,sans-serif;font-size:8px;color:#fff;line-height:1;">
                                                    Te recomendamos pagar tu pr&eacute;stamo a tiempo para poder obtener mejores beneficios en Prestto. 
                                                    Contramos con diferentes establecimientos para que puedas realizar el pago de tu pr&eacute;stamo de 
                                                    una forma f&aacute;cil y sencilla, ya sea en efectivo o transferencia bancaria.
                                                  </span>
                                              </p>
                                              <p style="margin:0;width:130px;text-align:left;line-height:0.8;margin-left:8px;padding: 10px; padding:21px 0;text-align: center;width:26%;float: left;">
                                                <a href="https://prestto.mx/prestamo-en-linea-login" target="_blank">
                                                  <span style="background-color:#5a6ff0;background-image: linear-gradient(62deg, #5a6ff0 0%, #c31fe6 100%);font-size:10px;color:#fff;border-radius: .25rem;padding:6px;">Pagar mi pr&eacute;stamo</span>
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
                          </table>
                          <div style="background-image: linear-gradient(62deg, #5a6ff0 0%, #c31fe6 100%);height: 1px;"></div>
                          <!--FOOTER-->
                          <table style="margin: 0px auto; width: 100%; max-width: 600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="background-color:transparent;padding-top:0px;padding-bottom:0px;padding-right:0;padding-left:0;text-align:center;font-size:0;">
                                  <!--[if (gte mso 9)|(IE)]><table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;"> <tbody> <tr> <td width="600" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;font-size: 0;"><![endif]-->
                                  <div class="rwd-600" style="width:100%;max-width:600px;display:inline-block;vertical-align:top;" align="center">
                                    <table style="border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;background-color: #323542;" align="left" width="auto" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="rwd-600" align="center" width="600" valign="top" style="background-color:#323542;padding:20px;">
                                            <table valign="top" style="width:auto;max-width:600px;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" width="600" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr width="100%" style="width: 100%">
                                                <!-- Dirección-->
                                                  <td style="width: 600px;" align="left" width="600" valign="top" colspan="7" > 
                                                    <p style="margin:0;padding:0;width:250px;text-align:left;margin-top: -5px;"><a href="https://prestto.mx/" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:7px;color:#fff;line-height:1.2;margin-left: 19px;">Prestto M&eacute;xico &reg; Todos los Derechos Reservados </span></a></p>
                                                  </td>

                                                  <td style="width: 600px;" align="left" width="600" valign="top" > 
                                                    <a href="https://prestto.mx/terminosycondiciones/" target="_blank">
                                                      <p style="margin:0;padding:0;width:100%;text-align:left;color:#fff;font-family:Montserrat,Open Sans,sans-serif;font-size:6px;line-height:1.2"> T&eacute;rminos y Condiciones &nbsp;&nbsp;|&nbsp;&nbsp; </p>
                                                    </a>
                                                  </td>
                                                  <td style="width: 600px;" align="left" width="600" valign="top" > 
                                                    <a href="https://prestto.mx/avisodeprivacidad" target="_blank">
                                                      <p style="margin:0;padding:0;width:100%;text-align:left;line-height:1.2"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:6px;color:#fff">Aviso de Privacidad &nbsp;&nbsp;|&nbsp;&nbsp;</span></p>
                                                    </a>
                                                  </td>
                                                  <td style="width: 600px;" align="left" width="600" valign="top" > 
                                                    <a href="https://prestto.mx/prestamo-en-linea-preguntas" target="_blank">
                                                      <p style="margin:0;padding:0;width:100%;text-align:left;line-height:1.2"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:6px;color:#fff">Preguntas Frecuentes &nbsp;&nbsp;|&nbsp;&nbsp;</span></p>
                                                    </a>
                                                  </td>
                                                  <td style="width: 600px;" align="left" width="600" valign="top" > 
                                                    <a href="https://prestto.mx/cat" target="_blank">
                                                      <p style="margin:0;padding:0;width:100%;text-align:left;line-height:1.2"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:6px;color:#fff">CAT</span></p>
                                                    </a>
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

                         
                          </div>
                          <!--[if (gte mso 9)|(IE)]></td></tr></tbody></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table
            </body>
          </html>
          ';

          // To send HTML mail, the Content-type header must be set
          $headers[] = 'MIME-Version: 1.0';
          $headers[] = 'Content-type: text/html; charset=iso-8859-1';

          // Additional headers
          $headers[] = 'From:Prestto<noreply@prestto.mx>';

          // Mail it
          mail($to, $subject, $message, implode("\r\n", $headers));

     if(!empty($celular)) {
        echo "Saving on Database.<br />";
        $sql = "INSERT INTO `registrosprestamo` (`id`, `fecha`, `nombre`, `apellidopaterno`, `apellidomaterno`, `celular`, `email`, `aceptoterminoscondicionescel`, `historialcrediticio`, `conocimientodelcliente`, `genero`, `curp`, `rfc`, `cp`, `estado`, `municipio`, `ciudad`, `colonia`, `calle`, `numeroexterior`, `numerointerior`, `parentesco`, `referenciapellido`, `telfijoreferencia`,`nivelestudios`,`salarioneto`,`ocupacion`,`detalleocupacion`, `deudas`, `frecuenciadepago`, `clabe`,`bancoclabe`,`titulartarjeta`,`fechadevencimiento`, `numerotarjeta`, `bancotarjeta`, `dineroquenecesita`, `fechadepagoen`, `totalaprestar`, `aceptoterminoscondicionescontrato`, `pictures1`, `pictures2`, `aceptocontrato`, `contrasena`, `idcontrato`,`contrato`,`timer`,`idSMS`,`idpago`,`idsugerencia`,`statuscliente`) 
                  VALUES (NULL, CURRENT_TIMESTAMP, '".$nombre."','".$apellidopaterno."','".$apellidomaterno."','".$celular."','$email','".$aceptoterminoscondicionescel."','".$historialcrediticio."','".$conocimientodelcliente."','".$genero."','".$curp."','".$rfc."','".$cp."','".$estado."','".$municipio."','".$ciudad."','".$colonia."','".$calle."','".$numeroexterior."','".$numerointerior."', '".$parentesco."','".$referenciapellido."','".$telfijoreferencia."','".$nivelestudios."','".$salarioneto."','".$ocupacion."','".$detalleocupacion."', '".$deudas."','".$frecuenciadepago."','".$clabe."','".$bancoclabe."','".$titulartarjeta."','".$fechadevencimiento."','".$numerotarjeta."', '".$bancotarjeta."','".$dineroquenecesita."','".$fechadepagoen."','".$totalaprestar."','".$aceptoterminoscondicionescontrato."','".$pictures1."','".$pictures2."','".$aceptocontrato."','".$password."','".$idcontrato."','".$contrato."','".$timer."','".$idsms."','".$idpago."','".$idsugerencia."','".$statuscliente."')";
                          $conn->exec($sql);
                          echo "New record created successfully";
                        }
                else {
                  echo "ERROR TO INSERT POST";
                }
    } catch (PDOException $e) 
    {
      echo 'Error: '. $e->getMessage();
    }
    $conn = null;
    ?>


