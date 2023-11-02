import styled from 'styled-components';

const LogoComponent = styled.div`
display: flex;
font-size:30px;
align-items: center;
padding:30px;
justify-content:center;
`

const LogoImageComponent = styled.img`
width: 50px;
height: 50px;
`

const LinkComponent = styled.a`
&:hover{
  cursor:pointer;
}

`

function Logo() {
    return (
          <LogoComponent>
            <LogoImageComponent
             src={require("../../images/logo.png")}
             alt="logo do portfólio"/>
            <LinkComponent href='/Portfolio-Profissional'><strong>Portfólio</strong></LinkComponent>
          </LogoComponent>
    );
  }

export default Logo;