import React, { Component } from 'react';


/* instagram */
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import linkedin from '../assets/img/linkedin.png';

class Footer extends Component {
    constructor(props) {     
        super(props);
        this.state = {
            cookie:true
          }
    this.setCookie = this.setCookie.bind(this);
    this.checkCookie = this.checkCookie.bind(this)
    }

    componentDidMount(){
        this.checkCookie()
    }
    checkCookie() {
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        var name = "prestto";
        if(ca != "") {
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                  //console.log("c", c.indexOf('prestto'))
                }

                if (c.indexOf(name) == 0) {
                    this.setState({cookie:false})
                }
            }
        } else {
            this.setState({cookie:true})
        }
    }

    setCookie(){
        let cname = 'prestto'
        let cvalue ='prestto'
        let exdays =5
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        this.setState({cookie:false})
        console.log(document.cookie)
    }

  render() {
    return (
    <div className= {this.props.location.location.pathname === '/home' ? "container_fluid footer_css" : "container_fluid footer_css"}>
            <div className={this.state.cookie ? "cookies bggpurple" : "hide"}>
                <p className="left-bga">Utilizamos cookies propias y de terceros para mejorar nuestros servicios y recopilar datos estadísticos. <br></br>
                Si continúa navegando, consideramos que acepta su uso. Puede cambiar la configuración o informarse acerca de nuestra <a href="/terminosycondiciones" target="_blank" className="color-cookies">Política de cookies.</a></p>
                <p className="left-bg btn-cookies" onClick={this.setCookie}>ACEPTAR</p>
            </div>
        <div className="row padding-footer">
            <div className="col-sm contactofooter footer_mobile">
                <p className="subtitle-footer">Prestto</p>
                <p className="footer_p">Créditos inmediatos</p>
                <p className="footer_p">Cálculo de préstamo</p>
                <p className="footer_p">Formas de pago</p>
                <p className="footer_p">Plazos de Pago</p>
                <p className="footer_p"><a href="/prestamo-en-linea-blog" className="nav-link" target="_self">Blog</a></p>
            </div>
            <div className="col-sm contactofooter footer_mobile">
                <p className="subtitle-footer">Ayuda</p>
                <p className="footer_p">Acerca de nosotros</p>
                <p className="footer_p"><a href="/avisodeprivacidad" target="_self">Aviso de Privacidad</a></p>
                <p className="footer_p"><a href="/terminosycondiciones">Términos y Condiciones</a></p>
                <p className="footer_p"><a href="/prestamo-en-linea-preguntas" target="_self">Preguntas Frecuentes</a></p>
                <p className="footer_p"><a href="/une" target="_self">UNE</a></p>
                <p className="footer_p"><a href="/cat" target="_self">CAT</a></p>
            </div>
            <div className="col-sm footer_mobile">
                <p className="subtitle-footer">Síguenos en</p>
                <p className="footer_p redes_text"><a href="https://www.facebook.com/PresttoMexico" target="_blank"><img src={facebook} className="iconos_redes" alt="Prestto" /> facebook/PresttoMexico</a></p>
                <p className="footer_p redes_text"><a href="https://www.instagram.com/prestto_mexico/" target="_blank"><img src={instagram} className="iconos_redes" alt="Prestto" /> Instagram/prestto_mexico</a></p>
                <p className="footer_p redes_text"><a href="https://www.linkedin.com/prestto" target="_blank"><img src={linkedin} className="iconos_redes" alt="Prestto" /> Linkedin/prestto</a></p>
            </div>
            <div className="col-sm footer_mobile">
                <p className="subtitle-footer">Contacto</p>
                <p className="footer_p">Av. Nuevo León #213 - 602</p>
                <p className="footer_p">Col. Condesa</p>
                <p className="footer_p">Cuauhtemoc CDMX</p>
                <p className="footer_p"><a href="tel:+525580387757" target="_blank">Tel: 55 8038 7757</a></p>
                <p className="footer_p"><a href="mailto:atencion@prestto.mx" target="_blank">atencion@prestto.mx</a></p>
                <p className="footer_p"><a href="http://prestto.mx/" target="_blank">www.prestto.mx</a></p>
            </div>
        </div>
        <div className="row foot_line">
            <div className="col">
                    <div className="footer-mini">
                </div>
            </div>
        </div>


    </div>
    )
  }
}

export default Footer;