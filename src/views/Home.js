import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//CONECTAR COMPONENTE CON REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getUsers } from '../redux/actions'



import FixedBoton from '../components/FixedBoton';
import Calculadora from '../components/Calculadora';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import $ from 'jquery';

/* Images */
import cohetelado from '../assets/img/icons/blancos/Icon-01.png';
import marciano from '../assets/img/icons/blancos/Icon-02.png';
import planeta from '../assets/img/icons/blancos/Icon-03.png';
import coheteicon from '../assets/img/icons/icon7.png';
import procesando from '../assets/img/icons/icon5.png';
import transferencia from '../assets/img/icons/icon6.png';
import video from '../assets/video/animation.mp4';
import img1 from '../assets/img/slider/descarga1.jpeg';
import img2 from '../assets/img/slider/descarga2.jpg';
import img3 from '../assets/img/slider/descarga3.jpeg';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


class Home extends Component {

  constructor(props) {
    super(props); 
  
  }


  render() {
    window.onload = function(e) {
      $(window).scroll(function() {
        $('#titlefunciona').each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow + 1000) {
            $(this).addClass("fadeIndos");
          }
          else {
            $(this).removeClass("fadeIndos");
          }
        });
      });
    }

    return (
      <div className={this.props.location.pathname === '/' ? "container-pres container-main bgdegradado": "container-pres container-main"}> 
        <NavBar location={this.props.history} />
          <section id="banner">
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
              <source src={video} type="video/mp4" />
            </video>
            <div className="container">
              <div className="row">
                <div className="col-sm padding-home-top">
                  <h1 className="title-bold-h">Préstamos personales</h1>
                  <h3 className="title-semibild">Confiables y al Instante</h3>
                  <p className="parrafo-semibild">¡Recíbelo sin salir de casa!</p>
                  <div className="container-parrafo-completo">
                    <p className="parrafo"><span className="img_bullet"><img src={ cohetelado } alt="prestto-prestamos-en-linea-01" className="icon_bullet"/></span><span className="texto_bullet">Solución rápida y segura para conseguir dinero. </span></p>
                    <p className="parrafo"><span className="img_bullet"><img src={ marciano } alt="prestto-prestamos-en-linea-02"  className="icon_bullet"/></span><span className="texto_bullet"> Recibe el dinero en pocos minutos.</span></p>
                    <p className="parrafo"><span className="img_bullet"><img src={ planeta } alt="prestto-prestamos-en-linea-03" className="icon_bullet"/></span><span className="texto_bullet"> Sin necesidad de ir a un banco y hacer largas filas.</span></p>
                  </div>
                </div>
                <div className="col-sm padding-home-topb">
                    <Calculadora></Calculadora>
                </div>
              </div>
            </div>
          </section>

          {/*<section id="nube"></section>*/}
      {/* Iconos */}
        <section id="comofunciona">   
          <div className="row banner-home">
              <div className="container">
                <h3 id="titlefunciona" className="text-center title-prestify-standard blue-text">¿Cómo Funcionan los préstamos<br></br>inmediatos con Prestto? </h3>
                  <div id="iconfuncion" className="row justify-content-md-center mt-5">
                    <div className="col-sm text-center">
                      <img id="coheteespacial" src={ coheteicon } alt="prestto-prestamos-en-linea-04"  className="icon_medio_m"/>
                      <h5 className="prestamotitle"><b>Solicita tu préstamo</b></h5>
                      <p className="blue-text presta-subtitle">No te llevará más de 10 minutos</p>
                      <p className="blue-text presta-subtitle">Solo necesitas: Ser mayor de 18 años </p>
                      <p className="blue-text presta-subtitle"> Vivir en México </p>
                      <p className="blue-text presta-subtitle">Tener una cuenta bancaria de débito</p>
                      <p className="blue-text presta-subtitle">Correo electrónico</p>
                      <p className="blue-text presta-subtitle">Número de teléfono</p>
                    </div>
                    <div className="col-sm text-center">
                      <img src={ procesando } alt="prestto-prestamos-en-linea-5"  className="icon_medio_m"/>
                      <h5 className="prestamotitle"><b>Procesamos tu solicitud</b></h5>
                      <p className="blue-text">Te respondemos en 1 minuto</p>
                    </div>
                    <div className="col-sm text-center">
                      <img src={ transferencia } alt="prestto-prestamos-en-linea-06"  className="icon_medio_m"/>
                      <h5 className="prestamotitle"><b>Te haremos una transferencia</b></h5>
                      <p className="blue-text">En tan solo 15 minutos</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <p className="blue-text text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  </div>
              </div>
          </div>
        </section>
      {/* Image and Text */}
        <section id="tranquilidad" className="columna_a">
          <div className="row">

             <div className="container">
                <h3 className="text-center title-prestify-standard">Forma parte de la comunidad Prestto <br></br> y aumenta tus préstamos </h3>
                  <div id="iconfuncion" className="row justify-content-md-center">
                    <div className="col-sm text-center">  
                    </div>
                    <div className="col-sm text-center">
                       <div className="card_presty">
                        <h5><b>Inicio</b></h5>
                        <img src={ procesando } alt="prestto-prestamos-en-linea-08"  className="icon_medio_b"/>
                        <div className="texto-container-card">
                          <p>hasta $2,000 MXN</p>
                          <p>de 7 a 30 días.</p>
                          <div className="text-center">
                            <a href="/prestamo-en-linea-preguntas"><p className="btn btn-prestify-gray btn-lg text-center">  Conoce más </p></a>
                        </div>
                        </div>
                       </div>
                    </div>
                    <div className="col-sm text-center">
                      <div className="card_presty">
                        <h5><b>Despegue</b></h5>
                        <img src={ coheteicon } alt="prestto-prestamos-en-linea-09"  className="icon_medio_b"/>
                        <div className="texto-container-card">
                          <p>hasta $5,000 MXN</p>
                          <p>de 7 a 30 días.</p>
                          <div className="text-center">
                            <a href="/prestamo-en-linea-preguntas"><p className="btn btn-prestify-gray btn-lg text-center">  Conoce más </p></a>
                        </div>
                        </div>
                       </div>
                    </div>
                    <div className="col-sm text-center">  
                    </div>
                   {/*} <div className="col-sm text-center">
                      <div className="card_presty">
                        <h5><b>Ascenso</b></h5>
                        <img src={ cohetelado } alt="prestto-prestamos-en-linea"Prestto"  className="icon_medio_b"/>
                        <div className="texto-container-card">
                          <p>hasta $5,000 MXN</p>
                          <p>de 7 a 30 días.</p>
                          <div className="text-center">
                            <a href="/prestamo-en-linea-preguntas"><p className="btn btn-prestify-gray btn-lg text-center">  Conoce más </p></a>
                        </div>
                        </div>
                       </div>
                    </div>
                    <div className="col-sm text-center">
                      <div className="card_presty">
                        <h5><b>Turbo</b></h5>
                        <img src={ marciano } alt="prestto-prestamos-en-linea"Prestto"  className="icon_medio_b"/>
                        <div className="texto-container-card">
                          <p>hasta $12,000 MXN</p>
                          <p>de 7 a 30 días.</p>
                          <div className="text-center">
                            <a href="/prestamo-en-linea-preguntas"><p className="btn btn-prestify-gray btn-lg text-center"> Conoce más </p></a>
                        </div>
                        </div>
                       </div>
                  </div>*/}
                  </div>
              </div>
          </div>
        </section>
        <section className="container-carrousel mt-8">
          <h3 className="text-center title-prestify-carrousel">Forma parte de la comunidad Prestto <br></br> y aumenta tus préstamos </h3>
        <div className="container-carrousel">
          <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1800}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={800}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div>
                  <div class="card card-container">
                    <img class="card-img-top" src={img1} alt="prestto-prestamos-en-linea-10" />
                    <div class="card-body">
                      <h5 class="card-title">Préstamos en línea</h5>
                      <p class="card-text">En los momento en que requiero ese apoyo económico, sé que cuento con Prestto, es rápido sin tanto tramite en papel y en menos de 10 minutos tengo mi dinero en mi cuenta</p>
                      <a href="#" class="btn btn-primary-pres">Ver Nota</a>
                    </div>
                  </div>
                </div>
                <div>
                <div class="card card-container">
                    <img class="card-img-top" src={img2} alt="prestto-prestamos-en-linea-11" />
                    <div class="card-body">
                      <h5 class="card-title">Préstamos en línea</h5>
                      <p class="card-text">En los momento en que requiero ese apoyo económico, sé que cuento con Prestto, es rápido sin tanto tramite en papel y en menos de 10 minutos tengo mi dinero en mi cuenta</p>
                      <a href="#" class="btn btn-primary-pres">Ver Nota</a>
                    </div>
                  </div>
                </div>
                <div>
                <div class="card card-container">
                    <img class="card-img-top" src={img3} alt="prestto-prestamos-en-linea-12" />
                    <div class="card-body">
                      <h5 class="card-title">Préstamos en línea</h5>
                      <p class="card-text">En los momento en que requiero ese apoyo económico, sé que cuento con Prestto, es rápido sin tanto tramite en papel y en menos de 10 minutos tengo mi dinero en mi cuenta</p>
                      <a href="#" class="btn btn-primary-pres">Ver Nota</a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
        </section>
        <Footer location={this.props.history} />
      </div>
    )
  }
}

//Esta funcion convierte el valor de la store que yo quiero en propiedades para el componente.
function mapStateToProps(state){
  return {
    users: state.getUsers
  }
}
//Para que puede ser utilizada en el componente
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getUsers
  }, dispatch )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
