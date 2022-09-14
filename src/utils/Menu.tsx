
/* import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/
import './estilos.css';
import ammec from '../imagenes/logo_ammec.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  const claseActiva = "active"
  return (
    <div className='colores'>
      <nav className='nav_logo'>
        <div className='item_1'>
          <a href="https://www.facebook.com/AMMECmx/" target="blank">
            <FontAwesomeIcon icon={faFacebookF} className="iconos" />
          </a>{"    "}
          <a href="https://www.instagram.com/ammec/" target="blank">
            <FontAwesomeIcon icon={faInstagram} className="iconos" />
          </a>{"   "}
          <a href="https://twitter.com/AMMEC_Rentas" target="blank">
            <FontAwesomeIcon icon={faTwitter} className="iconos" />
          </a>{"   "}
        </div>
        <div className='img_logo' >
          <img src={ammec} alt="Logo " className='logo' />
        </div>

        <div className='item_2'>

          <a href="https://www.youtube.com/channel/UClbxnoqIEdus4v98hMgXu3w/featured" target="blank">
            <FontAwesomeIcon icon={faYoutube} className="iconos" />
          </a>{" "}
          <a href="https://web.whatsapp.com/" target="blank">
            <FontAwesomeIcon icon={faWhatsapp} className="iconos" />
          </a>{" "}
          <FontAwesomeIcon icon={faUser} className="iconos" />{" "}
        </div>
      </nav>
      <nav className='nav_principal'>
        <ul className='menu-item'>
        <li className="nav-item">
            <NavLink className='nav-link, claseActiva' activeClassName={claseActiva}
              to="/Inicio/Inicio">
              INICIO
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link, claseActiva' activeClassName={claseActiva}
              to="/Venta/Venta">
              VENTA
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link, claseActiva' activeClassName={claseActiva}
              to="/Renta/Renta">
              RENTA
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link, claseActiva' activeClassName={claseActiva}
              to="/Cursos/Cursos">
              CURSOS
            </NavLink>
          </li><li className="nav-item">
            <NavLink className='nav-link, claseActiva' activeClassName={claseActiva}
              to="/Certificaiones/Certificaiones">
              CERTIFICACIONES
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link, claseActiva' activeClassName={claseActiva}
              to="/Soporte/Soporte">
              SOPORTE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link, claseActiva' activeClassName={claseActiva}
              to="/Proyectos/Proyectos">
              PROYECTOS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link, claseActiva' activeClassName={claseActiva}
              to="/Contacto/ Contacto">
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </nav>
   
      <div className="bars__menu" >
        <span className="line1__bars-menu"></span>
        <span className="line2__bars-menu"></span>
        <span className="line3__bars-menu"></span>
      </div>
     
      
    </div>
  )
}