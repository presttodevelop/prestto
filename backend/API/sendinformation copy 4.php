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
        $salarioneto=$_GET['salarioneto'];
        $ocupacion=$_GET['ocupacion'];

        $deudas=$_GET['deudas'];
        $frecuenciadepago=$_GET['frecuenciadepago'];
        $clabe=$_GET['clabe'];
        $banco=$_GET['banco'];
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
        $contrato=$_GET['contrato'];
        

        //Carácteres para la contraseña
        $cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#!€%&()";
        $longitudCadena=strlen($cadena);
        //Definimos la variable que va a contener la contraseña
        $pass = "";
        //Se define la longitud de la contraseña, puedes poner la longitud que necesites
        //Se debe tener en cuenta que cuanto más larga sea más segura será.
        $longitudPass=10;

        //Creamos la contraseña recorriendo la cadena tantas veces como hayamos indicado
        for($i=1 ; $i<=$longitudPass ; $i++){
            //Definimos numero aleatorio entre 0 y la longitud de la cadena de caracteres-1
            $pos=rand(0,$longitudCadena-1);

            //Vamos formando la contraseña con cada carácter aleatorio.
            $pass .= substr($cadena,$pos,1);
        }

        //Guardar cifrada la informacion md5
        // Multiple recipients
          $to = $email; // note the comma
          // Subject
          $subject = 'Bienvenido a Prestify';

          // Message
          $message = '
                      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

                          <head>
                            <title>BIENVENIDO A PRESTIFY</title>
                            <link rel="icon" href="img/favicon.ico" type="image/gif" sizes="16x16">
                            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                            <meta name="Title" content="PRESTIFY" />
                            <meta name="Author" content="PRESTIFY" />
                            <meta name="Copyright" content="Copyright by PRESTIFY" />
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

                          <body style="Margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#ffffff;"> <span class="preheader" style="visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;display: none !important; font-size: 0px;"></span>
                            <table class="email-content-table" style="background-color:#ffffff;border-spacing:0;border-collapse: collapse;mso-cellspacing: 0;mso-padding-alt: 0 0 0 0;" align="center" width="100%" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:5px;background-color: #ffffff; font-size: 0;" align="center">&nbsp;</td>
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
                                                                <p style="height:5px; background:linear-gradient(62deg,#5a6ff0,#c31fe6);"></p>
                                                                <td style="width: 600px;" align="center" width="600" valign="top"> <a style="font-size: 10px" href="https://prestify.mx/" target="_blank">
                                                                  <p style="font-family:Montserrat, Open Sans, sans-serif;font-size:30px;color:#5a3186;">Bienvenido a</p>
                                                                  <img src="https://prestify.mx/api/img/logo.png" border="0" alt="Prestify" style="width: auto; border-radius: 0px; margin-left: 0px; margin-right: 0px; border: none; display: block;max-width: 250px" width="250" /></a>
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
                                                                  <p style="color:#000;font-size:25px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;">¡Hola <span style="color:#5a3186;"> '.$nombre.'  '.$apellidopaterno.' !</span></p>
                                                                  <img src="https://prestify.mx/api/img/icon3.png" width="30px" height:"auto" alt="Prestify" />
                                                                  <p style="color:#000;font-size:20px;text-align:center;font-family:Montserrat,Open Sans,sans-serif;">Los datos de acceso al sitio web son:</span></p>
                                                                  <p style="color:#000;font-size:18px;text-align:center;line-height:0.5;font-family:Montserrat,Open Sans,sans-serif;color:#5a3186;">Usuario:<span style="color:#000;"> '.$nombre.' </span> </span></p>
                                                                  <p style="color:#000;font-size:18px;text-align:center;line-height:0.5;font-family:Montserrat,Open Sans,sans-serif;color:#5a3186;">Password:<span style="color:#000;"> '.$pass.' </span> </span></p>
                                                                  <a href="https://prestify.mx/login" target="_self">
                                                                    <p style="color:#000;font-size:18px;text-align:center;line-height:1.2; background-color: #5a6ff0; border-radius: 8px 8px 8px 8px;background-image: linear-gradient(62deg,#5a6ff0,#c31fe6);width:250px;color:#fff;margin-top:5%; padding:1.5% 4%;font-family:Helvetica,Arial,sans-serif;">INGRESAR </span></p>
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
                                                                  <p style="margin:0;padding:0;width:100%;text-align:left"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:14px;color:#fff;font-weight:400;">Prestify </span></p>
                                                                  <p style="margin:0;padding:0;width:100%;text-align:left"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff">Av. Nuevo León #213 - 602<br>Col. Condesa<br>Cuautémoc CDMX</span></p>
                                                                </td>

                                                                <td style="width: 600px;" align="center" width="600" valign="top" > 
                                                                  <p style="margin:0;padding:0;width:100%;text-align:left"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:14px;color:#fff;font-weight:400;">Siguenos en </span></p><br>
                                                                  <p style="margin:0;padding:0;width:100%;text-align:left"><a href="https://www.facebook.com/Prestify-M%C3%A9xico-114322723746488" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;;font-size:10px;color:#fff"><img src="https://prestify.mx/api/img/facebook.png" alt="prestify">facebook/prestifymexico</span></a></p>
                                                                  <p style="margin:0;padding:0;width:100%;text-align:left"><a href="" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;;font-size:10px;color:#fff"><img src="https://prestify.mx/api/img/instagram.png" alt="prestify">Instagram/prestifymexico</span></a></p>
                                                                  <p style="margin:0;padding:0;width:100%;text-align:left"><a href="" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;;font-size:10px;color:#fff"><img src="https://prestify.mx/api/img/linkedin.png" alt="prestify">Linkedin/prestify</span></a></p>
                                                                </td>
                                                                <td style="width: 600px;" align="center" width="600" valign="top" > 
                                                                  <p style="margin:0;padding:0;width:100%;text-align:left"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:14px;color:#fff;font-weight:400;">Atención a cliente </span></p>
                                                                  <p style="margin:0;padding:0;width:100%;text-align:left"><a href="tel:+525580387757" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff">+52 55 8038 7757</span></a></p>
                                                                  <p style="margin:0;padding:0;width:100%;text-align:left"><a href="mailto:atencion@prestify.mx" target="_blank"><span style="font-family:Montserrat,Open Sans,sans-serif;font-size:10px;color:#fff"><br>atencion@prestify.mx</span></a></p>
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
          $headers[] = 'From: Prestify <contacto@prestify.mx>';

          // Mail it
          mail($to, $subject, $message, implode("\r\n", $headers));

     if(!empty($celular)) {
        echo "Saving on Database.<br />";
        $sql = "INSERT INTO `registrosprestamo` (`id`, `fecha`, `nombre`, `apellidopaterno`, `apellidomaterno`, `celular`, `email`, `aceptoterminoscondicionescel`, `historialcrediticio`, `conocimientodelcliente`, `curp`, `rfc`, `cp`, `estado`, `municipio`, `ciudad`, `colonia`, `calle`, `numeroexterior`, `numerointerior`, `parentesco`, `referenciapellido`, `telfijoreferencia`, `salarioneto`, `ocupacion`, `deudas`, `frecuenciadepago`, `fechadevencimiento`, `numerotarjeta`, `bancotarjeta`, `dineroquenecesita`, `fechadepagoen`, `totalaprestar`, `aceptoterminoscondicionescontrato`, `pictures1`, `pictures2`, `aceptocontrato`, `contrasena`, `contrato`) 
                  VALUES (NULL, CURRENT_TIMESTAMP, '".$nombre."','".$apellidopaterno."','".$apellidomaterno."','".$celular."','$email','".$aceptoterminoscondicionescel."','".$historialcrediticio."','".$conocimientodelcliente."','".$curp."','".$rfc."','".$cp."','".$estado."','".$municipio."','".$ciudad."','".$colonia."','".$calle."','".$numeroexterior."','".$numerointerior."', '".$parentesco."','".$referenciapellido."','".$telfijoreferencia."','".$salarioneto."','".$ocupacion."', '".$deudas."','".$frecuenciadepago."','".$fechadevencimiento."','".$numerotarjeta."', '".$bancotarjeta."','".$dineroquenecesita."','".$fechadepagoen."','".$totalaprestar."','".$aceptoterminoscondicionescontrato."','".$pictures1."','".$pictures2."','".$aceptocontrato."','".$password."','".$contrato."')";
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


