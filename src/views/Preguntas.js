
import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../styles/login.css";


class Preguntas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar location={this.props.history} />
        <section id="preguntas">
          <div className="container">
            <div className="row">
              <div className="col-sm padding-preguntas">
                 <h1 className="title-bold-complete">Preguntas frecuentes sobre tu préstamo en línea </h1>
                 <div className="container-parrafo-completo">
                  <p className="parrafo"><span className="pregunta_subtitle"> ¿Quién puede pedir un préstamo inmediato en Prestto?</span></p>
                    <p className="color-gray-tex">Para poder solicitar un préstamo tienes que ser mayor de 18 años, ser mexicano y residir en México, necesitas tener una cuenta de débito con antigüedad de un año, IFE/INE vigente, RFC y CURP. (Si no cuentas con alguno de estos datos, no podrás continuar con el proceso). Recuerda estar al pendiente de tu teléfono para recibir el mensaje de verificación y obtener tu préstamo de inmediato.</p>
                  <p className="parrafo"><span className="pregunta_subtitle">¿Cuánto puedo solicitar y a qué plazo?</span></p>
                    <p className="color-gray-tex">En tu primer préstamo puedes pedir hasta $5,000 pesos. Una vez seleccionado el monto podrás comenzar tu solicitud de préstamo. Las posibilidades de tener un límite de crédito más alto se incrementan si pagas tu préstamo en tiempo y forma.</p>
                  <p className="parrafo"><span className="pregunta_subtitle">¿Qué tasa de interés cobra Prestto?</span></p>
                    <p className="color-gray-tex">La tasa de interés es del 1.3688% por cada día del préstamo. Esta tasa de interés es fija. El Costo Anual Total (CAT) varía dependiendo de por cuánto tiempo requieras el préstamo.</p>
    
                  <p className="parrafo"><span className="pregunta_subtitle">¿Cómo puedo pedir un préstamo?</span></p>
                    <p className="color-gray-tex">Completa el proceso de solicitud de una forma fácil y rápida, en tan solo 3 sencillos pasos puedes solicitar tu préstamo.<br></br><br></br>
                    Si es la primera vez que solicitas un préstamo en Prestto, puedes seguir los siguientes pasos: (recuerda que mientras más información nos compartas, más altas serán las probabilidades de que se autorice tu préstamo).<br></br><br></br> 
                    
                    -Ingresa a nuestra página web <b>www.prestto.mx </b><br></br>
                    -Selecciona la cantidad y el plazo para pagar <br></br>
                    -Da clic en: Solícita tu Préstamo <br></br>
                    -El siguiente paso es completar el formulario, ¡Espera nuestra respuesta!  <br></br><br></br>
                    Si ya eres cliente:<br></br>
                    -Da clic en la parte superior derecha "Mi cuenta" y solicita tu siguiente préstamo.
                    <br></br><br></br>
                    Recuerda estar al pendiente de tu teléfono para recibir la llamada de verificación y que el proceso sea más rápido.
                  </p>
                  <p className="parrafo"><span className="pregunta_subtitle">Una vez enviada mi solicitud, ¿En cuánto tiempo puedo tener una respuesta?</span></p>
                    <p className="color-gray-tex">Una vez que nos has enviado toda la información y documentación correspondiente, tardamos aproximadamente 10 minutos en darte una respuesta. La información sobre el estado de tu solicitud se enviará a la dirección de correo electrónico que nos facilitaste y también a través de un mensaje de texto (SMS). En caso de que necesitemos verificar algún dato nos pondremos en contacto contigo.Una vez que se firma el contrato, nos toma solamente unos minutos hacer el depósito a tu cuenta.</p>
                  <p className="parrafo"><span className="pregunta_subtitle">¿Por qué rechazamos tu crédito?</span></p>
                    <p className="color-gray-tex">Hay varias razones por las que se declinan solicitudes. La razón más común es porque no se han facilitado todos los datos o documentos que se piden en la solicitud. Por lo mismo recomendamos que se provea cuidadosamente toda la información que se pide. Hay otras razones por las que aun así se declinan o quizá simplemente el solicitante no encaja en el perfil al que normalmente autorizamos préstamos. En cualquier situación, recomendamos regresar en dos o tres semanas para volver a hacer la aplicación porque estas decisiones se modifican constantemente.</p>
                    <p className="parrafo"><span className="pregunta_subtitle">¿Qué pasa si no recibo el código de verificación? </span></p>
                    <p className="color-gray-tex">En ocasiones el sistema operativo del celular no es compatible con las plataformas, es necesario cambiar el chip a un celular diferente. En caso de que el problema persista, comunícate al +52 1 55 8038 7757 o envíanos un correo a atención@prestto.mx</p>
                    <p className="parrafo"><span className="pregunta_subtitle">¿Qué pasa si no recibo el correo de confirmación?</span></p>
                    <p className="color-gray-tex">Revisa tu carpeta de "Spam"o "Correo no deseado" en tu correo electrónico, si no hay un correo, envíanos un correo a atencion@prestto.mx</p>
                    <p className="parrafo"><span className="pregunta_subtitle">¿Cómo puedo pagar mi préstamo? </span></p>
                    <p className="color-gray-tex">El pago de tu préstamo se hace a través de un depósito en ventanilla, por transferencia electrónica, o pago en efectivo a través de OXXO. Tú eliges la que sea que más te convenga.Si deseas hacer pagos anticipados puedes hacerlo y así, liquidar anticipadamente tu préstamo.
                    </p>
                    <p className="parrafo"><span className="pregunta_subtitle">¿En dónde puedo pagar mi préstamo? </span></p>
                    <p className="color-gray-tex"><b>Transferencia electrónica </b><br></br>
                      Banco Banorte <br></br>
                      Número de cuenta: 0300226122<br></br>
                      Clave interbancaria: 072180 00300226122 6 <br></br>
                      Beneficiario: AREZ FINANCIERA SA DE CV SOFOM ENR<br></br><br></br>
                      <b>En ventanilla bancaria</b><br></br>
                      <b>Banco Banorte</b> <br></br>
                      Número de cuenta: 0300226122<br></br>
                      Clave interbancaria: 072180 00300226122 6 <br></br>
                      Beneficiario: AREZ FINANCIERA SA DE CV SOFOM ENR<br></br><br></br>

                      *Al realizar el pago de tu crédito tienes que indicar tu número de REFERENCIA ASIGNADA.<br></br>



                    </p>
                    <p className="parrafo"><span className="pregunta_subtitle">¿Puedo pagar el préstamo por adelantado?</span></p>
                    <p className="color-gray-tex">Puedes pagar tu préstamo en cualquier momento. En caso de pago parcial los intereses se seguirán acumulando a tu saldo inicial. El importe de pago anticipado de tu préstamo lo encontrarás en tu cuenta. </p>
                    <p className="parrafo"><span className="pregunta_subtitle">¿Puedo solicitar otro préstamo?</span></p>
                    <p className="color-gray-tex">En caso de que hayas devuelto tu préstamo anterior en la fecha prevista y sin demoras, podrás solicitar un nuevo préstamo. Si tienes algún tipo de problema envíanos un correo a atencion@prestto.mx  o llámanos al +52 1 55 8038 7757 </p>
                    <p className="parrafo"><span className="pregunta_subtitle">¿Cómo extender el plazo de pago del préstamo?</span></p>
                    <p className="color-gray-tex">Puedes realizar una extensión, de la deuda de tu préstamo hasta por 30 días.<br></br>Para activar el servicio necesitas:<br></br><br></br>
                      1. Iniciar sesión en tu cuenta;<br></br>
                      2. En el campo "préstamo abierto" delante de la línea de "extensión adicional de" clic en "Uso".<br></br>
                      3. Elige el periodo de extensión (7, 15 o 30 días), confirma tu solicitud con el código SMS y el estado de tu préstamo cambiará a "Pendiente de Pago", a lo largo del día deberás realizar el pago por extensión para activar el servicio.<br></br>
                    </p>
                    <p className="parrafo"><span className="pregunta_subtitle">No puedo pagar el préstamo en el plazo indicado</span></p>
                      <p className="color-gray-tex"> Si por algún motivo no puedes pagar tu préstamos en el plazo definido te recomendamos solicitar una extensión hasta por 30 días ingresando a tu Cuenta. <br></br><br></br>
                      Si vence el plazo, por cada día de retraso se te cobrarán intereses moratorios sobre el importe de capital pendiente a la fecha (consulta términos y condiciones <b>en tu contrato de crédito</b>).
                    </p>
                    <p className="parrafo"><span className="pregunta_subtitle">Mi Cuenta </span></p>
                    <p className="color-gray-tex">
                      <b>Problemas con el sitio / página no se carga en el navegador.</b><br></br> 
                      Inténtalo desde una computadora ingresando a  <b>https://prestto.mx/</b> utilizando el navegador Firefox (Mozilla) para una mejor experiencia.<br></br><br></br>
                      <b>No puedo iniciar sesión, olvidé la contraseña.</b><br></br>
                      Utiliza el procedimiento de recuperación de contraseña en nuestra web <b>https://prestto.mx/</b><br></br><br></br>
                      <b>No puedo cambiar el teléfono móvil en mi cuenta.</b><br></br>
                      Para cambiar el número de teléfono debes introducir el código de verificación del SMS, obtenido en tu cuenta. Si ya no tienes acceso a este número de teléfono, envía el número antiguo, el nuevo número junto con tu IFE/INE escaneado o foto, a la dirección de correo atencion@prestto.com
                    </p>
                    <p className="parrafo"><span className="pregunta_subtitle">Servicios Adicionales</span></p>
                    <p className="color-gray-tex"> 
                      <b>¿A quién debo contactar si tengo un comentario, pregunta o queja?</b>
                      Nos puedes contactar a través de correo electrónico <b>atencion@prestto.mx</b> o al teléfono  +52 1 55 8038 7757<br></br>
                      Horario de atención: Lunes a viernes 9:30 a 15:00 y 17:00 a 19:00<br></br><br></br>

                      <b>Recordatorio de pago</b><br></br>
                      Te recordaremos a través de un mensaje de texto (SMS) a tu celular y con un mail a tu correo electrónico el importe que tienes que pagar.
                      

                    </p>
                </div>
              </div>
            </div>
          </div>
         </section>
        <Footer location={this.props.history} />
      </div>
    );
  }
}

export default Preguntas;
