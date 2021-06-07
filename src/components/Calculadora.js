import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

//CONECTAR COMPONENTE CON REDUX
import { connect } from 'react-redux';
import saveCalculadora from '../redux/actions'

const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  
  const marks = [
    {
      value: 0,
      label: '$1,000',
    },
    {
      value: 100,
      label: '$8,000',
    },
  ];

  const dias = [
    {
      value: 0,
      label: '7',
    },
    {
      value: 100,
      label: '60',
    },
  ];
  

class Calculadora extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 20,
            setValue: 1000,
            setDias:10,
            interes:41.064,
            tasadiaria:41.064 / 30,
            interesDiario:''
        }

        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleSliderChangeDias = this.handleSliderChangeDias.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.valuetext = this.valuetext.bind(this);
        this.valueDias = this.valueDias.bind(this);
        this.valueLabelFormat = this.valueLabelFormat.bind(this);
    }

    valuetext = (value) =>{
        return `$ ${value}`;
    }
    valueDias = (value) =>{
        return `${value}`;
    }

    valueLabelFormat = (value) => {
      return marks.findIndex((mark) => mark.value === value);
    }
    valueLabelFormatDias = (value) => {
      return dias.findIndex((dia) => dia.value === value);
    }

    handleSliderChange = (event, newValue) => {
        this.setState({ setValue:newValue });
      };
    handleSliderChangeDias = (event, newValue) => {
        this.setState({ setDias: newValue });
        let interesTotal = this.state.setValue / this.state.setDias;
        this.setState({ interes: interesTotal });
      }
    
    handleClick = (values) => {
      let data = {
              recibiras: this.state.setValue,
              duracion: this.state.setDias,
              totalapagar: values
      }
      this.props.saveCalculadora(data);
    }


  render() {
    this.interesDiario = this.state.setValue/100 * this.state.tasadiaria;
    this.interesTotal = this.interesDiario *  this.state.setDias;
    this.ivainteres = this.interesTotal * 0.16;
    this.totalapagar =  this.state.setValue +   this.interesTotal + this.ivainteres;
    this.cattotal =  (((this.state.setValue + this.interesTotal + this.ivainteres ) - this.state.setValue)/ this.state.setValue * 12)*100;
    
    
    let dd = new Date(); // or any date and time you care about 
    let days =  this.state.setDias;
    let newDate = new Date(Date.now()+days*24*60*60*1000);
    let dateformat = moment(newDate).format('ll'); 
    
    return (
        <div className="container_calculadora">
            <div className="section-calc-monto">
                <div className="slidecontainer">
                  <div className="row">
                  <div className="col-sm container_img_cohete">
                    </div>
                    <div className="col-sm">
                    <p className="text-left parrafomini">¿Cuánto dinero necesitas? </p>
                      <Slider
                          defaultValue={1000}
                          getAriaValueText={this.valuetext}
                          aria-labelledby="discrete-slider"
                          valueLabelDisplay="auto"
                          step={500}
                          marks
                          min={1000}
                          max={5000}
                          onChange={this.handleSliderChange}
                      />
                      <p className="texto-slide-men"></p>
                      <p className="text-left parrafomini">¿En cuánto tiempo lo quieres pagar? </p>
                      <Slider
                          defaultValue={10}
                          aria-labelledby="discrete-slider"
                          getAriaValueText={this.valueLabelFormatDias}
                          step={1}
                          valueLabelDisplay="auto"
                          marks
                          min={7}
                          max={30}
                          onChange={this.handleSliderChangeDias}
                      />
                        <div className="text-center">
                            <Link to="/prestamo-en-linea-registro">
                              <p className="btn btn-prestify-main btn-lg text-center"  onClick={() => this.handleClick(this.totalapagar.toFixed(2))}> Solicita tu préstamo</p>
                            </Link>
                        </div>

                        <div className="calculos_container">
                          <div className="row">
                              <div className="col-8 font-weight-normal">Monto del Préstamo</div>
                              <div className="col-4 text-right font-weight-normal"> $ {this.state.setValue.toFixed(2).toString()}</div> 
                              <div className="col-8 font-weight-normal">Fecha de Pago</div>
                              <div className="col font-date"> { dateformat }</div> 
                              <div className="col-8 font-weight-normal">Total a pagar</div>
                              <div className="col-4 text-right font-weight-normal"> $ {this.totalapagar.toFixed(2).toString()  }</div> 
                              <div className="col-8 font-weight-normal">CAT(Costo Anual Total)</div>
                              <div className="col-4 text-right font-weight-normal"> { this.cattotal.toFixed(2)} % </div> 
                              <p className="font-weight-normal letras-chiquitas"> Sin IVA, para fines informativos y de comparación exclusivamente.<br/>* Montos y plazo mayores a $5,000 pesos disponibles sólo para clientes Prestto. Aplican restricciones, ver <span>términos y condiciones</span>. </p>
                          </div>

                      </div>

                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


//Propiedades que envia
const mapDispatchToProps = (dispatch) => {
  return {
    saveCalculadora: (data) => dispatch(saveCalculadora(data))
  };
}
export default connect(null,mapDispatchToProps)(Calculadora);
