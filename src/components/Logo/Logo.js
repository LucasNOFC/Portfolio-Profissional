import './Logo.css';
import logo from '../../images/logo.svg';

function Logo() {
    return (
          <div className='logo'>
            <img
             src={logo}
             alt="logo do portfólio"
             className="logoImg"/>
            <p><strong>Portfólio</strong></p>
          </div>
    );
  }

export default Logo;