import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const minOffset = 0;
const maxOffset = 60;   

class ConfirmaDatos extends Component {

  constructor(props) {
    super(props);

    const thisYear = (new Date()).getFullYear(); 

    this.state = {
      name: '',
      apellidopaterno:'',
      apellidomaterno:'',
      genero:'',
      estadodenacimiento:'',
      curp:'',
      cel:'',
      otrotelefono:'',
      errorMessage:false,
      dia: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      mes:['Enero','Febrero','Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      thisYear: thisYear,
      selectedYear: thisYear,
      selectedDay: '',
      selectedMes: '',
      selectedEstado:'',
      stateView:'datospersonales',
      calle:'',
      numeroexterior:'',
      cp:'',
      estado:'',
      municipio:'',
      colonia:'',
      salariomensual:'',
      industria:'',
      tepaganatravesdeunbanco:'',
      salariofamiliar:'',
      tienestarjetadecredito:'',
      digitosdetutarteja:'',
      tienescreditoparacasa:'',
      tienescreditoautomotriz:'',
      calificacion:'',
      aceptoconsultadeburo:'',
      usodelprestamo:'',
      aceptofinal:'',

    };

    this.handleClick = this.handleClick.bind(this);
}


  handleClick(event) {
    console.log("event", event)
      if (event === 'enviar') {
        this.props.history.push('/graciasporturegistro')
      }
  }

  historial = () => {
    const { thisYear, selectedYear, dia, mes, selectedMes, selectedDay} = this.state;
    const options = [];
  
    const dias = dia.map(elem => (
      <option value={elem}>{elem}</option>
    ));
  
    const meses = mes.map(elem => (
      <option value={elem}>{elem}</option>
    ));
  
    for (let i = minOffset; i <= maxOffset; i++) {
      const year = thisYear - i;
      options.push(<option value={year}>{year}</option>);
    } 
  
  
    return (
      <div id="datospersonales" className="container-form">
      <h4 className="text-center title-form">HITORIAL CRÉDITICIO</h4>
        {/* PRIMER ROW */}
        <div className="container container-inside-personales">
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <label for="name">Salario Mensual</label>
                  <input 
                      type="number" 
                      className="form-control" 
                      placeholder=""
                      value= { this.state.salariomensual }
                      onChange= { (e) => { this.setState({ salariomensual: e.target.value })}}
                      disabled
                  />
                </div>
              </div>

            <div className="col-sm">
              <div className="form-group">
                  <p>Industria</p>
                  <label class="radio-inline option-form"><input type="radio" name="optradio" checked  disabled /> Si</label>
                  <label class="radio-inline option-form"><input type="radio" name="optradio" disabled/> No</label>
              </div>
            </div>

            <div className="col-sm">
              <div className="form-group">
                  <p>Te pagan a través del banco</p>
                  <label class="radio-inline option-form"><input type="radio" name="optradio" checked disabled /> Si</label>
                  <label class="radio-inline option-form"><input type="radio" name="optradio" disabled/> No</label>
              </div>
            </div>
          </div>
        </div>
        {/* Segunda ROW */}
        <div className="container container-inside-personales">
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <label for="name">Salario familiar total <br/>al mes</label>
                  <input 
                      type="number" 
                      className="form-control" 
                      placeholder=""
                      value= { this.state.salariofamiliar }
                      onChange= { (e) => { this.setState({ salariofamiliar: e.target.value })}}
                      disabled
                  />
                </div>
              </div>

            <div className="col-sm">
              <div className="form-group">
                  <p>Tienes o tuviste tarjeta de crédito en los últimos 2 años</p>
                  <label class="radio-inline option-form"><input type="radio" name="optradio" checked disabled/> Si</label>
                  <label class="radio-inline option-form"><input type="radio" name="optradio" disabled/> No</label>
              </div>
            </div>

            <div className="col-sm">
                <div className="form-group">
                  <label for="name">¿Cuáles son los últimos 4 dígitos de tu tarjeta?</label>
                  <input 
                      type="number" 
                      className="form-control" 
                      placeholder=""
                      maxlength="4"
                      value= { this.state.numerotarjeta }
                      onChange= { (e) => { this.setState({ salariofamiliar: e.target.value })}}
                      disabled
                  />
                </div>
            </div>
          </div>
        </div>

          {/* Tercer ROW */}
          <div className="container margin-especial-container">
            <div className="row">
              <div className="col-6 col-md-4">
                <div className="form-group">
                      <p>En los últimos 2 años <br></br>¿Has ejercido un crédito automotríz?</p>
                      <label class="radio-inline option-form"><input type="radio" name="optradio" checked disabled/> Si</label>
                      <label class="radio-inline option-form"><input type="radio" name="optradio" disabled/> No</label>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-8">
                <div className="form-group">
                  <label for="cel">¿Cómo consideras que se encuentra tu calificación de historial de crédito?</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      placeholder=""
                      value= { this.state.calificacion }
                      maxlength="10"
                      onChange= { (e) => { this.setState({ calificacion: e.target.value })}}
                      disabled
                  />
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" disabled/>
                    <label className="form-check-label minilink" for="exampleCheck1">Acepto que AREZ FINANCIERA realice la consulta 
                    en el xxXx de crédito o en las sociedades de información crediticia que  estime conveniente.</label>
                    <a href="#" className="minilink">VER AVISOS SOBRE HISTORIAL CREDITICIO (bajo protesta de decir verdad manifiesto…)</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CUARTA ROW */}
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <p>Uso del préstamo</p>
                  <select value={ this.selectedMunicipio } onChange={this.handleChange} className="form-control" disabled>
                    <option value="educacion">Educación</option>
                    <option value="hogar">Hogar</option>
                    <option value="gastospersonales">Gastos Personales</option>
                    <option value="coche">Coche</option>
                    <option value="deudas">Deudas</option>
                    <option value="salud">Salud</option>
                  </select>
                </div>
              </div>
            </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked disable/>
                    <label className="form-check-label minilink" for="exampleCheck1">AFIRMO que para efectos de la realización de las operaciones con AREZ FINANCIERA declaro que estoy actuando por cuenta propia.</label>
                </div>
          </div>
      </div>
    )
  }


datosCasa = () => {
  const { thisYear, selectedYear, dia, mes, selectedMes, selectedDay} = this.state;
  const options = [];

  const dias = dia.map(elem => (
    <option value={elem}>{elem}</option>
  ));

  const meses = mes.map(elem => (
    <option value={elem}>{elem}</option>
  ));

  for (let i = minOffset; i <= maxOffset; i++) {
    const year = thisYear - i;
    options.push(<option value={year}>{year}</option>);
  } 


  return (
    <div id="datospersonales" className="container-form">
      <h4 className="text-center title-form">DOMICILIO</h4>
    {/* PRIMER ROW */}
    <div className="container container-inside-personales">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label for="name">Calle</label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder=""
                  value= { this.state.calle }
                  onChange= { (e) => { this.setState({ calle: e.target.value })}}
                  disabled
              />
            </div>
          </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <label for="apellidopaterno">Número Exterior</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder=""
                    value= { this.state.numeroexterior }
                    onChange= { (e) => { this.setState({ numeroexterior: e.target.value })}}
                    disabled
                />
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group">
              <label for="apellidopaterno">C.P.</label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder=""
                  value= { this.state.cp }
                  onChange= { (e) => { this.setState({ cp: e.target.value })}}
                  disabled
              />
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    {/* Segunda ROW */}
      <div className="container">
          <div className="row">

          <div className="col-sm">
            <div className="form-group">
              <p>Estado</p>
              <select value={ this.selectedEstado } onChange={this.handleChange} className="form-control" disabled>
                <option value="CDMX">CDMX</option>
                <option value="AGS">Aguascalientes</option>
                <option value="BCN">Baja California</option>
                <option value="BCS">Baja California Sur</option>
                <option value="CAM">Campeche</option>
                <option value="CHP">Chiapas</option>
                <option value="CHI">Chihuahua</option>
                <option value="COA">Coahuila</option>
                <option value="COL">Colima</option>
                <option value="DUR">Durango</option>
                <option value="GTO">Guanajuato</option>
                <option value="GRO">Guerrero</option>
                <option value="HGO">Hidalgo</option>
                <option value="JAL">Jalisco</option>
                <option value="MEX">M&eacute;xico</option>
                <option value="MIC">Michoac&aacute;n</option>
                <option value="MOR">Morelos</option>
                <option value="NAY">Nayarit</option>
                <option value="NLE">Nuevo Le&oacute;n</option>
                <option value="OAX">Oaxaca</option>
                <option value="PUE">Puebla</option>
                <option value="QRO">Quer&eacute;taro</option>
                <option value="ROO">Quintana Roo</option>
                <option value="SLP">San Luis Potos&iacute;</option>
                <option value="SIN">Sinaloa</option>
                <option value="SON">Sonora</option>
                <option value="TAB">Tabasco</option>
                <option value="TAM">Tamaulipas</option>
                <option value="TLX">Tlaxcala</option>
                <option value="VER">Veracruz</option>
                <option value="YUC">Yucat&aacute;n</option>
                <option value="ZAC">Zacatecas</option>
              </select>
            </div>
          </div>

          <div className="col-sm">
            <div className="form-group">
              <p>Municipio</p>
              <select value={ this.selectedMunicipio } onChange={this.handleChange} className="form-control" disabled>
                <option value="CDMX">CDMX</option>
                <option value="AGS">Aguascalientes</option>
                <option value="BCN">Baja California</option>
                <option value="BCS">Baja California Sur</option>
                <option value="CAM">Campeche</option>
                <option value="CHP">Chiapas</option>
              </select>
            </div>
          </div>

        </div>
      </div>
      {/* Tercer ROW */}
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label for="curp">Colonia</label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder=""
                  value= { this.state.curp }
                  onChange= { (e) => { this.setState({ curp: e.target.value })}}
                  disabled
              />
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}


datosPersonales = () => {
  const { thisYear, selectedYear, dia, mes, selectedMes, selectedDay} = this.state;
  const options = [];

  const dias = dia.map(elem => (
    <option value={elem}>{elem}</option>
  ));

  const meses = mes.map(elem => (
    <option value={elem}>{elem}</option>
  ));

  for (let i = minOffset; i <= maxOffset; i++) {
    const year = thisYear - i;
    options.push(<option value={year}>{year}</option>);
  } 


  return (
    <div id="datospersonales" className="container-form">
      <h4 className="text-center title-form">DATOS PERSONALES</h4>
    {/* PRIMER ROW */}
    <div className="container container-inside-personales">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label for="name">Nombre</label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder=""
                  value= { this.state.name }
                  onChange= { (e) => { this.setState({ name: e.target.value })}}
                  disabled
              />
            </div>
          </div>

        <div className="col-sm">
          <div className="form-group">
            <label for="apellidopaterno">Apellido Paterno</label>
            <input 
                type="text" 
                className="form-control" 
                placeholder=""
                value= { this.state.apellidopaterno }
                onChange= { (e) => { this.setState({ apellidopaterno: e.target.value })}}
                disabled
            />
          </div>
        </div>

        <div className="col-sm">
          <div className="form-group">
            <label for="apellidopaterno">Apellido Materno</label>
            <input 
                type="text" 
                className="form-control" 
                placeholder=""
                value= { this.state.apellidomaterno }
                onChange= { (e) => { this.setState({ apellidomaterno: e.target.value })}}
                disabled
            />
          </div>
        </div>
      </div>
    </div>
    {/* Segunda ROW */}
      <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="form-group">
                <p>Fecha de Nacimiento</p>
                  <select value={ this.selectedDay } onChange={this.handleChange} className="form-control col-select" disabled>
                    {dias}
                  </select>
                  <select value={ this.selectedMes } onChange={this.handleChange}  className="form-control col-select-mes" disabled>
                    {meses}
                  </select>
                  <select value={ this.selectedYear } onChange={this.handleChange} className="form-control col-select-year" disabled>
                    {options}
                  </select>
              </div>
            </div>  

          <div className="col-sm">
            <div className="form-group">
              <p>Género</p>
              <label class="radio-inline option-form"><input type="radio" name="optradio" checked disabled/> Hombre</label>
              <label class="radio-inline option-form"><input type="radio" name="optradio" disabled/> Mujer</label>
            </div>
          </div>

          <div className="col-sm">
            <div className="form-group">
              <p>Estado de Nacimiento</p>
              <select value={ this.selectedEstados } onChange={this.handleChange} className="form-control" disabled>
                <option value="CDMX">CDMX</option>
                <option value="AGS">Aguascalientes</option>
                <option value="BCN">Baja California</option>
                <option value="BCS">Baja California Sur</option>
                <option value="CAM">Campeche</option>
                <option value="CHP">Chiapas</option>
                <option value="CHI">Chihuahua</option>
                <option value="COA">Coahuila</option>
                <option value="COL">Colima</option>
                <option value="DUR">Durango</option>
                <option value="GTO">Guanajuato</option>
                <option value="GRO">Guerrero</option>
                <option value="HGO">Hidalgo</option>
                <option value="JAL">Jalisco</option>
                <option value="MEX">M&eacute;xico</option>
                <option value="MIC">Michoac&aacute;n</option>
                <option value="MOR">Morelos</option>
                <option value="NAY">Nayarit</option>
                <option value="NLE">Nuevo Le&oacute;n</option>
                <option value="OAX">Oaxaca</option>
                <option value="PUE">Puebla</option>
                <option value="QRO">Quer&eacute;taro</option>
                <option value="ROO">Quintana Roo</option>
                <option value="SLP">San Luis Potos&iacute;</option>
                <option value="SIN">Sinaloa</option>
                <option value="SON">Sonora</option>
                <option value="TAB">Tabasco</option>
                <option value="TAM">Tamaulipas</option>
                <option value="TLX">Tlaxcala</option>
                <option value="VER">Veracruz</option>
                <option value="YUC">Yucat&aacute;n</option>
                <option value="ZAC">Zacatecas</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Tercer ROW */}
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label for="curp">CURP</label>
              <input 
                  type="text" 
                  className="form-control" 
                  placeholder=""
                  value= { this.state.curp }
                  onChange= { (e) => { this.setState({ curp: e.target.value })}}
                  disabled
              />
            </div>
          </div>

        <div className="col-sm">
          <div className="form-group">
            <label for="cel">Número de Celular</label>
            <input 
                type="tel" 
                className="form-control" 
                placeholder="(55) 55435555"
                value= { this.state.cel }
                maxlength="10"
                onChange= { (e) => { this.setState({ cel: e.target.value })}}
                disabled
            />
          </div>
        </div>

        <div className="col-sm">
          <div className="form-group">
            <label for="apellidopaterno">Otro teléfono</label>
            <input 
                type="tel" 
                className="form-control" 
                placeholder="(55) 55435555"
                maxlength="10"
                value= { this.state.otrotelefono }
                onChange= { (e) => { this.setState({ otrotelefono: e.target.value })}}
                disabled
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

  
  render() {
    return (
      <div className="container-fluid container-main container-inside">
           <div className="container container-tabs">
            <div className="row text-left">   
                <h3 className="text-left titles-prestify blanco">Valida que tus datos sean correctos</h3>
            </div>
          </div>
          
          <div id="formualario_main" className="form-container-main">
            
                { this.datosPersonales() }
                { this.datosCasa() }
                { this.historial() }

                    {/* BUTTON */}
            <div class="container container_button">
            <div class="row">
                <div class="col-lg">
                    <div id="pointer_enviar" className="button_next" onClick={() => this.handleClick('enviar')}> ENVIAR </div>
                </div>
            </div>
            </div>

          </div>
      </div>
    )
  }
}

export default ConfirmaDatos;
