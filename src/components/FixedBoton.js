import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* imagenes */
import icon3 from '../assets/img/icons/icon3.png'

class FixedBoton extends Component {

  render() {
    return (
    <Link to="/registro">
        <div className="btn_fixed">
            <img src={ icon3 } alt="Prestify" className="" />
        </div>
    </Link>
    )
  }
}

export default FixedBoton;