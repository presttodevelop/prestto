import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import $ from 'jquery';

class NavBar extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      location:'/',
      mobile:true
    }
    this.handleChangeMobile = this.handleChangeMobile.bind(this);
  }

  handleChangeMobile(){
    this.setState({mobile:!this.state.mobile})
  }

  render() {
    let { pathname } = this.props.location.location;
    let { mobile } = this.state;
    window.onload = function(e) {
      $(window).scroll(function(e) {
        $('#navbar').each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos >  100 ) {
            $(this).addClass('bggpurple');
          }
          else {
            $(this).removeClass('bggpurple');
          }
        });
      });
    }
    return (
      <div>
          <nav id="navbar" className={pathname === '/' ? "navbar navbar-fixed-top navbar-expand-lg navbar-light navbar-fixed-top nav-long" : pathname === '/home' ? "navbar navbar-fixed-top navbar-expand-lg navbar-light navbar-fixed-top bggpurple nav-long" : "navbar navbar-fixed-top navbar-expand-lg navbar-light navbar-fixed-top bggray nav-long"}>
            <Link to="/" className="navbar-brand" href="#"><img src={ logo } alt="prestify" className="logo-principal"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={this.handleChangeMobile}>
                {/*<span className="navbar-toggler-icon"></span>*/}
                { mobile ? <svg className="hamburger-menu" height="42" viewBox="0 0 24 24" width="42" xmlns="http://www.w3.org/2000/svg"><g><path style={{fill:'#5a6ff0'}} d="m21.5 24h-19c-1.379 0-2.5-1.122-2.5-2.5v-19c0-1.378 1.121-2.5 2.5-2.5h19c1.379 0 2.5 1.122 2.5 2.5v19c0 1.378-1.121 2.5-2.5 2.5zm-19-23c-.827 0-1.5.673-1.5 1.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z"/></g><g><path style={{fill:'#5a6ff0'}} d="m16.5 8h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"/></g><g><path style={{fill:'#5a6ff0'}}  d="m16.5 12.5h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"/></g><g><path style={{fill:'#5a6ff0'}} d="m16.5 17h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5s-.224.5-.5.5z"/></g></svg> :
                <svg height="32" viewBox="0 0 511.992 511.992" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0" style={{fill:'#5a6ff0'}}/></svg> }
            </button>
            <div className="collapse navbar-collapse navbar-right" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/prestamo-en-linea-registro" className="nav-link nav-pres" target="_self"><span className="nav-especial">Adquiere tu préstamo</span></a>
                </li>
                <li className="nav-item">
                    <a href="/prestamo-en-linea-blog" className="nav-link" target="_self">Blog</a>
                </li>
                <li className="nav-item">
                    <a href="/prestamo-en-linea-contacto" className="nav-link" target="_self">Contacto</a>
                </li>
                <li className="nav-item">
                    <a href="/prestamo-en-linea-preguntas" className="nav-link" target="_self">Ayuda</a>
                </li>
                <li className="nav-item">
                    <a href="/prestamo-en-linea-login" className="nav-link" target="_self" >Mi cuenta</a>
                </li>
                </ul>
            </div>
            </nav>
          </div>
    )
  }
}

export default NavBar;
