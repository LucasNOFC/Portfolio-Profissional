import logo from '../../images/logo.png';
import styled from 'styled-components';

const LogoComponent = styled.div`
display: flex;
font-size:30px;
align-items: center;
`

const LogoImageComponent = styled.img`
width: 50px;
height: 50px;
`

function Logo() {
    return (
          <LogoComponent>
            <LogoImageComponent
             src={logo}
             alt="logo do portfólio"/>
            <p><strong>Portfólio</strong></p>
          </LogoComponent>
    );
  }

export default Logo;