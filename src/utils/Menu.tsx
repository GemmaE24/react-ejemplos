import { NavLink } from 'react-router-dom';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ammec from '../imagenes/logo_ammec.png'; */
import "./Estilos.css";
import articulada from "../imagenes/articulada.png";
import tijera from "../imagenes/tijera.png";
import Unipersonal from '../imagenes/unipersonal.png';
import telescopicas from '../imagenes/telescopica.png';
export default function Menu() {
  const claseActiva = "active";
  return (
    <div>
      <div className="row">
        <div className="col-4">iconos</div>
        <div className="col-4">logo</div>
        <div className="col-4">iconos</div>
      </div>

      <nav className="nav navbar-nav navbar-center me-auto mb-2 mb-lg-0 bg-dark">
        <div className="row">

          <li className="nav-item" >
            <div className="dropdown" >
              <NavLink className='nav-link, claseActiva' activeClassName={claseActiva}
                to="/ Ventas/Ventas">
                VENTA
              </NavLink>
              <div className="dropdown-content" >
                <div className="row">
                  <div className="col"><a href="#"><img src={telescopicas} alt=" " className='plataforma1' />Plataformas Telescópicas</a></div>
                  <div className="col"> <a href="#"><img src={articulada} alt=" " className='plataforma2' />Plataformas Articuladas</a></div>
                  <div className="col"><a href="#"><img src={tijera} alt=" " className='plataforma3' />Plataforma de Tijera </a></div>
                  <div className="col"><a href="#"><img src={Unipersonal} alt=" " className='plataforma4' />Plataforma Unipersonal</a></div></div>
              </div>
              </div>
              </li>
            </div>
          </nav>
          </div>
        )
}