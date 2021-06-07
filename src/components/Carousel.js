import React, { Component } from 'react';

class Carousel extends Component {

  render() {
    return (
        <div>
            <div class='container pd-container'>
                <h3 className='pd-title text-center'>HAZ QUE SUCEDA</h3>
                <p className="text-center text-para"> <b>PRESTIFY</b> te ofrece grandes beneficios, asesoría financiera <br></br>y el control total de  tu préstamo.</p>
                <div className='row pd-row1'>
                    <div className='pd-area col-md-4'>
                        <a href='' data-slide-to='0'  ><div className='effect-bubba pd-rec' data-toggle="modal" data-target="#showProductModal"><img className='img-reponsive' src='http://prestify.mx/img_inter/beneficio1.jpg'/>
                            <figcaption>
                                
                            </figcaption>	
                        </div></a>
                        <div className='pd-des pd-sq-des text-center'>
                            <p className='orange'><b>PRÉSTAMOS GARANTIZADOS</b></p>
                            <span>Tasas y cuotas que se adaptan a tus necesidades.</span>
                        </div>
                    </div>
	
				<div class='pd-area col-md-4'>
					<a href=''  data-slide-to='1'><div data-toggle="modal" data-target="#showProductModal" className='effect-bubba pd-rec'><img className='img-reponsive' src='http://prestify.mx/img_inter/beneficio2.jpg'/>
					<figcaption>
						
					</figcaption>	
					</div></a>
					<div class='pd-des pd-rec-des text-center'>
					    <p className='orange'><b>REQUISITOS FLÉXIBLES</b></p>
					    <span>No se necesitan propiedades en garantía, ni anticipos.</span>
					</div>
				</div>
				<div class='pd-area col-md-4'>
					<a  data-slide-to='2' href=''><div data-toggle="modal" data-target="#showProductModal" className='effect-bubba pd-rec'><img className='img-reponsive' src='http://prestify.mx/img_inter/beneficio3.jpg'/>
					<figcaption>
						
					</figcaption>	
					</div></a>
					<div className='pd-des pd-rec-des text-center'>
					    <p className='orange'><b>PRÉSTAMOS AL MOMENTO</b></p>
					    <span>Tiempos de respuesta cortos para ayudarte a iniciar o dirigir tu negocio. </span>
					</div>
				</div>
		</div>
	</div>
</div>

    )
  }
}

export default Carousel;